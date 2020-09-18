package com.example.flightscanner;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

public class retrieve extends AppCompatActivity {
TextView tvflight,tvengine;
Button btnsave,btnchange;
EditText etengine;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_retrieve);
        String val = getIntent().getStringExtra("SCANNED").toString();
        FirebaseDatabase database = FirebaseDatabase.getInstance();
        final DatabaseReference myRef = database.getReference("flight").child(val);
        final TextView tvflight = findViewById(R.id.tvflight);
        final TextView tvengine = findViewById(R.id.tvengine);
         final Button btnsave = findViewById(R.id.btnsave);
         Button btnchange = findViewById(R.id.btnchange);
         final EditText etengine = findViewById(R.id.etengine);
         btnchange.setOnClickListener(new View.OnClickListener() {
             @Override
             public void onClick(View v) {
                 btnsave.setVisibility(View.VISIBLE);
                 etengine.setVisibility(View.VISIBLE);
             }
         });
         btnsave.setOnClickListener(new View.OnClickListener() {
             @Override
             public void onClick(View v) {
                 String engine = etengine.getText().toString().trim();
                 myRef.child("Engine").setValue(engine);
             }
         });

       myRef.addValueEventListener(new ValueEventListener() {
           @Override
           public void onDataChange(@NonNull DataSnapshot snapshot) {
               String value1 = snapshot.child("Engine").getValue(String.class);
               String value2 = String.valueOf(snapshot.child("flightNo").getValue(String.class));
               tvflight.setText(value2);
              tvengine.setText(value1);

           }

           @Override
           public void onCancelled(@NonNull DatabaseError error) {

           }
       });

    }
}

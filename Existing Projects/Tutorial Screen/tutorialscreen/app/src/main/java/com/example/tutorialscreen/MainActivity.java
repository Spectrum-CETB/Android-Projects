package com.example.tutorialscreen;

import androidx.appcompat.app.AppCompatActivity;
import androidx.viewpager.widget.ViewPager;

import android.os.Bundle;
import android.text.Html;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
private ViewPager vp;
private Button btnprev;
private Button btnnext;
private  int currentpage;
private TextView[] mdots;
private SliderAdapter sliderAdapter;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
         ViewPager vp = findViewById(R.id.vp);
         Button btnprev = findViewById(R.id.btnprev);
        Button btnnext = findViewById(R.id.btnnext);

    SliderAdapter sliderAdapter = new SliderAdapter(this);
    vp.setAdapter(sliderAdapter);






    }

ViewPager.OnPageChangeListener viewlistener = new ViewPager.OnPageChangeListener() {
    @Override
    public void onPageScrolled(int position, float positionOffset, int positionOffsetPixels) {

    }

    @Override
    public void onPageSelected(int position) {
        currentpage = position;
        if (position == 0) {
            btnnext.setEnabled(true);
            btnprev.setEnabled(false);
            btnprev.setVisibility(View.INVISIBLE);

            btnnext.setText("NEXT");
            btnprev.setText("");
        } else if (position == 1) {
            btnnext.setEnabled(true);
            btnprev.setEnabled(true);
            btnprev.setVisibility(View.VISIBLE);

            btnnext.setText("NEXT");
            btnprev.setText("BACK");

        }
        else
            if(position == 2)
            {
                btnnext.setEnabled(true);
                btnprev.setEnabled(true);
                btnprev.setVisibility(View.VISIBLE);

                btnnext.setText("FINISH");
                btnprev.setText("BACK");
            }
    }

    @Override
    public void onPageScrollStateChanged(int state) {

    }
};
}

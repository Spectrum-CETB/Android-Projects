package com.example.tutorialscreen;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Adapter;
import android.widget.ImageView;
import android.widget.RelativeLayout;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.viewpager.widget.PagerAdapter;

public class SliderAdapter extends PagerAdapter {
    Context context;
    LayoutInflater layoutInflater;
    public SliderAdapter(Context context)
    {
      this.context = context;
    }
    public int[] slide_images =
    {
R.drawable.women1,R.drawable.safety,R.drawable.mentor
    };

    public String[] heading=
            {
              " MENTORSHIP SYSTEM"," FIND MENTORS"," MAINTAINS PRIVACY AND SECURITY"
            };
    public  String[] details =
            {
               "Mentorship System is an application that allows women in tech to mentor each other, on career development topics, through 1:1 relations for a certain period",
               "Find mentors to help you out in technical fields and for career development.You can manually search for mentors or find nearby mentors using Mentors in nearby locality function",
               " This app would maintain your privacy and security. Mentors here are highly verified so that you don't have to worry for security purposes. App allows you to meet Mentors only if you want to, so you are on the way to go"
            };




    @Override
    public int getCount() {
        return heading.length;
    }

    @Override
    public boolean isViewFromObject(@NonNull View view, @NonNull Object object) {
        return view == (RelativeLayout) object;
    }

    @NonNull
    @Override
    public Object instantiateItem(@NonNull ViewGroup container, int position) {

        layoutInflater =(LayoutInflater) context.getSystemService(context.LAYOUT_INFLATER_SERVICE);
        View view = layoutInflater.inflate(R.layout.slide_layout,  container, false);

        ImageView iv = view.findViewById(R.id.iv);
        TextView tv1 = view.findViewById(R.id.tv1);
        TextView tv2 = view.findViewById(R.id.tv2);
        iv.setImageResource(slide_images[position]);
        tv1.setText(heading[position]);
        tv2.setText(details[position]);
        container.addView(view);

        return view;



    }

    @Override
    public void destroyItem(@NonNull ViewGroup container, int position, @NonNull Object object) {
        container.removeView((RelativeLayout)object);
    }
}

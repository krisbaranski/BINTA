"use client"; // this is a client component
import React from "react";

const Research = () => {
  return (
    <section id='research'>
      <div className='my-12 pb-12 md:pt-16 md:pb-48'>
        <h1 className='text-center font-bold text-4xl'>
          Research
          <hr className='w-24 h-1 mx-auto my-4 bg-stone-500 border-0 rounded'></hr>
        </h1>

        <div className='flex flex-col space-y-28'></div>
      </div>
    </section>
  );
};

export default Research;

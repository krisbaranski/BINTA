import React from "react";

const SectionHeader = ({ title }: { title: string }) => {
  return (
    <section className='my-12 pb-12 md:pt-16 md:pb-48'>
      <h1 className='text-center font-bold text-4xl'>
        {title}
        <hr className='w-24 h-1 mx-auto my-4 bg-stone-500 border-0 rounded'></hr>
      </h1>
    </section>
  );
};

export default SectionHeader;

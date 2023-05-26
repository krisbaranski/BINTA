"use client"; // this is a client component
import React from "react";

const Research = () => {
  return (
    <section id='research'>
      <div className='my-12 pb-12 md:pt-8 md:pb-48'>
        <h1 className='text-center font-bold text-4xl'>
          Research
          <hr className='w-24 h-1 mx-auto my-4 bg-stone-500 border-0 rounded'></hr>
        </h1>

        <div className='flex flex-col space-y-12 text-left'>
          <p>
            Statues are an important aspect of Diamond Way Methods. In addition
            to the well-known metal statues from Nepal, clay statues are also
            widespread throughout the Himalayan areas of Bhutan, Tibet and
            Ladakh. The main aspects of Buddhist meditations have been created
            out of clay directly in the monasteries for more than 1,000 years.
            <br />
            <br />
            Clay statues, as stated by Lama Ole Nydahl in Brunswick in 2015,
            “Our methods and material are that of Tibet”. The art of making clay
            statues has a long tradition. The specialized library for
            Traditional Buddhist art contains valuable books on Buddhist art,
            exhibition catalogues, as well as doctoral thesis and publications
            on this subject.
            <br />
            <br />
            About the clay statue construction in Ladakh and Brunswick there is
            a dissertation by Petra Förster
            <br />
            <a
              href='https://www.logos-verlag.de/cgi-bin/engbuchmid?isbn=5063&lng=deu&id='
              className='px-2 text-indigo-700 dark:text-indigo-300'
              target='_blank'
              rel='noopener noreferrer'
            >
              ”Buddhistischer Lehmstatuenbau in Ladakh”
            </a>
            <br />
            The production of the clay statues in Braunschweig is documented and
            archived. In this way the knowledge about clay statue making and its
            tradition is preserved in a long term.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Research;

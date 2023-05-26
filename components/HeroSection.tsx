"use client"; // this is a client component
import React from "react";
import Image from "next/image";
// import { Link } from "react-scroll/modules";
// import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id='home'>
      <div className='my-12 pt-8 pb-12 md:pt-16 md:pb-48 animate-fadeIn'>
        <Image
          src='/Atelier_small.png'
          alt=''
          width={1200}
          height={450}
          className='rounded shadow-lg dark:shadow mt-16 my-3 md:my-5'
        />

        <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left'>
          <div className='md:w-1/2'>
            <h1 className='text-center text-4xl md:text-6xl font-bold  md:text-right'>
              Buddhist Institute of Tibetan Art
            </h1>
          </div>

          <div className='text-center md:w-1/2 md:text-left'>
            <p>
              The Buddhist Institute of Tibetan Art, called BINTA for short is
              collecting informations and providing knowlegde of Tibetan
              Buddhist Art.
              <br />
              <br />
              BINTA is located in the Diamond Way buddhist centre in Brunswick,
              Germany.
              <br />
              Since 2006 knowledge of clay statue building and painting has been
              passed on to western students by recognized masters.
              <br />
              <br />
              In October 2015, Lama Ole Nydahl gave permission to build statues
              for the Diamond Way Buddhist centers and asked his students to
              organize a school to learn skills of building and painting in
              traditional buddhist way.
            </p>
          </div>
        </div>

        <hr className='w-full h-px mx-auto my-20 bg-neutral-600 border-0'></hr>

        <div className='flex flex-col space-y-10 justify-center align-center md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left'>
          <div className='text-center md:w-1/2 md:text-left'>
            <p>
              Statues and thangkas (scroll paintings) are inseparable from
              Tibetan Buddhism. The varied Buddha forms are useful to recall the
              Buddha aspects during meditation. These cause responses in our
              mind. To make statues and thangkas work, they have to be produced
              in accordance to defined standards and they need to possess
              attributes that are described in the meditation instructions. For
              their transmission experienced masters are needed.
            </p>
            <br />
            <br />
            <p>
              <i>
                ”You can´t build Buddhist statues just like that - without
                transmission”
              </i>
              - Hannah Nydahl told us in 2006.
              <br />
              <i>
                ”If you really want to do sound work, if you want it to be big,
                you need transmission, a master who is in a secured tradition.”
              </i>
            </p>
          </div>
          <div className='text-center md:w-1/2 md:text-left'>
            <p>
              Along with the practical work on statues, we collect texts, books
              and doctoral theses and exhibition catalogues about traditional
              Buddhist art. An archive composed of photographs, statues and
              documentations of the technique of building statues is planned in
              the long run.
              <br />
              <br />
              Additionally, we give lectures about the history and technique of
              building clay statues.
            </p>
          </div>
        </div>

        <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left'></div>
      </div>
    </section>
  );
};

export default HeroSection;

{
  /* Animated Arrow
 
 <div className='flex flex-row items-center text-center justify-center '>
        <Link
          to='about'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={25} className='animate-bounce' />
        </Link>
      </div> */
}

{
  /*  Button going to projects component

  <Link
to='projects'
className='text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700'
activeClass='active'
spy={true}
smooth={true}
offset={-100}
duration={500}
>
Projects
</Link> */
}

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
          <div className='md:w-1/2 '>
            <h1 className='text-center text-4xl md:text-6xl font-bold my-6 md:text-right'>
              Buddhist Institute of Tibetan Art
            </h1>
          </div>

          <div className='text-center md:w-1/2 md:text-left'>
            <p>
              Statues and thangkas (scroll paintings) are inseparable from
              Tibetan Buddhism. The manifold Buddha forms are useful to bring to
              mind the Buddha aspects during meditation. These cause responses
              in our mind. In order to make statues and thangkas work, they have
              to be produced in accordance to defined standards and they need to
              possess attributes that are described in the meditation
              instructions. For their transmission experienced masters are
              needed. BINTA is the short form of Buddhist Institute of Tibetan
              Art, based in the Diamondway Buddhist Center, Braunschweig,
              Germany.
            </p>
            <br />
            <p>
              Since 2006 the knowledge of building clay statues is being
              transmitted by acknowledged statue builders to western students in
              Braunschweig. In October 2015 Lama Ole Nydahl gave us the
              permission to build statues for the centers and requested the
              founding of a school in which the art of building statues could be
              acquired.
            </p>
            <br />
            <p>
              <span className='italic'>
                “This is our technique, clay is the material in the Himalaya.
                You ought to build statues for the centers.”{" "}
              </span>
              <br />
              Lama Ole Nydahl on the occasion of visiting the BINTA in October
              2015
            </p>
          </div>
        </div>
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

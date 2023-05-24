import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id='school'>
      <div className='my-12 pb-12 md:pt-16 md:pb-48'>
        <h1 className='text-center font-bold text-4xl'>
          School
          <hr className='w-24 h-1 mx-auto my-4 bg-stone-500 border-0 rounded'></hr>
        </h1>

        <div className='flex flex-col space-y-10 justify-center align-center md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left'>
          <div className='text-center md:w-1/2 md:text-left'>
            <p>
              The goal is to be trained to become independent statue builders
              and thangka painters. It has become possible to go through a solid
              formation conducted by statue building masters in building statues
              in the western hemisphere.
              <br />
              <br />
              In Ladakh, this education lasts between 6 to 17 years while
              working intensively with the master on a daily basis. During the
              education, the students draw and model over several years
              <br />
              <br />
              (the duration is due to the student´s capacities and personal
              input, also one might have to remodel a certain form time and
              again).
            </p>
          </div>
          <div className='m-16 md:m-0 md:w-1/2'>
            <Image
              src='/Atelier_work.png'
              alt=''
              width={650}
              height={450}
              className='rounded shadow-lg'
            />
          </div>
        </div>

        <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left'>
          <div className='m-16 md:m-0 md:w-1/2'>
            <Image
              src='/Atelier_work_desk.png'
              alt=''
              width={650}
              height={450}
              className='rounded shadow-lg'
            />
          </div>
          <div className='text-center md:w-1/2 md:text-left'>
            <p>
              The following Buddha forms and Buddha aspects have already been
              built under our teacher´s guidance:
              <br />
              <br />
              <ol className='list-disc pl-8'>
                <li>Buddha Shakyamuni,</li>
                <li>Green or White Liberatice (tib.: Dolmar; sansk.: Tara),</li>
                <li>Black Coat (tib.: Bernagchen; sansk.: Mahakala),</li>
                <li>Loving Eyes (tib.: Chenrezig; sanskr.: Avalokitesvara)</li>
                <li>Guru Rinpoche (tib. ; sanskr.:Padmasambhava)</li>
                <li> Milarepa, Marpa and other forms.</li>
              </ol>
              <br />
              <br />
              Every year we organize courses in the workshop. Participation in
              an introductory course is required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

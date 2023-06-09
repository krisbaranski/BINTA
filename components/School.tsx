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

        <div className='flex flex-col space-y-10 justify-center align-center md:space-x-10 md:space-y-0 md:p-4 md:flex-row text-left'>
          <div className='text-left md:w-1/2'>
            <p>
              Since 2010 Chhemet Rigzin has come to Brunswick each year to build
              statues in the Tibetan/Ladakhi tradition in consultation with Lama
              Ole Nydahl and to teach statue building to Diamond Way
              practitioners from around the world. The courses that we provide
              anable students to build the various Buddha aspects and learn the
              assosiated iconometry and iconography according to the tradition.
              <br />
              <br />
              We continuously offer courses in which one can get a sense of the
              tradition of building clay statues that goes back now for more
              than a thousand years. Meanwhile we have elaborated a curriculum
              together with statue building masters.
              <br />
              <br />
              In Ladakh, this education lasts between 6 to 17 years while
              working intensively with the master daily. During the education,
              the students draw and model over several years.
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

        <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row text-left'>
          <div className='m-16 md:m-0 md:w-1/2'>
            <Image
              src='/Atelier_work_desk.png'
              alt=''
              width={650}
              height={450}
              className='rounded shadow-lg'
            />
          </div>
          <div className='text-left md:w-1/2'>
            <p>
              The following Buddha forms have already been built under our
              teacher´s guidance:
              <br />
              <br />
              <ol className='list-disc pl-8 text-left'>
                <li> Buddha Shakyamuni,</li>
                <li> White Liberatrice (tib.: Dolkar; sansk.: Sitatara)</li>
                <li> Green Liberatrice (tib.: Dolmar; sansk.: Shyamatara)</li>
                <li> Black Coat (tib.: Bernagchen; sansk.: Mahakala)</li>
                <li> Loving Eyes (tib.: Chenrezig; sanskr.: Avalokitesvara)</li>
                <li> Guru Rinpoche (tib. ; sanskr.:Padmasambhava)</li>
                <li> Milarepa, Marpa</li>
                <li> 16th Karmapa Rangjung Rigpe Dorje</li>
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

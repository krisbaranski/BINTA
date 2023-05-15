import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id='school'>
      <div className='my-12 pb-12 md:pt-16 md:pb-48'>
        <h1 className='text-center font-bold text-4xl'>
          About Us
          <hr className='w-24 h-1 mx-auto my-4 bg-stone-500 border-0 rounded'></hr>
        </h1>

        <div className='flex flex-col space-y-10 justify-center align-center md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left'>
          <div className='text-center md:w-1/2 md:text-left'>
            <p>
              The goal is to be trained to become independent statue builders
              and thangka painters. It has become possible to go through a solid
              formation conducted by statue building master Chhemet Rigzin in
              building statues in the Western hemisphere. In Ladakh, this
              education lasts between 6 to 17 years while working intensively
              with the master on a daily basis. During the education, the
              students draw and model over several years (the duration is due to
              the student´s capacities and personal input, also one might have
              to remodel a certain form time and again).
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
              built under our teacher´s guidance: Buddha Shakyamuni, Green or
              White Liberatice (tib.: Dolmar; sansk.: Tara), Black Coat (tib.:
              Bernagchen; sansk.: Mahakala), Loving Eyes , Milarepa, Marpa or
              other forms. Every year we organize courses in the workshop of the
              Buddhist Center Braunschweig. Participation in an introductory
              course is required. Everybody having participated successfully in
              a course and having completed a statue will be certified. After
              completion of the training the participants receive a certificate
              which empowers them to work independently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

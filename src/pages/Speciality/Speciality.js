import React from 'react';
import SpecialityBox from './SpecialityBox';
import collection from '../../assets/Images/collection.png'
import quality from '../../assets/Images/quality.png'
import resource from '../../assets/Images/resource.png'
import community from '../../assets/Images/community.png'

const Speciality = () => {
  return (
    <section className='speciality'>
      <div className="sp-shape"></div>
      <div className='lg:max-w-screen-xl mx-auto w-full p-4'>
        <div class="block-text text-center">
          <h6 class="sub-heading"><span>Our Speciality</span></h6>
          <h3 class="heading lg:text-4xl text-2xl text-base-100 font-bold leading-normal">Complete Solutions for your NFT</h3>
          <p class="text-base-100 pt-4">Cyfonii is the premier marketplace for nifties, which are digital items you can truly own for yourself</p>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 justify-center gap-6">
          <SpecialityBox
            title="Huge Collection"
            summry="Oficia dese runt mollit anim id est labo met, consectetur adipis"
            img={collection} count="01">
          </SpecialityBox>

          <SpecialityBox
            title="Huge Collection"
            summry="Oficia dese runt mollit anim id est labo met, consectetur adipis"
            img={quality} count="02">
          </SpecialityBox>

          <SpecialityBox
            title="Huge Collection"
            summry="Oficia dese runt mollit anim id est labo met, consectetur adipis"
            img={resource} count="03">
          </SpecialityBox>

          <SpecialityBox
            title="Huge Collection"
            summry="Oficia dese runt mollit anim id est labo met, consectetur adipis"
            img={community} count="04">
          </SpecialityBox>
        </div>
      </div>
    </section>
  );
};

export default Speciality;
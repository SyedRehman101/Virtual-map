import React from 'react';
import AboutHome from '../../components/AboutPage/AboutHome';
import Counter from '../../components/Counter/Counter';
import Portfolio from '../Portfolio/Portfolio';
import Team from '../Team/Team';
import lineBg from '../../assets/Images/roadmapbg.png';

const AboutPage = () => {
  return (
    <section className='about__page relative mt-10'>
      <AboutHome></AboutHome>
      <Counter></Counter>
      <Portfolio></Portfolio>
      <Team></Team>
      <img src={lineBg} alt="" className='img-line' />
    </section>
  );
};

export default AboutPage;
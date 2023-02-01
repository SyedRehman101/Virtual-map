import React from 'react';
import AboutHome from '../../components/AboutPage/AboutHome';
import Counter from '../../components/Counter/Counter';
import Create from '../Create/Create';
import Portfolio from '../Portfolio/Portfolio';
import Team from '../Team/Team';

const AboutPage = () => {
  return (
    <section className='about__page'>
      <AboutHome></AboutHome>
      <Counter></Counter>
      <Portfolio></Portfolio>
      <Team></Team>
      <Create></Create>

    </section>
  );
};

export default AboutPage;
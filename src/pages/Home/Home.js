import React from 'react';
import Hero from '../../components/Hero/Hero';
import About from '../About/About';
import Create from '../Create/Create';
import Faq from '../Faq/Faq';
import Portfolio from '../Portfolio/Portfolio';
import Projects from '../Projects/Projects';
import RoadMap from '../RoadMap/RoadMap';
import Speciality from '../Speciality/Speciality';
import Team from '../Team/Team';

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Speciality></Speciality>
      <Portfolio></Portfolio>
      <Projects></Projects>
      <RoadMap></RoadMap>
      <Team></Team>
      <Faq></Faq>
      <Create></Create>
    </>
  );
};

export default Home;
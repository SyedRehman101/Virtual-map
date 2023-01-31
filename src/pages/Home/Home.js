import React from 'react';
import Hero from '../../components/Hero/Hero';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Projects from '../Projects/Projects';
import RoadMap from '../RoadMap/RoadMap';
import Speciality from '../Speciality/Speciality';

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Speciality></Speciality>
      <Portfolio></Portfolio>
      <Projects></Projects>
      <RoadMap></RoadMap>
    </>
  );
};

export default Home;
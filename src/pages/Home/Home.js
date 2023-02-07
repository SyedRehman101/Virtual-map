import React from 'react';
import Hero from '../../components/Hero/Hero';
import About from '../About/About';
import Faq from '../Faq/Faq';
import Portfolio from '../Portfolio/Portfolio';
import Projects from '../Projects/Projects';
import RoadMap from '../RoadMap/RoadMap';
import Team from '../Team/Team';
import VideoSection from '../VideoSection/VideoSection';

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <VideoSection></VideoSection>
      <Portfolio></Portfolio>
      <Projects></Projects>
      <RoadMap></RoadMap>
      <Team></Team>
      <Faq></Faq>
    </>
  );
};

export default Home;
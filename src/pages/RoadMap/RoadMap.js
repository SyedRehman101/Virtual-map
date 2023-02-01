import React from 'react';
import './roadmap.css';
import roadmap from '../../assets/Images/roadmapbg.png'
import RoadMapBox from './RoadMapBox';
import { Fade } from 'react-reveal';

const RoadMap = () => {
  return (
    <section className='roadmap'>
      <img src={roadmap} alt="Road Map bg" className='img-line' />
      <div className='rm-shape'></div>
      <div className='lg:max-w-screen-xl w-ful  mx-auto p-4'>
        <div class="block-text text-center">
          <h6 class="sub-heading"><span>Road Map</span></h6>
          <h3 class="heading lg:text-4xl text-2xl text-base-100 font-bold leading-normal">The Journey of Laaverse</h3>
        </div>

        <Fade bottom duration="3000">
          <div className="roadmap__main">
            <RoadMapBox
              title="Idea Generation"
              time="February 01, 2023"
              summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida."
            ></RoadMapBox>

            <RoadMapBox
              title="Design & Development"
              className="right"
              time="March 11, 2022"
              summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida."
            ></RoadMapBox>

            <RoadMapBox
              title="Idea Generation"
              time="February 01, 2023"
              summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida."
            ></RoadMapBox>

            <RoadMapBox
              title="Design & Development"
              className="right"
              time="March 11, 2022"
              summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida."
            ></RoadMapBox>

            <RoadMapBox
              title="Idea Generation"
              time="February 01, 2023"
              summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida."
            ></RoadMapBox>

            <div className="icon"></div>
            <div className="button"></div>

          </div>
        </Fade>

        <div class="button"><a class="action-btn" href="/road-map"><span>View Full Road Map</span></a></div>
      </div>
    </section>
  );
};

export default RoadMap;
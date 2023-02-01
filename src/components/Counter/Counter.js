import React from 'react';
import { FaImages, FaUsers } from 'react-icons/fa';
import CounterBox from './CounterBox';
import { AiFillPieChart } from "react-icons/ai";
import counterBg from '../../assets/Images/counter_img.png'
import './counter.css';

const Counter = () => {
  return (
    <section className="counter">
      <div className="lg:max-w-screen-xl w-full mx-auto p-4">
        <div className="couter__main">
          <div className="couter-list flex">
            <CounterBox icon={<FaUsers />} text="Register User" number="100" />
            <CounterBox icon={<FaImages />} text="Register User" number="100" />
            <CounterBox icon={<AiFillPieChart />} text="Register User" number="100" />
            <div className="image">
              <img src={counterBg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router';
import DrawerContextProvider from '../context/drawerContext';

const Main = () => {
  AOS.init();
  return (
    <div>
      <DrawerContextProvider>
        <Header></Header>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </DrawerContextProvider>
    </div>
  );
};

export default Main;
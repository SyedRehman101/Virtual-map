import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router';
import DrawerContextProvider from '../context/drawerContext';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
  AOS.init();
  return (
    <>
      <DrawerContextProvider>
        <Header></Header>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </DrawerContextProvider>
    </>
  );
};

export default Main;
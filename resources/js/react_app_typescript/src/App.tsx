// import logo from './logo.svg';
import './App.css';
import React from 'react';
require('./bootstrap')
import { Navbar, DefaultRoutes, Footer } from './components';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';
import { AdminRoutes } from './admin';
import ProgressBar from "react-scroll-progress-bar";


const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

export const  App  = ()  => {
  return ( 
    <AlertProvider template={AlertTemplate} {...options}>

        <div className="App container-fluid">
          <>
            <ProgressBar  bgcolor="blue" />
            <DefaultRoutes />
            <AdminRoutes />
            <Footer />

          </>
        </div>
    </AlertProvider>
    
  );
};


import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar } from "..";
import { Outlet } from "react-router-dom";
// import Login from "../auth/login";
// import { Login, Register } from "../auth";


export const DefaultLayout = () => {
  
        return (
              <React.Fragment>
                  <Navbar />
                  <main><Outlet /></main>
              </React.Fragment>
        ); 
}



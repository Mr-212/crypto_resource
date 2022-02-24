import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link , Outlet} from "react-router-dom";
import { Login, SignUp, User, Navbar, HomePage,CoinmarketGetCryptoBySymbol, CryptoTopNavBar, CryptoLatestListing, LatestNews, Footer , TopVolumnList} from "../..";
import {PrivateRoutes, GuestRoutes} from '../routes/privateRoute';
// import ProgressBar from "react-scroll-progress-bar";

const DefaultLayout = () => {
    return (
          <React.Fragment>,
              <Navbar />
              <CryptoTopNavBar />
              <TopVolumnList />
              <main className="container-fluid">
                  {/* <div className="col-md-3">

                  </div> */}
                  {/* <div className="col-md-6"> */}
                  <Outlet />

                  {/* </div> */}
                  {/* <div className="col-md-3">
                  </div> */}

                  
              </main>

          </React.Fragment>
    ); 
}



export const  DefaultRoutes = () => {
    
        return (
                <div className="">
                    <Routes>
                             <Route element={<DefaultLayout />}>

                                <Route  path="/" element={<GuestRoutes />}>
                                    {/* <Route path='/' element={<Login />} /> */}
                                    <Route path='/' element={<HomePage />} />
                                    <Route path='/latest_listings' element={<CryptoLatestListing />} />
                                    <Route path='/latest_news' element={<LatestNews />} />


                                    <Route path="/login" element={<Login />} />
                                    <Route path="/signup" element={<SignUp />} />
                                    <Route path="/cryptolisting/:symbol" element={<CoinmarketGetCryptoBySymbol />} />


                                </Route>
                                
                                {/* <Route path="/user" element={<PrivateRoutes component={User} role="admin"></PrivateRoutes>} /> */}
                                <Route  path="/" element={<PrivateRoutes />}>
                                    <Route  path="/user" element={<User />} />
                                </Route>

                            </Route>
                    </Routes>
                </div>
        );
    }

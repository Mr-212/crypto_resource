import React, { Component, Suspense } from "react";
// import { CryptoLatestListing, LatestNews } from "../../components";
import { CryptoTopNavBar, TopVolumnList, AggrigateIndex } from "../../components";

const CryptoLatestListing = React.lazy(() => import('../cryptocurrencies/latestlisting'));
const  NewsLatest = React.lazy( () => import ("../cryptocurrencies/latestNews"));

import {WidgetTradingView} from '../cryptocurrencies/TradingViewWidget';
import LazyLoad from 'react-lazyload';


export default class HomePage extends Component {

    render(){
        return(
            <div className="mt-1 border-bottom border-dark py-2 min-h-screen">

                    {/* <div className="row">
                        <TopVolumnList />
                    </div> */}

                    <div className="row mt-1">
                    
                        {/* <CryptoTopNavBar /> */}
                        <Suspense fallback={<div className="text-black">Loading...</div>}>
                            <div className="col-12 col-md-4 col-sm-12" >
                                {/* <LazyLoad height={10} once > */}
                                    
                                {/* </LazyLoad> */}
                                {/* <div className="h-96">
                                    <WidgetTradingView/>
                                </div> */}
                                <div>
                                    <NewsLatest />

                                </div>
                            
                            </div>
                            <div className=" col-12 col-md-8 col-sm-12">
                                <CryptoLatestListing />
                            </div>
                           
                        </Suspense>
                    </div>
            </div>
            
        );
    }

};



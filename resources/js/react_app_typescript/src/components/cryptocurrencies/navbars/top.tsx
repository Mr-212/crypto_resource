import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";





const CryptoTopNavBar = () => {


    return(
        <div className="">
            <>

            <nav className="navbar  navbar-expand-lg h-8 navbar-dark bg-primary">
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="text-gray-50 font-weight-bold text-decoration-none" to="latest_listings">Latest Listings</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="text-gray-50 font-weight-bold  text-decoration-none ml-2" to="latest_news">Latest News</Link>
                        </li>
                    </ul>
                </div>
        
            </nav>
            </>



        </div>
    )
}


export default CryptoTopNavBar;
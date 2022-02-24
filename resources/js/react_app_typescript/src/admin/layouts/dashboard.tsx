import React from "react";
import { SideNavBar } from "../components";

export const Dashboard = () => {
    return(
        <div className="container-fluid">
            <div className="row border-bottom bg-slate-200">
                <header className="header p-4">
                    <h1>
                        Header
                    </h1>

                </header>
            </div>
           
            <div className="row">
                <div className="col-md-2">
                    <SideNavBar />
                </div>

                <div className="col-md-10">
                
                </div>
            </div>
            <footer>
                    
            </footer>
            {/* <div className="row">
                
            </div> */}
          

        </div>
    )
}
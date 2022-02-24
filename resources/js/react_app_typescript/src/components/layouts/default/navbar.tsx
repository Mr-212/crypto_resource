import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { SelectCurrency, AggrigateIndex} from "../..";


class Navbar extends Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = {
        };
    } 
    
    render() {

        const authenticated =  this.props.authenticated;
        return (
                <nav className="navbar navbar-expand-xl navbar-fixed-top bg-black">
                    <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><h5 className="font-itlaci text-emerald-300 font-weight-bold">Crypto Resource</h5></Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <AggrigateIndex />
                            <ul className="navbar-nav ml-auto">
                            { authenticated ?
                             <>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/user"}>User</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to={"/logout"}>Lgout</Link>
                                </li>
                             </>
                            :   
                             <>     
                                <li className="nav-item">
                                    <Link className="nav-link font-weight-bold" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link font-weight-bold" to={"/signup"}>Register</Link>
                                </li>
                                <li className="nav-item">
                                    <SelectCurrency />
                                </li>
                             </>
                                   
                            }
                            </ul>
                        </div>
                    </div>
                </nav>
        );
    }
}

const mapStateToProps = (state) => {
  const { authenticated } = state.authenticate;
  return { authenticated }
};

const mapActionsToProps = {
};

export default connect(mapStateToProps)(Navbar);
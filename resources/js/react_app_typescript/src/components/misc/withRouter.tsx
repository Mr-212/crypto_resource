import React from "react";
import {
    useLocation,
    useNavigate,
    useParams
  } from "react-router-dom";


  export const withRouter = (Comp) => {
    const ComponntWithRouterProps = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return (
            <Comp {...props} 
                router={{location, navigate, params}}
            />
        );
    }
    return ComponntWithRouterProps;
  }
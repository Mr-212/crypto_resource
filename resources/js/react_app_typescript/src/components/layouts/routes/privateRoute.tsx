import React, { Component } from "react";
import {Route, RouteProps, Navigate, Outlet } from 'react-router-dom';
import {useSelector,connect, RootStateOrAny} from 'react-redux';
import { RootState } from "../../../redux/reducers";
import authenticate from "../../../redux/reducers/authReducer";
// import  {authenticate}  from '../../redux/reducers/authReducer';


interface PurePrivateProps {
    component?: any;
    role?: string;
    Auth?: any
    // authenticated: boolean;
    // rest?:any;
};

 export const Auth = () => {
   const auth =   useSelector((state: RootState) => state.authenticate);
   return auth.authenticated;
}
// export const  auth = useSelector((state: RootState) => state.authenticate);

export const PrivateRoutes : React.FC<PurePrivateProps>= ({ component: Component, role=null ,Auth}) => {
    const  authenticated = useSelector((state: RootState) => state.authenticate.authenticated);
    return null;

    // if(authenticated)
    //     return <Outlet></Outlet>;
    // else
    //     return <Navigate to="/login" />;

             
           
    

}

export const GuestRoutes:React.FC<PurePrivateProps> = ({Auth}) => {
    const  authenticated = useSelector((state: RootState) => state.authenticate.authenticated);
    console.log(Auth);
    if(authenticated){
        return <Navigate to="/admin"/>
    }
    else{
        return <Outlet />
    }
    //return <Outlet />
}

// export const PrivateRoutes : React.FC<PurePrivateProps> = ({ component: Component, role = null}) => {
//     // console.log('here');
//         const  auth = useSelector((state: RootState) => state.authenticate);
//         return  auth.authenticated && role == 'admin'  ? <Component /> : <Navigate to="/login" />;
// }

// const mapStateToProps =  (state: RootStateOrAny) =>{
//     const { authenticated } = state.authenticate;
//     return { authenticated };
// }


import { SET_USER, SET_ERRORS, LOADING_UI, CLEAR_ERRORS, SUCCESS_LOGIN, SET_UNAUTHENTICATED, LOADING_USER, SET_AUTHENTICATED, VALIDATION_ERRORS, SUCCESS_REGISTER  } from "../constants/types";
import authService from "../../services/auth/authService";

export const login = (email: string, password: string) => (dispatch: any) => {

    try{
        let response =  authService.login(email,password)
        .then(response => {
            if(typeof response.data.user !== 'undefined' && typeof response.data.token !== 'undefined'){
                response.data.user['token'] = response.data.token;
                dispatch({type: SET_USER, payload: response.data.user});
                dispatch({type: SUCCESS_LOGIN, payload: 'Logged in successfully.'})
            }
            if(typeof response.data.errors != 'undefined')
                dispatch({type: VALIDATION_ERRORS, payload: response.data.errors});
            if(typeof response.data.error_message !== 'undefined')
                dispatch({type: SET_ERRORS, payload: response.data.error_message});
            // else{
            //     dispatch({type: SET_UNAUTHENTICATED});
            // }
            return response.data;
        });
        return response;
       
    }
    catch(err){
        dispatch({type: SET_ERRORS, payload: err.data.message});
        dispatch({type: SET_UNAUTHENTICATED});
    }
};


export const register = (name: string, email: string, password: string, password_confirmation: string) => (dispatch: any) => {
    let response =  authService.register(name, email, password, password_confirmation);

    response.then(response => {
        if(typeof response.data.user !== 'undefined'){
            dispatch({type: SET_USER, payload: response.data.user});
            dispatch({type: SUCCESS_REGISTER, payload: 'Success..., User registered successfully.'});
        }
        if(typeof response.data.errors != 'undefined')
            dispatch({type: VALIDATION_ERRORS, payload: response.data.errors});
        if(typeof response.data.error_message !== 'undefined')
            dispatch({type: SET_ERRORS, payload: response.data.error_message});

    });

};


export const resetValidations = () => (dispatch) => {
    // alert('dispatch')
    dispatch({type: VALIDATION_ERRORS , payload: {}})
};

export const logout = () => (dispatch: any) => {
    authService.logout();
    if(authService.getCurrentUser == null)
        dispatch({type: SET_UNAUTHENTICATED});
};


export const getCurrentUser = () => {
    return authService.getCurrentUser;

};



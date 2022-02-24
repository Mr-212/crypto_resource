import { SET_USER, SET_ERRORS, LOADING_UI, CLEAR_ERRORS, SUCCESS_REGISTER, SET_UNAUTHENTICATED, LOADING_USER, SET_AUTHENTICATED, VALIDATION_ERRORS, SUCCESS_LOGIN  } from "../constants/types";

const initialState = {
    authenticated: false,
    // credentials: {},
    loading: false,
    validations: {},
    user: {},
    token:"",
    error: "",
    success_register: "",
    success_login: "",

};

const authenticate = (state = initialState, action: any) => {
    
    switch(action.type){
        case SET_AUTHENTICATED: 
            return {
                ...state,
                authenticated: true,
            };
        case SUCCESS_LOGIN:
            return{
                ...state,
                success_login: action.payload
            }  
            

        case SET_UNAUTHENTICATED:
            return initialState;

        case SET_USER: 
            return {
                ...state,
                authenticated: true,
                loading: false,
                user: action.payload,
            };

        case SET_ERRORS:
            return {
                ...state,
                error: action.payload,
            };

        case VALIDATION_ERRORS:
            return {
                ...state,
                validations: action.payload
            };
         case SUCCESS_REGISTER:
             return {
                 ...state,
                 success_register: action.payload
             }   

        default:
            return state;

    }

}

export default authenticate;
import React, { Component } from "react";
import { connect  } from "react-redux";
import { login, resetValidations } from "../../redux/actions/authActions";
import {alertRed} from '../alerts/error';
import DismissAlert from '../alerts/dismissAlert';

import { withAlert } from 'react-alert'
import { SUCCESS_LOGIN } from "../../redux/constants/types";
// import {useHistory}
// import {store} from '../redux/store';

 interface LoginState {
    email: string;
    password: string;
 
};
 interface Errors {
    error:string
}

type IState =  LoginState | Errors;

class Login extends Component<any, LoginState>{
    
    constructor(props: any){
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        // this.onChangeFeild = this.onChangeFeild.bind(this);

    };

    componentDidMount(): void {
        this.props.resetValidations();
        // this.validationReset;
    }

    componentWillReceiveProps(nextProps: Readonly<any>, nextContext: any): void {
        // if(this.props.authenticate.validations != nextProps.authenticate.validations){
        //     // console.log(nextProps);
        // }
    }
    validationReset = () => {
        this.props.resetValidations();
    }

    onChangeFeild = (field: "email"|"password", e:React.FormEvent<HTMLInputElement>) => {
        const state = {};
        state[field] = e.currentTarget.value;
        this.setState(state);
    };


   

    login = (e:any) => {
    // console.log(this.props.validations);
        e.preventDefault();

        const API_URL = 'https://goggle.com';
        let response =  this.props.login(this.state.email, this.state.password);

        // if(this.props.success_login){
        //     this.props.alert.show(this.props.success_login)
        //     this.props.dispatch({type: SUCCESS_LOGIN, payload: ""});
        // }

        // .then(response => {
        //     // console.log(response)
        //         if(response.error_message){
        //         this.setState({ error: response.error_message}, 
        //             () => { 
        //                  console.log(this.state.error);
        //             });
        //         }
        // });

        
    };

    validationsErrors = (property):any => {
       return (this.props.validations.hasOwnProperty(property) &&
        this.props.validations[property].map((error,key) => {
          return <DismissAlert error={error} key={key} />
          // return  alertRed(error,key);
        })
       );
    }



    render() {

        return (
            <div className="w-50 float-right mr-5">
            <form className=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h3>Sign In</h3>
                <div className="flex flex-row">
                { this.props.error != "" &&
                     alertRed(this.props.error)
                }

                </div>
                <div className="form-group">
                  
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email address</label>
                     { this.validationsErrors('email') }

                    <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={this.onChangeFeild.bind(this,'email')} value={this.state.email} placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    {  this.validationsErrors('password') }

                    <input type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={this.onChangeFeild.bind(this, 'password')}  value={this.state.password} placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customCheck1">Remember me</label>
                    </div>
            
                </div>


                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={this.login}>
                        Sign In
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div>
            </form>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
        const { validations, user, error } = state.authenticate;
        return { validations, user, error };
};

const mapActionsToProps = ({
    login, resetValidations
});

export default withAlert()(connect(mapStateToProps, mapActionsToProps)(Login));
import React, { Component } from "react";
import { connect  } from "react-redux";
// import {WithRouter} from 'react-router-dom';
import { register, resetValidations } from "../../redux/actions/authActions";
import { alertRed } from '../alerts/error';
import { withAlert } from 'react-alert'


interface RegisterState {
        form?: object;
        name: string;
        password_confirmation:string;
        email: string;
        password: string;
    
};

class SignUp extends Component<any, RegisterState>{
    
    constructor(props: any){
        super(props);
        this.state = {
            email: "",
            password: "",
            name:"",
            password_confirmation:""
        };

    };

    componentDidMount(): void {
        // this.validationReset;
        this.props.resetValidations();
        
    }

    // componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
    //     console.log(prevState);
    // }
    validationReset = () => {
        this.props.resetValidations();
    }

    onChangeFeild = (field: "email"|"password"|"name"|"confirm_password", e:React.FormEvent<HTMLInputElement>) => {
        const state = {};
        state[field] = e.currentTarget.value;
        this.setState(state);

    }

    register = (e:any) => {
        e.preventDefault();
        // this.props.alert.show('registering...')
        this.props.register(this.state.name,this.state.email, this.state.password, this.state.password_confirmation);
    }

    validationsErrors = (property):any => {
        return (this.props.validations.hasOwnProperty(property) &&
         this.props.validations[property].map((error,key) => {
            return  alertRed(error,key);
         })
        );
     }


    render() {

        return (
            <div className="w-50 float-right mr-5">
            <form className="bg-white  shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h3>Sign In</h3>
                <div className="form-group">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                    {  this.validationsErrors('name') } 
                    <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={this.onChangeFeild.bind(this,'name')} value={this.state.name} placeholder="Enter email" />
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
                    <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                    {/* Password:{" "} */}

                    <input type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={this.onChangeFeild.bind(this, 'password_confirmation')}  value={this.state.password_confirmation} placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="" id="customCheck1" />
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

            
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={this.register}>
                    Register
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

const mapStateToProps = (state: any) => {
    const {validations,user, error, success_register } = state.authenticate;
    return {validations, user, error, success_register};
 
};

const mapActionsToProps  =  ({
    register, resetValidations
});

export default withAlert()(connect(mapStateToProps, mapActionsToProps)(SignUp));
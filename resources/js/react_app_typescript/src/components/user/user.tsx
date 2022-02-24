import React, { Component } from "react";
import { useSelector, connect } from "react-redux";
import { login } from "../../redux/actions/authActions";
import {alertRed} from '../alerts/error';
import { withAlert } from 'react-alert';
import { SUCCESS_LOGIN } from "../../redux/constants/types";

// import {store} from '../redux/store';

 interface UserProps {
   user: object;
 
};
 interface Errors {
    error:string
}

 type IState =  UserProps | Errors;

class User extends Component<any, UserProps>{

    constructor(props: any){
        super(props);
        this.state = {
            user:{},
        };
        // this.onChangeFeild = this.onChangeFeild.bind(this);

    };

    componentWillReceiveProps(nextProps: Readonly<any>, nextContext: any): void {
        // if(this.props.authenticate.validations != nextProps.authenticate.validations){
        //     // console.log(nextProps);
        // }
    }


    render() {
        //  console.log(this.props.user)
        if(this.props.success_login){
            // console.log('here');
             this.props.alert.show(this.props.success_login);
             this.props.dispatch({type: SUCCESS_LOGIN, payoad: ""});
        }

        return (
            <div className="col-md-12">
                <h3>Email: {this.props.user.email}</h3>
                <h3>Name: {this.props.user.name}</h3>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
        const { user, success_login } = state.authenticate;
        return { user, success_login };
  
};

const mapActionsToProps = dispatch => ({
    login, dispatch 
});

export default withAlert()(connect(mapStateToProps, mapActionsToProps)(User));
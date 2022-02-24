import React, { Component }  from "react";
// import { useAlert } from 'react-alert'


interface AlertProps  {
    error?: string;
    key?:number;
    
    // alert?:boolean
}
interface AlertState  {
    alert?: boolean;
}

export default class DismissAlert extends Component< AlertProps, AlertState> {
     
    constructor(props: any){
        super(props);
        this.state = {
            alert: true,
        }

    }

    componentDidMount(): void {
        if(this.props.error)
            this.setAlert(true);
    }

    setAlert = (value:boolean,) => {
        console.log(value);
        // e.preventDefault();
        // alert(e.currentTarget.value)
        this.setState({alert: value}, ()=>{
                // console.log(this.state.alert);
        });
         console.log(this.state.alert);
    }
    render() {
    return(
        <>
        { this.state.alert? (
                <div id="alert-1" className="flex p-2 mb-1 bg-red-100 border-t-2 rounded-lg dark:bg-red-200"  key={this.props.key} role="alert">
                <svg className="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <div className="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
                { this.props.error }
                </div>
                <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300" data-collapse-toggle="alert-1" aria-label="Close" >
                    <span className="sr-only" >Close</span>
                    <svg   onClick={ this.setAlert.bind(this, false) } className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                </div>
                )
            : null
        }
        </>
        );
    }
}
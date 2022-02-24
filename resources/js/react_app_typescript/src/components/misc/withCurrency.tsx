import React from "react";


const CurrencySymbol =  {
    'USD': {name : 'USD',symbol:'$'},
    'EUR': {name : 'EUR',symbol:'€'},

};

export const withCurrency = (Component) => {
   
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {

            }
            
        }
        render(){
            return (
                <Component CurrencySymbol={CurrencySymbol} />
            )
        }
    }
}
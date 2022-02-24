import React from "react";
import { connect } from "react-redux";
import {setCurrency} from '../../redux/actions/cryptoActions'

const CurrencySymbol = {
    'USD': '$',
    'EUR': '€',
}

const DropDownList = () =>{
    {   Object.keys(CurrencySymbol).map((item,i) => {
            {console.log(item)}
            <a className="dropdown-item">{item}</a>
        })
    }
}

class SelectCurrency extends React.Component<any> {
    constructor(props) {
        super(props);
        this.state = {

        }
        
    }

    handleChange = (event) => {
        // console.log(event.target.value);
        this.props.setCurrency(event.target.value);

    }


    render(){
        return(
            <div className="dropdown">
                 {/* <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Currency
                </button> */}
                <select className="btn btn-secondary" onChange={this.handleChange}>
                {   Object.entries(CurrencySymbol).map((item,i) => {
                       return  <option className="dropdown-item" value={item[0]} key={i}>{item[1]} {item[0]}</option>
                    })
                }
                </select>
            </div>
        );
    }
}

const mapActionToProps = ({
    setCurrency
});

export default connect(null, mapActionToProps)(SelectCurrency);
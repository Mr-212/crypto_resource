import React from "react";
import { connect } from "react-redux";
import {WidgetTradingView} from './TradingViewWidget';
// import { WithRouter } from 'react-router-dom';
 import { withRouter } from '../misc'

interface StateProps {
    symbol: string
}

class CoinmarketGetCryptoBySymbol extends React.Component<any,StateProps> {
    constructor(props) {
        super(props);
        this.state = {
            symbol: this.props.router.params.symbol,
        }
        
    }

    componentDidMount(): void {
        console.log(this.props )
    }


    render(){
        console.log(this.props);
        return(
            <div className="d-flex flex-col">
                <div className="d-flex w-full h-96">
                    <WidgetTradingView cryptoSymbol={`${this.state.symbol}USDT`} />
                </div>

            </div>
        )
    }
}

const mapSateToProps = (state) => {
    // const {data} = state.

}



// export default connect(mapSateToProps)(CoinmarketGetCryptoBySymbol);
export default withRouter(CoinmarketGetCryptoBySymbol);
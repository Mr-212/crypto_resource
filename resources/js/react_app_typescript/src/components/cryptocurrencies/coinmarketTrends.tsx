import React from "react";
import { connect } from "react-redux";
import { getTrendingLists } from '../../redux/actions/cryptoActions';
import MaterialTable from 'material-table';
import {withCurrency} from '../misc'


type  StateProps  = {
    pending : boolean;
    page:Number;
    perpage: Number;
    currency: any;
    data?:any;
    crypto_symbol?:string

}
class CoinmarketTrends extends React.Component<any, StateProps> {
    constructor(props) {
        super(props)
        this.state = {
            pending: true,
            perpage:25,
            page:1,
            currency: 'USD',
            data: this.props.data,
            crypto_symbol:'BTC',
        }
        
    }


    componentDidMount(): void {
        this.props.getTrendingLists(this.state.page, this.state.perpage, this.props.currency)

    }


    render(){
        console.log(this.props.trendsData);
        let currency = this.state.currency;
        const columns = [
            // {
            //     title: 'ID',
            //     render: row => row.id,
            // },
            // {
            //     name: 'name',
            //     selector: row => row.name,
            // },
            {
                title: 'Name',
                 field: 'name',
                // render: row => <Link to={`cryptolisting/${row.symbol}`} >{row.name}</Link>,
                // render: row => <a onClick={() => this.setCryptoSymbol(row.symbol)}>{row.name}</a>,

                cellStyle: {
                    color: 'tan',
                    fontWeight: 'bold',
                },
                sorting: true

                // headerStyle: {
                //     backgroundColor: '#039be5',
                //   }              
                
            },
            {
                title: 'Price',
                // field:  'quote.'+CurrencySymbol[currency].name+'.price'
                render:row=>   this.props.CurrencySymbol[currency].symbol+' '+(row.quote[currency].price > 1 ? row.quote[currency].price.toFixed(2):row.quote[currency].price.toFixed(10)),
                cellStyle: {
                    color: 'greenyellow',
                    fontWeight: 'bold',
                }
            },
            {
                title: 'Volumn 24H',
                render: row => Math.round(row.quote[currency].volume_24h).toFixed(2),
              
                
            
            },
         
            {
                title: '% 24H',
                render: row => row.quote[currency].percent_change_24h.toFixed(2),
            },
            {
                title: '% 7D',
                render: row => row.quote[currency].percent_change_7d.toFixed(2),
              
            },
            {
                title: '% 30D',
                render: row => row.quote[currency].percent_change_30d.toFixed(2),
            },
            {
                title: 'Market Cap',
                render: row => row.quote[currency].market_cap.toFixed(2),
            
            },
            {
                title: 'Market Dominance',
                render: row => row.quote[currency].market_cap_dominance.toFixed(2)+' %',
            },

        ];
        return (
            <div className="d-flex">
                 <MaterialTable columns={columns} data={this.props.listingData} title='Crypto Listing'
                         options={{
                            headerStyle: {
                              backgroundColor: '#01579b',
                              color: '#FFF'
                            },
                            rowStyle:{
                                // backgroundColor: 'midnightblue',
                                backgroundColor: 'black',
                                color: '#FFF'
                            },
                            sorting: true,
                            search: false,
                            paging: false
                          }}
                          isLoading={this.state.pending}
                    
                        />

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { trendsData, currency } = state.cryptoCurrencies;
    return { trendsData, currency }
}

const mapActionsToProps = ({
    getTrendingLists
})


export default withCurrency(connect(mapStateToProps, mapActionsToProps)(CoinmarketTrends));
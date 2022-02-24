import React, { Component } from "react";
import { connect } from "react-redux";
import { DataTableBase, PaginatedItems } from '..'
import DataTable, { TableColumn } from 'react-data-table-component';
import {getLatestCryptoListing} from '../../redux/actions/cryptoActions' 
import moment from 'moment';
import ReactPaginate from 'react-paginate';
import MaterialTable from 'material-table';
import {WidgetTradingView} from './TradingViewWidget';
import { Link } from "react-router-dom";
import {ArrowDropDown,ArrowDropUp} from '@material-ui/icons';
import {ThreeDots} from 'react-loading-icons'
import {LoaderThreeDotsUpperCenter} from '../misc/loders'



type DataRow =  {
    id?: number;
    name?: string;
    symbol?: string;
    quote?: { 
        USD?: { 
             price, volume_24h, volume_change_24h, market_cap, market_cap_dominance, 
             percent_change_24h, percent_change_7d, percent_change_30d,percent_change_60d,
             percent_change_90d, 
             last_updated, 
        } ,
    };

};

const CurrencySymbol =  {
    'USD': {name : 'USD',symbol:'$'},
    'EUR': {name : 'EUR',symbol:'€'},

};

type  StateProps  = {
    pending : boolean;
    page:Number;
    perpage: Number;
    currency: any;
    data?:any;
    crypto_symbol?:string

}

type State =   DataRow & StateProps
class CryptoLatestListing extends Component<any,State> {

    constructor(props){
        super(props);
         this.state = {
             pending: true,
             perpage: 10,
             page: 1,
             currency: this.props.currency,
            //  data: this.props.listingData,
             crypto_symbol:'BTC',

        }
        this.setLoading(true);
        this.props.getLatestCryptoListing(this.state.page, this.state.perpage, this.props.currency)
        .then(resp => {
            this.setLoading(false);        
        });
    }


    componentDidMount(): void {
        // this.setState({pending: true});
        setInterval(() => {
            this.props.getLatestCryptoListing(this.state.page, this.state.perpage, this.props.currency)
        .then(resp => {
            this.setLoading(false);        
        });
    },50000)
    }

    shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<State>, nextContext: any): boolean {
        // console.log(this.props.listingData)    
        // if(nextProps.currency !== this.props.currency && this.props.data == nextProps.data)
        //     return false;

        if(this.props.listingData.length > 0 && typeof this.props.listingData[0].quote[nextProps.currency] == 'undefined')
            return false;

        else
            return true;
    }

    componentWillReceiveProps(nextProps: Readonly<any>, nextContext: any): void {
        if(this.state.currency != nextProps.currency){
            this.setState({currency: nextProps.currency});  
             let resp = this.props.getLatestCryptoListing(this.state.page, this.state.perpage, nextProps.currency)
             .then(resp => {
                this.setLoading(false);        

                // this.setLoading(false);
             });

            
        }
      
    }

    // componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<State>, snapshot?: any): void {
    //     // if(prevState.currency !== this.props.currency){
    //     //     console.log(this.props.currency);
    //     //     // this.setLoading(true);
    //     //     //this.props.getLatestCryptoListing(this.state.page,this.state.perpage, this.props.currency)
    //     //     // this.setLoading(false);
    //     //     // this.forceUpdate
    //     // }
    // }

    setLoading = (val) => {
        this.setState({ pending: val });
    }

    handlePageChange = (page) => {
        this.setLoading(true);
        this.setState({page: page});
        this.props.getLatestCryptoListing(page, this.state.perpage, this.state.currency);
        this.setLoading(false);

    };

    handlePerRowsChange = (newPerPage, page) => {
        //console.log(newPerPage,page);
        this.setLoading(true);
        this.props.getLatestCryptoListing(page, newPerPage, this.state.currency);
        this.setState({perpage: newPerPage});
        this.setLoading(false);

    };


    handlePageClick = (page) => {
        this.handlePageChange(page);
        
    };


    setCryptoSymbol = (symbol) =>{
        this.setState({crypto_symbol: symbol});
    }

    getCurrencySymbol = () => {
        return CurrencySymbol[this.state.currency].symbol 
    }


    render(){

        let currency = this.props.currency;
        const columns = [
            {
                title: 'Name',
                // field: 'name',
                render: row => <Link to={`cryptolisting/${row.symbol}`} >{row.name}</Link>,
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
                render: row => typeof row.quote[currency] !== 'undefined' ?   <span className="text-nowrap"> { this.getCurrencySymbol() +' '+(row.quote[currency].price > 1 ? row.quote[currency].price.toFixed(2):row.quote[currency].price.toFixed(10)) }</span>:'-',
                cellStyle: {
                    color: 'white',
                    fontWeight: 'bold',
                }
            },
          
         
            {
                title: '% 24H',
                render: row => 
                { 
                    let price_24 = typeof row.quote[currency] !== 'undefined' ?(row.quote[currency].percent_change_24h).toFixed(2):'-';
                    return (
                        price_24 > 0 ? <span className="text-nowrap text-green-500"><ArrowDropUp />{ price_24 }</span>
                        : <span className="text-nowrap text-red-500"><ArrowDropDown />{ price_24 }</span>
                        )
                }
            },
            {
                title: '% 7D',
                render: row => {
                    let price_7d = typeof row.quote[currency] !== 'undefined' ? row.quote[currency].percent_change_7d.toFixed(2):'-';
                    return (
                        price_7d > 0 ? <span className="text-nowrap text-green-500"><ArrowDropUp />{ price_7d }</span>
                        : <span className="text-nowrap text-red-500"><ArrowDropDown />{ price_7d }</span>
                    )
                }
            },
            {
                title: '% 30D',
                render: row => {
                    let price_30d = typeof row.quote[currency] !== 'undefined' ? row.quote[currency].percent_change_30d.toFixed(2):'-';
                    return (
                        price_30d > 0 ? (<span className="text-nowrap text-green-500"><ArrowDropUp />{ price_30d }</span>)
                        : <span className="text-nowrap text-red-500"><ArrowDropDown />{ price_30d }</span>
                    )
                }
                
               
            },

            {
                title: 'Vol(24H)',
                render: row => {
                    
                    return (
                        typeof row.quote[currency] !== 'undefined' ?
                     <span className="text-nowrap font-weight-bold">{this.getCurrencySymbol()+' '+(Math.round(row.quote[currency].volume_24h))}</span>: '-'
                    )
                }
            },

            {
                title: 'Market Cap',
                render: row => typeof row.quote[currency] !== 'undefined' ? <span className="text-nowrap">{this.getCurrencySymbol()+' '+Math.round(row.quote[currency].market_cap)}</span>: '-'
            },
            {
                title: 'Market Dominance',
                render: row => typeof row.quote[currency] !== 'undefined' ? row.quote[currency].market_cap_dominance.toFixed(2)+' %': '-',
            },

        ];

        

        
        // const theme = createMuiTheme({
        //     palette: {
        //       primary: {
        //         main: '#4caf50',
        //       },
        //       secondary: {
        //         main: '#ff9100',
        //       },
        //     },
        
        //   });
        
      
        
       
     
        return(
            <div className="d-flex flex-col">
                    {/* { this.state.pending && <div className="position-absolute bottom-50 end-50"><ThreeDots stroke="blue" /></div>  }       */}
                    { this.state.pending && <LoaderThreeDotsUpperCenter color="blue" /> }              
        
                     {/* <div className="h-96"> */}
                     {/* <WidgetTradingView cryptoSymbol={`${this.state.crypto_symbol}${'USDT'}`} /> */}
                     {/* <WidgetTradingView/> */}
                {/* </div> */}

                <div className="d-flex w-full">
                    {/* <div className="w-full">{this.props.listingData.length > 0 && typeof this.props.listingData[0].quote[this.state.currency] !== 'undefined' && */}
                    <div className="w-full">{!this.state.pending && this.props.listingData.length > 0 &&


                        <MaterialTable columns={columns} data={ this.props.listingData } title='Crypto Listing'
                         options={{
                            // fixedColumns: {
                            //     left: 2,
                            //   },

                            toolbar: false,
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
                         }

                    </div>

                
                </div>
                <div className="d-flex d-flex justify-content-end mt-3 mr-3">
                    { !this.state.pending && this.props.listingData.length > 0  && 
                        <PaginatedItems itemsPerPage={10}  onPageChange={this.handlePageClick} />
                    }

                </div>
                
            </div>
        );
    }

};


const mapStateToProps = (state) => {
    const { listingData , currency } = state.cryptoCurrencies;
    return { listingData, currency };
};
const mapActionToProps = (
     { getLatestCryptoListing }

);


export default connect(mapStateToProps,mapActionToProps)(CryptoLatestListing);

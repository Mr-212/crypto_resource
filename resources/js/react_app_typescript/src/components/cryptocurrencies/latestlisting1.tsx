import React, { Component } from "react";
import { connect } from "react-redux";
import { DataTableBase, PaginatedItems } from '..'
import DataTable, { TableColumn } from 'react-data-table-component';
import {getLatestCryptoListing} from '../../redux/actions/cryptoActions' 
import moment from 'moment';
import ReactPaginate from 'react-paginate';


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
        EUR?: { 
            price, volume_24h, volume_change_24h, market_cap, market_cap_dominance, 
            percent_change_24h, percent_change_7d, percent_change_30d,percent_change_60d,
            percent_change_90d, 
            last_updated, 
       } 
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

}

type State =   DataRow & StateProps
class CryptoLatestListing extends Component<any,State> {

    constructor(props){
        super(props);
         this.state = {
             pending: true,
             perpage:10,
             page:1,
             currency: 'USD',
             data: this.props.data,

        }
    }


    componentDidMount(): void {
        this.setState({pending: true});
        this.props.getLatestCryptoListing(this.state.page, this.state.perpage, this.props.currency)
        .then(resp => {
            this.setState({pending: false});
        });
    }

    shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<State>, nextContext: any): boolean {
   
        console.log(nextProps.data,this.props.currency);
        if(nextProps.currency !== this.props.currency && this.props.data == nextProps.data){
            // let resp =  this.props.getLatestCryptoListing(this.state.page, this.state.perpage, nextProps.currency)
            // .then(resp =>{
            //     console.log(resp)
            //     return true;
            // });
            // return resp;
            return false;
            
        
        }
        else
            return true;
            

    }

    componentWillReceiveProps(nextProps: Readonly<any>, nextContext: any): void {
        // console.log(nextProps);
        if(this.state.currency != nextProps.currency){
            this.setState({currency: nextProps.currency});  
           // this.forceUpdate();
             let resp = this.props.getLatestCryptoListing(this.state.page, this.state.perpage, nextProps.currency)
             .then(resp => {
                //  console.log(resp);
                 this.setState({currency: nextProps.currency});  
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

    setLoading = (val) =>{
        this.setState({ pending: val });
    }

    handlePageChange = (page) => {
        this.setLoading(true);
        this.setState({page: page});
        this.props.getLatestCryptoListing(page,this.state.perpage, this.state.currency);
        this.setLoading(false);

    };

    handlePerRowsChange = (newPerPage,page) => {
        console.log(newPerPage,page);
        this.setLoading(true);
        this.props.getLatestCryptoListing(page,newPerPage, this.state.currency);
        this.setState({perpage: newPerPage});
        this.setLoading(false);

    };
    handlePageClick = (page) => {
        this.handlePageChange(page);
        
    };

    getColumns = () => {
        let currency = this.state.currency;
        //const columns: TableColumn<DataRow>[]= [
        const columns = [

            // {
            //     name: 'ID',
            //     selector: row => row.id,
            // },
            // {
            //     name: 'name',
            //     selector: row => row.name,
            // },
            {
                name: 'Name',
                selector: row => row.name,
                sortable: true,
                style: {
                    color: 'antiquewhite',
                    fontWeight: 'bold',
                    fontSize:'14px',
                    '&:hover': {
                                cursor: 'pointer',
                        },
                     },
            },
            {
                name: 'Price',
                selector: row => CurrencySymbol[currency].symbol+' '+(row.quote[currency].price > 1 ? row.quote[currency].price.toFixed(2):row.quote[currency].price.toFixed(10)),
                sortable: true,
                style: {
                    color: 'aqua',
                    fontWeight: 'bold',
                    '&:hover': {
                                cursor: 'pointer',
                        },
                     },
            },
            {
                name: 'Volumn 24H',
                selector: row => Math.round(row.quote[currency].volume_24h).toFixed(2),
                sortable: true,
                style: {
                    color: 'white',
                    fontWeight: 'bold',
                    '&:hover': {
                                cursor: 'not-allowed',
                        },
                     },
            
            },
            // {
            //     name: 'Volumn % 24H',
            //     selector: row => row.quote[currency].volume_change_24h.toFixed(2),
            //     sortable: true,
            // },
            {
                name: '% 24H',
                selector: row => row.quote[currency].percent_change_24h.toFixed(2),
                sortable: true,
                style: {
                        color: 'white',
                        fontWeight: 'bold',
                        '&:hover': {
                                    cursor: 'not-allowed',
                            },
                     	},
            },
            {
                name: '% 7D',
                selector: row => row.quote[currency].percent_change_7d.toFixed(2),
                sortable: true,
                style: {
                    color: 'white',
                    fontWeight: 'bold',
                    '&:hover': {
                                cursor: 'not-allowed',
                        },
                     },
            },
            {
                name: '% 30D',
                selector: row => row.quote[currency].percent_change_30d.toFixed(2),
                sortable: true,
                style: {
                    color: 'white',
                    fontWeight: 'bold',
                    '&:hover': {
                                cursor: 'pointer',
                        },
                     },
            },
            {
                name: 'Market Cap',
                selector: row => row.quote[currency].market_cap.toFixed(2),
                sortable: true,
                
                style: {
                    color: 'aqua',
                    fontWeight: 'bold',
                    '&:hover': {
                                cursor: 'pointer',
                        },
                     },
            },
            {
                name: 'Market Dominance',
                selector: row => row.quote[currency].market_cap_dominance.toFixed(2)+' %',
                sortable: true,
                
                style: {
                    color: 'darksalmon',
                    fontWeight: 'bold',
                    '&:hover': {
                                cursor: 'pointer',
                        },
                     },
            },
            // {
            //     name: 'Updated',
            //     selector: row => row.quote[currency].last_updated,
            //     format: (row) => moment(row.quote[currency].last_updated).format('HH:mm:ss YYYY-MM-DD'),
                
            // },
            

        ];
    }




    render(){
        // let data = this.props.data;
        // console.log(data);
        // let totalRows = this.props.data.length;
        
        // if(this.props.currency != this.state.currency){
        //     this.setState({currency: this.props.currency});
        //     console.log(this.props.currency)
        //     let response = this.props.getLatestCryptoListing(this.state.page,this.state.perpage, this.props.currency)
        //     .then(resp => {
        //         console.log(resp);
        //         return true
        //     });
        //     if(response){
        //          data = this.props.data;
        //          //console.log(data);
        //          totalRows = this.props.data.length;

                
        //     }
        // }
        // else{
        //      data = this.props.data;
        //     // console.log(data);
        //      totalRows = this.props.data.length;
            
        // }

        
       
      
        
        let currency = this.state.currency;
        const columns = [
            // {
            //     name: 'ID',
            //     selector: row => row.id,
            // },
            // {
            //     name: 'name',
            //     selector: row => row.name,
            // },
            {
                name: 'Name',
                selector: row => row.name,
                sortable: true,
                style: {
                    color: 'antiquewhite',
                    fontWeight: 'bold',
                    fontSize:'14px',
                    '&:hover': {
                                cursor: 'pointer',
                        },
                     },
            },
            {
                name: 'Price',
                selector: row => CurrencySymbol[currency].symbol+' '+(row.quote[currency].price > 1 ? row.quote[currency].price.toFixed(2):row.quote[currency].price.toFixed(10)),
                sortable: true,
                style: {
                    color: 'aqua',
                    fontWeight: 'bold',
                    '&:hover': {
                                cursor: 'pointer',
                        },
                     },
            },
            {
                name: 'Volumn 24H',
                selector: row => Math.round(row.quote[currency].volume_24h).toFixed(2),
                sortable: true,
                style: {
                    color: 'white',
                    fontWeight: 'bold',
                    '&:hover': {
                                cursor: 'not-allowed',
                        },
                     },
            
            },
            // {
            //     name: 'Volumn % 24H',
            //     selector: row => row.quote[currency].volume_change_24h.toFixed(2),
            //     sortable: true,
            // },
            {
                name: '% 24H',
                selector: row => row.quote[currency].percent_change_24h.toFixed(2),
                sortable: true,
                style: {
                        color: 'white',
                        fontWeight: 'bold',
                        '&:hover': {
                                    cursor: 'not-allowed',
                            },
                     	},
            },
            {
                name: '% 7D',
                selector: row => row.quote[currency].percent_change_7d.toFixed(2),
                sortable: true,
                style: {
                    color: 'white',
                    fontWeight: 'bold',
                    '&:hover': {
                                cursor: 'not-allowed',
                        },
                     },
            },
            {
                name: '% 30D',
                selector: row => row.quote[currency].percent_change_30d.toFixed(2),
                sortable: true,
                style: {
                    color: 'white',
                    fontWeight: 'bold',
                    '&:hover': {
                                cursor: 'pointer',
                        },
                     },
            },
            {
                name: 'Market Cap',
                selector: row => row.quote[currency].market_cap.toFixed(2),
                sortable: true,
                
                style: {
                    color: 'aqua',
                    fontWeight: 'bold',
                    '&:hover': {
                                cursor: 'pointer',
                        },
                     },
            },
            {
                name: 'Market Dominance',
                selector: row => row.quote[currency].market_cap_dominance.toFixed(2)+' %',
                sortable: true,
                
                style: {
                    color: 'darksalmon',
                    fontWeight: 'bold',
                    '&:hover': {
                                cursor: 'pointer',
                        },
                     },
            },
            // {
            //     name: 'Updated',
            //     selector: row => row.quote[currency].last_updated,
            //     format: (row) => moment(row.quote[currency].last_updated).format('HH:mm:ss YYYY-MM-DD'),
                
            // },
            

        ];
     
        return(
            <div className="d-flex flex-col">
                <div className="d-flex">

                    <DataTableBase  columns={columns} data={this.props.data} progressPending={this.state.pending}
                    // onChangePage={this.handlePageChange}
                    // paginationTotalRows={totalRows}
                    // onChangeRowsPerPage={this.handlePerRowsChange}

                    />
                </div>
                <div className="d-flex d-flex justify-content-center mt-3">
                    { this.props.data.length > 0  && 
                        <PaginatedItems itemsPerPage={10}  onPageChange={this.handlePageClick} />
                    }

                </div>
                
            </div>
        );
    }

};


const mapStateToProps = (state) => {
    const { data , currency } = state.cryptoCurrencies;
    return { data, currency };
};
const mapActionToProps = (
     { getLatestCryptoListing }

);


export default connect(mapStateToProps,mapActionToProps)(CryptoLatestListing);

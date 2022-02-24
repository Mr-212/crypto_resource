import React from "react";
import { connect } from "react-redux";
import {getTopVolumnList} from '../../../redux/actions/cryptoActions';
import MaterialTable from "material-table";
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';

type StateProps ={
    pending?:boolean;
};
type ColType = {
    CoinInfo?: {},
    Display? : {
        USD?:{},
    }
}

type State = StateProps & ColType;



class TopVolumnList extends React.Component<any,State>{


    constructor(props){
        super(props);
        this.state = {
            pending:true,

        }
        this.props.getTopVolumnList()
        .then(resp => {
            this.setState({pending:false});
        });
    }


    componentDidMount(): void {
        // alert('here');
        // this.props.getTopVolumnList()
        // .then(resp => {
        //     this.setState({pending:false});
        // });
        // console.log(this.props.top_volumn_list);
    }




    render(){
        //console.log(this.props.top_volumn_list[0]?.CoinInfo);
        const currency = 'USD';

        const columns = [
            {
                title: 'Name',
                // render: row => <Link to={`cryptolisting/${row.symbol}`} >{row.name}</Link>,
                render: row => <div className="d-inline-flex flex-nowrap align-items-center">
                    <img className="h-8"  src={'https://www.cryptocompare.com'+row.CoinInfo?.ImageUrl}></img>
                    <span className="">{row.CoinInfo?.Internal}</span>
                </div>,


                // render: row => <a onClick={() => this.setCryptoSymbol(row.symbol)}>{row.name}</a>,

                cellStyle: {
                    color: 'tan',
                    fontWeight: 'bold',
                },
                sorting: true
         
                
            },
            // {
            //     title: 'Price',
            //     render: row => <span>{row.DISPLAY?.[currency].PRICE}</span>,
            //     cellStyle: {
            //         color: 'white',
            //         fontWeight: 'bold',
            //     }
            // },
          
         
            {
                title: 'vol (24H)',
                render: row => <span className="text-nowrap">{row.DISPLAY?.[currency].VOLUME24HOUR}</span>,
            },
        ];

        return(
            
            

    
            <div className="d-flex flex-col">
                <div className="d-flex justify-items-start bg-dark h-6">
                    <h6 className="text-nowrap text-gray-100 p-1">Top Volumns</h6>
                </div>
                <div className=" d-inline-flex justify-content-between align-items-center bg-primary p-2 overflow-auto">

              
                    {this.props.top_volumn_list.length > 0 && this.props.top_volumn_list.map((item,i) =>{
                        return (
                        <div className="ml-5 shadow-2xl shadow-sky-400 h-30 w-25" key={i}>
                            <div className="flex flex-nowrap align-items-center">
                                <img className="h-5" src={'https://www.cryptocompare.com'+item.CoinInfo?.ImageUrl}></img>
                                <span className="ml-1 text-blue" key={i}>{item.CoinInfo?.Internal}</span>
                                <span className="ml-2 text-white font-weight-bold">{Math.round(item.RAW?.[currency].VOLUME24HOUR)}</span>

                            </div>
                            {/* <span className="ml-5 text-indigo-700 font-weight-bold">{Math.round(item.RAW?.[currency].VOLUME24HOUR)}</span> */}
                        </div>)
                    }
                    )}
                </div>
            </div>



            // <div className="d-flex w-100 justify-content-center overflow-auto">


            

            //       {!this.state.pending && this.props.top_volumn_list.length > 0 && <MaterialTable columns={columns} data={ this.props.top_volumn_list } title='Top Gainers'
            //              options={{
            //                 // fixedColumns: {
            //                 //     left: 2,
            //                 //   },

            //                 toolbar: false,
            //                 headerStyle: {
            //                   backgroundColor: '#01579b',
            //                   color: '#FFF'
            //                 },
            //                 rowStyle:{
            //                     // backgroundColor: 'midnightblue',
            //                     backgroundColor: 'black',
            //                     color: '#FFF'
            //                 },
            //                 sorting: true,
            //                 search: false,
            //                 paging: false
            //               }}
            //               isLoading={this.state.pending}
                    
            //             />
            //     }

            // </div>
        )
    }

}


const mapStateToProps = (state) => {
    const { top_volumn_list} = state.cryptoCurrencies;
    return {top_volumn_list};

}


const mapActionsToProps = ({
    getTopVolumnList

});

export default connect(mapStateToProps,mapActionsToProps)(TopVolumnList);
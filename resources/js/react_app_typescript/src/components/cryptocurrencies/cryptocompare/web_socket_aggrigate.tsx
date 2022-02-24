import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {ArrowDropDown,ArrowDropUp} from '@material-ui/icons';


type StateProps  = {
    apiKey? : string;
    data?: any,


}


class AggrigateIndex extends React.Component<any, StateProps>{
    constructor(props){
        super(props);
        this.state = {
            data:{},

        }  
    }

    componentDidMount(): void {
         this.addSub();
        //  this.onReceive();
    };

    getConnction = () => {
        const apiKey = "29013908937e19bf2de5a64386a0ecf0846ff6b1a0495ce519c90d0642712cb2";
        return  new WebSocket('wss://streamer.cryptocompare.com/v2?api_key=' + apiKey);
    }

    addSub = () => {
        var stream = this.getConnction();
        stream.onopen = event => {
            let subRequest = {
                "action": "SubAdd",
                "subs": ["5~CCCAGG~BTC~USDT", "5~CCCAGG~ETH~USDT","5~CCCAGG~BNB~USDT","5~CCCAGG~SOL~USDT","5~CCCAGG~SLP~USDT","5~CCCAGG~ALGO~USDT"]
            };
        stream.send(JSON.stringify(subRequest));

        };

        stream.onmessage =  event => {
            var message = JSON.parse(event.data);
            message.PRICE? this.setState({ data: { ...this.state.data, [message.FROMSYMBOL] : message }}):"";
            // message.PRICE? this.setState({data: message}):"";
        }


    };

    onReceive = () => {
        var stream = this.getConnction();
        stream.onmessage =  event => {
            var message = JSON.parse(event.data);
            console.log(message);
            message.PRICE? this.setState({data: message}):"";
        }
    }


    render(){
        let data = this.state.data;
        // console.log(data);

        return(
            <div className="d-flex flex-row justify-center overflow-auto">
                
                { Object.keys(data).length > 0 && Object.values(data).map((item,i) => {
                    // console.log(item,i);
                     return <SetSymbol data={item} key={i}/> 
                })
                }
                
            </div>
        )
    }

} 
export default AggrigateIndex;


const SetSymbol = ({data}) => {
    const lastPrice =  useRef(data.PRICE);
    // const [customClass, setCustomClass] = useState("");
    const [direction, setDirection] = useState(Boolean);

    useEffect( () => {
        if(data.PRICE > lastPrice.current){
            // setCustomClass(customClass => 'lime-400');
            setDirection(true) ;
        }
        else{
            // setCustomClass(customClass => 'red-500');
            setDirection(false) ;

        }

            lastPrice.current = data.PRICE;
    },[data]);

    return(
        <Box className="">
        { data.PRICE && 
            <div className="">
           
                        <span className="text-white text-sm  font-weight-bold ml-1">{data.FROMSYMBOL}</span>
                        {/* <span className="text- font-weight-bold ml-1">{data.PRICE}</span> */}
                        { direction ?
                            <span className={`text-lime-400 font-weight-bold ml-1 w-20`}><ArrowDropUp/>{data.PRICE}</span>
                            :
                            <span className={`text-red-500 font-weight-bold ml-1 w-20`}><ArrowDropDown />{data.PRICE}</span>
                        }

                        {/* <div className="d-flex flex-nowrap align-items-center">
                            <span className="text-white text-sm text-center ml-1">1H Vol: </span>
                            <span className="text-yellow-100  font-weight-bold ml-1">{Math.round(data.VOLUMEHOUR)}</span>
                        </div>
                        <div className="d-flex flex-nowrap align-items-center">
                            <span className="text-white text-sm  ml-1">24H Vol: </span>
                            <span className="text-yellow-200 font-weight-bold ml-1">{Math.round(data.VOLUME24HOUR)}</span>
                        </div> */}

              </div> 
         }
    </Box>

    )
}


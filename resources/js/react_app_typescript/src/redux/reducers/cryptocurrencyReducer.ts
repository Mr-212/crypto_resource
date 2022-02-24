import { start } from "@popperjs/core";
import { GET_CRYPTO_LATEST_LISTING, GET_TRENDING_LISTS, SET_CURRENCY, SET_LATEST_NEWS, SET_TOP_VOLUMN_LIST } from "../constants/crypto";

const initialState = {
    listingData: [],
    currency : 'USD',
    trendsData : [],
    CurrencySymbol :  {
        'USD': {name : 'USD',symbol:'$'},
        'EUR': {name : 'EUR',symbol:'€'},
    
    },
    latestNewsData: [],
    top_volumn_list : [],
}

const cryptoCurrencies = (state = initialState, action: any) => {
    switch(action.type){
        case GET_CRYPTO_LATEST_LISTING:
            return {
                ...state,
                //data: [...new Set([...state.data, ...action.payload])]
                //data: state.data.concat(action.payload)
                listingData: action.payload,
            }
        case SET_CURRENCY:
            return {
                ...state,
                currency: action.payload,
            } 
        case GET_TRENDING_LISTS:
            return {
                ...state,
                trendsData: action.payload,
            }  
            
        case SET_LATEST_NEWS:
            let initData = new Set(state.latestNewsData.map(item => item.id));
            let newData =  [...state.latestNewsData, ...action.payload.filter(d => !initData.has(d.id)) ]
            return{
                ...state,
                latestNewsData: newData,

            };
        case SET_TOP_VOLUMN_LIST:
            return {
                ...state,
                top_volumn_list: action.payload,

            };        

        default:
            return state ; 
    }

}

export default cryptoCurrencies;
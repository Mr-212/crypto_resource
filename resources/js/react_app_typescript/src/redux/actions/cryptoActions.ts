import { GET_CRYPTO_LATEST_LISTING, GET_TRENDING_LISTS, SET_CURRENCY, SET_LATEST_NEWS, SET_TOP_VOLUMN_LIST } from "../constants/crypto";
import CryptoCurrencyService from "../../services/cryptocurrency/coinmarketService";
import CryptoCompareService from "../../services/cryptocurrency/cryptocompareService";


export const getLatestCryptoListing = (page: Number, perPage: Number, currency: string) => (dispatch: any) => {
    try{
        const response =  CryptoCurrencyService.getLatestListing(page, perPage, currency)
        .then(resp => {
            if(typeof resp.data !== 'undefined'){
                dispatch({type: GET_CRYPTO_LATEST_LISTING, payload: resp.data});
            }
            resp.data;
        });
        return response;
    }catch(err){
        console.log(err);
    }
}


export const getTrendingLists = (page: Number, perPage: Number, currency: string) => (dispatch: any) => {
    try{
        const response =  CryptoCurrencyService.getTrendingGainersAndLosers(page, perPage, currency)
        .then(resp => {
            if(typeof resp.data !== 'undefined'){
                dispatch({type: GET_TRENDING_LISTS, payload: resp.data});
            }
            resp.data;
        });
        return response;
    }catch(err){
        console.log(err);
    }
};



export const setCurrency = (currency: string) => (dispatch:any) => {
    dispatch({type: SET_CURRENCY,payload: currency});
};



export const getLatestNews = (page: number, limit: number) => (dispatch:any) => {
    try{
        // alert('here');
        const response =  CryptoCompareService.getLatestNews(page, limit)
        .then(resp => {
            if(typeof resp.data !== 'undefined'){
                // console.log(resp)
                dispatch({type: SET_LATEST_NEWS, payload: resp.data});
            }
            resp.data;
        });
        return response;
    }catch(err){
        console.log(err);
    }
};



export const getTopVolumnList = () => (dispatch:any) => {
    try{
        // alert('here');
        const response =  CryptoCompareService.getTopVolumnList()
        .then(resp => {
            if(typeof resp.data !== 'undefined'){
                // console.log(resp)
                dispatch({type: SET_TOP_VOLUMN_LIST, payload: resp.data});
            }
            resp.data;
        });
        return response;
    }catch(err){
        console.log(err);
    }
}
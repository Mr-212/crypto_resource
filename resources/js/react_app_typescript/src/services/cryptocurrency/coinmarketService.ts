import axios from 'axios';
const API_URL = 'http://localhost:8000/api';

class CryptoCurrencyService {

    getLatestListing = (page: Number, perPage: Number, currency: String) => {
        let url = API_URL+'/coinmarket/?currency='+currency+'&page='+page;
        if(typeof perPage !== 'undefined')
            url+='&per_page='+perPage
        return axios.get(url);
    }

    getTrendingGainersAndLosers = (page: Number, perPage: Number, currency: String) => {
        let url = API_URL+'/coinmarket/trending/?currency='+currency+'&page='+page;
        if(typeof perPage !== 'undefined')
            url+='&per_page='+perPage
        return axios.get(url);
    }
}

export default new CryptoCurrencyService();
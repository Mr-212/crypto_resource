import axios from 'axios';
const API_URL = 'http://localhost:8000/api/cryptocompare';

class CryptoCompareService {

    // getLatestListing = (page: Number, perPage: Number, currency: String) => {
    //     let url = API_URL+'/coinmarket/?currency='+currency+'&page='+page;
    //     if(typeof perPage !== 'undefined')
    //         url+='&per_page='+perPage
    //     return axios.get(url);
    // }

    // getTrendingGainersAndLosers = (page: Number, perPage: Number, currency: String) => {
    //     let url = API_URL+'/coinmarket/trending/?currency='+currency+'&page='+page;
    //     if(typeof perPage !== 'undefined')
    //         url+='&per_page='+perPage
    //     return axios.get(url);
    // }
    getLatestNews = (page: number, limit: number) => {
        let url = API_URL+'/latest_news?page='+page+'&limit='+limit;
        return axios.get(url,{
            onDownloadProgress: progressEvent => {
                //console.log(progressEvent)
                // let percentCompleted = Math.round(
                //     (progressEvent.loaded * 100) / progressEvent.total
                //   );
            //   const total = parseFloat(progressEvent.currentTarget.responseHeaders['Content-Length'])
            //   const current = progressEvent.currentTarget.response.length
          
            //   let percentCompleted = Math.floor(current / total * 100)
               //console.log('completed: ', progressEvent.total)
            }
          });
    }

    getTopVolumnList = () => {
        let url = API_URL+'/get_top_volumn_list';
        return axios.get(url);
    }
}




export default new CryptoCompareService();
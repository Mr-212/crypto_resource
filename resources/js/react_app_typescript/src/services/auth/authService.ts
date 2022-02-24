import axios from 'axios';
const API_URL = 'http://localhost:8000/api';

class authService {

     login = (email: string, password: string) => {
        try{
            return  axios.post(API_URL+'/login',{email,password})
            .then(response => {
                if(typeof response.data.user !== 'undefined' && typeof response.data.token !== 'undefined'){
                    localStorage.setItem('user',JSON.stringify(response.data.user));
                    localStorage.setItem('user.token',JSON.stringify(response.data.token));
                }
                return response;
             });
            
        }
        catch(err){
            return err;
        }
    };

    logout = () => {
        localStorage.removeItem('user');
    };

    register = (name: string, email: string, password: string, password_confirmation: string) => {
        return axios.post(API_URL+'/register', { name, email, password, password_confirmation });
    };

    getCurrentUser = () => {
        // return axios.post(API_URL+'/user')
        const userStr = localStorage.getItem('user');
        if(userStr)
            return JSON.parse(userStr);
        return null;
    }

}

export default new authService();
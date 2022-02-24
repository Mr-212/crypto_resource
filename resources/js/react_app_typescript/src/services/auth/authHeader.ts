export default function authHeader(){
    let user = null;
    const userStr = localStorage.getItem('user');
    if(userStr)
        user = JSON.parse(userStr);

    if(user && user.accessToken){
        return { Authorization: 'Bearear' + user.accessToken };   
    }
    return {};

}
import axios from 'axios';
import { data, map } from 'jquery';


const auth = {
  namespaced: false,

  state: {
    authenticated: false,
    user: null,
    validationErrors :{
      email: '',
    }
  },

  getters: {
    authenticated(state) {
      return state.authenticated
    },

    user (state) {
      return state.user
    },
    // validationErrors(state){
    //   return 
    // }
  },

  mutations: {
    SET_AUTHENTICATED (state, value) {
      state.authenticated = value
    },

    SET_USER (state, value) {
      state.user = value
    },
    SET_ERRORS(state, value){
      // console.log((value));

      // console.log(Array.isArray(value));
      Object.entries(value).forEach((k) => {
        // console.log(k[0],k[1][0]);
        state.validationErrors[k[0]]=k[1][0];
        // console.log(state.validationErrors)
      })

      // state.validationErrors = 
      // value.map(function(k,v){
      //     console.log(k,v);
      //     return k=>v[0];
      // });
    }
  },
  // ...

  actions: {
     async signIn ({ commit }, credentials) {
      
      //await axios.get('/sanctum/csrf-cookie')
       await axios.post('/auth/login', credentials)
       .then((response)=> {
        console.log(response)
        commit('SET_AUTHENTICATED', true)
        commit('SET_USER', response.data)
      }).catch(()=> {
        commit('SET_AUTHENTICATED', false)
        commit('SET_USER', null)
      });


      //  return dispatch('me')
    },

    async signUp({commit}, credentials){
      await axios.post('/auth/register', credentials)
      .then(response=>{
        if(response.data.errors){
            // console.log(response.data.errors.email);
            commit('SET_ERRORS',response.data.errors)
        }

      }).catch( error => {
        console.log(error);
      });
    },

    async signOut ({ dispatch }) {
      await axios.post('/auth/logout')
      return dispatch('me')
    },

    me ({ commit }) {
      return axios.get('/api/user').then((response) => {
        commit('SET_AUTHENTICATED', true)
        commit('SET_USER', response.data)
      }).catch(() => {
        commit('SET_AUTHENTICATED', false)
        commit('SET_USER', null)
      })
    }
  }
}
export default auth;
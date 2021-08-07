import Vue from 'vue';
import {createStore} from 'vuex';
import auth from './Modules/Auth/auth';

// Vue.use(Vuex);

export default createStore({
  modules: {
    auth
  },
  // strict: debug,
  // plugins: debug ? [createLogger()] : [];
});


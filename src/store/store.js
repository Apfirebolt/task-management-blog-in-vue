import Vue from 'vue';
import Vuex from 'vuex';
import accounts from './modules/accounts/accounts';


Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    accounts,
  }
});
import * as accountTypes from './AccountTypes';
import { ENV } from '../../../shared/constants';
import axios from 'axios';
import Vue from 'vue';

const state = {
  token: '',
  userId: '',
  profile_data: {}
};

const getters = {
  [accountTypes.GET_TOKEN]: state => {
    return state.token;
  },
};

const mutations = {
  [accountTypes.SET_TOKEN]: (state, payload) => {
    state.token = payload;
  },

  [accountTypes.LOG_OUT_SUCCCESS]: (state) => {
    state.token = '';
    localStorage.removeItem("token");
  },
};

const actions = {
  [accountTypes.LOGIN_USER]: ({commit}, payload) => {
    let url = ENV.url + '/accounts/get-token/';
    axios.post(url, payload)
      .then((response) => {
        commit(accountTypes.SET_TOKEN, response.data.token);
        localStorage.setItem('token', response.data.token);
        Vue.toasted.show('You have successfully Logged In, Please continue with Dashboard', ENV.toast_options);
      })
      .catch((err) => {
        Vue.toasted.show('Failed to login, some error occurred!', ENV.toast_options);
      });
  },

  [accountTypes.REGISTER_USER]: ({commit}, payload) => {
    let url = ENV.url + '/accounts/register/';
    axios.post(url, payload)
      .then((response) => {
        Vue.toasted.show('You have successfully registered, please login to continue', ENV.toast_options);
      })
      .catch((err) => {
        Vue.toasted.show('Failed to register, some error occurred!', ENV.toast_options);
      });
  },

  [accountTypes.LOG_OUT]: ({commit}) => {
    let storedToken = localStorage.getItem('token');
    commit(accountTypes.LOG_OUT_SUCCCESS);
    if(storedToken) {
      Vue.toasted.show('You have been successfully logged out!', ENV.toast_options);
    }
  },
};

export default {
  state,
  mutations,
  actions,
  getters
}
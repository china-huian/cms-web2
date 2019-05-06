import axios from 'axios';
import * as types from '../types';
import api from './api';

const state = {
  list: null,
  total: null,
};

const actions = {
  async query({ commit }, paging = {}) {
    const res = await axios.post(api.navQuery, paging);
    if (res.data.error == 0) {
      commit(types.PAGEQUERY, res.data);
      return res;
    } else {
      return res;
    }
  },
};

const mutations = {
  [types.PAGEQUERY](state, payload){
    state.list = payload.data;
    state.total = payload.total;
  },
};

export default {
  namespaced: true,
  mutations,
  actions,
  state,
};

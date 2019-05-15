import axios from 'axios';
import * as types from '../types';
import api from './api';
const state = {
  list: null,
};

const actions = {
  async query({ commit }, paging = {}) {
    const res = await axios.post(api.ColumnQuery, paging);
    if (res.data.errcode == 0) {
      commit(types.COLUMNQUERY, res.data);
      console.log(res.data.data);
      return res;
    } else {
      return res;
    }
  },
};

const mutations = {
  [types.COLUMNQUERY](state, payload) {
    state.list = payload.data;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};

import axios from 'axios';
import types from '../types.js';
import api from './api';

const state = {
  list: null,
  total: null,
};

const actions = {
  async query({ commit }, paging = {}) {
    const res = await axios.post(api.query, { ...paging });
    if (res.data.errcode == 0) {
      commit(types.COLUMNQUERY, res.data);
      return res;
    } else {
      return res;
    }
  },
};

const mutations = {
  [types.COLUMNQUERY](state, payload) {
    state.list = payload.data;
    state.total = payload.total;
  },
};

export default {
  state,
  mutations,
  actions,
};

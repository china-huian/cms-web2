import axios from 'axios';
import * as types from '../types.js';
import api from './api';

const actions = {
  async query({ commit }, paging = {}) {
    const res = await axios.post(api.contentQuery, paging);
    if (res.data.errcode == 0) {
      commit(types.CONTENTQUERY, res.data);
      return res;
    } else {
      return res;
    }
  },
  async add({ commit }, paging = {}) {
    const res = await axios.post(api.contentAdd, { ...paging });
    return res;
  },
};

export default {
  namespaced: true,
  actions,
};

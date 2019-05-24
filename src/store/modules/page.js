import axios from 'axios';
import * as types from '../types.js';
import api from './api';

const state = {
  list: null,
  total: null,
};

const actions = {
  async query({ commit }, paging = {}) {
    const res = await axios.post(api.pageQuery, paging);
    if (res.data.errcode == 0) {
      commit(types.PAGEQUERY, res.data);
      return res;
    } else {
      return res;
    }
  },
  async add({ commit }, paging = {}) {
    const res = await axios.post(api.pageAdd, { ...paging });
    return res;
  },
  async fetch({ commit }, paging = {}) {
    const res = await axios.post(api.pageFetch, { ...paging });
    return res;
  },
  async delete({ commit }, paging = {}) {
    const res = await axios.post(api.pageDelete, { ...paging });
    return res;
  },
  async update({ commit }, paging = {}) {
    const res = await axios.post(api.pageUpdate, { ...paging });
    return res;
  },
};

const mutations = {
  [types.PAGEQUERY](state, payload) {
    state.list = payload.data;
    state.total = payload.total;
  },
};
export default {
  namespaced: true,
  state,
  actions,
  mutations,
};

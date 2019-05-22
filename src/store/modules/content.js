import axios from 'axios';
import * as types from '../types.js';
import api from './api';

const state = {
  list: null,
  total: null,
};

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
  async fetch({ commit }, paging = {}) {
    const res = await axios.post(api.contentFetch, { ...paging });
    return res;
  },
  async delete({ commit }, paging = {}) {
    const res = await axios.post(api.contentDelete, { ...paging });
    return res;
  },
  async update({ commit }, paging = {}) {
    // console.log(paging);
    const res = await axios.post(api.contentUpdate, { ...paging });
    return res;
  },
};

const mutations = {
  [types.CONTENTQUERY](state, payload) {
    state.list = payload.data;
    state.total = payload.total;
  },
};

export default {
  namespaced: true,
  actions,
  mutations,
  state,
};

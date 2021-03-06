import axios from 'axios';
import * as types from '../types';
import api from './api';

const state = {
  list: null,
};

const actions = {
  async query({ commit }, paging = {}) {
    const res = await axios.post(api.navQuery, paging);
    if (res.data.errcode == 0) {
      commit(types.NAVQUERY, res.data);
      return res;
    } else {
      return res;
    }
  },
  async add({ commit }, paging = {}) {
    const res = await axios.post(api.navAdd, paging);
    return res;
  },
  async delete({ commit }, paging = {}) {
    const res = await axios.post(api.navDelete, paging);
    return res;
  },
  async update({ commit }, paging = {}) {
    const res = await axios.post(api.navUpdate, paging);
    return res;
  },
  async fetch({ commit }, paging = {}) {
    const res = await axios.post(api.navFetch, paging);
    if (res.data.errcode == 0) {
      return res;
    } else {
      return res;
    }
  },
};

const mutations = {
  [types.NAVQUERY](state, payload) {
    state.list = payload.data;
  },
};

export default {
  namespaced: true,
  mutations,
  actions,
  state,
};

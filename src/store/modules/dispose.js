import axios from 'axios';
import * as types from '../types';
import api from './api';

const state = {
  list: null,
  total: null,
};

const actions = {
  async query({ commit }, paging = {}) {
    const res = await axios.post(api.infoQuery, paging);
    if (res.data.errcode == 0) {
      commit(types.INFOQUERY, res.data);
      return res;
    } else {
      return res;
    }
  },
  async add({ commit }, paging = {}) {
    const res = await axios.post(api.infoAdd, paging);
    return res;
  },
  async delete({ commit }, paging = {}) {
    const res = await axios.post(api.infoDelete, paging);
    return res;
  },
  async update({ commit }, paging = {}) {
    const res = await axios.post(api.infoUpdate, paging);
    return res;
  },
  async fetch({ commit }, paging = {}) {
    const res = await axios.post(api.infoFetch, paging);
    return res;
  },
};

const mutations = {
  [types.INFOQUERY](state, payload) {
    state.list = payload.data;
    state.total = payload.total;
  },
  [types.INFOFETCH](state, payload) {
    state.list = payload.data;
    state.total = payload.total;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

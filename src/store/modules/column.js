import axios from 'axios';
import * as types from '../types';
import api from './api';

const state = {
  list: null,
  total: null,
};

const actions = {
  async query({ commit }, paging = {}) {
    const res = await axios.post(api.columnQuery, paging);
    if (res.data.errcode == 0) {
      commit(types.COLUMNQUERY, res.data);
      return res;
    } else {
      return res;
    }
  },
  async add({ commit }, paging = {}) {
    const res = await axios.post(api.columnAdd, paging);
    return res;
  },
  async update({ commit }, paging = {}) {
    const res = await axios.post(api.columnUpdate, paging);
    return res;
  },
  async delete({ commit }, paging = {}) {
    const res = await axios.post(api.columnDelete, paging);
    return res;
  },
  async fetch({ commit }, paging = {}) {
    // 详细信息
    const res = await axios.post(api.columnFetch, paging);
    if (res.data.errcode == 0) {
      commit(types.COLUMNFETCH, res.data);
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
  [types.COLUMNFETCH](state, payload) {
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

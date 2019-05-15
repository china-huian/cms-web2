import axios from 'axios';
// 引入axios
import * as types from '../types.js';
// 引入types.js下所定义的所有变量
import api from './api';
// 引入接口文件

const state = {
  list: null,
  total: null,
};

// actions为定义异步函数，此处处理query接口
const actions = {
  // 异步函数query，第一个参数暂理解为固定写法，commit用于向mutation传送数据，第二个参数为从页面向actions传的值
  async query({ commit }, paging = {}) {
    // res为所接收值的返回结果，post方法下第一个参数为路径，第二个参数为传入的值
    const res = await axios.post(api.pageQuery, paging);
    // 对返回结果做处理
    if (res.data.errcode == 0) {
      // 向mutation传送参数，第一个参数为types文件中的字符串，便于应用；第二个参数为paging返回的参数内容
      commit(types.PAGEQUERY, res.data);
      // 返回数据，如果没有后续处理，直接写return即可，停止；存在res即便于后续对res进行操作
      return res;
    } else {
      // 如果失败也需要将结果返回，用于处理错误信息
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
    const res = await axios.post(api.pageUpdata, { ...paging });
    return res;
  },
};

// 同步操作，用于修改state中的值
const mutations = {
  // 判断PAGEQUERY这个变量是否存在，相当于一个函数，第一个参数为所有的state，第二个参数为commit传入的第二个值
  [types.PAGEQUERY](state, payload) {
    // 此处为获取state中的值，进行了修改
    state.list = payload.data;
    state.total = payload.total;
  },
};

// 输出以上所定义的全部常量（由const定义的皆为常量）
export default {
  // 为了解决不同模块命名冲突的问题，将不同模块的namespaced:true，之后在不同页面中引入getter、actions、mutations时，需要加上所属的模块名
  namespaced: true,
  state,
  actions,
  mutations,
};

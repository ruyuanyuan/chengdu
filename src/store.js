import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    parkId:null,//园区ID
  },
  mutations: {
    setParkId(state, data) {
      if (data) {
        console.log('setParkId', data);
        state.parkId = data;
      }
    },
  },
  actions: {},
});

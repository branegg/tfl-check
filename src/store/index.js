import Vue from 'vue';
import Vuex from 'vuex';
import CabsApi from './../services/api/Cabs';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cabs: {},
    isLoading: false,
  },
  mutations: {
    SAVE_CABS(state, cabs) {
      state.isLoading = false;
      state.cabs = cabs;
    },
    loading(state, isLoading) {
      state.isLoading = isLoading;
    },
  },
  actions: {
    getCabs({ commit }, { lat, lon }) {
      commit('loading', true);
      CabsApi.fetchCabs(lat, lon).then((res) => {
        commit('SAVE_CABS', res.data);
        commit('loading', false);
      });
    },
  },
  modules: {},
});

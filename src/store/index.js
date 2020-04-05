import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cabs: null,
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
      axios.get(`http://localhost:8000/getCabs?lat=${lat}&lon=${lon}`).then((res) => {
        commit('SAVE_CABS', res.data);
        commit('loading', false);
      });
    },
  },
  modules: {},
});

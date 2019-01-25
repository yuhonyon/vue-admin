import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import actions from './actions';
import {state, mutations} from './rootState';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  getters,
  actions,
  state,
  mutations,
});

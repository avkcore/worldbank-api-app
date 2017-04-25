import Vue from 'vue';
import Vuex from 'vuex';

import * as getters from './getters';
import * as actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedCountries: [],
    countriesList: [],
    topicsList: [],
    selectedTopic: null,
    indicators: [],
    selectedIndicator: null,
    yearFrom: null,
    yearTo: null,
    fromYearsList: [],
    toYearsList: [],
  },
  getters,
  actions,
  mutations,
});

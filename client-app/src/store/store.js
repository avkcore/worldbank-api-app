import Vue from 'vue';
import Vuex from 'vuex';

import * as getters from './getters';
// import * as actions from './actions';

import Utils from '../utils/utils';

Vue.use(Vuex);

const COUNTRIES_URL = 'https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;flag';

export default new Vuex.Store({
  state: {
    value: [],
    options: [],
    countries: [],
  },
  getters,
  actions: {
    loadCountriesList({ commit }) {
      commit('LOAD_COUNTRIES_LIST');
    },
  },
  mutations: {
    async LOAD_COUNTRIES_LIST(state) {
      const countries = await Utils.fetchJSON(COUNTRIES_URL);
      const mappedCountries = countries
        .map(country => ({
          name: country.name,
          code: country.alpha2Code,
        }));
      mappedCountries.forEach(country =>
        state.countries.push(country),
      );
    },
  },
});


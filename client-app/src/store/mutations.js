import * as types from './mutation-types';
import { generateNumbers } from '../utils/utils';

const MIN_YEAR = 1960;
const MAX_YEAR = 2016;

export default {
  [types.UPDATE_COUNTRIES_LIST](state, { countries }) {
    const mappedCountries = countries
      .map(country => ({
        name: country.name,
        code: country.alpha2Code,
      }));
    state.countriesList.push(...mappedCountries);
  },
  [types.UPDATE_TOPICS_LIST](state, { topics }) {
    state.topicsList.push(...topics[1]);
  },
  [types.ADD_SELECTED_COUNTRY](state, country) {
    state.selectedCountries.push(country);
  },
  [types.DELETE_SELECTED_COUNTRY](state, value) {
    const country = state.selectedCountries
      .find(c => c.name === value.name);
    state.selectedCountries.splice(state.selectedCountries.indexOf(country), 1);
  },
  [types.INIT_FROM_RANGE](state) {
    const rangeArray = generateNumbers(MIN_YEAR, MAX_YEAR).reverse();
    state.fromYearsList.push(...rangeArray);
  },
  [types.INIT_TO_RANGE](state) {
    const rangeArray = generateNumbers(MIN_YEAR, MAX_YEAR).reverse();
    state.toYearsList.push(...rangeArray);
  },
  /* eslint-disable no-param-reassign */
  [types.CHANGE_YEAR_FROM](state, value) {
    state.yearFrom = value;
  },
  [types.CHANGE_YEAR_TO](state, value) {
    state.yearTo = value;
  },
  [types.CHANGE_TOPIC](state, topic) {
    state.selectedTopic = { id: topic.id, value: topic.value };
  },
  [types.UPDATE_INDICATORS_LIST](state, indicators) {
    state.indicators.push(...indicators[1]);
  },
  [types.CHANGE_INDICATOR](state, indicator) {
    state.selectedIndicator = { id: indicator.id, name: indicator.name };
  },
};

import * as types from './mutation-types';
import { isMatched } from '../utils/utils';

export default {
  [types.UPDATE_COUNTRIES_LIST](state, { mappedCountries }) {
    state.countriesList.push(...mappedCountries);
  },
  [types.UPDATE_TOPICS_LIST](state, { topics }) {
    state.topicsList.push(...topics[1]);
  },
  [types.ADD_SELECTED_COUNTRY](state, country) {
    state.selectedCountries.push(country);
  },
  [types.DELETE_SELECTED_COUNTRY](state, country) {
    state.selectedCountries.splice(state.selectedCountries.indexOf(country), 1);
  },
  [types.INIT_FROM_RANGE](state, { rangeArray }) {
    state.fromYearsList.push(...rangeArray);
  },
  [types.INIT_TO_RANGE](state, { rangeArray }) {
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
    state.selectedIndicator = null;
    state.selectedTopic = { id: topic.id, value: topic.value };
  },
  [types.UPDATE_INDICATORS_LIST](state, indicators) {
    state.indicators.splice(0, state.indicators.length);
    state.indicators.push(...indicators[1]);
  },
  [types.CHANGE_INDICATOR](state, indicator) {
    state.selectedIndicator = { id: indicator.id, name: indicator.name };
  },
  [types.OPEN_SAVE_PATTERN_AREA](state) {
    state.patternSaveAttempt = true;
  },
  [types.CLOSE_SAVE_PATTERN_AREA](state) {
    state.patternSaveAttempt = false;
  },
  [types.SAVE_SEARCH_PATTERN](state, pattern) {
    if (isMatched(state.searchPatterns, 'name', pattern.name)) {
      const matched = state.searchPatterns.find(p => p.name === pattern.name);
      state.searchPatterns.splice(state.selectedCountries.indexOf(matched), 1);
    }
    state.searchPatterns.push(pattern);
  },
  [types.CHANGE_PATTERN](state, pattern) {
    state.selectedPattern = pattern;
    state.selectedCountries = pattern.countries;
    state.selectedIndicator = pattern.indicators;
    state.yearFrom = pattern.yearFrom;
    state.yearTo = pattern.yearTo;
    state.selectedTopic = pattern.topic;
  },
  [types.OPEN_SAVE_CONFIRMATION](state) {
    state.isConfirmDialogOpen = true;
  },
  [types.CLOSE_SAVE_CONFIRMATION](state) {
    state.isConfirmDialogOpen = false;
  },
  [types.SAVE_RECEIVED_DATA](state, data) {
    state.receivedData = data;
  },
};

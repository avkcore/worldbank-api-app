import * as types from './mutation-types';
import {
  fetchJSON,
  injectValueIntoIndicatorQuery,
} from '../utils/utils';

const COUNTRIES_URL = 'https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;flag';
const TOPICS_URL = 'http://localhost:3000/topics/?format=json';

export const loadCountriesList = async ({ commit }) => {
  const countries = await fetchJSON(COUNTRIES_URL);
  commit(types.UPDATE_COUNTRIES_LIST, { countries });
};

export const loadTopicsList = async ({ commit }) => {
  const topics = await fetchJSON(TOPICS_URL);
  commit(types.UPDATE_TOPICS_LIST, { topics });
};

export const loadIndicatorsList = async ({ commit }, topicId) => {
  const indicator = await fetchJSON(injectValueIntoIndicatorQuery(topicId));
  commit(types.UPDATE_INDICATORS_LIST, indicator);
};

export const changeTopic = async ({ commit, dispatch }, topic) => {
  commit(types.CHANGE_TOPIC, topic);
  await dispatch('loadIndicatorsList', topic.id);
};

export const addCountry = ({ commit }, country) =>
  commit(types.ADD_SELECTED_COUNTRY, country);

export const removeCountry = ({ commit }, country) =>
  commit(types.DELETE_SELECTED_COUNTRY, country);

export const initRanges = ({ commit }) => {
  commit(types.INIT_FROM_RANGE);
  commit(types.INIT_TO_RANGE);
};

export const changeYearFrom = ({ commit }, value) =>
  commit(types.CHANGE_YEAR_FROM, value);

export const changeYearTo = ({ commit }, value) =>
  commit(types.CHANGE_YEAR_TO, value);

export const changeIndicator = ({ commit }, indicator) => {
  commit(types.CHANGE_INDICATOR, indicator);
};

export const requestData = async ({ commit }, data) => {
  const codes = data.codes.join(';');
  const range = [];
  if (data.yearFrom) range.push(data.yearFrom);
  if (data.yearTo) range.push(data.yearTo);
  const date = range.join(':');
  const indicators = data.indicators;
  const url = `http://localhost:3000/countries/${codes}/indicators/${indicators}?date=${date}&format=json`;
  const response = await fetchJSON(url);
  console.log(url, response);
};

export const openPatternSaveArea = ({ commit }) =>
  commit(types.OPEN_SAVE_PATTERN_AREA);

export const closePatternSaveArea = ({ commit }) =>
  commit(types.CLOSE_SAVE_PATTERN_AREA);

export const openSaveConfirm = ({ commit }) =>
  commit(types.OPEN_SAVE_CONFIRMATION);

export const closeSaveConfirm = ({ commit }) =>
  commit(types.CLOSE_SAVE_CONFIRMATION);

export const savePattern = ({ dispatch, commit, state }, params) => {
  const pattern = { ...params.coupledData, name: params.patternName };
  // const duplicates = state.searchPatterns.find(p => p.name === pattern.name);
  // if (typeof duplicates !== 'undefined' && Object.keys(duplicates).length > 0) {
  //   dispatch('openSaveConfirm');
  // } else {
  //   commit(types.SAVE_SEARCH_PATTERN, pattern);
  //   dispatch('closePatternSaveArea');
  // }
  commit(types.SAVE_SEARCH_PATTERN, pattern);
  dispatch('closePatternSaveArea');
};

export const changePattern = ({ commit }, pattern) =>
  commit(types.CHANGE_PATTERN, pattern);

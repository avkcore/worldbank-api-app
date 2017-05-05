import * as types from './mutation-types';
import callDataAPI from '../api/service';
import { fetchJSON, injectValueIntoIndicatorQuery, isMatched, generateNumbers } from '../utils/utils';
import { savePatternDialog } from '../utils/dialog';

const COUNTRIES_URL = 'https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;flag';
const TOPICS_URL = 'http://localhost:3000/topics/?format=json';
const MIN_YEAR = 1960;
const MAX_YEAR = 2016;

export const loadCountriesList = async ({ commit }) => {
  const countries = await fetchJSON(COUNTRIES_URL);
  const mappedCountries = countries
      .map(country => ({
        name: country.name,
        code: country.alpha2Code,
      }));
  commit(types.UPDATE_COUNTRIES_LIST, { mappedCountries });
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

export const requestData = async ({ commit, state }, data) => {
  const result = await callDataAPI(data);
  commit(types.SAVE_RECEIVED_DATA, result);
};

export const addCountry = ({ commit }, country) =>
  commit(types.ADD_SELECTED_COUNTRY, country);

export const removeCountry = ({ commit, state }, value) => {
  const country = state.selectedCountries
      .find(c => c.name === value.name);
  commit(types.DELETE_SELECTED_COUNTRY, country);
};

export const initRanges = ({ commit }) => {
  const rangeArray = generateNumbers(MIN_YEAR, MAX_YEAR).reverse();
  commit(types.INIT_FROM_RANGE, { rangeArray });
  commit(types.INIT_TO_RANGE, { rangeArray });
};

export const changeYearFrom = ({ commit }, value) =>
  commit(types.CHANGE_YEAR_FROM, value);

export const changeYearTo = ({ commit }, value) =>
  commit(types.CHANGE_YEAR_TO, value);

export const changeIndicator = ({ commit }, indicator) => {
  commit(types.CHANGE_INDICATOR, indicator);
};

export const openPatternSaveArea = ({ commit }) =>
  commit(types.OPEN_SAVE_PATTERN_AREA);

export const closePatternSaveArea = ({ commit }) =>
  commit(types.CLOSE_SAVE_PATTERN_AREA);

export const openSaveConfirm = ({ commit }, { ctx, patternName }) => {
  commit(types.OPEN_SAVE_CONFIRMATION);
  return savePatternDialog(ctx, patternName);
};

export const closeSaveConfirm = ({ commit }) =>
  commit(types.CLOSE_SAVE_CONFIRMATION);

export const savePattern = ({ dispatch, commit, state }, { ctx, patternName, coupledData }) => {
  const pattern = { ...coupledData, name: patternName };
  if (isMatched(state.searchPatterns, 'name', patternName)) {
    dispatch('openSaveConfirm', { ctx, patternName })
    .then(() => {
      commit(types.SAVE_SEARCH_PATTERN, pattern);
      dispatch('closePatternSaveArea');
    })
    .catch(() => dispatch('closeSaveConfirm'));
  } else {
    commit(types.SAVE_SEARCH_PATTERN, pattern);
    dispatch('closePatternSaveArea');
  }
  ctx.$data.patternName = ''; // TODO: get rid of this somehow
};

export const changePattern = ({ commit }, pattern) => {
  commit(types.CHANGE_PATTERN, pattern);
};


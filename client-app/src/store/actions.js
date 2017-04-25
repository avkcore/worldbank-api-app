import * as types from './mutation-types';
import { fetchJSON, injectValueIntoIndicatorQuery } from '../utils/utils';

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

export const loadIndicatorsList = async ({ commit }, topicId) => {
  const indicator = await fetchJSON(injectValueIntoIndicatorQuery(topicId));
  commit(types.UPDATE_INDICATORS_LIST, indicator);
};

export const changeTopic = async ({ commit, dispatch }, topic) => {
  commit(types.CHANGE_TOPIC, topic);
  await dispatch('loadIndicatorsList', topic.id);
};

export const changeIndicator = ({ commit }, indicator) => {
  commit(types.CHANGE_INDICATOR, indicator);
};


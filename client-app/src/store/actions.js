import * as types from './mutation-types';
import { fetchJSON } from '../utils/utils';

const COUNTRIES_URL = 'https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;flag';

export const loadCountriesList = async ({ commit }) => {
  const countries = await fetchJSON(COUNTRIES_URL);
  commit(types.UPDATE_COUNTRIES_LIST, { countries });
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


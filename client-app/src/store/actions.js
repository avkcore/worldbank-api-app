import * as types from './mutation-types';
import { fetchJSON } from '../utils/utils';

const COUNTRIES_URL = 'https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;flag';

export const loadCountriesList = async ({ commit }) => {
  const countries = await fetchJSON(COUNTRIES_URL);
  commit(types.UPDATE_COUNTRIES_LIST, { countries });
};

export const addCountry = ({ commit }, country) =>
  commit(types.UPDATE_SELECTED_COUNTRIES, country);

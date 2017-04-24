import * as types from './mutation-types';

export default {
  [types.UPDATE_COUNTRIES_LIST](state, { countries }) {
    const mappedCountries = countries
      .map(country => ({
        name: country.name,
        code: country.alpha2Code,
      }));
    mappedCountries.forEach(country =>
      state.countries.push(country),
    );
  },
  [types.UPDATE_SELECTED_COUNTRIES](state, value) {
    // TODO: find out why state is actually mutated, but devtools shows no reactivity
    return { ...state, value };
  },
};


export const selectedCountries = state => state.selectedCountries;
export const countriesList = state => state.countriesList;
export const topicsList = state => state.topicsList;
export const selectedTopic = state => state.selectedTopic;
export const yearFrom = state => state.yearFrom;
export const yearTo = state => state.yearTo;
export const fromYearsList = state => state.fromYearsList;
export const toYearsList = state => state.toYearsList;
export const indicators = state => state.indicators;
export const selectedIndicator = state => state.selectedIndicator;
export const filteredYearsTo = (state) => {
  if (state.yearFrom) {
    return state.toYearsList
      .filter(year => year > state.yearFrom);
  }
  return state.toYearsList;
};
export const filteredYearsFrom = (state) => {
  if (state.yearTo) {
    return state.fromYearsList
      .filter(year => year < state.yearTo);
  }
  return state.fromYearsList;
};

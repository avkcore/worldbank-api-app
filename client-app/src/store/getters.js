export const selectedCountries = state => state.selectedCountries;
export const countriesList = state => state.countriesList;
export const topicsList = state => state.topicsList;
export const selectedTopic = state => state.selectedTopic;
export const yearFrom = state => state.yearFrom;
export const yearTo = state => state.yearTo;
export const fromYearsList = state => state.fromYearsList;
export const toYearsList = state => state.toYearsList;
export const indicators = state => state.indicators;
export const isIndicatorLoaded = state => state.indicators.length > 0;
export const selectedIndicator = state => state.selectedIndicator;
export const patternSaveAttempt = state => state.patternSaveAttempt;
export const searchPatterns = state => state.searchPatterns;
export const selectedPattern = state => state.selectedPattern;
export const isPatternExist = state => state.searchPatterns.length > 0;
export const isConfirmDialogOpen = state => state.isConfirmDialogOpen;
export const isPatternSelected = state =>
  !Object.is(null, state.selectedPattern) && Object.keys(state.selectedPattern).length > 0;
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
export const coupledData = state => ({
  codes: state.selectedCountries.map(country => country.code),
  yearFrom: state.yearFrom,
  yearTo: state.yearTo,
  indicators: state.selectedIndicator ? state.selectedIndicator.id : null,
});

export const isDataCoupled = (state, getters) =>
  Boolean(
    getters.coupledData.codes.length &&
    getters.coupledData.indicators &&
    (getters.coupledData.yearFrom || getters.coupledData.yearTo),
);

export const isRequestAvailable = (state, getters) =>
  getters.isDataCoupled || getters.isPatternSelected;

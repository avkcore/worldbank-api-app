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
export const isDataReceived = state =>
  !Object.is(null, state.receivedData) && Object.keys(state.receivedData).length > 0;
export const receivedData = state => state.receivedData;
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
  countries: state.selectedCountries,
  yearFrom: state.yearFrom,
  yearTo: state.yearTo,
  indicators: state.selectedIndicator ? state.selectedIndicator : null,
  topic: state.selectedTopic,
});

export const isDataCoupled = (state, getters) =>
  Boolean(
    getters.coupledData.countries.length > 0 &&
    !Object.is(null, getters.coupledData.indicators) &&
    Object.keys(getters.coupledData.indicators).length > 0 &&
    (getters.coupledData.yearFrom || getters.coupledData.yearTo),
  );

export const isRequestAvailable = (state, getters) =>
  getters.isDataCoupled || getters.isPatternSelected;

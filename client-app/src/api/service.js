import * as helper from './helpers';

const callDataAPI = async (data) => {
  const codes = helper.getCountryCodes(data.countries);
  const date = helper.joinDates(data);
  const indicators = helper.getIndicators(data);
  const url = `http://localhost:3000/countries/${codes}/indicators/${indicators}?date=${date}&format=json`;
  const response = await helper.fetchJSON(url);
  const responseData = helper.getLast(response);
  const groupedResponseData = helper.groupByCountry(responseData);
  const labels = helper.getYearsList(responseData);
  const title = helper.getTitle(responseData);
  const datasets = helper.createDataset(groupedResponseData);

  return {
    options: {
      title: {
        display: true,
        text: title,
      },
    },
    data: {
      labels,
      datasets,
    },
  };
};

export default callDataAPI;

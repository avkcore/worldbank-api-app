import R from 'ramda';

const getValues = data =>
  R.map(R.prop('value'))(data);

export const joinDates = (values) => {
  const range = [];
  if (values.yearFrom) range.push(values.yearFrom);
  if (values.yearTo) range.push(values.yearTo);
  return R.join(':', range);
};

export const getCountryCodes = countries =>
  R.compose(
    R.join(';'),
    R.map(R.prop('code')),
  )(countries);

export const getIndicators = data =>
  R.path(['indicators', 'id'])(data);

export const getYearsList = data =>
  R.compose(
    R.reverse,
    R.uniq,
    R.map(R.prop('date')),
  )(data);

export const getHead = data =>
  R.head(data);

export const getLast = data =>
  R.last(data);

export const groupByCountry =
  R.groupBy(R.path(['country', 'value']));

export const getTitle = data =>
  R.compose(
    R.path(['indicator', 'value']),
    R.head,
  )(data);

export const createDataset = (collection) => {
  let dataset = [];
  R.keys(collection)
    .forEach(key => collection[key]
      .forEach(() => {
        if (!R.gt(R.length(R.filter(R.propEq('label', key))(dataset)), 0)) {
          const newSet = {
            label: key,
            data: getValues(collection[key]),
          };
          dataset = R.append(newSet, dataset);
        }
      }));

  return dataset;
};


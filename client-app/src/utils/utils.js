export const fetchJSON = url =>
  fetch(url)
    .then(res => res.json());

export const generateNumbers = (start, end) =>
  Array.from(Array((end - start) + 1).keys())
    .map(xs => xs + start);

export const injectValueIntoIndicatorQuery = value => // TODO: get rid of this
  `http://localhost:3000/topics/${value}/indicators?format=json`;

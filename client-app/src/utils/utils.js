export function fetchJSON(url) {
  return fetch(url)
    .then(res => res.json());
}

export function flatMap(array, lambda) {
  return [].concat(...lambda);
}


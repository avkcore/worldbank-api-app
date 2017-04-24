export default {
  fetchJSON(url) {
    return fetch(url)
      .then(res => res.json());
  },
};

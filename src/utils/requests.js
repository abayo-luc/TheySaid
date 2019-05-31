let API_KEY;
if (process.env.NODE_ENV !== "test") {
  // eslint-disable-next-line global-require
  ({ API_KEY } = require("../config/keys.json"));
}

const GITHUB_API = `https://api.github.com/search/users?q=location:lagos+language:java`;
// const { API_KEY } = keys;
export const getUsers = page => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `token ${API_KEY}`
  };

  return fetch(`${GITHUB_API}&per_page=50&page=${page}`, {
    headers: {
      ...headers
    }
  }).then(res => res.json());
};
export const getProfile = () => {};

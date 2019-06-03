let API_KEY;
if (process.env.NODE_ENV !== "test") {
  // eslint-disable-next-line global-require
  ({ API_KEY } = require("../config/keys.json"));
}

const GITHUB_API_BASE = `https://api.github.com/search/users?q=`;
const LOCATION_LANGUAGE = `location:lagos+language:java`;
const headers = {
  "Content-Type": "application/json",
  Authorization: `token ${API_KEY}`
};
export const getUsers = page => {
  return fetch(
    `${GITHUB_API_BASE}${LOCATION_LANGUAGE}&per_page=50&page=${page}`,
    {
      headers: {
        ...headers
      }
    }
  ).then(res => res.json());
};

export const getUser = (username, page = 1) => {
  return fetch(
    `${GITHUB_API_BASE}${username}+${LOCATION_LANGUAGE}&per_page=50&page=${page}`,
    {
      headers: {
        ...headers
      }
    }
  ).then(res => res.json());
};

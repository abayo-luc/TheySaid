import { API_KEY } from "react-native-dotenv";

const GITHUB_API = `https://api.github.com/search/users?q=location:lagos+language:java`;

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

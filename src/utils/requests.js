const GITHUB_API = `https://api.github.com/search/users?q=location:lagos+language:java`;

export const getUsers = page => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: "token 436382dee752139a3cf7fe24eab69d2c88a22f9d"
  };

  return fetch(`${GITHUB_API}&per_page=50&page=${page}`, {
    headers: {
      ...headers
    }
  }).then(res => res.json());
};
export const getProfile = () => {};

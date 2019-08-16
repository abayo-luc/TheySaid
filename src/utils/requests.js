import config from "../../config";

const { BASE_URL } = config;

export const getQuotes = query =>
  fetch(`${BASE_URL}?query=${query}`).then(res => res.json());

export const getSingleQuote = () => null;

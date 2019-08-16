import config from "../../config";

const { API_KEY, BASE_URL, ENGINE_ID } = config;

export const getQuotes = () =>
  fetch(`${BASE_URL}key=${API_KEY}&cx=${ENGINE_ID}&q=failure`).then(res =>
    res.json()
  );
export const getSingleQuote = () => null;

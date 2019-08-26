import { PIN_QUOTES } from "../type";

const INITIAL_STATE = {
  quotes: {},
};
const pinOrUnpin = (quotes, payload) => {
  const { quote, isPined } = payload;
  if (isPined) {
    const currentQuotes = { ...quotes };
    delete currentQuotes[quote.cacheId];
    return currentQuotes;
  }
  return {
    ...quotes,
    [quote.cacheId]: quote,
  };
};
export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case PIN_QUOTES:
      return {
        ...state,
        quotes: pinOrUnpin(state.quotes, payload),
      };
    default:
      return state;
  }
};

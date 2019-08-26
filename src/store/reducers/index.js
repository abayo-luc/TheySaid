import { combineReducers } from "redux";
import quotes from "./quotes";
import pins from "./pins";

export default combineReducers({
  quotes,
  pins,
});

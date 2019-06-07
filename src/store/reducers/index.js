import { combineReducers } from "redux";
import users from "./users";
import profile from "./profile";

export default combineReducers({
  users,
  profile
});

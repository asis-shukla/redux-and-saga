import { combineReducers } from "redux";
import postReducer from "./blogs";
import usersReducer from "./users";

const rootReducer = combineReducers({
  posts: postReducer,
  users: usersReducer,
});

export default rootReducer;

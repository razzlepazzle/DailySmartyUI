import { combineReducers } from 'redux';
import {reducer as form} from "redux-form";

import posts from "./postsReducer";

const rootReducer = combineReducers({
  // state: (state = {}) => state
  form,
  posts
});

export default rootReducer;
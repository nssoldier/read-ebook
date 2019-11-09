import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "redux-starter-kit";

import { reducer as authenticationReducer } from "../modules/authentication/store";
import { reducer as bookReducer } from "../modules/home/store";

const reducer = combineReducers({
  authentication: authenticationReducer,
  book: bookReducer
});

const rootReducer = (state, action) => {
  return reducer(state, action);
};

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware
});

export default store;

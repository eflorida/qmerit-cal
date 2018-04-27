import { combineReducers } from "redux";

import {
  dataFetch,
  dataIsLoading,
  dataHasErrored
} from "../views/home/reducers";

export const rootReducer = combineReducers({
  dataFetch,
  dataIsLoading,
  dataHasErrored
});

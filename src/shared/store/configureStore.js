import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const getMiddleware = () => {
  return process.env.NODE_ENV === "development" &&
    process.env.RAZZLE_REDUX_LOGGER_ENABLED === "true"
    ? applyMiddleware(logger, thunk)
    : applyMiddleware(thunk);
};

export const configureStore = preloadedState => {
  const store = createStore(rootReducer, preloadedState, getMiddleware());

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./rootReducer", () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { reducers } from "./reducers";

export default function configureStore(history, initialState) {
  const middleware = [thunk, routerMiddleware(history)];

  const rootReducer = combineReducers({
    ...reducers,
    router: connectRouter(history),
  });

  /* *
   * Function _createReducer_ combines global reducers (reducers that are used in
   * multiple pages) and reducers that are handling actions happening inside one page container.
   * Since we combineReducers, pageReducers will get page specific key (e.g. SearchPage)
   * which is page specific.
   * Future: this structure could take in asyncReducers, which are changed when you navigate pages.
   */
  const createReducer = () => {
    return (state, action) => {
      return rootReducer(state, action);
    };
  };

  const enhancers = [];
  const windowIfDefined = typeof window === "undefined" ? null : window;
  if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
  }

  return createStore(createReducer(), initialState, compose(applyMiddleware(...middleware), ...enhancers));
}

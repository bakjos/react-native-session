import createSagaMiddleware from "redux-saga";
import { CounterState } from "../types/state";
import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "../reducers";
import { createLogger } from "redux-logger";

export default function configureStore(initialState: CounterState) {
  const composeEnhancers =
    (typeof window !== "undefined" &&
      (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  //const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

  let store;
  if (typeof window !== "undefined" && (<any>window).devToolsExtension) {
    store = createStore(
      rootReducer,
      initialState,
      composeEnhancers(applyMiddleware())
    );
  } else {
    store = createStore(rootReducer, initialState);
  }

  return store;
}

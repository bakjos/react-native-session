import { CounterState } from "../types/state";
import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "../reducers";

export default function configureStore(initialState: CounterState) {
  const store = createStore(rootReducer, initialState);

  return store;
}

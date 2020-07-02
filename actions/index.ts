import {
  INCREMENT_ACTION,
  IncrementAction,
  DECREMENT_ACTION,
  DecrementAction,
} from "../types/state";

export const incrementCounter = (): IncrementAction => {
  return {
    type: INCREMENT_ACTION,
  };
};

export const decrementCounter = (): DecrementAction => {
  return {
    type: DECREMENT_ACTION,
  };
};

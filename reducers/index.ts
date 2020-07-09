import {
  CounterState,
  CounterAction,
  INCREMENT_ACTION,
  DECREMENT_ACTION,
} from "../types/state";

const counterReducer = (
  state: CounterState = {},
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case INCREMENT_ACTION:
      return { ...state, count: (state.count || 0) + 1 };
    case DECREMENT_ACTION:
      return { ...state, count: (state.count || 0) - 1 };
  }
};

export default counterReducer;

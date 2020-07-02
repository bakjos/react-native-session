import React, { useReducer } from "react";
import counterReducer from "../reducers";
import { CounterState, CounterAction } from "../types/state";

export type StateContextValue = {
  state: CounterState;
  dispatch: React.Dispatch<CounterAction>;
};

export const StateContext = React.createContext<StateContextValue>(
  {} as StateContextValue
);

const StateProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, {
    count: 0,
  } as CounterState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;

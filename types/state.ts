export const INCREMENT_ACTION = "INCREMENT_ACTION";
export const DECREMENT_ACTION = "DECREMENT_ACTION";

export type CounterState = {
  count?: number;
};

export type IncrementAction = {
  type: typeof INCREMENT_ACTION;
};

export type DecrementAction = {
  type: typeof DECREMENT_ACTION;
};

export type CounterAction = IncrementAction | DecrementAction;

import { createContext, useReducer } from "react";

// STATE
const intialState = {
  number: 0,
};

// REDUCER
const counterReducer = (state = intialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, number: state.number ++ };
    case "DECREMENT":
      return { ...state, number: state.number --};
    default:
      return state;
  }
};

// CREATE CONTEXT
const CounterContext = createContext();

// CREATE A PROVIDER
const CounterProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(counterReducer, intialState);

  const value = { state, dispatch };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

// EXPORT CONTEXT AND PROVIDER
export { CounterContext, CounterProvider };

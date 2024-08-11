import { useReducer } from "react";

export const Counter = () => {
const initialState = {
    count:0
}

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };

      case "decrement":
        return { count: state.count - 1 };

      case "reset":
        return { count: 0 };
    }
  };
//   const [count, dispatch] = useReducer(reducer, 0);
const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
};

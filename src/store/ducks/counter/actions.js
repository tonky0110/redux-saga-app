import types from "./types";

export const increment = () => ({ type: types.INCREMENT });
export const decrement = () => ({ type: types.DECREMENT });
export const incrementIfOdd = () => ({ type: types.INCREMENT_IF_ODD });
export const incrementAsync = value => ({ type: types.INCREMENT_ASYNC, value });
export const cancelIncrementAsync = () => ({ type: types.CANCEL_INCREMENT_ASYNC });
export const countdownTerminated = () => ({ type: types.COUNTDOWN_TERMINATED });

export default {
  increment,
  decrement,
  incrementIfOdd,
  incrementAsync,
  cancelIncrementAsync,
  countdownTerminated
};

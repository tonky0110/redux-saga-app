import { combineReducers } from "redux";

import {
  INCREMENT,
  DECREMENT,
  INCREMENT_IF_ODD,
  INCREMENT_ASYNC,
  COUNTDOWN_TERMINATED,
  CANCEL_INCREMENT_ASYNC
} from "./types";

const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case INCREMENT_IF_ODD:
      return state % 2 ? state + 1 : state;
    default:
      return state;
  }
};

const countdown = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_ASYNC:
      return action.value;
    case COUNTDOWN_TERMINATED:
    case CANCEL_INCREMENT_ASYNC:
      return 0;
    default:
      return state;
  }
};

export default combineReducers({ counter, countdown });

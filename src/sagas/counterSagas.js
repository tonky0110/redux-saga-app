import {
    put,
    take,
    call,
    race,
    cancelled,
    takeEvery
  } from "redux-saga/effects";
  import { eventChannel, END } from "redux-saga";
  import { counterActions, counterTypes } from "../store/ducks/counter";
  
  /*eslint-disable no-console*/
  export const countdown = secs => {
    return eventChannel(listener => {
      const iv = setInterval(() => {
        secs -= 1;
        console.log("countdown", secs);
        if (secs > 0) listener(secs);
        else {
          listener(END);
          clearInterval(iv);
          console.log("countdown terminated");
        }
      }, 1000);
      return () => {
        clearInterval(iv);
        console.log("countdown cancelled");
      };
    });
  };
  
  export function* incrementAsync(action) {
    const { value } = action;
  
    const chan = yield call(countdown, value);
    try {
      while (true) {
        let seconds = yield take(chan);
        yield put(counterActions.incrementAsync(seconds));
      }
    } finally {
      if (!(yield cancelled())) {
        yield put(counterActions.increment());
        yield put(counterActions.countdownTerminated());
      }
    }
  }
  
  export function* watchIncrementAsync() {
    try {
      while (true) {
        const action = yield take(counterTypes.INCREMENT_ASYNC);
        // starts a 'Race' between an async increment and a user cancel action
        // if user cancel action wins, the incrementAsync will be cancelled automatically
        yield race([
          call(incrementAsync, action),
          take(counterTypes.CANCEL_INCREMENT_ASYNC)
        ]);
      }
    } finally {
      console.log("watchIncrementAsync terminated");
    }
  }
  
  const counterSagas = [watchIncrementAsync()];
  export default counterSagas;
  
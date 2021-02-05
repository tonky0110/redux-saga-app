import { select, takeEvery, take, put } from "redux-saga/effects";

/* saga examples */
/**
 * Pulling future actions
 */
function* watchAndLog() {
  while (true) {
    const action = yield take("*");
    const state = yield select();

    console.log("action", action);
    console.log("state after", state);
  }
}

function* watchFirstThreeTodosCreation() {
  for (let i = 0; i < 3; i++) {
    const action = yield take("TODO_CREATED");
  }
  yield put({ type: "SHOW_CONGRATULATION" });
}
//Generator will be garbage collected and no more observation will take place.

function* loginFlow() {
  while (true) {
    yield take("LOGIN");
    // ... perform the login logic
    yield take("LOGOUT");
    // ... perform the logout logic
  }
}
//Using the pull model, we can write our flow in the same place instead of handling the same action repeatedly.

/**
 * Non blocking calls
 */

export default [watchAndLog()];

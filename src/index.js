import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";

import App from "./components/App";
import configure from "./store/configure";
import rootSaga from "./sagas";

const store = configure();
store.runSaga(rootSaga);

store.subscribe(() => {
  console.log(store.getState());
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

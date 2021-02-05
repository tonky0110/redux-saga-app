import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../../pages/Home";
import CounterPage from "../../pages/CounterPage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={CounterPage} />
        <Route exact path="/counter/" component={CounterPage} />
      </div>
    </BrowserRouter>
  );
};

export default App;

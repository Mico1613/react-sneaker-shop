import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Global from "./utils/stylesReset";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Global />
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

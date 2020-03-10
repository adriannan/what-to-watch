import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./layouts/App";
import * as serviceWorker from "./layouts/serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();

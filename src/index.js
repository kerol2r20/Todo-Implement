import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import Layout from "./Layout";
import store from "./redux/store";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Provider store={store}><HashRouter><Layout /></HashRouter></Provider>, document.getElementById("root"));
registerServiceWorker();

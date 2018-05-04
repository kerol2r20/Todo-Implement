import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Layout from "./Layout";
import store from "./redux/store";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Provider store={store}><Layout /></Provider>, document.getElementById("root"));
registerServiceWorker();

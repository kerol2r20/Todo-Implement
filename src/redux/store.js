import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import todoApp from "./reducer";

const store = createStore(todoApp, composeWithDevTools());

export default store;
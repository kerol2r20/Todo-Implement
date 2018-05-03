import React, { Component } from "react";
import { Provider } from "react-redux";
import "todomvc-app-css/index.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import store from './redux/store'

const Header = () => (
  <header className="header">
    <h1>todos</h1>
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
    />
  </header>
);

class Layout extends Component {
  render() {
    return (
      <Provider store={store}>
        <section className="todoapp">
          <Header />
          <Main />
          <Footer count={20} />
        </section>
      </Provider>
    );
  }
}

export default Layout;

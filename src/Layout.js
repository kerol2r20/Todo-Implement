import React, { Component } from 'react';
import 'todomvc-app-css/index.css';
import Footer from './components/Footer';
import Main from './components/Main'

const Header = () => (
  <header className="header">
    <h1>todos</h1>
    <input className="new-todo" placeholder="What needs to be done?" autoFocus />
  </header>
)

class Layout extends Component {
  render() {
    return (
      <section className="todoapp">
        <Header />
        <Main />
        <Footer count={20} />
      </section>
    );
  }
}

export default Layout;

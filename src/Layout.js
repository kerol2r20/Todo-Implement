import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "todomvc-app-css/index.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";
import store from "./redux/store";
import { addTodo } from "./redux/actions";

class Layout extends Component {
  render() {
    return (
      <section className="todoapp">
        <Header action={this.props.addtodo} />
        <Main todos={this.props.todos} />
        {this.props.todos.length >0 ? <Footer num_todos={this.props.todos.length}/> : null}
      </section>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    todos: state.toJS().todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addtodo: bindActionCreators(addTodo, dispatch),
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

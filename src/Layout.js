import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "todomvc-app-css/index.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";
import store from "./redux/store";
import { addTodo, delTodo,toggleTodo } from "./redux/actions";

class Layout extends Component {
  render() {
    return (
      <section className="todoapp">
        <Header action={this.props.addTodo} />
        <Main todos={this.props.todos} toggleCompleted={this.props.toggleTodo} delTodo={this.props.delTodo} />
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
    addTodo: bindActionCreators(addTodo, dispatch),
    delTodo: bindActionCreators(delTodo, dispatch),
    toggleTodo: bindActionCreators(toggleTodo, dispatch),
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

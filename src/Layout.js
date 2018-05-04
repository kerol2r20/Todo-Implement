import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import "todomvc-app-css/index.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";
import {
  addTodo,
  delTodo,
  toggleTodo,
  clearCompletedTodo,
  toggleAllTodos,
  modifyTodo
} from "./redux/actions";

class Layout extends Component {
  render() {
    let filter = "";
    switch (this.props.location.pathname) {
      case "/active":
        filter = "active";
        break;
      case "/completed":
        filter = "completed";
        break;
      default:
        filter = "all";
    }
    return (
      <section className="todoapp">
        <Header action={this.props.addTodo} />
        {this.props.todos.size > 0 ? (
          <Main
            todos={this.props.todos}
            toggleCompleted={this.props.toggleTodo}
            delTodo={this.props.delTodo}
            toggleAllTodos={this.props.toggleAllTodos}
            modifyTodo={this.props.modifyTodo}
            filter={filter}
          />
        ) : null}
        {this.props.todos.size > 0 ? (
          <Footer
            num_completed_todos={
              this.props.todos.filter(todo => todo.get("completed")).size
            }
            num_uncompleted_todos={
              this.props.todos.filter(todo => !todo.get("completed")).size
            }
            clear_complete_action={this.props.clearCompletedTodo}
            filter={filter}
          />
        ) : null}
      </section>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    todos: state.get("todos")
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: bindActionCreators(addTodo, dispatch),
    delTodo: bindActionCreators(delTodo, dispatch),
    toggleTodo: bindActionCreators(toggleTodo, dispatch),
    clearCompletedTodo: bindActionCreators(clearCompletedTodo, dispatch),
    toggleAllTodos: bindActionCreators(toggleAllTodos, dispatch),
    modifyTodo: bindActionCreators(modifyTodo, dispatch),
    dispatch
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));

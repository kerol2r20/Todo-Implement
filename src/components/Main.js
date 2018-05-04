import React, { Component } from "react";
import classNames from "classnames";
import TodoItem from "./TodoItem";

class Main extends Component {
  render() {
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {this.props.todos.map(todo => (
            <TodoItem
              key={todo.id}
              todoInfo={todo}
              toggleCompleted={this.props.toggleCompleted}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default Main;

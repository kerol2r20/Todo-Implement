import React, { Component } from "react";
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
              key={todo.get('id')}
              todoInfo={todo}
              toggleCompleted={this.props.toggleCompleted}
              delTodo={this.props.delTodo}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default Main;

import React, { Component } from "react";
import TodoItem from "./TodoItem";

class Main extends Component {
  handleToggleKey(event) {}
  render() {
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all" onClick={this.props.toggleAllTodos}>
          Mark all as complete
        </label>
        <ul className="todo-list">
          {this.props.todos
            .filter(todo => {
              switch (this.props.filter) {
                case "all":
                  return true;
                case "active":
                  return todo.get("completed") === false;
                case "completed":
                  return todo.get("completed") === true;
                default:
                  return true;
              }
            })
            .map(todo => (
              <TodoItem
                key={todo.get("id")}
                todoInfo={todo}
                toggleCompleted={this.props.toggleCompleted}
                delTodo={this.props.delTodo}
                modifyTodo={this.props.modifyTodo}
              />
            ))}
        </ul>
      </section>
    );
  }
}

export default Main;

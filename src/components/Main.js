import React, { Component } from "react";
import classNames from "classnames";
import { connect } from "react-redux";

const Todo = props => {
  return (
    <li className={classNames({ completed: props.completed })}>
      <div className="view">
        <input
          type="text"
          className="toggle"
          type="checkbox"
          checked={props.completed}
        />
        <label htmlFor="content">{props.content}</label>
        <button className="destroy" onClick={() => console.log("h2")} />
      </div>
    </li>
  );
};

class Main extends Component {
  render() {
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {this.props.todos.map(todo => <Todo key={todo.id} content={todo.content} completed={todo.completed} />)}
        </ul>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { todos: state.toJS().todos };
}

export default connect(mapStateToProps)(Main);

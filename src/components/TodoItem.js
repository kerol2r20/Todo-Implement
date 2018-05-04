import React, { Component } from "react";
import classNames from "classnames";

class TodoItem extends Component {
  render() {
    return (
      <li className={classNames({ completed: this.props.todoInfo.completed })}>
        <div className="view">
          <input
            type="text"
            className="toggle"
            type="checkbox"
            checked={this.props.todoInfo.completed}
            onClick={(event) => this.props.toggleCompleted(this.props.todoInfo.id)}
          />
          <label htmlFor="content">{this.props.todoInfo.content}</label>
          <button className="destroy" onClick={() => console.log("h2")} />
        </div>
      </li>
    );
  }
}

export default TodoItem;

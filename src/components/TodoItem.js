import React, { Component } from "react";
import classNames from "classnames";

class TodoItem extends Component {
  render() {
    return (
      <li className={classNames({ completed: this.props.completed })}>
        <div className="view">
          <input
            type="text"
            className="toggle"
            type="checkbox"
            checked={this.props.completed}
          />
          <label htmlFor="content">{this.props.content}</label>
          <button className="destroy" onClick={() => console.log("h2")} />
        </div>
      </li>
    );
  }
}

export default TodoItem;

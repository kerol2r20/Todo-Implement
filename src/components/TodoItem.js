import React, { Component } from "react";
import classNames from "classnames";

class TodoItem extends Component {
  render() {
    return (
      <li className={classNames({ completed: this.props.todoInfo.get('completed') })}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.todoInfo.get('completed')}
            onClick={(event) => this.props.toggleCompleted(this.props.todoInfo.get('id'))}
          />
          <label htmlFor="content">{this.props.todoInfo.get('content')}</label>
          <button className="destroy" onClick={() => this.props.delTodo(this.props.todoInfo.get('id'))} />
        </div>
      </li>
    );
  }
}

export default TodoItem;

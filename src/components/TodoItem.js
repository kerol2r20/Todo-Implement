import React, { Component } from "react";
import classNames from "classnames";

// FIXME: 需要多完成 ESC 跳脫功能
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }
  render() {
    return (
      <li
        className={classNames({
          completed: this.props.todoInfo.get("completed"),
          editing: this.state.editing
        })}
      >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.todoInfo.get("completed")}
            onChange={event =>
              this.props.toggleCompleted(this.props.todoInfo.get("id"))
            }
          />
          <label
            htmlFor="content"
            onDoubleClick={() => {
              this.setState({ editing: true });
            }}
          >
            {this.props.todoInfo.get("content")}
          </label>
          <button
            className="destroy"
            onClick={() => this.props.delTodo(this.props.todoInfo.get("id"))}
          />
        </div>
        {this.state.editing ? (
          <input
            ref="editor"
            type="text"
            className="edit"
            onBlur={() => this.setState({ editing: false })}
            onKeyPress={(event) => event.key==='Enter' ? this.setState({ editing: false }): null}
            autoFocus
            value={this.props.todoInfo.get("content")}
            onChange={(event) => this.props.modifyTodo(this.props.todoInfo.get('id'), event.target.value)}
          />
        ) : null}
      </li>
    );
  }
}

export default TodoItem;

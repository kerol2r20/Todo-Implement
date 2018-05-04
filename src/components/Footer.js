import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from 'classnames'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.props.num_uncompleted_todos}</strong> item left
        </span>
        <ul className="filters">
          <li>
            <Link to="" className={classNames({selected: this.props.filter==='all'})}>All</Link>
          </li>
          <li>
            <Link to="active" className={classNames({selected: this.props.filter==='active'})}>Active</Link>
          </li>
          <li>
            <Link to="completed" className={classNames({selected: this.props.filter==='completed'})}>Completed</Link>
          </li>
        </ul>
        {this.props.num_completed_todos ? (
          <button
            className="clear-completed"
            onClick={this.props.clear_complete_action}
          >
            Clear completed
          </button>
        ) : null}
      </footer>
    );
  }
}

export default Footer;

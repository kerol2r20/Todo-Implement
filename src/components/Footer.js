import React, { Component } from 'react';
import { connect } from "react-redux";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="todo-count"><strong>{this.props.num_todos}</strong> item left</span>
        <ul className="filters">
          <li><a href="#">All</a></li>
          <li><a href="#">Active</a></li>
          <li><a href="#">Complete</a></li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    );
  }
}

function mapStateToProps(state) {
  return { num_todos: state.todos.length };
}

export default connect(mapStateToProps)(Footer);

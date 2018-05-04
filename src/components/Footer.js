import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="todo-count"><strong>{this.props.num_todos}</strong> item left</span>
        <ul className="filters">
          <li><a>All</a></li>
          <li><a>Active</a></li>
          <li><a>Complete</a></li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    );
  }
}

export default Footer;

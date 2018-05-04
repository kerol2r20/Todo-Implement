import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    if (event.key === "Enter") {
      this.props.action(event.target.value);
      event.target.value = "";
    }
  }
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onKeyPress={this.handleSubmit}
        />
      </header>
    );
  }
}

export default Header;

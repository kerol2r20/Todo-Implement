import React, { Component } from "react";
import classNames from "classnames";

const Todo = props => {
  return (
    <li className={classNames({completed: props.completed})}>
      <div className="view">
        <input type="text" className="toggle" type="checkbox" checked={props.completed} />
        <label>{props.content}</label>
        <button className="destroy" onClick={() => console.log('h2')} />
      </div>
    </li>
  );
};

class Main extends Component {
  render() {
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label>Mark all as complete</label>
        <ul className="todo-list">
          <Todo content={"Hello world"} />
          <Todo content="GuguG" completed={true} />
        </ul>
      </section>
    );
  }
}

export default Main;

import { fromJS } from "immutable";

const initState = {
  todos: []
};

function todoApp(state = fromJS(initState), action) {
  switch (action.type) {
    case "ADD_TODO":
      return state.updateIn(['todos'], todos => todos.push(action.payload))
    case "DELETE_TODO":
      return state.updateIn(['todos'], todos => todos.filter(todo => todo.id !== action.id))
    default:
      return state;
  }
}

export default todoApp;

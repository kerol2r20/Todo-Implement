import { fromJS, getIn } from "immutable";

const initState = {
  todos: []
};

function todoApp(state = fromJS(initState), action) {
  switch (action.type) {
    case "ADD_TODO":
      return state.updateIn(["todos"], todos =>
        todos.push(fromJS(action.payload))
      );
    case "DELETE_TODO":
      return state.updateIn(["todos"], todos =>
        todos.filter(todo => todo.get("id") !== action.id)
      );
    case "TOGGLE_TODO":
      return state.updateIn(["todos"], todos => {
        const idx = todos.findIndex(todo => todo.get("id") === action.id);
        const current_state = todos.getIn([idx, "completed"]);
        return todos.setIn([idx, "completed"], !current_state);
      });
    default:
      return state;
  }
}

export default todoApp;

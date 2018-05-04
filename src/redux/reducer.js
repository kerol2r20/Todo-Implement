import { fromJS } from "immutable";

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
    case "CLEAR_COMPLETE_TODO":
      return state.updateIn(["todos"], todos =>
        todos.filter(todo => todo.get("completed") === false)
      );
    case "TOGGLE_ALL_TODOS":
      const num_uncomplete = state.get("todos").filter(todo => todo.get('completed')===false).size
      if (num_uncomplete === 0) {
        return state.updateIn(["todos"], todos =>
        todos.map(todo => todo.set("completed", false))
      )}
      else {
        return state.updateIn(["todos"], todos =>
        todos.map(todo => todo.set("completed", true)))
      }
    default:
      return state;
  }
}

export default todoApp;

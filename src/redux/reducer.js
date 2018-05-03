const initState = {
  todos: []
};

function todoApp(state, action) {
  if (typeof(state) === "undefined") {
    state = initState;
  }
  switch (action.type) {
    case "ADD_TODO":
      return Object.assign({}, state, {todos: [...state.todos, action.payload]});
    case "DELETE_TODO":
      const deletedTodo = state.todos.filter(todo => todo.id !== action.id);
      return Object.assign({}, state, {todos: deletedTodo});
    default:
      return state;
  }
}

export default todoApp;

import crypto from "crypto";

export function addTodo(content) {
  const todoInfo = {
    createdTime: new Date(),
    content
  };
  const id = crypto
    .createHash("sha1")
    .update(JSON.stringify(todoInfo), "utf8")
    .digest("hex");
  return {
    type: "ADD_TODO",
    payload: {
      ...todoInfo,
      id,
      completed: false
    }
  };
}

export function delTodo(id) {
  return {
    type: "DELETE_TODO",
    id
  };
}

export function toggleTodo(id) {
  return {
    type: "TOGGLE_TODO",
    id
  };
}

export function clearCompletedTodo(id) {
  return {
    type: "CLEAR_COMPLETE_TODO",
  };
}

export function toggleAllTodos() {
  return {
    type: "TOGGLE_ALL_TODOS"
  }
}

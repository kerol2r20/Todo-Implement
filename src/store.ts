import Vue from "vue";
import Vuex from "vuex";
import { state, todo } from "@/interfaces";

Vue.use(Vuex);

function saveStateToLocalStorage(state: state): void {
  window.localStorage.setItem("state", JSON.stringify(state));
}

function loadStateLocalStorage() {
  const stateString = window.localStorage.getItem("state");
  if (stateString !== null) {
    return JSON.parse(stateString);
  } else {
    return {
      todos: []
    };
  }
}

export default new Vuex.Store<state>({
  state: loadStateLocalStorage(),
  mutations: {
    toggleCompleted(state, payload: { todoIndex: number }) {
      const targetTodo = state.todos[payload.todoIndex];
      targetTodo.completed = !targetTodo.completed;
      saveStateToLocalStorage(state);
    },
    removeTodo(state, payload: { todoIndex: number }) {
      state.todos.splice(payload.todoIndex, 1);
      saveStateToLocalStorage(state);
    },
    createTodo(state, payload: { content: string }) {
      state.todos.push({
        content: payload.content,
        timestamp: new Date(),
        completed: false
      });
      saveStateToLocalStorage(state);
    },
    toggleAllTodo(state) {
      if (state.todos.filter(todo => !todo.completed).length === 0) {
        state.todos = state.todos.map<todo>(todo => {
          todo.completed = false;
          return todo;
        });
      } else {
        state.todos = state.todos.map<todo>(todo => {
          todo.completed = true;
          return todo;
        });
      }
      saveStateToLocalStorage(state);
    },
    removeAllCompletedTodo(state) {
      state.todos = state.todos.filter(todo => todo.completed === false);
      saveStateToLocalStorage(state);
    }
  },
  getters: {
    numActiveTodos(state): number {
      return state.todos.filter(todo => todo.completed !== true).length;
    },
    numCompletedTodos(state): number {
      return state.todos.filter(todo => todo.completed === true).length;
    }
  }
});

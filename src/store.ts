import Vue from "vue";
import Vuex from "vuex";
import { state, todo } from "@/interfaces";

Vue.use(Vuex);

export default new Vuex.Store<state>({
  state: {
    todos: [
      {
        content: "Hello",
        timestamp: new Date("2017-6-6"),
        completed: false
      },
      {
        content: "world",
        timestamp: new Date("2017-7-8"),
        completed: true
      },
      {
        content: "Googbye",
        timestamp: new Date("2017-7-8"),
        completed: true
      }
    ]
  },
  mutations: {
    toggleCompleted(state, payload: { todoIndex: number }) {
      const targetTodo = state.todos[payload.todoIndex];
      targetTodo.completed = !targetTodo.completed;
    },
    removeTodo(state, payload: { todoIndex: number }) {
      state.todos.splice(payload.todoIndex, 1);
    },
    createTodo(state, payload: { content: string }) {
      state.todos.push({
        content: payload.content,
        timestamp: new Date(),
        completed: false
      });
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
    },
    removeAllCompletedTodo(state) {
      state.todos = state.todos.filter(todo => todo.completed === false);
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

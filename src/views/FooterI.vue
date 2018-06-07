<template>
  <footer class="footer" v-if="todos.length!==0">
    <span class="todo-count">
      <strong>{{numActiveTodos}}</strong>
       items left
    </span>
    <ul class="filters">
      <li><a href="#" class="selected">All</a></li>
      <li><a href="#">Active</a></li>
      <li><a href="#">Completed</a></li>
    </ul>
    <button v-if="numCompletedTodos!==0" class="clear-completed" @click="handleRemoveAllCompletedTodo">Clear completed</button>
  </footer>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import { State, Getter } from "vuex-class";
import { todo } from "@/interfaces.ts";
import * as crypto from "crypto";
import Todo from "@/components/Todo.vue";

@Component({
  components: {
    Todo
  }
})
export default class MainSection extends Vue {
  @State(state => state.todos)
  todos?: todo[];

  @Getter("numActiveTodos") numActiveTodos?: number;
  @Getter("numCompletedTodos") numCompletedTodos?: number;

  handleRemoveAllCompletedTodo() {
    this.$store.commit({
      type: "removeAllCompletedTodo"
    })
  }
}
</script>


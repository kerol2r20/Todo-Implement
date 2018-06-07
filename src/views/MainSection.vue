<template>
  <section class="main" v-if="filteredTodos.length!==0">
    <input type="checkbox" class="toggle-all">
    <label for="toggle-all" @click="handleToggleAll">Mark all as complete</label>
    <ul class="todo-list">
        <template v-for="(todo, index) of filteredTodos">
          <Todo 
            :content="todo.content" 
            :key="todoMD5(todo)" 
            :completed="todo.completed" 
            @toggle-completed="handleToggleCompleted(index)" 
            @remove-todo="handleRemoveTodo(index)"
          />
        </template>
    </ul>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import { State } from "vuex-class";
import { todo, todoFilter } from "@/interfaces.ts";
import Todo from "@/components/Todo.vue";
import * as crypto from "crypto";

@Component({
  components: {
    Todo
  },
  computed: {}
})
export default class MainSection extends Vue {
  @Prop({ default: todoFilter.All })
  private filter?: number;

  @State(state => state.todos)
  todos?: todo[];

  private newContent = "";

  get filteredTodos(): todo[] | undefined {
    switch (this.filter) {
      case todoFilter.All:
        return this.todos;
      case todoFilter.OnlyActive:
        return (
          this.todos && this.todos.filter(todo => todo.completed === false)
        );
      case todoFilter.OnlyCompleted:
        return this.todos && this.todos.filter(todo => todo.completed === true);
    }
  }

  todoMD5(todo: todo) {
    const MD5 = crypto.createHash("md5");
    return MD5.update(JSON.stringify(todo)).digest("hex");
  }

  handleToggleCompleted(todoIndex: number) {
    this.$store.commit({
      type: "toggleCompleted",
      todoIndex
    });
  }

  handleRemoveTodo(todoIndex: number) {
    this.$store.commit({
      type: "removeTodo",
      todoIndex
    });
  }

  handleToggleAll() {
    this.$store.commit({
      type: "toggleAllTodo"
    });
  }
}
</script>

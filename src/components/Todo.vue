<template>
  <li :class="{completed: c_completed}">
    <div class="view">
      <input type="checkbox" class="toggle" :checked="c_completed" @change="toggleCompleted">
      <label for="">{{content}}</label>
      <button class="destroy" @click="removeTodo"></button>
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component
export default class Todo extends Vue {
  @Prop() private content?: string;
  @Prop() private completed?: boolean;
  private c_completed?: boolean = this.completed;
  @Emit()
  toggleCompleted() {
    this.c_completed = !this.c_completed;
  }
  @Emit()
  removeTodo() {}
}
</script>

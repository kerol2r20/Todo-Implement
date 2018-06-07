<template>
  <li :class="{completed: c_completed, editing}">
    <div class="view">
      <input type="checkbox" class="toggle" :checked="c_completed" @change="toggleCompleted">
      <label for="" @dblclick="startEdit">{{c_content}}</label>
      <button class="destroy" @click="removeTodo"></button>
    </div>
    <input
      v-show="editing"
      type="text" 
      :class="{edit: editing}" 
      :value="c_content" 
      @blur="endEdit($event.target.value)" 
      @keyup.enter="endEdit($event.target.value)"
      ref="todoEditor"
    >
  </li>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import { setTimeout } from "timers";

@Component
export default class Todo extends Vue {
  @Prop() private content?: string;
  private c_content?: string = this.content;
  @Prop() private completed?: boolean;
  private c_completed?: boolean = this.completed;
  private editing: boolean = false;

  startEdit() {
    this.editing = true;
    setTimeout(() => (this.$refs.todoEditor as HTMLInputElement).focus(), 0);
  }

  @Emit()
  endEdit(newContent: string) {
    this.editing = false;
    this.c_content = newContent;
  }
  @Emit()
  toggleCompleted() {
    this.c_completed = !this.c_completed;
  }
  @Emit()
  removeTodo() {}
  @Emit()
  handleEdit(newContent: string) {
    this.c_content = newContent;
  }
}
</script>

<template>
  <header class="header">
    <h1>todos</h1>
    <input type="text" class="new-todo" placeholder="What needs to be done?" v-model="newContent" @keyup.enter="handleCreateTodo">
  </header>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  private newContent: string = "";
  handleCreateTodo() {
    this.$store.commit({
      type: "createTodo",
      content: this.newContent
    });
    this.newContent = "";
  }
}

</script>


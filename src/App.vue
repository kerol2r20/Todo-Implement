<template>
  <section class="todoapp">
    <Header />
    <MainSection />
    <FooterSection />
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import MainSection from "@/views/MainSection.vue";
import Header from "@/views/Header.vue";
import FooterSection from "@/views/FooterI.vue";

@Component({
  components: {
    Header,
    MainSection,
    FooterSection
  }
})
export default class App extends Vue {
}
</script>

<style lang="scss">
@import './todo.css';
</style>

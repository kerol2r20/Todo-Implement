import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import MainSection from "@/views/MainSection.vue";
import { todoFilter } from "@/interfaces";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: MainSection,
      name: "root",
      props: {
        filter: todoFilter.All
      }
    },
    {
      path: "/active",
      component: MainSection,
      name: "active",
      props: {
        filter: todoFilter.OnlyActive
      }
    },
    {
      path: "/completed",
      component: MainSection,
      name: "completed",
      props: {
        filter: todoFilter.OnlyCompleted
      }
    }
  ]
});

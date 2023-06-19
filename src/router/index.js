import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Home";
import TaskList from "@/pages/TaskList";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/task-list",
    component: TaskList
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;

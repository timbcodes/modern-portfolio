import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import InfoView from "@/views/InfoView.vue";
import ProjectView from "@/views/ProjectView.vue";
import ResumeView from "@/views/ResumeView.vue";
import ContactView from "@/views/ContactView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/info",
    name: "info",
    component: InfoView,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectView,
  },
  {
    path: "/resume",
    name: "resume",
    component: ResumeView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

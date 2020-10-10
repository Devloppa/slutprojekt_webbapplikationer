import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"
import About from "./views/About.vue"
import Blog from "./views/Blog.vue"

Vue.use(Router);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/about",
        name: "about",
        component: About
    },
    {
        path: "/blog",
        name: "blog",
        component: Blog
    },
];

const router = new Router({
    routes,
    mode: "history",
  });

export default router;
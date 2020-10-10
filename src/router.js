import Vue from "vue"
import Router from "vue-router"
import Products from "./views/Products.vue"
import Cart from "./views/Cart.vue"
import Login from "./views/Login.vue"

Vue.use(Router);

const routes = [
    {
        path: "/",
        name: "products",
        component: Products
    },
    {
        path: "/cart",
        name: "cart",
        component: Cart
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
];

const router = new Router({
    routes,
    mode: "history",
  });

export default router;
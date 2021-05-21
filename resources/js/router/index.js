import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import Board from "../views/Board";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import NotFound from "../views/errors/404/NotFound";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/board/:id?",
        name: "Board",
        component: Board
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/register",
        name: "Register",
        component: Register
    },
    {
        path: "/*",
        name: "404",
        component: NotFound
    }
];

export default new VueRouter({
    mode: "history",
    routes
});

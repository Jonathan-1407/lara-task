import Vue from "vue";
import VueRouter from "vue-router";

import Board from "../views/Board";
import Login from "../views/auth/Login";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Board",
        component: Board
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    }
];

export default new VueRouter({
    mode: "history",
    routes
});

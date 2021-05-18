import "./bootstrap";
import Vue from "vue";
import apolloProvider from "./apollo";
import router from "./router";
import store from "./store";

window.Vue = Vue;

const app = new Vue({
    el: "#app",
    apolloProvider,
    router,
    store
});

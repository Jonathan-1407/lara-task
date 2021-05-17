import "./bootstrap";
import Vue from "vue";
import apolloProvider from "./apollo";
import router from "./router";

window.Vue = Vue;

const app = new Vue({
    el: "#app",
    apolloProvider,
    router
});

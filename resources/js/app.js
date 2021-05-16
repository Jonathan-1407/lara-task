import "./bootstrap";
import Vue from "vue";
import apolloProvider from "./apollo";
import Board from "./views/Board";

window.Vue = Vue;

Vue.component("board", Board);

const app = new Vue({
    el: "#app",
    apolloProvider
});

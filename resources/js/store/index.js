import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = {
    state: {
        loggedIn: false
    },
    mutations: {
        SET_LOGGED_IN: function(state, payload) {
            state.loggedIn = Boolean(payload);
        }
    },
    actions: {},
    getters: {
        isLoggedIn: state => state.loggedIn
    }
};

export default new Vuex.Store(store);

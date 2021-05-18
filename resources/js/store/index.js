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
    actions: {
        setLoggedIn: function({ commit }, payload) {
            const isLoggedIn = Boolean(payload);

            localStorage.setItem("isLoggedIn", isLoggedIn);
            commit("SET_LOGGED_IN", isLoggedIn);
        }
    },
    getters: {
        isLoggedIn: state => state.loggedIn
    }
};

export default new Vuex.Store(store);

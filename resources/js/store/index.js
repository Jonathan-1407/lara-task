import Vue from "vue";
import Vuex from "vuex";
import apollo from "../apollo";
import Me from "../graphql/auth/Me.gql";

Vue.use(Vuex);

const store = {
    state: {
        loggedIn: false,
        user: {
            id: null,
            name: null,
            email: null
        }
    },
    mutations: {
        SET_LOGGED_IN: function(state, payload) {
            state.loggedIn = Boolean(payload);
        },
        SET_USER: function(state, payload) {
            state.user = payload;
        }
    },
    actions: {
        setLoggedIn: async function({ commit }, payload) {
            const isLoggedIn = Boolean(payload);

            localStorage.setItem("isLoggedIn", isLoggedIn);
            commit("SET_LOGGED_IN", isLoggedIn);
        },
        fetchCurrentUser: async function({ commit, dispatch }) {
            const result = await apollo.defaultClient.query({
                query: Me,
                fetchPolicy: "no-cache"
            });

            const user = result.data?.me;

            if (user) {
                commit("SET_USER", user);
                dispatch("SET_LOGGED_IN", true);
            } else {
                commit("SET_USER", { id: null, name: null, email: null });
                dispatch("SET_LOGGED_IN", false);
            }
        }
    },
    getters: {
        isLoggedIn: state => state.loggedIn
    }
};

export default new Vuex.Store(store);

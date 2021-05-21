<template>
    <div class="bg-white sm:bg-gray-100 h-full h-sceen flex justify-center">
        <div class="container mt-2 sm:mt-10 flex flex-col items-center">
            <div class="text-3xl text-indigo-700 font-bold mb-10">
                <span>Lara Task</span>
            </div>

            <div class="w-full sm:shadow-xl sm:bg-white sm:py-8 sm:px-12">
                <Errors :errors="errors"></Errors>
                <form @submit.prevent="authenticate">
                    <div class="w-full mb-4">
                        <input
                            type="text"
                            class="
                                rounded-sm px-4 py-2 
                                outline-none focus:online-none 
                                border-gray-300 bg-gray-100 
                                border-solid border-2 w-full text-sm"
                            placeholder="Enter email"
                            v-model="email"
                        />
                    </div>

                    <div class="w-full mb-4">
                        <input
                            type="password"
                            class="
                                rounded-sm px-4 py-2 
                                outline-none focus:online-none 
                                border-gray-300 bg-gray-100 
                                border-solid border-2 w-full text-sm"
                            placeholder="Enter password"
                            v-model="password"
                        />
                    </div>

                    <div class="w-full mb-6">
                        <button
                            type="submit"
                            class="
                                w-full rounded-sm px-4 py-2 
                                text-white
                                text-sam bg-indigo-500 font-bold 
                                outline-none focus:outline-none 
                                hover:bg-opacity-75 disabled:opacity-25"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <div class="bg-gray-400 h-px w-full mb-6"></div>
                <div class="text-center text-sm">
                    <router-link
                        class="text-indigo-600 hover:outline"
                        :to="{ name: 'Register' }"
                    >
                        Sign up for an account
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import Login from "../../graphql/auth/Login.gql";
import { gqlErrors } from "../../other/utils.js";
import Errors from "../../components/Errors";

export default {
    name: "Login",
    components: {
        Errors
    },
    data: () => ({
        email: "",
        password: "",
        errors: []
    }),
    methods: {
        ...mapActions(["setLoggedIn"]),
        ...mapMutations({
            setUser: "SET_USER"
        }),
        authenticate: async function() {
            let self = this;

            self.errors = [];

            try {
                const response = await self.$apollo.mutate({
                    mutation: Login,
                    variables: {
                        email: self.email,
                        password: self.password
                    }
                });

                const user = response.data?.login;

                if (user) {
                    self.setLoggedIn(true);
                    self.setUser(user);
                    self.$router.push({ name: "Board" });
                }
            } catch (err) {
                self.errors = gqlErrors(err);
            }
        }
    }
};
</script>

<style>
.container {
    width: 300px;
    max-width: 300px;
}
@media (min-width: 640px) {
    .container {
        width: 400px;
        max-width: 400px;
    }
}
</style>

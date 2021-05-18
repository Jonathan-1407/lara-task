<template>
    <div class="bg-white sm:bg-gray-100 h-full h-sceen flex justify-center">
        <div class="container mt-2 sm:mt-10 flex flex-col items-center">
            <div class="text-3xl text-blue-700 font-bold mb-10">
                <span>Lara Task</span>
            </div>

            <div class="w-full sm:shadow-xl sm:bg-white sm:py-8 sm:px-12">
                <div class="w-full text-center text-gray-600 font-bold mb-8">
                    Log in
                </div>

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
                                text-sam bg-blue-500 font-bold 
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
                        class="text-blue-600 hover:outline"
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
import Login from "../../graphql/auth/Login.gql";

export default {
    name: "Login",
    data: () => ({
        email: "",
        password: ""
    }),
    methods: {
        authenticate: function() {
            let self = this;

            self.$apollo.mutate({
                mutation: Login,
                variables: {
                    email: self.email,
                    password: self.password
                }
            });
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

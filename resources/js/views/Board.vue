<template>
    <div class="h-screen h-full flex flex-col items-stretch" :class="bgColor">
        <div class="header text-white flex justify-between items-center mb-4">
            <div class="ml-2 w-1/3">
                <UserBoardsDropdown v-if="isLoggedIn"></UserBoardsDropdown>
            </div>
            <div class="text-lg opacity-50 cursor-pointer hover:opacity-75">
                Lara Task
            </div>
            <div class="mr-2 w-1/3 flex justify-end">
                <div v-if="isLoggedIn" class="flex flex-wrap content-start">
                    <div class="text-sm mr-2 m-auto">
                        {{ currentUser.name }}
                    </div>
                    <button class="header-btn" @click="_logout()">
                        Logout
                    </button>
                </div>
                <div v-else class="flex flex-wrap content-start">
                    <router-link class="header-btn" :to="{ name: 'Login' }">
                        Sign In
                    </router-link>
                    <router-link class="header-btn" :to="{ name: 'Register' }">
                        Sign Up
                    </router-link>
                </div>
            </div>
        </div>
        <div
            class="h-full flex flex-1 flex-col items-stretch"
            v-if="$apollo.queries.board.loading"
        >
            <span class="text-white">Loading...</span>
        </div>
        <div class="h-full flex flex-1 flex-col items-stretch" v-else>
            <div class="mx-4 mb-2 text-white font-bold text-lg">
                {{ board.title }}
            </div>
            <div class="flex flex-1 items-start overflow-x-auto mx-2">
                <CardList
                    v-for="list in board.lists"
                    :key="list.id"
                    :list="list"
                    @card-added="updateQueryCache($event)"
                    @card-updated="updateQueryCache($event)"
                    @card-deleted="updateQueryCache($event)"
                ></CardList>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import gql from "graphql-tag";
import CardList from "../components/board/CardList";
import UserBoardsDropdown from "../components/board/UserBoardsDropdown";
import BoardQuery from "../graphql/BoardWithListsAndCards.gql";
import Logout from "../graphql/auth/Logout.gql";
import { colorMap500 } from "../other/utils";
import {
    EVENT_CARD_ADDED,
    EVENT_CARD_UPDATED,
    EVENT_CARD_DELETED
} from "../other/constants";

export default {
    name: "Board",
    components: {
        CardList,
        UserBoardsDropdown
    },
    apollo: {
        board: {
            query: BoardQuery,
            variables: function() {
                return {
                    id: Number(this.$route.params.id)
                };
            }
        }
    },
    computed: {
        bgColor: function() {
            return {
                "bg-gray-500": this.$apollo.loading,
                [colorMap500[this.board?.color]]: true
            };
        },
        ...mapGetters(["isLoggedIn", "currentUser"])
    },
    methods: {
        ...mapActions(["logout"]),
        _logout: async function() {
            let self = this;

            const response = await self.$apollo.mutate({
                mutation: Logout
            });

            if (response.data?.logout?.id) {
                self.logout();
            }
        },
        updateQueryCache: function(event) {
            let self = this;

            const data = event.store.readQuery({
                query: BoardQuery,
                variables: { id: Number(self.board.id) }
            });

            const listById = () =>
                data.board.lists.find(list => list.id == event.list_id);
            switch (event.type) {
                case EVENT_CARD_ADDED:
                    data.board.lists;
                    listById().cards.push(event.data);
                    break;
                case EVENT_CARD_UPDATED:
                    listById().cards.filter(
                        card => card.id == event.data.id
                    ).title = event.data.title;
                    break;
                case EVENT_CARD_DELETED:
                    listById().cards = listById().cards.filter(
                        card => card.id != event.data.id
                    );
                    break;
            }

            event.store.writeQuery({ query: BoardQuery, data });
        }
    }
};
</script>

<style scope>
.header {
    height: 40px;
    background-color: rgba(0, 0, 0, 0.2);
}
</style>

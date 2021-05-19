<template>
    <div v-click-outside="hide">
        <button class="header-btn" @click.prevent="showBoards = !showBoards">
            <span class="fa fa-table"></span>
            Boards
        </button>
        <DropdownMenu :show="showBoards">
            <div class="text-gray-700 text-sm font-semibold mb-2 ml-2">
                BOARDS
            </div>
            <router-link
                class="m-2 rounded-sm opacity-100 hover:opacity-75 text-gray-700 font-bold cursor-pointer flex"
                :to="{ name: 'Board', params: { id: board.id } }"
                v-for="board in userBoards"
                :key="board.id"
                :class="colorMap100[board.color]"
                @click.native="hide"
            >
                <div
                    class=" w-10 rounded-sm rounded-r-none"
                    :class="colorMap200[board.color]"
                ></div>
                <div class="p-2">{{ board.title }}</div>
            </router-link>
        </DropdownMenu>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import ClickOutside from "vue-click-outside";
import DropdownMenu from "./DropdownMenu";
import UserBoards from "../../graphql/user/Boards.gql";
import { colorMap100, colorMap200 } from "../../other/utils";

export default {
    name: "UserBoardsDropdown",
    components: {
        DropdownMenu
    },
    apollo: {
        userBoards: {
            query: UserBoards,
            variables: function() {
                return {
                    user_id: Number(this.currentUser.id)
                };
            },
            skip: function() {
                return !Number(this.currentUser.id);
            }
        }
    },
    data: () => ({
        showBoards: false
    }),
    methods: {
        hide: function() {
            this.showBoards = false;
        }
    },
    computed: {
        ...mapGetters(["currentUser"]),
        colorMap100: () => colorMap100,
        colorMap200: () => colorMap200
    },
    directives: {
        ClickOutside
    }
};
</script>

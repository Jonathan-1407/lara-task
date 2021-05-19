<template>
    <div>
        <button class="header-btn" @click="showBoards = !showBoards">
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
                :class="[`bg-${board.color}-100`]"
            >
                <div
                    class=" w-10 rounded-sm rounded-r-none"
                    :class="[`bg-${board.color}-200`]"
                ></div>
                <div class="p-2">{{ board.title }}</div>
            </router-link>
        </DropdownMenu>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
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
    computed: {
        ...mapGetters(["currentUser"]),
        colorMap100: () => colorMap100,
        colorMap200: () => colorMap200
    }
};
</script>

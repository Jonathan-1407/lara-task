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
            <div
                class="m-2 bg-teal-100 rounded-sm opacity-100 hover:opacity-75 text-gray-700 font-bold cursor-pointer flex"
            >
                <div class="bg-teal-200 w-10 rounded-sm rounded-r-none"></div>
                <div class="p-2">The board name!</div>
            </div>
        </DropdownMenu>
    </div>
</template>

<script>
import DropdownMenu from "./DropdownMenu";
import UserBoards from "../../graphql/user/Boards.gql";
import { mapGetters } from "vuex";

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
        ...mapGetters(["currentUser"])
    }
};
</script>

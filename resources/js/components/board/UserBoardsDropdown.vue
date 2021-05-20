<template>
    <div v-click-outside="hide">
        <button class="header-btn" @click.prevent="showBoards = !showBoards">
            <span class="fa fa-columns"></span>
            Boards
        </button>
        <DropdownMenu :show="showBoards">
            <div class="text-gray-700 text-sm font-semibold mb-2 ml-1">
                BOARDS
            </div>
            <router-link
                class="rounded-sm opacity-100 hover:opacity-75 text-gray-700 font-bold cursor-pointer flex mb-1 ml-1"
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
            <div
                class="rounded-sm hover:text-gray-800 p-2 underline cursor-pointer mt-4"
                @click="
                    showModal = true;
                    showBoards = false;
                "
            >
                Create new board...
            </div>
        </DropdownMenu>
        <Modal
            :width="300"
            :height="250"
            v-if="showModal"
            @closed="showModal = false"
        >
            Hello thats a message inside the modal
        </Modal>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import ClickOutside from "vue-click-outside";
import DropdownMenu from "./DropdownMenu";
import Modal from "./modal/Modal";
import UserBoards from "../../graphql/user/Boards.gql";
import { colorMap100, colorMap200 } from "../../other/utils";

export default {
    name: "UserBoardsDropdown",
    components: {
        DropdownMenu,
        Modal
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
        showBoards: false,
        showModal: false
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

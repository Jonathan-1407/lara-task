<template>
    <div v-click-outside="hide">
        <button class="header-btn" @click.prevent="showBoards = !showBoards">
            <span class="fa fa-th-list"></span>
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
            :width="400"
            :height="250"
            :show="showModal"
            @closed="showModal = false"
        >
            <div class="flex">
                <div
                    class="rounded-sm p-4 text-black w-full mr-2"
                    :class="colors[color]"
                >
                    <input
                        type="text"
                        placeholder="Add board title"
                        class="title rounded-sm text-white outline-none py-1 px-2 font-bold w-full hover:opacity-50 placeholder-gray-100"
                        v-model="title"
                    />
                </div>

                <div>
                    <div
                        class="flex justify-between mb-2"
                        v-for="(row, i) in colorGrid"
                        :key="i"
                    >
                        <BoardColor
                            v-for="(c, i) in row"
                            :key="i"
                            :color="c"
                            :activeColor="color"
                            @changed="color = $event"
                        ></BoardColor>
                    </div>
                </div>
            </div>

            <div class="mt-4">
                <button
                    :disabled="cannotCreate"
                    :class="colors[color]"
                    class="rounded-sm py-2 px-4 text-black hover:opacity-75 cursor-pointer disabled:opacity-25"
                    @click="addBoard()"
                >
                    Create
                </button>
            </div>
        </Modal>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import ClickOutside from "vue-click-outside";
import DropdownMenu from "./DropdownMenu";
import Modal from "./modal/Modal";
import BoardColor from "./modal/BoardColor";
import UserBoards from "../../graphql/user/Boards.gql";
import BoardAdd from "../../graphql/BoardAdd.gql";
import {
    colorGrid,
    colorMap100,
    colorMap200,
    colorMap500
} from "../../other/utils";

export default {
    name: "UserBoardsDropdown",
    components: {
        DropdownMenu,
        Modal,
        BoardColor
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
        showModal: false,
        color: "orange",
        title: ""
    }),
    methods: {
        hide: function() {
            this.showBoards = false;
        },
        addBoard: function() {
            let self = this;
            self.$apollo.mutate({
                mutation: BoardAdd,
                variables: {
                    title: self.title,
                    color: self.color
                },
                update: function(store, { data: { boardAdd } }) {
                    const data = store.readQuery({
                        query: UserBoards,
                        variables: {
                            user_id: Number(self.currentUser.id)
                        }
                    });

                    data.userBoards.push(boardAdd);
                    store.writeQuery({
                        query: UserBoards,
                        data,
                        variables: { user_id: Number(self.currentUser.id) }
                    });
                    self.showModal = false;
                    self.title = "";
                    self.$router.push({
                        name: "Board",
                        params: { id: boardAdd.id }
                    });
                }
            });
        }
    },
    computed: {
        ...mapGetters(["currentUser"]),
        colorMap100: () => colorMap100,
        colorMap200: () => colorMap200,
        colors: () => colorMap500,
        colorGrid: () => colorGrid,
        cannotCreate: function() {
            return this.title == null || this.title.length == 0;
        }
    },
    directives: {
        ClickOutside
    }
};
</script>

<style scoped>
.title {
    background-color: hsla(0, 0%, 100%, 0);
}

.title:hover,
.title:focus {
    background-color: hsla(0, 0%, 100%, 0.2);
}
</style>

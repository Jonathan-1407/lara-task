<template>
    <div>
        <div
            v-if="!editing"
            class="group bg-white shadow-card rounded-sm p-2 cursor-pointer text-sm hover:bg-gray-100 mb-2 flex justify-between"
        >
            <div>
                {{ card.title }}
            </div>
            <div
                class="flex font-bold opacity-0 group-hover:opacity-100 transition-opacity ease-out duration-500"
                v-if="card.owner.id == currentUser.id"
            >
                <div
                    class="text-gray-400 pr-2 hover:text-yellow-700"
                    @click="editing = true"
                >
                    <span class="fa fa-pencil"></span>
                </div>
                <div
                    class="text-gray-400 hover:text-red-700"
                    @click="cardDelete"
                >
                    <span class="fa fa-trash"></span>
                </div>
            </div>
        </div>
        <CardEditor
            v-else
            v-model="title"
            class="mb-2"
            label="Save Card"
            @closed="editing = false"
            @saved="cardUpdate"
        ></CardEditor>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import BoardQuery from "../../graphql/BoardWithListsAndCards.gql";
import CardDelete from "../../graphql/CardDelete.gql";
import CardUpdate from "../../graphql/CardUpdate.gql";
import { EVENT_CARD_DELETED, EVENT_CARD_UPDATED } from "../../other/constants";
import CardEditor from "./CardEditor";

export default {
    name: "Card",
    components: {
        CardEditor
    },
    props: {
        card: Object
    },
    data: () => ({
        editing: false,
        title: ""
    }),
    computed: {
        ...mapGetters(["currentUser"])
    },
    methods: {
        cardDelete: function() {
            let self = this;

            self.$apollo.mutate({
                mutation: CardDelete,
                variables: {
                    id: self.card.id
                },
                update: function(store, { data: { cardDelete } }) {
                    self.$emit("deleted", {
                        store,
                        data: cardDelete,
                        type: EVENT_CARD_DELETED
                    });
                }
            });
            this.close();
        },
        cardUpdate: function() {
            let self = this;

            self.$apollo.mutate({
                mutation: CardUpdate,
                variables: {
                    id: self.card.id,
                    title: self.title
                },
                update: function(store, { data: { cardUpdate } }) {
                    self.$emit("updated", {
                        store,
                        data: cardUpdate,
                        type: EVENT_CARD_UPDATED
                    });
                    self.editing = false;
                }
            });
        },
        close: function() {
            this.$emit("closed");
        }
    },
    mounted: function() {
        let self = this;

        self.title = self.card.title;
    }
};
</script>

<style scope>
.card {
    box-shadow: 0 1px 0 rgba(9, 30, 66, 0.2);
}
</style>

<template>
    <CardEditor
        v-model="title"
        @closed="close"
        @saved="addCard"
        label="Add Card"
    ></CardEditor>
</template>

<script>
import { mapGetters } from "vuex";
import CardAdd from "../../graphql/CardAdd.gql";
import BoardQuery from "../../graphql/BoardWithListsAndCards.gql";
import { EVENT_CARD_ADDED } from "../../other/constants";
import CardEditor from "./CardEditor";

export default {
    name: "CardAddEditor",
    components: {
        CardEditor
    },
    props: {
        list: Object
    },
    data: () => ({
        title: ""
    }),
    computed: {
        ...mapGetters(["currentUser"])
    },
    methods: {
        addCard: function() {
            let self = this;

            self.$apollo.mutate({
                mutation: CardAdd,
                variables: {
                    title: self.title,
                    order: self.list.cards.length + 1,
                    list_id: self.list.id,
                    owner_id: Number(self.currentUser.id)
                },
                update: function(store, { data: { cardAdd } }) {
                    self.$emit("added", {
                        store,
                        data: cardAdd,
                        type: EVENT_CARD_ADDED
                    });
                    self.close();
                }
            });
        },
        close: function() {
            this.$emit("closed");
        }
    }
};
</script>

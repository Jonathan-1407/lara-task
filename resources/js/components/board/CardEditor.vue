<template>
    <div>
        <textarea
            class="rounded-md py-1 px-2 outline-none w-full text-gray-900 text-sm bg-white h-16 resize-none"
            placeholder="Enter a title for this card..."
            v-model="title"
            ref="card"
            @keyup.esc="close"
            @keyup.enter="addCard"
        ></textarea>

        <div class="flex">
            <button
                class="rounded-sm py-1 px-3 bg-indigo-700 text-white cursor-pointer hover:bg-indigo-600 outline-none"
                @click="addCard"
            >
                Add Card
            </button>
            <button
                class="py-1 px-3 ml-1 rounded-md hover:bg-gray-400 cursor-pointer text-gray-500"
                @click="close"
            >
                Cancel
            </button>
        </div>
    </div>
</template>

<script>
import CardAdd from "../../graphql/CardAdd.gql";
import BoardQuery from "../../graphql/BoardWithListsAndCards.gql";

export default {
    name: "CardEditor",
    props: {
        list: Object
    },
    data: () => ({
        title: ""
    }),
    methods: {
        addCard: function() {
            let self = this;

            self.$apollo.mutate({
                mutation: CardAdd,
                variables: {
                    title: self.title,
                    order: self.list.cards.length + 1,
                    list_id: self.list.id,
                    owner_id: 1
                },
                update: function(store, { data: { cardAdd } }) {
                    const data = store.readQuery({
                        query: BoardQuery,
                        variables: { id: Number(self.list.board_id) }
                    });

                    data.board.lists
                        .find(list => list.id == self.list.id)
                        .cards.push(cardAdd);

                    store.writeQuery({ query: BoardQuery, data });
                }
            });
            this.close();
        },
        close: function() {
            this.$emit("closed");
        }
    },
    mounted: function() {
        this.$refs.card.focus();
    }
};
</script>

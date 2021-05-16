<template>
    <div
        class="rounded-sm p-2 text-gray-600 cursor-pointer hover:bg-gray-400 hover:text-gray-800 text-sm"
        @click="$emit('click')"
    >
        Add new card
    </div>
</template>

<script>
import CardAdd from "../../graphql/CardAdd.gql";
import BoardQuery from "../../graphql/BoardWithListsAndCards.gql";

export default {
    name: "CardAddButton",
    methods: {
        addCard: function() {
            this.$apollo.mutate({
                mutation: CardAdd,
                variables: {
                    title: "prueba 3",
                    order: 1,
                    list_id: 1,
                    owner_id: 1
                },
                update: function(store, { data: { cardAdd } }) {
                    const data = store.readQuery({
                        query: BoardQuery,
                        variables: { id: 1 }
                    });

                    data.board.lists
                        .find(list => (list.id = 1))
                        .cards.push(cardAdd);

                    store.writeQuery({ query: BoardQuery, data });
                }
            });
        }
    }
};
</script>

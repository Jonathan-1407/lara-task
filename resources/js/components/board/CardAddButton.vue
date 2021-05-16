<template>
    <div
        class="rounded-sm p-2 text-gray-600 cursor-pointer hover:bg-gray-400 hover:text-gray-800 text-sm"
        @click="addCard"
    >
        Add new card
    </div>
</template>

<script>
import CardAdd from "../../graphql/CardAdd.gql";

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
                }
            });
        }
    }
};
</script>

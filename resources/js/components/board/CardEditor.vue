<template>
    <div>
        <textarea
            class="rounded-md py-1 px-2 outline-none w-full text-gray-900 text-sm bg-white h-16 resize-none"
            placeholder="Enter a title for this card..."
            :value="value"
            ref="card"
            @keyup.esc="close()"
            @keyup.enter="saved()"
            @input="$emit('input', $event.target.value)"
        ></textarea>

        <div class="flex">
            <button
                class="rounded-sm py-1 px-3 bg-indigo-700 text-white cursor-pointer hover:bg-indigo-600 outline-none"
                @click="saved"
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
import { EVENT_CARD_ADDED } from "../../other/constants";

export default {
    name: "CardEditor",
    props: ["value"],
    methods: {
        close: function() {
            this.$emit("closed");
        },
        saved: function() {
            this.$emit("saved");
        }
    },
    mounted: function() {
        this.$refs.card.focus();
    }
};
</script>

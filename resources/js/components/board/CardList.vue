<template>
    <div class="bg-gray-300 rounded-sm p-2 mr-2 list">
        <div class="flex justify-between">
            <div class="text-gray-800 pl-2 pb-2 font-bold">
                {{ list.title }}
            </div>
        </div>
        <Card
            v-for="card in list.cards"
            :key="card.id"
            :card="card"
            @deleted="$emit('card-deleted', { ...$event, list_id: list.id })"
            @updated="$emit('card-updated', { ...$event, list_id: list.id })"
        ></Card>
        <CardAddEditor
            v-if="editing"
            @closed="editing = false"
            :list="list"
            @added="$emit('card-added', { ...$event, list_id: list.id })"
        ></CardAddEditor>
        <CardAddButton v-else @click="editing = true"></CardAddButton>
    </div>
</template>

<script>
import Card from "../../components/board/Card";
import CardAddButton from "../../components/board/CardAddButton";
import CardAddEditor from "../../components/board/CardAddEditor";

export default {
    name: "CardList",
    props: {
        list: Object
    },
    data: () => ({
        editing: false
    }),
    components: {
        Card,
        CardAddButton,
        CardAddEditor
    }
};
</script>
<style>
.list {
    width: 250px;
    min-width: 250px;
}
</style>

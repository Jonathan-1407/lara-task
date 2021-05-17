<template>
    <div class="h-screen h-full flex flex-col items-stretch bg-purple-500">
        <div
            class="text-white flex justify-between items-center mb-2 bg-purple-600"
        >
            <div class="ml-2 w-1/3">x</div>
            <div class="text-lg opacity-50 cursor-pointer hover:opacity-75">
                Lara Task
            </div>
            <div class="mr-2 w-1/3 justify-end"></div>
        </div>
        <div
            class="h-full flex flex-1 flex-col items-stretch"
            v-if="$apollo.queries.board.loading"
        >
            <span class="text-white">Loading...</span>
        </div>
        <div class="h-full flex flex-1 flex-col items-stretch" v-else>
            <div class="mx-4 mb-2 text-white font-bold text-lg">
                {{ board.title }}
            </div>
            <div class="flex flex-1 items-start overflow-x-auto mx-2">
                <CardList
                    v-for="list in board.lists"
                    :key="list.id"
                    :list="list"
                    @card-added="updateQueryCache($event)"
                    @card-updated="updateQueryCache($event)"
                    @card-deleted="updateQueryCache($event)"
                ></CardList>
            </div>
        </div>
    </div>
</template>

<script>
import gql from "graphql-tag";
import CardList from "../components/board/CardList";
import BoardQuery from "../graphql/BoardWithListsAndCards.gql";
import {
    EVENT_CARD_ADDED,
    EVENT_CARD_UPDATED,
    EVENT_CARD_DELETED
} from "../other/constants";

export default {
    name: "Board",
    components: {
        CardList
    },
    apollo: {
        board: {
            query: BoardQuery,
            variables: {
                id: 1
            }
        }
    },
    methods: {
        updateQueryCache: function(event) {
            let self = this;

            const data = event.store.readQuery({
                query: BoardQuery,
                variables: { id: Number(self.board.id) }
            });

            const listById = () =>
                data.board.lists.find(list => list.id == event.list_id);
            switch (event.type) {
                case EVENT_CARD_ADDED:
                    data.board.lists;
                    listById().cards.push(event.data);
                    break;
                case EVENT_CARD_UPDATED:
                    listById().cards.filter(
                        card => card.id == event.data.id
                    ).title = event.data.title;
                    break;
                case EVENT_CARD_DELETED:
                    listById().cards = listById().cards.filter(
                        card => card.id != event.data.id
                    );
                    break;
            }

            event.store.writeQuery({ query: BoardQuery, data });
        }
    }
};
</script>

<style scope>
.header {
    height: 40px;
}
</style>

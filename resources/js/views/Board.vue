<template>
    <div class="h-screen flex flex-col items-stretch bg-purple-500">
        <div
            class="text-white flex justify-between items-center mb-2 bg-purple-600"
        >
            <div class="ml-2 w-1/3">x</div>
            <div class="text-lg opacity-50 cursor-pointer hover:opacity-75">
                Lara Task
            </div>
            <div class="mr-2 w-1/3 justify-end"></div>
        </div>
        <div class="h-full flex flex-1 flex-col items-stretch">
            <div class="mx-4 mb-2 text-white font-bold text-lg">
                Title here
            </div>
            <div class="flex flex-1 items-start overflow-x-auto mx-2">
                <CardList></CardList>
                <CardList></CardList>
                <CardList></CardList>
            </div>
        </div>
    </div>
</template>

<script>
import CardList from "../components/board/CardList";

export default {
    name: "Board",
    components: {
        CardList
    }
};
</script>

<style scope>
.header {
    height: 40px;
}
</style>

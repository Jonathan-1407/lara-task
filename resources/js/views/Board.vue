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
                <div class="bg-gray-300 rounded-sm p-2 mr-2 list">
                    <div class="flex justify-between">
                        <div class="text-gray-800 pl-2 pb-2 font-bold"></div>
                    </div>
                    <div
                        class="bg-white card rounded-sm p-2 cursor-pointer text-sm hover:bg-gray-100 mb-2"
                    >
                        xxx
                    </div>
                    <div
                        class="bg-white card rounded-sm p-2 cursor-pointer text-sm hover:bg-gray-100 mb-2"
                    >
                        xxx
                    </div>
                    <div
                        class="rounded-sm p-2 text-gray-600 cursor-pointer hover:bg-gray-400 hover:text-gray-800 text-sm"
                    >
                        Add new card
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Board"
};
</script>

<style scope>
.header {
    height: 40px;
}
.list {
    width: 250px;
}
.card {
    box-shadow: 0 1px 0 rgba(9, 30, 66, 0.2);
}
</style>

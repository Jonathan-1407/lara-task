<template>
    <div
        class="rounded-sm p-2 text-gray-600 cursor-pointer hover:bg-gray-400 hover:text-gray-800 text-sm"
        @click="$emit('click')"
    >
        Add new card
    </div>
</template>

<script>
export default {
    name: "CardAddButton"
};
</script>

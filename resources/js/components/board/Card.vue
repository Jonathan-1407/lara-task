<template>
    <div
        class="bg-white shadow-card rounded-sm p-2 cursor-pointer text-sm hover:bg-gray-100 mb-2"
    >
        {{ card.title }}
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        card: Object
    }
};
</script>

<style scope>
.card {
    box-shadow: 0 1px 0 rgba(9, 30, 66, 0.2);
}
</style>

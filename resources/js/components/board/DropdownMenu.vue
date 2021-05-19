<template>
    <div
        class="dropdown-menu absolute bg-gray-200 rounded-sm mt-2 text-sm text-gray-600 shadow w-64 overflow-y-auto z-10"
        v-show="show"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "DropdownMenu",
    props: {
        show: Boolean
    }
};
</script>

<style scoped>
.dropdown-menu {
    max-height: 80%;
}
</style>

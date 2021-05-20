<template>
    <div>
        <div
            @click="startEditing"
            v-if="!editing"
            class="list bg-white hover:bg-gray-400 rounded-sm p-2 mr-2 opacity-75 text-black cursor-pointer"
        >
            <span class="fa fa-plus"></span>
            Add another list
        </div>
        <div
            v-else
            class="bg-gray-300 rounded-sm p-2 list"
            v-click-outside="hideEditor"
        >
            <input
                type="text"
                ref="title"
                class="rounded-sm border-blue-500 border-2 px-1 py-2 outline-none w-full text-gray-800 text-sm"
                placeholder="Enter list title..."
                @keyup.esc="hideEditor"
                v-model="title"
            />

            <div class="flex">
                <button
                    class="mt-2 rounded-sm py-1 px-3 bg-blue-700 text-white cursor-pointer hover:bg-blue-500 outline-none"
                >
                    Add
                </button>

                <div
                    class="mt-2 ml-1 px-2 rounded-sm hover:bg-gray-400 cursor-pointer text-gray-500 flex items-center justify-center"
                    @click="hideEditor"
                >
                    <span class="fa fa-times"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
    name: "ListCardEditor",
    data: () => ({
        editing: false,
        title: null
    }),
    methods: {
        hideEditor: function() {
            this.editing = false;
        },
        startEditing: function() {
            this.editing = true;

            // Activate input: focus
            this.$nextTick(() => this.$refs.title.focus());
        }
    },

    directives: {
        ClickOutside
    }
};
</script>

<template>
    <transition name="appear">
        <div
            class="overlay fixed z-30 top-0 bottom-0 left-0 w-full h-full bg-black"
            @click="$emit('closed')"
        >
            <div
                class="w-full h-full bg-transparent flex justify-center items-center"
            >
                <div
                    class="text-white shadow-xl"
                    :style="style"
                    @click.self="$emit('closed')"
                >
                    <slot></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "Modal",
    props: {
        props: {
            width: Number,
            height: Number
        }
    },
    computed: {
        style: function() {
            return {
                width: `${this.width}px`,
                height: `${this.height}px`
            };
        }
    }
};
</script>

<style scoped>
.overlay {
    background-color: rgba(0, 0, 0, 0.7);
}
</style>

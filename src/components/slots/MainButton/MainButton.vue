<template>
<button v-if="!isLink" class="interact-cursor main-button" :class="color === 'black' ? 'black-btn' : 'white-btn'">
    <slot></slot>
</button>
<router-link v-else  :to="pushTo" class="interact-cursor main-button" :class="color === 'black' ? 'black-btn' : 'white-btn'">
    <slot></slot>
</router-link>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: '',
        },
        isLink: {
            type: Boolean,
            default: false,
        },
        pushTo: {
            type: String,
            default: '/',
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'MainButton.scss';
</style>

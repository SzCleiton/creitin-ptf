<template>
<div class="lets-talk-container">
    <div class="talk-info">
        <h1>{{ globalObject.letsTalkTitle }}</h1>
        <p>{{ globalObject.letsTalkDescription }}</p>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        globalObject() {
            return this.$store.getters.getlanguageObject 
        }
    },
}
</script>

<style lang="scss" scoped>
@import 'LetsTalk.scss'
</style>

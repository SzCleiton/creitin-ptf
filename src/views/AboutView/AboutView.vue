<template>
<section class="about-page">
    <animated-title v-if="globalObject.aboutTitle" :firstLine="globalObject.aboutTitle"></animated-title>
    <div class="info-container">
        <p>{{ globalObject.aboutDescription}}</p>
    </div>
</section>
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
@import'AboutView.scss'
</style>

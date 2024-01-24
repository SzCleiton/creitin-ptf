<template>
<section class="about-page">
    <animated-title v-if="globalObject.aboutTitle" :firstLine="globalObject.aboutTitle"></animated-title>
    <div class="info-container">
        <p>{{ globalObject.aboutDescription}}</p>
    </div>
    <div class="btn-container">
        <main-button ref="calButton" data-cal-link="SzCleiton24/15min" color="black">{{ globalObject.letsTalkCallButton }}</main-button>
        <main-button :isLink="true" pushTo="/contact">{{globalObject.letsTalkEmailButton}}</main-button>
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

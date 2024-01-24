<template>
<div class="lets-talk-container">
    <div class="talk-info">
        <h1>{{ globalObject.letsTalkTitle }}</h1>
        <p>{{ globalObject.letsTalkDescription }}</p>
    </div>
    <div class="footer-btns">
        <main-button ref="calButton" data-cal-link="SzCleiton24/15min" type="button" color="black">{{ globalObject.letsTalkCallButton }}</main-button>
        <main-button :isLink="true" pushTo="/contact" color="white">{{ globalObject.letsTalkEmailButton }}</main-button>
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

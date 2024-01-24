<template>
<section class="work-page">
    <animated-title v-if="globalObject.myWorksTitle" :firstLine="globalObject.myWorksTitle"></animated-title>
    <ul class="work-list">
        <work-card v-for="work in allWorks" :key="work.name" :work="work"></work-card>
    </ul>
</section>
</template>

<script>
export default {
    data() {
        return {};
    },
    computed: {
        allWorks() {
            return this.$store.getters.myWorks
        },
        globalObject(){
            return this.$store.getters.getlanguageObject
        }
    },
};
</script>

<style lang="scss" scoped>
@import 'WorkView.scss';
</style>

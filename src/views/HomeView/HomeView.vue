<template>
<section class="home-page">
    <animated-title v-if="globalObject.titleFirstLine" :firstLine="globalObject.titleFirstLine" :secondLine="globalObject.titleSecondLine"></animated-title>
    <p class="sub-title">{{ globalObject.description }}</p>
    <social-media></social-media>
    <div class="selected-work container">
        <h1>{{ globalObject.selectedWork }}</h1>
        <ul class="work-list">
            <work-card v-for="work in selectedWorks" :key="work.name" :work="work" :isShort="false"></work-card>
        </ul>
    </div>
    <main-button :isLink="true" to="/work" color="black" class="see-more-btn">{{ globalObject.selectedWorkButton }}</main-button>
    <div class="things-i-do container">
        <div class="about">
            <h1>{{ globalObject.thingsIDoTitle }}</h1>
            <p>{{ globalObject.thingsIDoDescription }}</p>
        </div>
        <div class="skills container">
            <h1>{{ globalObject.skillsTitle }}</h1>
            <p>
                Java • Python • JavaScript • TypeScript • React • Angular • Svelte • Node • C# • .NET core • Docker • among others
            </p>
        </div>
    </div>
    <lets-talk></lets-talk>
</section>
</template>

<script>
export default {
    data() {
        return {
            btnIsLoading: false,
        };
    },
    computed: {
        selectedWorks() {
            return this.$store.getters.selectedWorks;
        },
        globalObject() {
            return this.$store.getters.getlanguageObject;
        },
        downloadCvTimes() {
            return this.$store.getters.getDownloadTimes;
        },
        latestPosts() {
            return this.$store.getters.getLatestPosts
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'HomeView.scss';
</style>

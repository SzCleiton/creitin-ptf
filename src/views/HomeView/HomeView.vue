<template>
<section class="home-page">
    <animated-title v-if="globalObject.titleFirstLine" :firstLine="globalObject.titleFirstLine" :secondLine="globalObject.titleSecondLine"></animated-title>
    <p class="sub-title">{{ globalObject.description }}</p>
    <social-media></social-media>
    <main-button ref="calButton" data-cal-link="SzCleiton24/15min" class="hire-btn" color="black">{{ globalObject.hireMeButton }}</main-button>
    <div class="things-i-do container">
        <div class="about">
            <h1>{{ globalObject.thingsIDoTitle }}</h1>
            <p>{{ globalObject.thingsIDoDescription }}</p>
        </div>
        <div class="skills container">
            <h1>{{ globalObject.skillsTitle }}</h1>
            <p>
                Java • Python • JavaScript • TypeScript • React • Angular • Svelte • Node • Express • Django • SpringBoot • AWS • Docker • among others
            </p>
            <div class="btn-container">
                <download-button @click="downloadCv()" class="">Download CV</download-button>
            </div>
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
    methods: {
        downloadCv() {
            if (!this.btnIsLoading && this.downloadCvTimes === 0) {
                const downloadCvUrl =
                    'https://drive.google.com/file/d/1ZR-GUXmUs8njHlhT7lddvBTEMEFc8z2_/view?usp=download';
                this.btnIsLoading = true;
                this.$store.commit('increeseDownloadTimes');
                setTimeout(() => {
                    window.open(downloadCvUrl, '_blank');
                    this.btnIsLoading = false;
                }, 3050);
            }
            if (!this.btnIsLoading && this.downloadCvTimes > 0) {
                const viewCvUrl =
                    'https://drive.google.com/file/d/1ZR-GUXmUs8njHlhT7lddvBTEMEFc8z2_/view?usp=sharing';
                this.$store.commit('increeseDownloadTimes');
                window.open(viewCvUrl, '_blank');
            }
        },
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

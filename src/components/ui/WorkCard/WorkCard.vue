<template>
<transition name="card-fade">
    <template v-if="cardIsLoad">
        <li class="work-card">
            <div class="backgroud-img" :style="{ backgroundImage: 'url(' + work.image + ')' } " alt="Project background image"></div>
            <div class="card-top">
                <main-button @click="pushToProject" color="white">Website</main-button>
            </div>
            <div class="card-botton">
                <h1 class="botton-title">{{ work.name }}</h1>
                <p class="botton-description">{{ workDescription }}</p>
                <ul class="technologies-list">
                    <li v-for="technologie in work.technologies" :key="technologie" class="technologies-item">
                        {{ technologie }}
                    </li>
                </ul>
                <h1 class="botton-title">Status: {{ underConstruction }}</h1>
            </div>
        </li>
    </template>

    <template v-else>
        <li class="placeholder-card">
            <img :src="work.image" alt="Project background image (loading)" @load="onImageLoad">
            <div class="activity"></div>
        </li>
    </template>
</transition>
</template>

<script>
export default {
    props: {
        work: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            cardIsLoad: false
        }
    },
    methods: {
        pushToProject() {
            window.open(`${this.work.link}`, '_blank');
        },
        onImageLoad() {
            this.cardIsLoad = true;
        }
    },
    computed: {
        workDescription() {
            if (this.languageSelected === 'en') {
                return this.work.description
            } else {
                return this.work.descriptionPt
            }
        },
        underConstruction() {
            if (this.work.underConstruction && this.languageSelected === 'en') {
                return 'Project Under Construction 🚧';
            } else if (!this.work.underConstruction && this.languageSelected === 'en') {
                return 'Finished Project ✅';
            }
            if (this.work.underConstruction && this.languageSelected === 'br') {
                return 'Projeto em construção 🚧';
            } else if (!this.work.underConstruction && this.languageSelected === 'br') {
                return 'Projeto Finalizado ✅';
            }
        },
        languageSelected() {
            return this.$store.getters.getSelectedLanguage
        }
    },
};
</script>

<style lang="scss" scoped>
@import 'WorkCard.scss';
</style>

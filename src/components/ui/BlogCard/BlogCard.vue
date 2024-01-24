<template>
<template v-if="typeOfCard === 'complete'">
    <li @click="pushToBlogPost" class="interact-cursor blog-card complete">
        <header :style="{ backgroundImage: 'url(' + this.post.coverImage + ')' }"></header>
        <footer>
            <h1>{{ this.post.title }}.</h1>
            <p>{{ this.post.brief }}</p>
        </footer>
    </li>
</template>
<template v-else>
    <li class="blog-card minimalist">
        <header>
            <h1>{{ this.post.title }}</h1>
            <p>{{ this.post.brief }}</p>
        </header>
        <footer>
            <main-button :isLink="false" @click="pushToBlogPost" class="read-btn">{{ this.readMoreBtnText }}</main-button>
            <div class="like-container">
                <i class="fas fa-book-open"></i>
                <span>{{this.minOfReading(4)}}</span>
            </div>
        </footer>
    </li>
</template>
</template>

<script>
export default {
    props: {
        typeOfCard: {
            type: String,
            required: true,
        },
        post: {
            type: Object,
        },
    },
    methods: {
        pushToBlogPost() {
            window.open(`${this.postLink}`, '_blank')
        },
        minOfReading(number) {
            return `${number} ${this.$store.getters.getlanguageObject.readingTime}`
        }
    },
    computed: {
        postLink() {
            return `https://SzCleiton.hashnode.dev/${this.post.slug}`
        },
        readMoreBtnText() {
            return this.$store.getters.getlanguageObject.readMoreButton
        }
    },
};
</script>

<style lang="scss" scoped>
@import 'BlogCard.scss'
</style>

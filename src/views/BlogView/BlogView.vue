<template>
    <section class="blog-page">
        <animated-title firstLine="Blog"></animated-title>
        <ul class="blog-list">
           <blog-card :key="post.title" v-for="post in allPosts" class="interact-cursor" :post="post" typeOfCard="complete">
        </blog-card>
        </ul>
    </section>
    </template>
    
    <script>
    export default {
        data() {
            return {};
        },
        computed: {
            allPosts() {
                return this.$store.getters.getPosts
            },
        },
    };
    </script>
    
    <style lang="scss" scoped>
    @import 'BlogView.scss';
    </style>
    
<template>
<footer class="app-footer">
    <ul v-if="globalObject.navMenu" class="nav-menu-flat">
        <li class="nav-menu-content-item">
            <button class="interact-cursor" @click="pushToRoute('/home')">{{ globalObject.navMenu.homeButton }}</button>
        </li>
        <li class="nav-menu-content-item">
            <button class="interact-cursor" @click="pushToRoute('/about')"> {{ globalObject.navMenu.aboutButton }}</button>
        </li>
        <li class="nav-menu-content-item">
            <button class="interact-cursor" @click="pushToRoute('/work')">{{ globalObject.navMenu.workButton }}</button>
        </li>
        <li class="nav-menu-content-item">
            <a class="interact-cursor" href="https://www.linkedin.com/in/cleiton-souza-858a6a170/" target="_blank">Linkedin</a>
        </li>
        <li class="nav-menu-content-item">
            <a class="interact-cursor" href="https://github.com/SzCleiton" target="_blank">Github</a>
        </li>
    </ul>
    <div class="social-media-container">
        <social-media></social-media>
    </div>
    <p>&copy; {{ currentYear }} Cleiton Souza. Todos os direitos reservados.</p>
</footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<script>
export default {
    methods: {
        pushToRoute(path) {
            if (this.$route.path === path) {
                window.scrollTo(0, 0)
                return
            }
            this.$router.push(path)
        },
    },
    computed: {
        globalObject() {
            return this.$store.getters.getlanguageObject
        }
    },
};
</script>

<style lang="scss" scoped>
@import 'AppFooter.scss';
</style>

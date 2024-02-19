<template>
<div v-if="globalNavMenu" class="nav-menu">
    <button @click="toggleMenu" class="nav-menu-btn interact-cursor">
        <span v-if="!menuIsOpen" class="interact-cursor menu-open">
            <h1 class="interact-cursor">{{ globalNavMenu.titleOpen }}</h1>
            <i class="interact-cursor fas fa-bars"></i>
        </span>
        <span v-else class="interact-cursor menu-close">
            <h1 class="interact-cursor">{{ globalNavMenu.titleClose }}</h1>
            <i class="interact-cursor fas fa-times"></i>
        </span>
    </button>
    <transition name="menu">
        <div v-if="menuIsOpen" class="backgroud-linear-gradient">
            <ul class="nav-menu-content">
                <li @click="toggleMenu" class="nav-menu-content-item">
                    <router-link class="interact-cursor" to="/about">{{globalNavMenu.aboutButton}}</router-link>
                </li>
                <li @click="toggleMenu" class="nav-menu-content-item">
                    <router-link class="interact-cursor" to="/work">{{globalNavMenu.workButton}}</router-link>
                </li>
                <li @click="toggleMenu" class="nav-menu-content-item">
                    <a class="interact-cursor" href="https://www.linkedin.com/in/cleiton-souza-858a6a170/" target="_blank">Linkedin</a>
                </li>
                <li @click="toggleMenu" class="nav-menu-content-item">
                    <a class="interact-cursor" href="https://github.com/SzCleiton" target="_blank">Github</a>
                </li>
            </ul>
        </div>
    </transition>
</div>
</template>

<script>
export default {
    data() {
        return {
            menuIsOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.menuIsOpen = !this.menuIsOpen;
        },
    },
    computed: {
        globalNavMenu() {
            return this.$store.getters.getlanguageObject.navMenu;
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'NavMenu.scss';
</style>

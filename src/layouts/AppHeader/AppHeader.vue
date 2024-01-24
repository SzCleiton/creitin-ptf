<template>
<header>
    <div class="header-content">
        <div class="logo">
            <routerLink class="interact-cursor" to="/">Cleiton Souza.</routerLink>
        </div>
        <status-bar></status-bar>
        <div class="menu-container">
            <language-button></language-button>
            <nav-menu></nav-menu>
        </div>

    </div>
</header>
</template>

<script>
import StatusBar from "@/components/ui/StatusBar/StatusBar.vue";
import NavMenu from "@/components/ui/NavMenu/NavMenu.vue";
import LanguageButton from "@/components/LanguageButton/LanguageButton.vue";

export default {
    components: {
        StatusBar,
        NavMenu,
        LanguageButton,
    },
}
</script>

<style lang="scss" scoped>
@import "AppHeader.scss";
</style>

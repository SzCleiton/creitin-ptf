<template>
    <div>
        <div v-if="isLoaded" :class="loadedScreenClass">
            <div class="cursor-screen">
                <custom-cursor></custom-cursor>
            </div>
            <app-header></app-header>
            <router-view />
            <app-footer></app-footer>
        </div>
        <div v-else class="page-loading"></div>
    </div>
</template>
  
<script>
import AppHeader from '@/layouts/AppHeader/AppHeader.vue';
import AppFooter from '@/layouts/AppFooter/AppFooter.vue';
import CustomCursor from './components/ui/CustomCursor/CustomCursor.vue';

export default {
    async created() {
        this.isTouchScreen = window.matchMedia('(pointer: coarse)').matches;
        this.$store.dispatch('fetchPosts');
        try {
            await Promise.all([
                this.$store.dispatch('setVisitor'),
                this.$store.dispatch('integrateCalApi'),
                this.$store.dispatch('fetchProjects'),
                this.$store.dispatch('fetchLanguage'),
                this.$store.dispatch('printEasterEgg')
            ]);
            this.isLoaded = true;
        } catch (err) {
            alert(err);
        }

    },
    data() {
        return {
            isLoaded: false,
            isTouchScreen: null
        };
    },
    computed: {
        loadedScreenClass() {
            return this.isTouchScreen ? 'loaded-screen-touch' : 'loaded-screen-click';
        }
    },
    components: {
        AppHeader,
        AppFooter,
        CustomCursor
    }
};
</script>
  
<style lang="scss">
@import 'assets/scss/global.scss';

// Base app scss setups
body {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .cursor-screen {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        pointer-events: none;
        z-index: 10000;
    }

    #app {
        width: 100%;
    }

    .loaded-screen-touch {
        cursor: auto;

        button,
        a {
            cursor: pointer;
        }
    }

    .loaded-screen-click {
        cursor: none;

        button,
        a {
            cursor: none;
        }
    }

    // "Hire me" modal
    .cal-embed {
        z-index: 2000;
    }

    // Page loading entering related
    .page-loading {
        background-color: $white-main;
        width: 100vw;
        height: 100vh;
    }
}
</style>
  
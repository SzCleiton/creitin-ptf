<!-- <template>
    <div :data-text="toolKitText" v-if="logoPath" class="language-changer-container">
        <img class="interact-cursor" alt="Language flag" width="30" :src="require(`@/assets/icons/${logoPath}`)"
            @click="changeLanguage" />
    </div>
</template> -->

<script>
export default {
    methods: {
        async changeLanguage() {
            await this.$store.dispatch('changeLanguage');
            window.open(`${this.$route}`, "_self");
        }
    },
    computed: {
        logoPath() {
            const selectedLanguage = this.$store.getters.getSelectedLanguage;
            if (selectedLanguage === 'en') {
                return 'brazil.svg';
            } else {
                return 'united-states-of-america.svg';
            }
        },
        toolKitText() {
            return this.$store.getters.getlanguageObject.toolkitLanguageSelect;
        }
    }
};
</script>

<style lang="scss">
@import 'LanguageButton.scss';
</style>

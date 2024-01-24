<template>
<section class="contact-page">
    <animated-title v-if="globalObject.contactTitle" :firstLine="globalObject.contactTitle"></animated-title>
    <contact-form></contact-form>
</section>
</template>

<script>
import ContactForm from '@/components/ui/ContactForm/ContactForm.vue';

export default {
    components: {
        ContactForm,
    },
    computed: {
        globalObject() {
            return this.$store.getters.getlanguageObject;
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'ContactView.scss';
</style>

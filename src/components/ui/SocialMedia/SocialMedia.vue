<template>
    <ul class="social-media-menu">
        <li v-for="media in socialMedias" :key="media.name">
            <a :href="media.link" target="_blank">
                <i :class="[media.iconIsBrands ? 'fa-brands' : 'fa', media.iconName, 'interact-cursor']"></i>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    computed: {},
    data() {
        return {
            socialMedias: [{
                name: 'Github',
                link: 'https://github.com/SzCleiton',
                iconName: 'fa-github',
                iconIsBrands: true,
            },
            {
                name: 'Linkedin',
                link: 'https://www.linkedin.com/in/cleiton-souza-858a6a170/',
                iconName: 'fa-linkedin',
                iconIsBrands: true,
            },
            {
                name: 'Email',
                link: 'mailto: souzacleiton54@gmail.com',
                iconName: 'fa-envelope',
                iconIsBrands: false,
            },
            {
                name: 'Whatsapp',
                link: 'https://wa.me/5519998212033',
                iconName: 'fa-whatsapp',
                iconIsBrands: true,
            },
            ]
        };
    },
};
</script>

<style lang="scss" scoped>
@import 'SocialMedia.scss'
</style>

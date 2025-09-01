//Functionality imports
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Global Components import
import MainButtonComponent from './components/slots/MainButton/MainButton.vue';
import SocialMediaComponent from './components/ui/SocialMedia/SocialMedia.vue';
import AnimatedTitleComponent from './components/slots/AnimatedTitle/AnimatedTitle.vue';
import LetsTalkComponent from './components/ui/LetsTalk/LetsTalk.vue';
import WorkCardComponent from './components/ui/WorkCard/WorkCard.vue';
//import DownloadButtonComponent from './components/ui/DownloadButton/DownloadButton.vue';
import BlogCardComponent from './components/ui/BlogCard/BlogCard.vue';

// Vue app creation
const app = createApp(App);
app.use(store);
app.use(router);
app.component('main-button', MainButtonComponent);
app.component('social-media', SocialMediaComponent);
app.component('animated-title', AnimatedTitleComponent);
app.component('lets-talk', LetsTalkComponent);
app.component('work-card', WorkCardComponent);
//app.component('download-button', DownloadButtonComponent);
app.component('blog-card', BlogCardComponent);
app.mount('#app');

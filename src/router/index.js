import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView/HomeView.vue';
import AboutView from '../views/AboutView/AboutView.vue';
import WorkView from '../views/WorkView/WorkView.vue';
import BlogView from '../views/BlogView/BlogView.vue'
import store from '../store/index.js';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/pt',
      name: 'HomePt',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView,
    },
    {
      path: '/work',
      name: 'Work',
      component: WorkView,
    },
    {
      path: '/:notFound(.*)',
      redirect: '/',
    },
  ],
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});
router.beforeEach((to, _, next) => {
  window.onbeforeunload = null;
  if (localStorage.getItem('selectedLanguage')) {
    const currentSelectedLanguage = localStorage.getItem('selectedLanguage');
    store.commit('setSelectedLanguage', currentSelectedLanguage);
  }
  if (to.path === '/' && store.state.selectedLanguage === 'br') {
    next('/pt');
  } else if (to.path === '/pt' && store.state.selectedLanguage === 'en') {
    next('/');
  } else {
    next();
  }
});

export default router;

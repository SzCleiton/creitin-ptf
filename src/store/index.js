import { createStore } from 'vuex';
import axios from 'axios';
import figlet from 'figlet';
import standard from 'figlet/importable-fonts/Standard.js';

// Module imports
import calApiModule from './modules/calapi';
import languageModule from './modules/language';

const store = createStore({
  modules: {
    calApiModule: calApiModule,
    languageModule: languageModule,
  },
  // state: {
  //   cvDownloadTimes: 0,
  //   works: [],
  //   posts: [],
  // },
  getters: {
    myWorks(state) {
      return state.works;
    },
    selectedWorks(state) {
      let selectedWorkArry = [];
      state.works.forEach((element) => {
        if (element.id === 2 || element.id === 5 || element.id === 7)
          selectedWorkArry.push(element);
      });
      return selectedWorkArry;
    },
    getDownloadTimes(state) {
      return state.cvDownloadTimes;
    },
    getPosts(state) {
      return state.posts;
    },
    getLatestPosts(state) {
      const latestsPosts = [];
      for (let i = 0; i <= 1; i++) {
        latestsPosts.push(state.posts[i]);
      }
      return latestsPosts;
    }
  },
  mutations: {
    setWorks(state, payload) {
      payload.forEach((element) => {
        state.works.push(element);
      });
    },
    increeseDownloadTimes(state) {
      state.cvDownloadTimes++;
    },
    setPosts(state, payLoad) {
      state.posts = payLoad;
    }
  },
  actions: {
    async fetchPosts({ commit }) {
      const query = `
        {
          user(username: "Szcleiton") {
            publication {
              posts(page: 0) {
                slug
                title
                brief
                coverImage
              }
            }
          }
        }
      `;
      try {
        const response = await fetch('https://api.hashnode.com/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        });
        const data = await response.json();
        const fetchedPosts = data.data.user.publication.posts;
        commit('setPosts', fetchedPosts);
      } catch (err) {
        console.log(err);
      }
    },
    async fetchProjects({ commit }) {
      try {
        const path = './locales/projects.json';
        const response = await axios.get(path);

        if (response.status !== 200) {
          throw new Error('Something went wrong!');
        }
        commit('setWorks', response.data);
      } catch (err) {
        console.log(err);
      }
    },
    setVisitor({ dispatch }) {
      const currentDate = new Date().toString();
      if (!localStorage.getItem('visitorIdentifier')) {
        const newVisitor = Math.floor(Math.random() * 10000);
        localStorage.setItem('visitCount', 1);
        localStorage.setItem('visitorIdentifier', newVisitor);
        const obj = {
          visitorId: newVisitor,
          visitCount: 1,
          lastDateVisiting: currentDate,
        };
        dispatch('postVisitor', obj);
      } else {
        const visitor = localStorage.getItem('visitorIdentifier');
        let timesVisited = parseInt(localStorage.getItem('visitCount'));
        timesVisited++;
        localStorage.setItem('visitCount', timesVisited.toString());
        const obj = {
          visitorId: visitor,
          visitCount: timesVisited,
          lastDateVisiting: currentDate,
        };
        dispatch('postVisitor', obj);
      }
    },
    printEasterEgg() {
      const easterEggMessage = 'Cleiton Souza - 2024';
      figlet.parseFont('standard', standard);
      figlet.text(
        easterEggMessage,
        {
          font: 'standard',
        },
        function (_, esterEgg) {
          console.log(esterEgg);
        }
      );
    },
  },

});

export default store;

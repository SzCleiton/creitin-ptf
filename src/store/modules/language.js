import axios from 'axios';
export default {
    namespace: true,
    state: {
        selectedLanguage: 'en',
        languageObject: {},
    },
    getters: {
        getlanguageObject(state) {
            return state.languageObject;
        },
        getSelectedLanguage(state) {
            return state.selectedLanguage;
        },
    },
    mutations: {
        setlanguageObject(state, payLoad) {
            state.languageObject = payLoad;
        },
        setSelectedLanguage(state, payLoad) {
            state.selectedLanguage = payLoad;
        },
    },
    actions: {
        async fetchLanguage({ commit, state }) {
            try {
                let pathForLanguage = '';
                if (localStorage.getItem('selectedLanguage')) {
                    state.selectedLanguage = localStorage.getItem('selectedLanguage');
                }
                state.selectedLanguage === 'en'
                    ? (pathForLanguage = 'en_us')
                    : (pathForLanguage = 'pt_br');
                const path = `./locales/languages/${pathForLanguage}.json`;
                const response = await axios.get(path);
                commit('setlanguageObject', response.data);
            } catch (err) {
                console.log(err);
            }
        },
        changeLanguage({ dispatch, commit, state }) {
            let changedLanguage = '';
            state.selectedLanguage === 'en'
                ? (changedLanguage = 'br')
                : (changedLanguage = 'en');

            if (localStorage.getItem('selectedLanguage')) {
                localStorage.removeItem('selectedLanguage');
            }
            localStorage.setItem('selectedLanguage', changedLanguage);

            commit('setSelectedLanguage', changedLanguage);
            dispatch('fetchLanguage');
        },
    }
};
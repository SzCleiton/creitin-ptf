import { getCalApi } from '@calcom/embed-react';

export default {
    namespace: true,
    state: {
        calApi: null,
    },
    getters: {
        getCalApi(state) {
            return state.calApi;
        }
    },
    mutations: {

    },
    actions: {
        async integrateCalApi() {
            this.calApi = await getCalApi();
            this.calApi('ui', {
                theme: 'light',
                styles: { branding: { brandColor: '#000000' } },
                hideEventTypeDetails: false,
            });
        },
    }
};
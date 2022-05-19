import companieStore from '@/pages/Companies/store';
import userStore from '@/pages/Users/store';
import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            ...companieStore.state,
            ...userStore.state,
        }
    },
    mutations: {
        ...companieStore.mutations,
        ...userStore.mutations,
    },
});

export default store;
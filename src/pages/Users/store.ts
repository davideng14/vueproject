import { USER_STORE } from './constants';

const store =  {
    state: {
        [USER_STORE.state.users]: []
    },
    mutations: {
        [USER_STORE.mutations.setUser](state: { [x: string]: any; }, payload: any) {
            state[USER_STORE.state.users] = payload;
        }
    }
}

export default store; 
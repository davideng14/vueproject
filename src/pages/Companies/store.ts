import { COMPANY_STORE } from './constants';

const store =  {
    state: {
        [COMPANY_STORE.state.companies]: []
    },
    mutations: {
        [COMPANY_STORE.mutations.setCompanies](state: { [x: string]: any; }, payload: any) {
            state[COMPANY_STORE.state.companies] = payload;
        }
    }
}

export default store; 
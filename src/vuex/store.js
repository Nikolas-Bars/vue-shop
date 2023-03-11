import { createStore } from 'vuex'
import actions from './actions/actions'
import mutations from "@/vuex/mutations/mutations";
import getters from './getters/getters'

let store = createStore({
    state: {
        isMobile: false,
        isDesktop: true,
        products: [],
        cart: []
    },
    mutations,
    actions,
    getters
})

export default store;

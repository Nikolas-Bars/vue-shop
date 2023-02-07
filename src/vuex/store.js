import { createStore } from 'vuex'
import axios from "axios";

let store = createStore({
    state: {
        products: []
    },
    mutations: {
        SET_PRODUCT_TO_STATE: (state, products)=>{
            state.products = products
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios('http://localhost:3000/products', {
                method: 'GET',
            }).then((products) => {
                commit('SET_PRODUCT_TO_STATE', products.data)
                return products
            }).catch((err) => {
                console.error(err, 'GET_PRODUCTS_FROM_API()')
                return err
            })
        }
    },
    getters: {
        PRODUCT(state) {
            return state.products
        }
    }
})

export default store;
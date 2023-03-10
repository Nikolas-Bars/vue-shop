import { createStore } from 'vuex'
import axios from "axios";

let store = createStore({
    state: {
        products: [],
        cart: []
    },
    mutations: {
        SET_PRODUCT_TO_STATE: (state, products)=>{
            state.products = products
        },
        SET_CART: (state, product) => {
            if (state.cart.length) {
                const existingProduct = state.cart.find((el) => el.article === product.article)
                existingProduct ? existingProduct.quantity++ : state.cart.push(product)
            }else {
              state.cart.push(product)
            }

        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1)
        },
        REMOVE_ONE_PRODUCT: (state, article) => {
            let product = state.cart.find((el) => el.article === article)
            if(product.quantity > 1) {
                product.quantity--
            }
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
        },
        ADD_TO_CART({commit}, product) {
            commit('SET_CART', product)
        },
        REMOVE_FROM_CART({commit}, index) {
            commit('REMOVE_FROM_CART', index)
        },
        REMOVE_ONE_PRODUCT({commit}, article) {
            commit('REMOVE_ONE_PRODUCT', article)
        }
    },
    getters: {
        PRODUCT(state) {
            return state.products
        },
        CART(state) {
            return state.cart
        }
    }
})

export default store;

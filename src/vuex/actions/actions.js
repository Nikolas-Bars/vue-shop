import axios from "axios";

export default {
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
    },
    SET_MOBILE({commit}, value) {
        commit('SWITCH_MOBILE', value)
    },
    SET_DESKTOP({commit}, value) {
        commit('SWITCH_DESKTOP', value)
    },
}

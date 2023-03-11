export default {
    IS_MOBILE(state) {
        return state.isMobile
    },
    IS_DESKTOP(state) {
        return state.isDesktop
    },
    PRODUCT(state) {
        return state.products
    },
    CART(state) {
        return state.cart
    },
    MAX_PRICE(state) {
        let arr = state.products.map((el) => el.price)
        return Math.max(...arr)
    }
}

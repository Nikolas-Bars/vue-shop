export default {
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
}

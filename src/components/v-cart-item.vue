<template>
    <div class="v-cart-item">
        <img class="v-cart-item__image"
                :src="require('../assets/images/' + cart_item_data.image)"
                alt=""
        >
        <div class="v-cart-item__info">
            <p>{{ cart_item_data.name }}</p>
            <p>{{ Math.round(cart_item_data.price) }}</p>
            <p>{{ cart_item_data.article }}</p>
        </div>
        <div class="v-cart-item__quantity">
            <p>Количество</p>
            <button @click="deleteOneFromCart">-</button>
            {{ cart_item_data.quantity }}
            <button @click="addOne">+</button>
        </div>
        <button @click="deleteFromCart">Удалить</button>
    </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "v-cart-item",
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    computed: {},
    mounted() {

    },
    methods: {
        ...mapActions(['ADD_TO_CART', 'REMOVE_ONE_PRODUCT']),
        deleteFromCart() {
            this.$emit('deleteFromCart')
        },
        deleteOneFromCart() {
            this.REMOVE_ONE_PRODUCT(this.cart_item_data.article)
        },
        addOne() {
            this.ADD_TO_CART(this.cart_item_data)
        }
    }
}
</script>

<style lang="scss" scoped>
    .v-cart-item {
        display: flex;
        flex-wrap: nowrap;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: $padding * 2;
        margin-bottom: $margin * 2;
        justify-content: space-between;
        align-items: center;
    &__image {
        max-width: 50px;
    }
    }
</style>

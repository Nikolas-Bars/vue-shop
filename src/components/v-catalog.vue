<template>
    <router-link :to="{name: 'cart'}">
        <div class="v-catalog__link_to_cart">В корзине: {{ CART.length }}</div>
    </router-link>
    <div class="v-catalog">
        <h1>Каталог</h1>
        <div class="v-catalog__list">
            <v-item
                    v-for="product in PRODUCT"
                    :key="product.article"
                    :product="product"
                    @addToCart="addToCart"
            />
        </div>
    </div>
</template>

<script>

    import VItem from "./v-item"
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: 'v-catalog',
        components: {
            VItem
        },
        props: {},
        data() {
            return {}
        },
        computed: {
            ...mapGetters([
                'PRODUCT',
                'CART'
            ])
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                'ADD_TO_CART'

            ]),
            addToCart(data) {
                this.ADD_TO_CART(data)
            },
            goToCart() {

            }
        },
        mounted() {
            this.GET_PRODUCTS_FROM_API()
        },
        watch: {}
    }

</script>

<style lang="scss" scoped>
    .v-catalog {
        &__list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }
        &__link_to_cart {
            position: absolute;
            top: 10px;
            right: 10px;
            padding: $padding;
        }
    }
</style>

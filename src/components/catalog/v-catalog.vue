<template>
    <router-link :to="{name: 'cart'}">
        <div class="v-catalog__link_to_cart">В корзине: {{ CART.length }}</div>
    </router-link>
    <div class="v-catalog">
        <v-select
                :selected="selected"
                :options="categories"
                :is-expanded="IS_MOBILE"
                @select="sortByCategories"
                @switchExpanded="switchExpanded"
        />
        <h1>Каталог</h1>
        <div class="v-catalog__list">
            <v-item
                    v-for="product in filteredOptions"
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
    import VSelect from '../v-select'

    export default {
        name: 'v-catalog',
        components: {
            VItem,
            VSelect
        },
        props: {},
        data() {
            return {
                selected: {},
                categories: [
                    {name: 'Мужские', value: 1},
                    {name: 'Все', value: 3},
                    {name: 'Женские', value: 2}
                ],
                sortedProducts: []
            }
        },
        computed: {
            ...mapGetters([
                'PRODUCT',
                'CART',
                'IS_MOBILE',
                'IS_DESKTOP'
            ]),
            filteredOptions() {
                if(this.sortedProducts.length) {
                    return this.sortedProducts
                } else {
                  return this.PRODUCT
                }
            }
        },
        created() {
            this.sortedProducts = this.PRODUCT
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                'ADD_TO_CART',
                'SET_MOBILE'
            ]),
            switchExpanded() {
                this.SET_MOBILE()
            },
            sortByCategories(option) {
                if(option.value === 1) {
                    this.sortedProducts = this.PRODUCT.filter((prod) => prod.category === 'Мужские')
                } else if(option.value === 2) {
                    this.sortedProducts = this.PRODUCT.filter((prod) => prod.category === 'Женские')
                } else {
                    this.sortedProducts = this.PRODUCT
                }
                this.selected = option
            },
            addToCart(data) {
                this.ADD_TO_CART(data)
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
            justify-content: center;
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

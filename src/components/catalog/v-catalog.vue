<template>
    <div class="v-catalog">
        <router-link :to="{name: 'cart'}">
            <div class="v-catalog__link_to_cart">В корзине: {{ CART.length }}</div>
        </router-link>
        <div class="filters">
            <v-select
                    :selected="selected"
                    :options="categories"
                    :is-expanded="IS_MOBILE"
                    @select="sortByCategories"
                    @switchExpanded="switchExpanded"
            />
            <div class="range-slider">
                <input
                        type="range"
                        min="0"
                        :max="MAX_PRICE"
                        step="10"
                        v-model.number="minPrice"
                        @change="setRangeSlider"
                />
                <input
                        type="range"
                        min="0"
                        :max="MAX_PRICE"
                        step="10"
                        v-model="maxPrice"
                        @change="setRangeSlider"
                />
            </div>
            <div class="range-values">
                <p>Min: {{minPrice}}</p>
                <p>Max: {{maxPrice}}</p>
            </div>
        </div>

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
                minPrice: 0,
                maxPrice: 0,
                categories: [
                    {name: 'Все', value: 1},
                    {name: 'Мужские', value: 2},
                    {name: 'Женские', value: 3}
                ],
                sortedProducts: []
            }
        },
        computed: {
            ...mapGetters([
                'PRODUCT',
                'CART',
                'IS_MOBILE',
                'IS_DESKTOP',
                'MAX_PRICE'
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
            this.maxPrice = this.MAX_PRICE
            this.sortedProducts = [...this.PRODUCT]
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                'ADD_TO_CART',
                'SET_MOBILE'
            ]),
            setRangeSlider() {
                if(this.minPrice > this.maxPrice) {
                    let tmp = this.maxPrice
                    this.maxPrice = this.minPrice
                    this.minPrice = tmp
                }
                this.sortByCategories(this.selected)
            },
            switchExpanded() {
                this.SET_MOBILE()
            },
            sortByCategories(category) {
                if(category) {
                    this.selected = category
                }
                this.sortedProducts = [...this.PRODUCT].filter((prod) => {
                    return prod.price <= this.maxPrice && prod.price >= this.minPrice
                })
                if(category && (category.value === 2 || category.value === 3)) {
                    this.sortedProducts = this.sortedProducts.filter((el) => el.category === category.name)
                }
            },
            addToCart(data) {
                this.ADD_TO_CART(data)
            }
        },
        mounted() {
            this.GET_PRODUCTS_FROM_API().then(() => {
                this.sortByCategories()
            })

        },
        watch: {
            MAX_PRICE() {
                this.maxPrice = this.MAX_PRICE
            }
        }
    }

</script>

<style lang="scss" scoped>
    .filters{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .range-slider {
        width: 125px;
        margin: 25px 26px;
        text-align: center;
        position: relative;
    }
    .range-slider svg, .range-slider input[type=range] {
        position: absolute;
        left: 0;
        bottom: 0;
    }
    input[type=range]::-webkit-slider-thumb {
        z-index: 2;
        position: relative;
        top: 2px;
        margin-top: -8px;
    }
    input[type=range]{
        -webkit-appearance: none;
    }

    input[type=range]::-webkit-slider-runnable-track {
        width: 300px;
        height: 5px;
        background: #ddd;
        border: none;
        border-radius: 3px;
    }

    input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        border: 1.5px solid #C1C1C1;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: #EDEDED;
    }

    input[type=range]:focus {
        outline: none;
    }

    input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: 5px;
        box-shadow: 1px 1px 1px #C6C6C6, 0px 0px 1px #787878;
        border-radius: 2px;
        border: 0.2px solid #787878;
    }
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

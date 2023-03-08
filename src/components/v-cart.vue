<template>
    <router-link :to="{name: 'catalog'}">
        <div class="v-cart__link_to_catalog">Назад в каталог.</div>
    </router-link>
    <div class="v-cart">
        <h1>Корзина</h1>
        <v-cart-item
                v-for="(item, index) in CART"
                :cart_item_data="item"
                :key="item.article"
                @deleteFromCart="deleteFromCart(index)"
        />
        <div v-if="!CART.length">
            Корзина пуста
        </div>
    </div>
</template>


<script>
    import {mapActions, mapGetters} from 'vuex'
    import VCartItem from "@/components/v-cart-item";
    export default {
        name: "v-cart.vue",
        components: {
            VCartItem
        },
        props: {
            cart_data: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        data() {
            return {

            }
        },
        computed:{
            ...mapGetters(['CART']),

        },
        methods: {
            ...mapActions([
                'REMOVE_FROM_CART'
            ]),
            deleteFromCart(index) {
                this.REMOVE_FROM_CART(index)
            }
        },
        watch: {},
        mounted() {
            console.log(this.CART, 'this.CART')
        }
    }
</script>

<style lang="scss" scoped>
    .v-cart{
        /*border: 1px solid red;*/
    &__link_to_catalog {
         position: absolute;
         top: 10px;
         right: 10px;
         padding: $padding;
     }
    }
</style>

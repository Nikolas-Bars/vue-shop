<template>
    <router-link :to="{name: 'catalog'}">
        <div class="v-cart__link_to_catalog">Назад в каталог</div>
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
    <div v-if="CART.length" class="v-cart__total">
        <p class="total__name">Общая стоимость:</p>
        <p>{{totalPrice}}</p>
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
            totalPrice(){
                let total = 0
                for(let i = 0; i < this.CART.length; i++) {
                    let price = Math.round(this.CART[i].price) * this.CART[i].quantity
                    total += price
                }
                return total
            }
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
        mounted() {}
    }
</script>

<style lang="scss" scoped>
    .v-cart{
    &__link_to_catalog {
         position: absolute;
         top: 10px;
         right: 10px;
         padding: $padding;
     }
    &__total{
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        padding: $padding*3;
        display: flex;
        justify-content: center;
        background: #00aa16;
        color: #fff;
        .total__name{
            margin-right: $margin*2;
        }
    }
    }
</style>

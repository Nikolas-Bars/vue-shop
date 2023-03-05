<template>
    <div class="v-cart">
        <h1>Корзина</h1>
        <v-cart-item
                v-for="(item, index) in cart_data"
                :cart_item_data="item"
                :key="item.article"
                @deleteFromCart="deleteFromCart(index)"
        />
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
            console.log(this.CART)
        }
    }
</script>

<style scoped>

</style>
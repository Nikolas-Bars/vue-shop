<template>
    <div class="v-cart">
        <h1>Корзина</h1>
        <v-cart-item
                v-for="item in cart_data"
                :cart_item_data="item"
                :key="item.article"
        />
    </div>
</template>


<script>
import { mapGetters } from 'vuex'
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
        methods: {},
        watch: {},
        mounted() {
            console.log(this.CART)
        }
    }
</script>

<style scoped>

</style>
<template>
    <div class="main_wrapper">
        <v-catalog />
        <v-cart
                v-if="CART.length"
                :cart_data="CART"
        />
    </div>
</template>

<script>
    import VCatalog from "@/components/v-catalog";
    import vCart from './v-cart';
    import { mapGetters } from 'vuex';
    export default {
        name: "main-wrapper",
        components: {
            VCatalog,
            vCart
        },
        props: {},
        data() {
            return {
                title: 'main-wrapper'
            }
        },
        computed: {
            ...mapGetters(['CART'])
        },
        methods: {},
        watch: {},
        mounted() {
            console.log('бу')
        }
    }
</script>

<style scoped>
    .main_wrapper {
        max-width: 900px;
        margin: 0 auto;
    }
</style>
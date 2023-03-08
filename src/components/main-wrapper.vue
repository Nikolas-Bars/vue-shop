<template>
    <div class="main_wrapper">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>

    </div>
</template>

<script>
    // import VCatalog from "@/components/v-catalog";
    // import vCart from './v-cart';
    import { mapGetters } from 'vuex';
    export default {
        name: "main-wrapper",
        components: {
            // VCatalog,
            // vCart
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

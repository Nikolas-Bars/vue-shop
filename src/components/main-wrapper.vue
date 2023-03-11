<template>
    <div class="main_wrapper">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "main-wrapper",
        components: {},
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
        mounted() {}
    }
</script>

<style scoped>
    .main_wrapper {
        max-width: 900px;
        margin: 0 auto;
    }
</style>

<template>
    <div class="main_wrapper">
        <v-catalog />
    </div>
</template>

<script>
    import VCatalog from "@/components/v-catalog";
    export default {
        name: "main-wrapper",
        components: {
            VCatalog
        },
        props: {},
        data() {
            return {
                title: 'main-wrapper'
            }
        },
        computed: {},
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
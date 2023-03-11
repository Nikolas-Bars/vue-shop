<template>
    <div>
        <main-wrapper/>
    </div>
</template>

<script>

    import MainWrapper from './components/main-wrapper'
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: 'App',
        components: {
            MainWrapper
        },
        computed: {
            ...mapGetters([
                'IS_MOBILE',
                'IS_DESKTOP'
            ])
        },
        methods: {
            ...mapActions([
                'SET_DESKTOP',
                'SET_MOBILE'
            ])
        },
        mounted() {
            let vm = this
            window.addEventListener('resize', function () {
                if (window.innerWidth > 767) {
                    vm.SET_DESKTOP(true)
                } else {
                    vm.SET_MOBILE(true)
                }
            })
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

<template>
    <div class="v-select">
        <p class="title" @click="showOptions">{{selected.name ? selected.name : 'Все'}}</p>
        <div
                v-if="areOptionsVisible"
                class="options">
            <p
                    v-for="option in options"
                    :key="option.value"
                    @click="selectOption(option)"
                >
                {{option.name}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-select",
        props: {
            options: {
                type: Array,
                default() {
                    return []
                }
            },
            selected: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {
                areOptionsVisible: false,
                currentOption: 'выберите option'
            }
        },
        methods: {
            showOptions() {
                this.areOptionsVisible = true
            },
            hideOptions() {
                this.areOptionsVisible = false
            },
            selectOption(option) {
                this.$emit('select', option)
                this.areOptionsVisible = false
            }
        },
        mounted() {
            document.addEventListener('click', this.hideOptions.bind(this), true)
        }
    }
</script>

<style scoped>
    .v-select {
        position: relative;
        width: 200px;
        cursor: pointer;
    }
    .v-select p {
        margin: 0;
    }
    .title {
        border: 1px solid #aaaaaa;
    }
    .options {
        border: 1px solid #aaaaaa;
        position: absolute;
        top: 22px;
        right: 0;
        width: 100%
    }
    .options p:hover {
        background-color: #aaaaaa;
    }
</style>

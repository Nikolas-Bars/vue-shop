<template>
    <div class="v-select">
        <p class="title" @click="showOptions">{{selected.name ? selected.name : 'Все'}}</p>
        <div
                v-if="areOptionsVisible || isExpanded"
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
            isExpanded: {
              type: Boolean,
              default() {
                  return false
              }
            },
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
                this.areOptionsVisible = !this.areOptionsVisible
            },
            hideOptions() {
                this.areOptionsVisible = false
                this.$emit('switchExpanded', false)
            },
            selectOption(option) {
                this.$emit('select', option)
                this.areOptionsVisible = false
            }
        },
        mounted() {
            // закроем при клике за пределами селекта
            document.addEventListener('click', this.hideOptions.bind(this), true)
        },
        beforeUnmount() {
            document.removeEventListener('click', this.hideOptions)
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
        width: 100%;
    }
    .options {
        border: 1px solid #aaaaaa;
        border-top: none;
        position: absolute;
        top: 20px;
        right: 0;
        left: 0;
        width: 100%
    }
    .options p:hover {
        background-color: #aaaaaa;
    }
</style>

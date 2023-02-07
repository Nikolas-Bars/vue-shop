<template>
    <div class="catalog_item">
        <img
                class="catalog_item_image"
                :src="require('../assets/images/' + product.image)"
                alt="img"
        />
        <p class="catalog_item_name">{{product.name}}</p>
        <p class="catalog_item_price">Цена: {{Math.round(product.price) }}</p>
        <button
                class="catalog_item_add_to_cart_btn"
                @click="sendDataToParent">
            Купить
        </button>
    </div>
</template>

<script>
    export default {
        name: "v-item",
        components: {},
        props: {
            product: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {}
        },
        computed: {},
        methods: {
            sendDataToParent() {
                this.$emit('sendArticle', this.product.article)
            }
        },
        watch: {}
    }
</script>

<style lang="scss" scoped>
    .catalog_item {
        flex-basis: 25%;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: $padding * 2;
        margin-bottom: $margin * 2;
        &_image {
            width: 100px;
        }
    }
</style>
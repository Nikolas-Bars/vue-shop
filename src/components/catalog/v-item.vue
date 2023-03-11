<template>
    <div class="catalog_item">

        <v-popup
            v-if="isInfoPopupVisible"
            @closePopup="closePopupInfo"
            @callback="addToCart"
            rightBtnTitle="Купить"
            :popupTitle="product.name"
        >
            <img
                    class="catalog_item_image"
                    :src="require('../../assets/images/' + product.image)"
                    alt="img"
            />
            <p class="catalog_item_name">{{product.name}}</p>
            <p class="catalog_item_price">Цена: {{Math.round(product.price) }}</p>
            <p class="catalog_item_price">{{product.category}}</p>
        </v-popup>

        <img
                class="catalog_item_image"
                :src="require('../../assets/images/' + product.image)"
                alt="img"
        />
        <p class="catalog_item_name">{{product.name}}</p>
        <p class="catalog_item_price">Цена: {{Math.round(product.price) }}</p>
        <button
                class="catalog_item_add_to_cart_btn"
                @click="showPopupInfo"
        >
            Подробнее
        </button>
        <button
                class="catalog_item_add_to_cart_btn"
                @click="addToCart">
            Купить
        </button>
    </div>
</template>

<script>
import vPopup from '../popup/v-popup'
    export default {
        name: "v-item",
        components: {
            vPopup
        },
        props: {
            product: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {
                isInfoPopupVisible: false,
            }
        },
        computed: {},
        methods: {
            showPopupInfo() {
                this.isInfoPopupVisible = true
            },
            closePopupInfo() {
                this.isInfoPopupVisible = false
            },
            addToCart() {
                this.$emit('addToCart', this.product)
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
        margin-right: 10px;
        &_image {
            width: 100px;
        }
    }
</style>

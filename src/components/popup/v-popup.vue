<template>
    <div class="popup__wrapper" ref="popup_wrapper">
        <div class="v-popup">
            <div class="v-popup__header">
                <span>{{popupTitle}}</span>

                <span style="cursor: pointer">
                <i @click="closePopup" class="material-icons">close</i>
            </span>

            </div>
            <div class="v-popup__content">
                <slot>

                </slot>
            </div>
            <div class="v-popup__footer">
                <button @click="callback">{{rightBtnTitle}}</button>
                <button @click="closePopup">Отмена</button>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "v-popup",
        props: {
            rightBtnTitle: {
                type: String,
                default() {
                    return 'Ok'
                }
            },
            popupTitle: {
                type: String,
                default() {
                    return 'Title'
                }
            }
        },
        mounted() {
            let vm = this;
            document.addEventListener('click', function (item) {
                if(item.target === vm.$refs['popup_wrapper']) {
                    vm.closePopup()
                }
            })
        },
        methods: {
            closePopup() {
                this.$emit('closePopup')
            },
            callback() {
                this.$emit('callback')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .popup__wrapper{
        display: flex;
        background: rgba(64,64,64, .4);
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
    }
    .v-popup{
        padding: 16px;
        position: fixed;
        top: 30%;
        width: 400px;
        background: #fff;
        box-shadow: 0 0 17px 0 #e7e7e7;
        vertical-align: center;
        &__header{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__content{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &__footer{
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
    }
</style>

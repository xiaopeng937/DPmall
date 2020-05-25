<template>
    <div class="tab-bar-item" @click="itemclick">
        <div v-if="isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon_active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
    export default {
        name: 'TabBaritem',
        props: {
            path: String,
            activeColor: {
                type: String,
                default: '#d81e06'
            }
        },
        data() {
            return {
                // isActive: true
            }
        },
        methods: {
            itemclick() {
                this.$router.replace(this.path) !== -1
            }
        },
        computed: {
            isActive() {
                return this.$route.path.indexOf(this.path)
            },
            activeStyle() {
                return this.isActive ? {} : {color: this.activeColor}
            }
        },
    }
</script>

<style scoped>
.tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    box-shadow: 0 -2px 1px rgba(100, 100, 100, .1);
    font-size: 14px;
}
.tab-bar-item img {
    width: 25px;
    height: 25px;
    margin-top: 2px;
    vertical-align: middle; /*去掉图片下面的像素*/
    margin-bottom: 2px;
}
</style>
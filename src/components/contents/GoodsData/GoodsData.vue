<template>
    <div class="GoodsData">
        <goods-data-item v-for="(item, index) in Goodsdata" :key="index" :GoodsDataItem="item" />
    </div>
</template>

<script>
    import GoodsDataItem from './GoodsDataItem'
    export default {
        name: 'GoodsData',
        components: {
            GoodsDataItem
        },
        props: {
            Goodsdata: {
                type: Array,
                default() {
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .GoodsData {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
</style>
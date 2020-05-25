<template>
    <div class="recommend">
        <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image" alt="" />
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        props: {
            recommends: {
                type: Array,
                default() {
                    return []
                }
            }
        }
    }
</script>

<style scoped>
.recommend{
    text-align: center;
    display: flex;
    width: 100%;
    font-size: 14px;
    padding: 10px 0 20px 0;
    border-bottom: 8px solid #eeeeee;
}
.recommend-item{
    flex: 1;
}
.recommend-item img{
    width: 90%;
    margin-bottom: 10px;
}
</style>

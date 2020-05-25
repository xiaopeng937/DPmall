<template>
    <div class="TabControl">
        <div v-for="(item,index) in title" :key="index" class="tab-item">
            <span :class="{active: isActive === index}" @click="textClick(index)">{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TabControl',
        props: {
            title: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                isActive: 0
            }
        },
        methods: {
            textClick(index) {
                this.isActive = index
                this.$emit("tabClick", index)
            }
        }, 
    }
</script>

<style scoped>
.TabControl { 
    display: flex;
    text-align: center;
    font-size: 16px;
    background-color: white;
}
.tab-item {
    flex: 1;
    line-height: 40px;
    height: 40px;
}
.tab-item span {
    padding: 3px;
}
.active {
    border-bottom:2px solid rgb(243, 91, 116);
    color: rgb(245, 115, 136);
}
</style>
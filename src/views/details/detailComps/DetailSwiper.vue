<template>
	<swiper class="Swiper">
		<swiper-item v-for="(item,index) in TopImg" :key="index">
			<img :src="item" alt="" />
		</swiper-item>
	</swiper>
</template>

<script>
	import {Swiper, SwiperItem} from 'components/common/swiper'
	export default {
		name: 'DetailSwiper',
		props: {
			TopImg: {
				type: Array,
				default() {
					return []
				}
			}
		},
		components: {
			Swiper,
			SwiperItem
		}
	}
</script>

<style scoped>

.Swiper {
	height: 380px;
	overflow: hidden;
}

</style>
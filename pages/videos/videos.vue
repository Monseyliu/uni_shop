<template>
	<view class="wrap">
		<newsItem :newsInfo="videoInfo"></newsItem>
	</view>
</template>

<script>
	import newsItem from "../../components/news-item/news-item.vue"
	export default {
		data() {
			return {
				// 预览的数据
				videoInfo: []
			}
		},
		methods: {
			async getVideoInfo(){
				// 发起请求获取数据
			const res = await	this.$myRequest({
					url: 'index/index'
				})
				this.videoInfo = res.data.data.product_new
			}
		},
		onLoad() {
			this.getVideoInfo()
		},
		components:{
			newsItem
		}
	}
</script>

<style lang="scss">
	
</style>

<template>
	<view class="news">
		<newsItem :newsInfo="newsInfo" @itemClick="goDetail"></newsItem>
	</view>
</template>

<script>
	import newsItem from "../../components/news-item/news-item.vue"
	export default {
		data() {
			return {
				// 数据列表
				newsInfo: []
			}
		},
		methods: {
			async getNewsInfo() {
				// 发起请求获取数据
				const res = await this.$myRequest({
					url: 'index/index'
				})
				this.newsInfo = res.data.data.product_new
			},
			goDetail(id){
				// 去菜单详情的方法，在子组件news-item中调用
				uni.navigateTo({
					url: "../newsDetail/newsDetail?id="+id
				})
			}
		},
		onLoad() {
			this.getNewsInfo()
		},
		components:{
			newsItem
		}
	}
</script>

<style lang="scss">
	
</style>

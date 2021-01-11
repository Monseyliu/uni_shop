<template>
	<view class="wrap">
		<view class="item_box" v-for="item in videoInfo" :key="item.id">
			<view class="pic"><image :src="item.picture"></image></view>
			<view class="info">
				<view class="title">{{item.name}}</view>
				<view class="timeView">
					<text>发表时间：2021-01-02</text>
					<text>&nbsp;浏览：{{item.view}}次</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
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
		}
	}
</script>

<style lang="scss">
	.wrap {
		.item_box {
			margin-bottom: 10px;
			height: 100px;
			width: 100%;
			display: flex;
			border-bottom: 1px solid $shop-color;
			.pic {
				height: 100%;
				width: 230rpx;
				margin-right: 10px;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.info {
				width: 300px;
				padding: 10px 0;
				font-size: 15px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}
		}
	}
</style>

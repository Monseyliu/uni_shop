<template>
	<view class="news_detail">
		<text class="title">标题</text>
		<view class="info">
			<text>发表时间：</text>
			<text>浏览：</text>
		</view>
		<view class="content">
			内容
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 获取详情的ID，从上一个页面获取
				id: 0,
				detailInfo:{}
			}
		},
		methods: {
			async getNewsDetail() {
				const res = await this.$myRequest({
					url: 'product/product/index?cate_id=' + this.id
				})
				this.detailInfo = res.data
			}
		},
		onLoad(options) {
			//从上一个页面获取的ID
			this.id = options;
			this.getNewsDetail()
		}
	}
</script>

<style lang="scss">
	.news_detail {
		font-size: 30rpx;
		padding: 0 20px;

		.title {
			text-align: center;
			width: 710rpx;
			display: block;
			margin: 20rpx 0;
		}

		.info {
			display: flex;
			justify-content: space-between;
		}
	}
</style>

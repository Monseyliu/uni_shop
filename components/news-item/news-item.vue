<template>
	<view class="news">
		<view class="news_item" @click="navigator(item.id)" v-for="item in newsInfo" :key="item.id">
			<image :src="item.picture"></image>
			<view class="info">
				<view class="info_title">{{item.name}}</view>
				<view class="timeView">
					<text>发表时间：{{timeIfo | formatDate}}</text>
					<text>浏览次数：{{item.view}}次</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				timeIfo: 1609731320
			}
		},
		props:[
			'newsInfo'
		],
		filters: {
			formatDate (time){
				// 时间过滤器
				const date = new Date(time*1000)
				const y = date.getFullYear()
				const m = (date.getMonth()+1).toString().padStart(2, 0)
				const d = date.getDate().toString().padStart(2, 0)
				
				return y+'-'+m+'-'+d
			}
		},
		methods:{
			navigator(id){
				// 调用父组件goDetail方法实现导航
				this.$emit('itemClick', id)
			}
		}
	}
</script>

<style lang="scss">
	.news {
		.news_item {
			display: flex;
			padding: 10rpx 20rpx;
			border-bottom: 1px solid $shop-color;

			image {
				min-width: 200rpx;
				max-width: 200rpx;
				height: 150rpx;
			}

			.info {
				margin-left: 15rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.info_title {
					font-size: 30rpx;
				}

				.timeView {
					font-size: 24rpx;

					text:nth-child(2) {
						margin-left: 30rpx;
					}
				}
			}
		}
	}
</style>

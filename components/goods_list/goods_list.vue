<template>
	<view>
		<view class="good_list">
			<view class="goods_item" v-for="item in goodsHotList" :key="item.id">
				<image :src="item.picture" mode=""></image>
				<view class="goods_price">
					<text class="new_price">￥{{item.give_point}}</text>
					<text class="origin_price">￥{{item.cost_price}}</text>
				</view>
				<view class="goods_info">
					{{item.name}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 由谁用谁传递数据过来，

			}
		},
		props: ['goodsHotList'],
		methods: {

		}
	}
</script>

<style lang="scss">
	.good_list {
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.goods_item {
			background-color: #fff;
			width: 355rpx;
			margin: 10rpx 0;
			padding: 15rpx;
			box-sizing: border-box;

			image {
				width: 80%;
				height: 150px;
				display: block;
				margin: 0 auto;
			}

			.goods_price {
				color: #e54d42;
				font-size: 36rpx;
				margin: 10rpx 0 0 0;

				.origin_price {
					color: #ccc;
					font-size: 28rpx;
					margin-left: 14rpx;
					text-decoration: line-through;
				}
			}

			.goods_info {
				font-size: 28rpx;
				line-height: 50rpx;
				padding: 10rpx 0 15rpx 0;
			}
		}
	}
</style>

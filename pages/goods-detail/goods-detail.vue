<template>
	<view class="goods_detail">
		<!-- 轮播图 -->
		<swiper :indicator-dots="true">
			<swiper-item v-for="item in urls" :key="item.id">
				<image :src="item"></image>
			</swiper-item>
		</swiper>
		<!-- 商品信息区域 -->
		<view class="goodsInfo">
			<view class="good_price">
				<text>￥6998</text>
				<text>￥8990</text>
			</view>
			<view class="goods_name">
				狗狗磨牙玩具泰迪小型犬宠物小狗幼犬耐咬发声大型犬金毛训练玩具 - 复制
			</view>
		</view>
		<!-- 边框线 -->
		<view class="line"></view>
		<!-- 商品库存货品 -->
		<view class="goodsStock">
			<view>货号：SD647393FFE112</view>
			<view>库存：2990</view>
		</view>
		<!-- 边框线 -->
		<view class="line"></view>
		<!-- 商品详情区域 -->
		<view class="goodsItemDetail">
			<view class="goods_title">狗狗磨牙玩具</view>
			<view class="good_contant">泰迪小型犬宠物小狗幼犬耐咬发声大型犬金毛训练玩具</view>
			<image :src="item" mode="" v-for="(item,i) in urls" :key="i"></image>
		</view>
		<!-- 底部导航栏区域 -->
		<view class="goodsNav">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		data() {
			return {
				// 被点击商品的ID
				goodsId: 0,
				// 商品详情数据对象
				goodsDetail: {},
				// 图片URL数组
				urls: [],
				// 底部导航options数据
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: "red"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 12
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		methods: {
			async getGoodsDetail() {
				const res = await this.$myRequest({
					url: 'index/index'
				})
				console.log(res)
				this.goodsDetail = res.data.data.product_hot
				console.log(this.goodsDetail)
				this.urls = this.goodsDetail.map(item => {
					return item.picture
				})
			},
			onClick(e) {
				// 底部导航点击事件
				console.log(e)
			},
			buttonClick(e) {
				// 底部导航事件
				console.log(e)
			}
		},
		onLoad(options) {
			// 获取上个页面被点击的商品的ID
			this.goodsId = options.id
			this.getGoodsDetail()
		},
		components: {
			uniGoodsNav
		}

	}
</script>

<style lang="scss">
	.goods_detail {
		swiper {
			height: 700rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}

	.goodsInfo {
		padding: 10px;

		.good_price {
			font-size: 35rpx;
			color: $shop-color;
			line-height: 80rpx;

			text:nth-child(2) {
				color: #ccc;
				font-size: 28rpx;
				text-decoration: line-through;
				margin-left: 10px;
			}
		}

		.goods_name {
			font-size: 32rpx;
			line-height: 60rpx;
		}
	}

	.goodsStock {
		padding: 0 10px;
		font-size: 32rpx;
		line-height: 60rpx;
	}

	.line {
		height: 10rpx;
		width: 750rpx;
		background-color: #eee;
	}
	.goodsItemDetail {
		width: 750rpx;
		height: auto;
		padding-bottom: 50px;
		.goods_title {
			font-size: 32rpx;
			padding-left: 10rpx;
			border-bottom: 1px solid #eee;
			line-height: 60rpx;
		}
		image {
			width: 100%;
			height: 400px;
		}
	}
	// 商品导航
	.goodsNav {
		position: fixed;
		bottom: 0;
		width: 100%;
	}
	
</style>

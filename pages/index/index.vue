<template>
	<view class="home">
		<!-- 轮播图区域 -->
		<swiper indicator-dots circular>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.cover"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item, index) in navsList" :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品区域 -->
		<view class="hot_goods">
			<view class="title">
				推荐商品
			</view>
			<!-- 商品展示组件 -->
			<goodsList :goodsHotList="goodsHotList" @itemGoodsDetail="goGoodsDetail"></goodsList>
		</view>
		
	</view>
</template>

<script>
	import goodsList from "../../components/goods_list/goods_list.vue"
	export default {
		data() {
			return {
				// 轮播图数组
				swipers: [],
				// 热推商品数据列表
				goodsHotList: [],
				// 导航区域数据列表用于循环
				navsList: [{
						icon: 'iconfont icon-cangchucangku',
						title: '易趣购物',
						path: '/pages/goods/goods'
					},
					{
						icon: 'iconfont icon-dicengjiagou',
						title: '联系我们',
						path: '/pages/contact/contact'
					},
					{
						icon: 'iconfont icon-tupian',
						title: '社区图片',
						path: '/pages/pics/pics'
					},
					{
						icon: 'iconfont icon-suyuan',
						title: '学习资源',
						path: '/pages/videos/videos'
					}
				]
			}
		},
		onLoad() {
			this.getSwipers()
		},
		components:{
			goodsList
		},
		methods: {
			// 获取轮播图
			async getSwipers() {
				// 使用封装的方法
				const res = await this.$myRequest({
					url: 'index/index'
				})
				console.log(res)
				this.swipers = res.data.data.adv.index_top
				this.goodsHotList = res.data.data.product_hot
				console.log(this.goodsHotList)
			},
			navItemClick(url) {
				uni.navigateTo({
					url
				})
			},
			goGoodsDetail(id){
				// 跳转到商品详情页
				uni.navigateTo({
					url: "../goods-detail/goods-detail?id="+id
				})
			}
			
		}
	}
</script>

<style lang="scss">
	// 主视图区
	.home {
		swiper {
			width: 750rpx;
			height: 380rpx;

			image {
				height: 100%;
				width: 100%;
			}
		}
	}

	// 导航区域
	.nav {
		display: flex;

		.nav_item {
			view {
				width: 120rpx;
				height: 120rpx;
				background-color: $shop-color;
				border-radius: 50%;
				margin: 10px auto;
				line-height: 120rpx;
				color: #fff;
				font-size: 50rpx;
			}

			width: 25%;
			text-align: center;

			text {
				font-size: 30rpx;
			}
		}
	}

	// 推荐商品区域
	.hot_goods {
		background-color: #eee;
		overflow: hidden;
		margin-top: 10px;

		.title {
			height: 50px;
			line-height: 50px;
			color: $shop-color;
			text-align: center;
			letter-spacing: 20px;
			background-color: #fff;
			margin: 7rpx 0;
		}

		
	}
</style>

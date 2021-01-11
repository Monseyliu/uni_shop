<template>
	<view class="contact">
		<image src="https://www.yllook.com/attachment/images/2020/05/18/image_1589787590_HXoDkKf7.png" mode=""></image>
		<!-- 地址联系信息 -->
		<view class="info">
			<view @click="callPhone">联系电话：400-8980-5578 （点击拨打）</view>
			<view>商家地址：广东省深圳市福田区八卦岭街道88号</view>
		</view>
		<!-- 地图区域 -->
		<map :longitude="longitude" :latitude="latitude" class="map" :markers="markers" color="#fc0722" :scale="scale"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 经度
				longitude: 114.106404,
				// 纬度
				latitude: 22.566811,
				// 地图缩放比例
				scale: 12,
				// 地址标记对象
				markers: [
					{
						longitude: 114.106404,
						latitude: 22.566811,
						iconPath: '../../static/icon/map.png',
						width: 30,
						height: 30,
						
					}
				]
			}
		},
		methods: {
			callPhone(){
				// 拨打电话
				console.log(111)
				uni.makePhoneCall({
					phoneNumber: '400-8980-5578'
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact {
		image {
			width: 750rpx;
			height: 320rpx;
		}
		.info {
			padding: 10rpx 20rpx;
			view {
				line-height: 80rpx;
				border-bottom: 1px solid #eee;
			}
		}
		.map {
			width: 750rpx;
			height: 750rpx;
		}
		
	}
</style>

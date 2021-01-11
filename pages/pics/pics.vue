<template>
	<view class="pics" scroll-y>
		<scroll-view class="scroll_left">
			<view :class="active === i ? 'active_color' : ''" v-for="(item, i) in cateList" :key="item.id" @click="leftClickHandle(i, item.id)">
				{{item.title}}
			</view>
		</scroll-view>
		<scroll-view scroll-y class="scroll_right">
			<view class="item">
				<image @click="previewImg" src="http://demo2.rageframe.com/attachment/images/2020/07/24/image_1595598602_Hmceg0ft.gif" mode=""></image>
				<text></text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 左侧分类数据
				cateList: [],
				// 分类高亮控制
				active: 0,
				// 子栏目中数据
				childrenCate: []
			}
		},
		onLoad() {
			this.getPicsCate();
		},
		methods: {
			async getPicsCate() {
				// 获取数据
				const res = await this.$myRequest({
					url: 'index/index'
				})
				this.cateList = res.data.data.cate
				console.log(this.cateList)
			},
			async leftClickHandle(i, id) {
				// 左侧侧边栏点击事件
				this.active = i
				// 获取相对应的数据根据ID
				const res = await this.$myRequest({
					url: 'product/product/index' ,
					data: {
						cate_id: id,
						page: 1
					}
				})
				this.childrenCate = res.data.data
			},
			previewImg(){
				// 点击预览图片，使用map返回想要的数据
				// const urls = this.childrenCate.map(item => {
				// 	return item.img_url
				// })
				
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.pics {
		height: 100%;

		.scroll_left {
			width: 200rpx;
			border-right: 1px solid #eee;

			view {
				height: 60px;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}

			.active_color {
				background-color: $shop-color;
				color: #fff;
			}
		}
		.scroll_right {
			position: absolute;
			right: 5px;
			top: 5px;
			height: 100%;
			width: 530rpx;
			
		}
	}
</style>

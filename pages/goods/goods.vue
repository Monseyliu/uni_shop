<template>
	<view class="good_list">
		<goodsList :goodsHotList="goodsHotList" @itemGoodsDetail="goGoodsDetail"></goodsList>
		<view class="isOver" v-if="flag">---已展示全部数据---</view>
	</view>
</template>

<script>
	import goodsList from "../../components/goods_list/goods_list.vue"
	export default {
		data() {
			return {
				// 商品数据
				goodsHotList: [],
				// 当数据加载完全后显示
				flag: false
			}
		},
		onLoad() {
			this.getGoodsList()
		},
		methods: {
			// 获取商品数据,callBack回调函数用于结束下拉刷新
			async getGoodsList(callBack) {
				const res = await this.$myRequest({
					url: 'index/index'
				})
				this.goodsHotList = [...this.goodsHotList,...res.data.data.product_hot]
			    callBack && callBack();
			},
			goGoodsDetail(id){
				// 跳转到商品详情页
				uni.navigateTo({
					url: "../goods-detail/goods-detail?id="+id
				})
			}
			

		},
		components: {
			goodsList
		},
		onReachBottom() {
			console.log("触底了")
			this.flag = true
			// if(this.goodsHotList.length<11){
			// 	return this.flag = true
			// }
		},
		onPullDownRefresh(){
			console.log("下拉刷新")
			// 下拉刷新重置数据
			this.goodsHotList = [];
			this.flag = false;
			setTimeout(()=>{
				this.getGoodsList(()=>{
					uni.stopPullDownRefresh()
				})
			},1000)
		}
	}
</script>

<style lang="scss">
	.good_list {
		background-color: #eee;
	}
	.isOver {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
	}
</style>

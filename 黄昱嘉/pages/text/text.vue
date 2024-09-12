<template>
	<view class="continer">
		<view class="title">{{item.title}}</view>
		<view class="daohang">
			作者：{{item.author}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
			time:{{item.time}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp{{item.src}}
		</view>
    <view class="text" v-for="(item1,index1) in item.parts">
		<view class="wenzi" v-if="item1.t=='p'">
			{{item1.v}}
		</view>
		<view class="img" v-else>
			<image :src="item1.v" mode=""></image>
		</view>
    	
    </view>


	</view>
</template>

<script>
	export default {

		data() {
			return {
				item: "",
			}
		},
		onLoad(options) {
			const encodedItem = options.item;
			if (encodedItem) {
				// 对编码后的字符串进行解码
				// const decodedItem = decodeURIComponent(encodedItem);
				// 将字符串解析为JSON对象
				// console.log(decodedItem)
				this.item = JSON.parse(encodedItem);
				console.log(this.item)
				console.log(typeof(this.item))
			}
		}

	}
</script>

<style lang="scss">
	.title {
		font-weight: bold;
		font-size: 80rpx;
		text-align: center;
		height: 100rpx;
		background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
	}

	.daohang {
		font-size: 30rpx;
		width: 100%;
		height: 50rpx;

	}
	.text{
		.wenzi{
			text-indent: 2em;
			font-size:50rpx;
		}
		.img{
			display: flex;
			  justify-content: center; /* 水平居中 */
			  align-items: center; /* 垂直居中 */
			   /* 父元*/
		}
	}

		
</style>
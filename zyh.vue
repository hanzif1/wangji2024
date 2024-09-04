<template>
	<view>
		<view>
			<view class="aaa">
				<view class="l">
					兰州大学本科新生军训网
				</view>
				<view class="header">
				  <view>
					<navigator url="#">兰州大学</navigator>
				  </view>
				  <view>
					<navigator url="#">军训通知</navigator>
				  </view>
				  <view>
					<navigator url="#">军训要闻</navigator>
				  </view>
				  <view>
					<navigator url="#">军训侧记</navigator>
				  </view>
				  <view>
					<navigator url="#">军训临时党支部建设</navigator>
				  </view>
				</view>
			</view>
		</view>
		<swiper indicator-dots circular autoplay style="width: 800rpx; height: 600rpx;display: flex;align-items: center;justify-content: center">
			<swiper-item><image src="../zhaopian/微信图片_20240903191840.jpg" ></image></swiper-item>
			<swiper-item><image src="../zhaopian/微信图片_20240903192028.jpg" ></image></swiper-item>
			<swiper-item><image src="../zhaopian/微信图片_20240903192033.jpg" ></image></swiper-item>
			<swiper-item><image src="../zhaopian/微信图片_20240903192036.jpg" ></image></swiper-item>
		</swiper>
		<scroll-view scroll-y="true" class="a">
				<view class="title">军训临时党支部建设</view>
    			<view class="content" @click="jump(1)"><navigator url="https://mp.weixin.qq.com/s/3uZiYDlJsjQpedQYExtedg" open-type="navigate">心中有党，路上有光——二营七连临时党支部召开新生入党启蒙教育大会</navigator></view>
				<view class="content" @click="jump(2)"><navigator url="https://cyonline.lzu.edu.cn/junxun-articles/article.html?t=17">“学党史，铸军魂”——三营七连临时党支部开展党史宣传教育</navigator></view>
				<view class="content" @click="jump"><navigator url="https://cyonline.lzu.edu.cn/junxun-articles/article.html?t=16">校领导和生态学院慰问参训连队</navigator></view>
				<view class="content" @click="jump"><navigator url="https://www.lzu.edu.cn/">支部共建展风采、党史竞答促提升</navigator></view>
				<view class="content" @click="jump"><navigator url="https://www.lzu.edu.cn/">兰州大学</navigator></view>
				<view class="content" @click="jump"><navigator url="https://www.lzu.edu.cn/">兰州大学</navigator></view>
				<view class="content"><navigator url="https://www.lzu.edu.cn/">兰州大学</navigator></view> 
		</scroll-view>
		<scroll-view scroll-y="true" class="b">
			<view class="title">军训要闻</view>
 			<view class="content"><navigator url="https://www.lzu.edu.cn/">兰州大学</navigator></view>
			<view class="content"><navigator url="https://www.lzu.edu.cn/">兰州大学</navigator></view>
			<view class="content"><navigator url="https://www.lzu.edu.cn/">兰州大学</navigator></view>
			<view class="content"><navigator url="https://www.lzu.edu.cn/">兰州大学</navigator></view>
			<view class="content"><navigator url="https://www.lzu.edu.cn/">兰州大学</navigator></view>
			<view class="content"><navigator url="https://www.lzu.edu.cn/">兰州大学</navigator></view>
			<view class="content"><navigator url="https://www.lzu.edu.cn/">兰州大学</navigator></view> 
		</scroll-view>
		<scroll-view scroll-y="true" class="c">
			<view class="title">军训侧记</view>
 			<view class="content"><navigator url="https://www.lzu.edu.cn/">兰州大学</navigator></view>
			<view class="content"><navigator url="https://www.lzu.edu.cn/">兰州大学</navigator></view>
			<view class="content"><navigator url="https://www.lzu.edu.cn/">兰州大学</navigator></view>
			<view class="content"><navigator url="https://www.lzu.edu.cn/">兰州大学</navigator></view>
			<view class="content"><navigator url="https://www.lzu.edu.cn/">兰州大学</navigator></view>
			<view class="content"><navigator url="https://www.lzu.edu.cn/">兰州大学</navigator></view>
			<view class="content"><navigator url="https://www.lzu.edu.cn/">兰州大学</navigator></view> 
		</scroll-view>
		<scroll-view scroll-y="true" class="d">
			<view class="title">军训通知</view>
			<view class="content" @click="jump">兰州大学</view>
		    <view class="content"><navigator url="https://www.lzu.edu.cn/">兰州大学</navigator></view>
			<view class="content"><navigator url="https://www.lzu.edu.cn/">兰州大学</navigator></view>
			<view class="content"><navigator url="https://www.lzu.edu.cn/">兰州大学</navigator></view>
			<view class="content"><navigator url="https://www.lzu.edu.cn/">兰州大学</navigator></view>
			<view class="content"><navigator url="https://www.lzu.edu.cn/">兰州大学</navigator></view>
			<view class="content"><navigator url="https://www.lzu.edu.cn/">兰州大学</navigator></view> 
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			    url:"https://cn.bing.com/search?q=%E7%99%BE%E5%BA%A6",
			}
		},
		onLoad() {
	
		},
		methods: {
			jump(i){
				var urls = [
					"skfjsdkfjs",
					"sdfhsdfsdjfs"
				];
				window.location.href = urls(i);
			},
		}
	}
	
</script>

<style>
	*{
		box-sizing: border-box;
		margin:0;
		padding: 0;
	}
	.aaa{
	display:flex;
	align-items: center;
	justify-content: space-between;
	padding: 40px 10%;
	background-color: darkgreen;
	font-family: KaiTi;
	font-size: 32px;
	font-weight: 500;
	color:red;
	text-decoration: none;
	}
	view,a{
		font-family: KaiTi;
		font-size: 22px;
		font-weight: 500;
		color:yellow;
		text-decoration: none;
	}
	.title{
		font-family: KaiTi;
		font-size: 32px;
		font-weight: 500;
		color:white;
		text-decoration: none;
	}
	.header{
		list-style: none;
	}
	.header view{
		display:inline-block;
		padding: 0px,20px;
		margin:20px;
	}
	.header view navigator{
		transition: all 0.3s ease 0s;
	}
	.header view navigator:hover{
		color:blue
	}
    image {
		width:800rpx;
		height:600rpx;
		display: flex;
		border:2rpx solid forestgreen;
		justify-content: center;
		align-items:center;
		overflow: hidden; 
	}
	swiper{
		display: flex;
		border:2rpx solid forestgreen;
		justify-content: center;
		align-items:center;
		width:800rpx;
		height:600rpx;
	}
	.a{
		border: 6rpx double black;
		padding:20px 40px;
		margin:20rpx;
		width:95%;
		height:220px;
		background-color: red;
		line-height: 40px;
		.content{
			font-family: KaiTi;
			font-size: 22px;
			font-weight: 500;
			color:yellow;
			background: red;
		}
	}
	.b{
		border: 6rpx double black;
		padding:20px 40px;
		margin:20rpx;
		width:95%;
		height:220px;
		background-color: red;
		line-height: 40px;
		.content{
			font-family: KaiTi;
			font-size: 22px;
			font-weight: 500;
			color:yellow;
			background: red;
	    }
	}
	.c{
		border: 6rpx double black;
		padding:20px 40px;
		margin:20rpx;
		width:95%;
		height:220px;
		background-color: red;
		line-height: 40px;
		.content{
			font-family: KaiTi;
			font-size: 22px;
			font-weight: 500;
			color:yellow;
			background: red;
	    }
	}
	.d{
		border: 6rpx double black;
		padding:20px 40px;
		margin:20rpx;
		width:95%;
		height:220px;
		background-color: red;
		line-height: 40px;
		.content{
			font-family: KaiTi;
			font-size: 22px;
			font-weight: 500;
			color:yellow;
			background: red;
		}
	}
	image{
		position:absolute;
		width: 100%;
		height: 100%;
	}
	.l{
		display:flex;
		align-items: center;
		justify-content: space-between;
		padding: 40px 10%;
		background-color: darkgreen;
		font-family: KaiTi;
		font-size: 32px;
		font-weight: 500;
		color:red;
		text-decoration: none;
	}
</style>

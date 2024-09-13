<template>
	<view class="test">
		<!-- pic -->
		<image class="pic" src="/static/IMG_2944.JPG"></image>
		<video class="video" src="/static/cy4.mp4" autoplay="true"
		  loop="true"
		  muted="true"
		  :controls="false"></video>
		<!-- content -->
		<view class="content1">恭喜您完成所有关卡</view>
		<view class="content2">请关注萃英在线微信公众号<br>期待与您在萃英在线相遇～</view>
		<image class="scanner" src="/static/IMG_2907.PNG"></image>
		<image class="victory" src="/static/IMG_2910.PNG"></image>
		<!-- copyright -->
		<view class="copy">© 2024 CyOnline. All rights reserved.</view>
	</view>
</template>
<style>
.pic {
	  filter: blur(1px); /* 模糊背景 */
	  opacity: 0.99; /* 透明度降低 */  
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 100vw;
	  height: 100vh;
	  object-fit: cover; 
	  		z-index: -1; 
	}
.video{
	position: absolute;
	top: 0;
	left:0;
	width: 100vw;
	opacity: 0.99;
	filter: blur(1px);
}
.scanner{
	position: absolute;
	top: 80%;
	left: 20%;
	width: 80px;
	height: 80px;
	
}
.content1{
	position: absolute;
	left:20%;
	top:72%;
	font-size: 30px;
	font-weight: bold;
	background: linear-gradient(45deg, #9d2d08, #ff732b); /* 渐变文字效果 */
	-webkit-background-clip: text;
}
.content2{
	position: absolute;
	left: 45%;
	top:80%;
}
.victory{
	position: absolute;
	top: 35%;
	left: 8%;
}
.copy{
		position: absolute;
		bottom:40rpx;
		left: 50%;
		transform: translateX(-50%);
		color: black;
		text-align: center;
		font-size: 10px;
	}
</style>
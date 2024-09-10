<template>
	<view class="test">
		<!-- 背景视频 -->
		<video
		  class="background-video"
		  src="/static/cyVideo.MOV"
		  autoplay="true"
		  loop="true"
		  muted="true"
		  :controls="false"
		></video>
		<!-- 开始文本 -->
		<view class="content1">
			<test class="content1.1.1">欢迎加入</test>
			<br><test class="content1.1.2">萃 英 在 线</test>
		</view>
		<view class="content2"><-点击屏幕任意位置进入游戏-></view>
		
			<image src="/static/IMG_2715.PNG" class="logo"></image>
		
		<!-- 半透明遮罩层 -->
		<view class="overlay"  @click="goToGamePage"></view>
		<!-- copyright -->
		<view class="copy">© 2024 CyOnline. All rights reserved.</view>
		
	</view>
</template>

<script>
	export default {
	  methods: {
	    goToGamePage() {
	      uni.navigateTo({
	        url: '' ,// ******马见川的第一个关卡*******
			});
	    }
	  }
	}
</script>

<style scoped>
	
	.background-video {
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 100vw;
	  height: 100vh;
	  object-fit: cover; 
		z-index: -1; 
	}
	
	.overlay {
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 100vw;
	  height: 100vh;
	  background-color: rgba(186, 186, 186, 0.2); /* 通过设置透明度调节颜色 */
	  z-index: 0;
	}
	
	.content1 {
		position: absolute;
		top: 200rpx;
		left:10%;
		text-align: center;
		transform: translateX(20%);
	  font-size: 40px;
	  font-weight: bold;
	  background: linear-gradient(45deg, #d7c1ae, #8f170f); /* 渐变文字效果 */
	  -webkit-background-clip: text; /* 用背景裁剪文字，只显示渐变色部分 */
	  color: transparent; /* 隐藏文字颜色，让渐变显示 */
	  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 添加阴影效果 */
	  letter-spacing: 2px; /* 增加字间距 */
	  padding: 20px;
	  text-transform: uppercase; /* 全部转为大写 */
	  font-family: 'cursive'; /* 自定义字体 */
	  transform: skew(-20deg);
	  z-index: 1;
	  transition: color 0.3s ease; /* 添加平滑过渡效果 */
	}
	.content1:hover{
		color: #20B2AA;
	}
	@keyframes flash {
	  0% {
	    opacity: 1; /* 完全可见 */
	  }
	  50% {
	    opacity: 0; /* 完全透明 */
	  }
	  100% {
	    opacity: 1; /* 完全可见 */
	  }
	}
	.content2{
		
		  position: absolute;
		  bottom: 200rpx; /* 距离底部20px，可以根据需要调整 */
		  left: 50%;
		  transform: translateX(-50%); /* 水平居中 */
		  font-size: 13px;
		  text-align: center;
		color: #ffe7cf;
		font-family: 'cursive';
		 animation: flash 1s infinite;
	}
	.copy{
		position: absolute;
		bottom:40rpx;
		left: 50%;
		transform: translateX(-50%);
		color: white;
		text-align: center;
		font-size: 10px;
	}
	.logo {
	position: absolute;
	  top:16%; /* 控制顶部距离 */
	  left:10%; /* 控制左边距离 */
	  z-index: -1;
	  width: 10%;  /* 控制图片宽度 */
		height: 5%;
	}
	
</style>
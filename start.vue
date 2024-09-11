<template>
	<view class="test">
		<!-- 背景视频 -->
		<video
		  class="background-video"
		  src="/static/cy2.MOV"
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
		top: 60rpx;
		left:45%;
		text-align: center;
		transform: translateX(20%);
	  font-size: 40px;
	  font-weight: bold;
	  background: linear-gradient(45deg, #9d2d08, #ff732b); /* 渐变文字效果 */
	  -webkit-background-clip: text; /* 用背景裁剪文字，只显示渐变色部分 */
	  color: transparent; /* 隐藏文字颜色，让渐变显示 */
	  
	  letter-spacing: 2px; /* 增加字间距 */
	  padding: 20px;
	  text-transform: uppercase; /* 全部转为大写 */
	  font-family: 'cursive'; /* 自定义字体 */
	  transform: skew(-10deg);
	  z-index: 1;
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
		color: #f3feff;
		font-family: 'cursive';
		 animation: flash 1s infinite;
	}
	.logo {
	position: absolute;
	  top:15%; /* 控制顶部距离 */
	  left:40%; /* 控制左边距离 */
	  z-index: -1;
	  width: 40px;  /* 控制图片宽度 */
		height: 40px;
	}
	
</style>
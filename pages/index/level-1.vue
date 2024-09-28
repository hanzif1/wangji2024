<template>
	<view class="content">
		<image class="pic" src="/static/level1/IMG_2944 2.JPG"></image>
		<view class="header">
			第一关
		</view>
		<view class="main">
			<image src="/static/level1/door.PNG" mode="aspectFit"
			style="position:absolute; left: -5%; top: 0%; height: 100%; width: 120%;"></image>
			<image src="/static/level1/car.PNG"
			mode="widthFix"
			style="position: absolute; bottom: 30vh; width: 300rpx;"
			:style="{left: carLeft + '%'}"
			@click="moveCar"></image>
		</view>
		<view class="footer">
			游戏方法：<br>找到途中可以 “跑~” 的东西<br>点击他们
		</view>
		<image src='../../static/level1/图片1.png'mode="aspectFill" class="cloud"></image>
		<!-- copyright -->
		<view class="copy">© 2024 CyOnline. All rights reserved.</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				carLeft: 10,
				carInterval: null
			}
		},
		onLoad() {
			
		},
		methods: {
			moveCar(){
				this.carInterval = setInterval(()=>{
					if (this.carLeft < 110){
						this.carLeft += 1
						console.log(1)
					}
					else{
						clearInterval(this.carInterval)
						this.showAlertAndRedirect()
					}
				}, 10)
			},
			showAlertAndRedirect() {
				uni.showModal({
					title: '恭喜您',
					content: '成功通过第一关,点击确认跳转下一关',
					success: (res) => {
						if (res.confirm) {
							console.log('用户点击确定');
							// 跳转到指定页面，替换'path/to/your/page'为实际页面路径
							uni.navigateTo({
								url: '/pages/index/level-2'
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
							uni.navigateTo({
								url: '/pages/index/level-1'
							});
						}
					}
				});
			}
		}
	}
</script>

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
	.header{
		/* width: 100%; */
		height: 20vh;
		/* background-color: blue; */
		text-align: center;
		font-size: 200%;
		font-weight: 500;
		font-size: 48px;
		color: #5f5a58;
		animation: textColorChange 3s infinite;
	}
	.main{
		width: 100%;
		height: 50vh;
	}
	.footer{
		height: 30vh;
		padding-left: 10%;
		padding-right: 10%;
		font-size: 20px;
	}
	.cloud{
		position: absolute;
		top: 0%;
		width: 100%;
		height: 20%;
		z-index: -1;
	}
	.copy{
		position: absolute;
		bottom:40rpx;
		left: 50%;
		transform: translateX(-50%);
		color: whitesmoke;
		text-align: center;
		font-size: 10px;
	}
</style>

<template>
	<view class="content">
		<image class="pic" src="/static/level1/IMG_2944 2.JPG"></image>
		<view class="header">
			<text>第二关</text>
		</view>
		<view class="main">
			<image src="/static/level2/background2.jpg"
			style="position: relative; left: 0; top: 0; height: 100%; width: 100%;"></image>
			
			<image src="/static/level2/bus.png"
			mode="widthFix"
			style="position: absolute; bottom: 35vh; width: 480rpx; z-index: 99;"
			:style="{left: busLeft + '%'}"
			@click="moveCar"></image>
			
			<image src="/static/level2/mark.jpg"
			mode="widthFix"
			style="position: absolute; width: 590rpx; left: 10%; z-index: 100;"
			:style="{display: markDisplay, transform: 'rotate('+markRotate+'deg)', bottom: markBottom + 'vh'}"
			@click="moveMark"></image>
		</view>
		<view class="footer">
			<text>游戏方法：<br>找到途中可以 “跑~” 的东西<br>点击他们！</text>
		</view>
		<!-- copyright -->
		<view class="copy">© 2024 CyOnline. All rights reserved.</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				busLeft: 17,
				busInterval: null,
				markDisplay: 'block',
				markRotate: 1,
				markInterval: null,
				markBottom: 35
			}
		},
		onLoad() {
			
		},
		methods: {
			moveMark(){
				let n = 0
				this.markInterval = setInterval(()=>{
					if (n < 50){
						n++
						this.markRotate += 3
						this.markBottom--
					}
					else{
						clearInterval(this.markInterval)
						this.markDisplay = 'none'
					}
				}, 1)
			},
			moveCar(){
				if (this.markDisplay == 'block'){
					return
				}
				this.busInterval = setInterval(()=>{
					if (this.busLeft < 110){
						this.busLeft += 1
						console.log(1)
					}
					else{
						clearInterval(this.busInterval)
						this.showAlertAndRedirect()
					}
				}, 10)
			},
			showAlertAndRedirect() {
				uni.showModal({
					title: '恭喜您',
					content: '成功通过第二关,点击确认跳转下一关',
					success: (res) => {
						if (res.confirm) {
							console.log('用户点击确定');
							// 跳转到指定页面，替换'path/to/your/page'为实际页面路径
							uni.navigateTo({
								url: '/pages/index/level-3'
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
							uni.navigateTo({
								url: '/pages/index/level-2'
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
		background-color: aqua;
	}
	.footer{
		/* width: 100%; */
		height: 30vh;
		/* background-color: blue; */
		padding-left: 10%;
		padding-right: 10%;
		font-size: 20px;
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

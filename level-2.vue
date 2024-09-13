<template>
	<view class="content">
		<view class="header">
			<text>\n第三关啦</text>
		</view>
		<view class="main">
			<image src="/static/level3/background2.jpg"
			style="position: relative; left: 0; top: 0; height: 100%; width: 100%;"></image>
			
			<image src="/static/level3/bus.png"
			mode="widthFix"
			style="position: absolute; bottom: 35vh; width: 480rpx; z-index: 99;"
			:style="{left: busLeft + '%'}"
			@click="moveCar"></image>
			
			<image src="/static/level3/mark.jpg"
			mode="widthFix"
			style="position: absolute; width: 590rpx; left: 10%; z-index: 100;"
			:style="{display: markDisplay, transform: 'rotate('+markRotate+'deg)', bottom: markBottom + 'vh'}"
			@click="moveMark"></image>
		</view>
		<view class="footer">
			<text>\n游戏方法：找到途中可以 “跑~” 的东西，点击他们！</text>
		</view>
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
						alert('恭喜！顺利通过第三关~~')
					}
				}, 10)
			}
		}
	}
</script>

<style>
	.header{
		/* width: 100%; */
		height: 20vh;
		/* background-color: blue; */
		text-align: center;
		font-size: 200%;
		font-weight: 500;
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
	}
</style>

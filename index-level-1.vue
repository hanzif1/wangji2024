<template>
	<view class="content">
		<view class="header">
			<text>\n第{{levelNumber}}关啦</text>
		</view>
		<view class="main">
			<image src="/static/level1/school.png"
			style="position: relative; left: 0; top: 0; height: 100%; width: 100%;"></image>
			<image src="/static/level1/car.png"
			mode="widthFix"
			style="position: absolute; bottom: 30vh; width: 300rpx;"
			:style="{left: carLeft + '%'}"
			@click="moveCar"></image>
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
				levelNumber: "一",
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
						alert('恭喜！顺利通过第一关~~')
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

<template>
	<view class="content">
		<image src="/static/New Folder/pic.jpg" class="pic"></image>
		<view class="header">
			<text>第三关</text>
		</view>
		<view class="main">
			<image src="/static/New Folder/main.png" class="img" mode="aspectFit"></image>
			<image :src="currentimage" mode="aspectFit" class="clock" @click="changeimage"></image>
			<view class="text" v-if="condition">{{the_text}}
			</view>
			<view class="question" v-else>
				<text>{{timu}}</text>
				<input type="text" placeholder="输入答案" v-model="userAnswer" />
				<button @click="checkAnswer">提交答案</button>
			</view>
			<image src="../../static/New Folder/CE67C6409C4826B410B39579B30DE854.png" mode="aspectFit" class="decoration"></image>


		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				levelNumber: "四",
				imgindex: 0,
				images: ['/static/New Folder/图片2.png',
					'/static/New Folder/图片3.png',
					'/static/New Folder/图片4.png',
					'/static/New Folder/图片5.png',
					'/static/New Folder/图片1.png',
				],
				currentimage: '',
				text: [
					'甲乙两人玩游戏，在有限大小的正方形桌面上放置小于桌面大小的圆形，谁先放不下谁输，甲先手，谁必赢？',
					'丙丁两人玩游戏，从60倒数，每人可以说2或3个数，先说出1的人赢，丙先手，谁有必胜策略?',
					'小蜗牛要爬一个高15米的树，早上向上爬4米，晚上向下掉2米，第几天可以爬到顶',
					'小萃和小英玩游戏，每人从1-2024里说一个数，不能相同也不能是已选数字的因数，小萃先手，没数可选则输，谁必赢',
				],
				the_text: "",
				userAnswer: '',
				timu: '',


				correctAnswer: [
					'甲',
					'丁',
					'7',
					'小萃',

				], // 正确答案
				 // 答案是否正确的标志
				condition: true,
				texts: ["别想打扰我学数学的心", "别想打扰我学数学的心", "别想打扰我学数学的心", "别想打扰我数学的心", "什么？！军爷要下训了，快冲去吃饭！"],

			}
		},
		onShow() {
			this.currentimage = this.images[this.imgindex];
			this.the_text = this.texts[this.imgindex];
			this.timu = this.text[(this.imgindex) % this.images.length];
		},
		methods: {
			changeimage() {
				this.condition = false;


				if (this.imgindex === 4) {
					setTimeout(() => {
						this.showAlertAndRedirect()
					}, 500);
				}
			},
			checkAnswer() {
				if (this.userAnswer === this.correctAnswer[(this.imgindex) % this.images.length].toString()) {
					this.imgindex = (this.imgindex + 1) % this.images.length;
					this.userAnswer= '';
					this.currentimage = this.images[this.imgindex];
					this.condition = true;
					this.currentimage = this.images[this.imgindex];
					this.the_text = this.texts[this.imgindex];
					this.timu = this.text[(this.imgindex) % this.images.length];
				} 
				else{
					alert('哈哈蒙都蒙不对QAQ')
				}
				
			},
			showAlertAndRedirect() {
				uni.showModal({
					title: '恭喜您',
					content: '成功通过第三关,点击确认跳转下一关',
					success: (res) => {
						if (res.confirm) {
							console.log('用户点击确定');
							// 跳转到指定页面，替换'path/to/your/page'为实际页面路径
							uni.navigateTo({
								url: '/pages/index/level-4'
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
							uni.navigateTo({
								url: '/pages/index/level-3'
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
	.main {
		width: 100%;
	}


	.clock {
		position: absolute;
		right: 100rpx;
		top: 300rpx;
		width: 110px;
		height: 110px;
	}

	.img {
		position: absolute;
		left: 10%;
		top: 30%;
		height: 1100rpx;
		width: 100%;
	}

	.text {
		position:absolute;
		bottom: 25%;
		left: 10%;
		width: 500rpx;
		text-align: center;
		font-size:50rpx;
		background-color: aliceblue;
		font-family:Brush Script MT;
		border-radius: 20rpx;
		margin-left: 10%;
		margin-right: 10%;
	}
	.question{
		position: absolute;
		bottom: 60%;
		left: 20%;
		width: 500rpx;
		border-radius: 20rpx;
		margin-left: auto;
		margin-right: auto;
		background-color: antiquewhite;
		z-index: 2;
	}
	.decoration{
		position: absolute;
		top: 30%;
		left: 45%;
	}
	input{
		cursor: pointer;
	}
	button{
		cursor: pointer;
	}
	
</style>
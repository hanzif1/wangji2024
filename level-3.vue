<template>
	<view class="content">
		<view class="header">
			<text>\n第 {{levelNumber}} 关啦</text>
		</view>
		<view class="main">
			<image src="/static/New Folder/main.jpg" class="img" mode="aspectFill"></image>
			<image :src="currentimage" mode="aspectFill" class="clock" @click="changeimage"></image>
			<view class="text" v-if="condition">


				{{the_text}}
			</view>
			<view class="question" v-else>
				<text>{{timu}}</text>
				<input type="text" placeholder="输入答案" v-model="userAnswer" />
				<button @click="checkAnswer">提交答案</button>
			</view>



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
					'第四题答案是1',
				],
				the_text: "",
				userAnswer: '',
				timu: '',


				correctAnswer: [
					'甲',
					'丁',
					'7',
					'1',

				], // 正确答案
				 // 答案是否正确的标志
				condition: true,
				texts: ["别想打扰我学数学的心", "别想打扰我学数学的心", "别想打扰我学数学的心", "别想打扰我学1的心", "什么？！军爷要下训了，快冲去吃饭！"],

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
					// setTimeout(() => {
						alert('恭喜！顺利通过第四关~~');
						// this.imgindex=0;有小bug但不影响
					// }, 500);
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
				
			}
		}
	}
</script>

<style>
	

	.main {
		width: 100%;
	}

	.content {
		height: 94.6vh;
		background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
	}

	.clock {
		position: absolute;
		right: 20rpx;
		top: 150rpx;
		width: 110rpx;
		height: 110rpx;
	}

	.img {
		position: relative;
		left: 0;
		top: 0;
		height: 1100rpx;
		width: 100%;
	}

	.text {
		position: relative;
		bottom: 240rpx;
		width: 500rpx;

		text-align: center;
		background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);
		border-radius: 20rpx;
		margin-left: auto;
		margin-right: auto;
	}
	.question{
		position: relative;
		bottom: 350rpx;
		width: 500rpx;
		border-radius: 20rpx;
		margin-left: auto;
		margin-right: auto;
		background-color: antiquewhite;
	}
	input{
		cursor: pointer;
	}
	button{
		cursor: pointer;
	}
</style>
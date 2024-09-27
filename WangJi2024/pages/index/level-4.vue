<template>
	<view class="content">
		<view class="header">
			<text>\n第{{levelNumber}}关</text>
		</view>
		<view class="main">
			<image src="/static/level4/a.jpg" class="pic" mode="aspectFill">
				<image src="/static/level4/40F58FA51B601B7D5D54B4135BBCB7C9.png" class="important" mode="aspectFill"
					@click="dianji2"></image>
				<image src="/static/level4/A6E6CE31933DAB468D61201787DAE564.png" class="notimportant" @click="dianji1">
				</image>
		</view>
		<view class="text" v-if="yun&&!jiaoguan">
			<text>我正在单独考验记者排的意志，去找教官吧！！</text>
		</view>
		<view class="text" v-else-if="jiaoguan&&yun" @click="dianji3">虽然记者排每天都工作到凌晨，但是军训还是不能落下</view>
		<view v-else-if="text">
			<view class="num" v-if="num1">
				<view class="question">记者排的人几点睡觉？</view>
				<radio-group @change="checkAnswer">
					<radio value='1'>A. 21点睡觉</radio>
					<radio value='2'>B. 23点睡觉</radio>
					<radio value='3'>C. 2点睡觉</radio>
				</radio-group>

			</view>
			<view class="num" v-else-if="num2">
				<text>请输入此时此刻记者排比别的排需要多拿什么东西</text>
				<input type="text" placeholder="输入答案" v-model="userAnswer" />
				<button @click="checkAnswer2">提交答案</button>
			</view>
			<view class="num" v-if="num3">
				<view class="question">网技部是不是萃英在线里最好的部门？</view>
				<radio-group @change="checkAnswer3">
					<label class="answer">
						<radio value="1"></radio>
						<text>A. 是</text>
					</label>
					<label class="answer">
						<radio value="2"></radio>
						<text>B. 不是</text>
					</label>
					<label class="answer">
						<radio value="3"></radio>
						<text>C. 我支持别的部门</text>
					</label>
				</radio-group>

			</view>
		</view>
		<!-- copyright -->
		<!-- <view class="copy">© 2024 CyOnline. All rights reserved.</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				levelNumber: "四",
				yun: false,
				jiaoguan: false,
				text: false,
				correctAnswer1: 1,
				selectedAnswer: '',
				resultText: '',
				showResult: false,
				userAnswer: '',
				answer: '雨伞',
				num1: false,
				num2: false,
				num3: false,


				selectedAnswer3: '',
			}
		},
		onLoad() {

		},
		watch: {
			selectedAnswer(val) {
				alert(val)
				if (val === '3') {
					this.num1 = false;
					this.num2 = true;
					this.selectedAnswer = '';
				}
				//  else {
				// 	uni.showToast({
				// 			title: '再想想',
				// 			duration: 2000,

				// 		});
				// 	}
			}
		},
		methods: {
			dianji1() {
				this.yun = true;

			},
			dianji2() {

				this.jiaoguan = true;
			},
			dianji3() {
				this.jiaoguan = false;
				this.text = true;
				this.num1 = true;
				this.yun = false;
			},
			checkAnswer(e) {
				this.selectedAnswer = e.detail.value[0]
				console.log(e.detail.value)
				console.log(this.selectedAnswer)
				if (this.selectedAnswer === '3') {
					this.num1 = false;
					this.num2 = true;
					this.selectedAnswer = '';
					uni.showToast({
						title: '这就是记者排！',
						duration: 2000,
						
					});
				}
			},
			checkAnswer2() {
				if (this.userAnswer == this.answer) {
					this.num2 = false;
					this.num3 = true;
					uni.showToast({
						title: '好聪明啊QAQ',
						duration: 2000,
						
					});
					
				}
				else{
					uni.showToast({
						title: '下雨不打伞吗',
						duration: 2000,
						icon: 'error'
					});
				}
			},
			checkAnswer3(e) {
				this.selectedAnswer3 = e.detail.value[0];

				if (this.selectedAnswer3 === '1') {
					this.showAlertAndRedirect()
				} else {
					uni.showToast({
						title: '再想想吧QAQ',
						duration: 2000,
						icon: 'error'
					});
					// alert('再仔细想想，再仔细想想，对就是那个答案')
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
								url: '/pages/index/yes'
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
							uni.navigateTo({
								url: '/pages/index/level-4'
							});
						}
					}
				});







			}
		},

	}
</script>

<style>
	.pic {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 900rpx;

	}

	.header {
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

	.button {
		width: 100rpx;
		height: 30rpx;
	}

	.content {
		height: 900rpx;
		width: 100%;
	}

	.important {
		position: relative;
		top: -423rpx;
		left: 590rpx;
		width: 120rpx;
		height: 200rpx;
		cursor: pointer;
	}

	.notimportant {
		position: relative;
		top: -550rpx;
		left: 110rpx;
		width: 200rpx;
		height: 200rpx;
		cursor: pointer;
	}

	.text {
		position: relative;
		bottom: 350rpx;
		width: 500rpx;
		border-radius: 20rpx;
		margin-left: auto;
		margin-right: auto;
		background-color: antiquewhite;
	}

	.num {
		position: relative;
		bottom: 350rpx;
		width: 500rpx;
		border-radius: 20rpx;
		margin-left: auto;
		margin-right: auto;
		background-color: antiquewhite;
	}

	.copy {
		position: relative;
		bottom: 350rpx;
		width: 500rpx;
		border-radius: 20rpx;
		margin-left: auto;
		margin-right: auto;
		background-color: antiquewhite;
	}
</style>
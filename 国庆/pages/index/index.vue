<template>
	<view class="title">喜迎国庆</view>
	<view>
		<view class="container">
			<uni-card :is-shadow="false" is-full>
				<text class="uni-h6">张灯结彩欢度国庆佳节<br>锦绣中国，盛世华诞，举国同庆<br>热烈庆祝中国人民共和国成立75周年</text>
			</uni-card>
			<uni-section title="上传图片" type="line">
				<view class="example-body">
					<uni-file-picker limit="9" title="最多选择9张图片"></uni-file-picker>
				</view>
			</uni-section>
		</view>
		<view>
			<uni-collapse ref="collapse" v-model="value" @change="change">
				<uni-collapse-item title="微博打卡">
					<view>
						<uni-section title="上传图片" type="line">
							<view class="example-body">
								<uni-file-picker limit="9"></uni-file-picker>
							</view>
						</uni-section>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</view>
		<view class="container2">
			<view>
				<button @click="uploadWeibo()">上传微博</button>
			</view>
			<uni-card :is-shadow="false" is-full>
				<text class="uni-h6">是否参与微博上传，若参与，上传参与截图</text>
			</uni-card>
		</view>
		<button @click="uploadImage()">打卡</button>
		<view v-if="id != 0">{{'你是第 ' + id + '个'}}</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0,
				serverUrl: 'http://127.0.0.1:8000/demo',
				flags: [],
			}
		},
		methods: {
			async uploadImage() {
				var img = await uni.chooseImage();
				uni.uploadFile({
					url: this.serverUrl + '/uploadImage/',
					name: 'image',
					files: img.tempFiles,
					success: (res) => {
						if (res.statusCode == 200) {
							this.id = res;
							alert('成功');
						} else alert('失败');
					},
					fail: (res) => {
						alert('失败');
					},
				});
			},
			async uploadWeibo() {
				var img = await uni.chooseImage();
				uni.uploadFile({
					url: this.serverUrl + '/uploadWeibo/',
					files: img.tempFiles,
					success: (res) => {
						if (res.statusCode == 200) alert('成功');
						else alert('失败');
					},
					fail: (res) => {
						alert('失败');
					}
				})
			},
		},
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #060607;
		display: flex;
		justify-content: center;
		font-size: 50rpx;
	}
</style>
<template>
	<view class="title">喜迎国庆</view>
	<view>
		<view class="container">
			<uni-card :is-shadow="false" is-full>
				<text class="uni-h6">张灯结彩欢度国庆佳节<br>锦绣中国，盛世华诞，举国同庆<br>热烈庆祝中国人民共和国成立75周年</text>
			</uni-card>
			<uni-section title="上传图片" type="line">
				<view class="example-body">
					<uni-file-picker 
					:mode="grid"
					:auto-upload="false" 
					 @select="handleSelect" 
					
					limit="9" 
					title="最多选择9张图片"></uni-file-picker>
				</view>
			</uni-section>
		</view>
		<button @click="uploadImage()">打卡</button>
		<view v-if="id != 0">{{'你是第 ' + id + '个'}}</view>
		<view>
			<uni-collapse ref="collapse" v-model="value" @change="change">
				<uni-collapse-item title="微博打卡">
					<view>
						<uni-section title="上传图片" type="line">
							<view class="example-body">
								<uni-file-picker 
								:mode="grid"
								:auto-upload="false" 
								 @select="handleSelect" 
								  >
								</uni-file-picker>
								<view class="container2">
									<view>
										<button @click="uploadWeibo()">上传微博</button>
									</view>
									<uni-card :is-shadow="false" is-full>
										<text class="uni-h6">是否参与微博上传，若参与，上传参与截图</text>
									</uni-card>
								</view>
							</view>
						</uni-section>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</view>
		
		
		
		

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
			
			async handleSelect(res) {
			  const tempFilePaths = res.tempFilePaths;
			  await this.uploadImages(tempFilePaths);
			},
			async uploadImages(tempFilePaths) {
			  // 将上传操作创建为一个Promise数组
			  const uploadPromises = tempFilePaths.map((filePath) => {
			    return uni.uploadFile({
			      url: this.serverUrl + '/uploadImage/',
			      name: 'image',
			      filePath: filePath,
			      success: (res) => {
			        if (res.statusCode === 200) {
			          // 这里假设服务器响应的数据中含有id字段
			          this.id = res.data.id;
			          alert('成功');
			        } else {
			          alert('失败');
			        }
			      },
			      fail: (error) => {
			        console.error('上传失败:', error);
			        alert('失败');
			      },
			    });
			  });
			
			  // 使用Promise.all来并行处理所有的上传Promise
			  try {
			    // 等待所有上传任务完成
			    await Promise.all(uploadPromises);
			    alert('所有图片上传成功');
			  } catch (error) {
			    // 如果有任何一个上传任务失败，这里会捕获到错误
			    console.error('至少有一张图片上传失败:', error);
			    alert('部分图片上传失败');
			  }
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
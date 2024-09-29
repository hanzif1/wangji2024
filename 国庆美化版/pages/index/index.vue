<template>
	<view class="title">喜迎国庆</view>
	
	<view>
		<view class="word"><test>张灯结彩欢度国庆佳节</test><br><test>锦绣中国，盛世华诞，举国同庆</test><br><test>热烈庆祝中国人民共和国成立75周年</test></view>
		<!-- 悬浮圆形按钮 -->
		<view class="floating-button0" @click="toggleModal1()">
			打卡
		</view>
		<!-- 画中画上传页面 -->
		<view class="modal" :class="{ 'active': isModalVisible1 }">
			<view class="modal-header">
				上传图片
				<view class="close-btn" @click="toggleModal1()">✖</view>
			</view>
			<view class="example-body">
				<uni-file-picker :mode="grid" :auto-upload="false" limit="9" @select="handleSelect" title="最多选择9张图片"></uni-file-picker>
			</view>
			<button @click="uploadImages(tempFilePaths)">打卡</button>
			<view v-if="id != 0">{{'你是第 ' + id + '个'}}</view>
		</view>
		
		<!-- 悬浮圆形按钮 -->
		<view class="floating-button" @click="toggleModal()">
			微博
		</view>
		<!-- 画中画上传页面 -->
		<view class="modal" :class="{ 'active': isModalVisible }">
			<view class="modal-header">
				上传图片
				<view class="close-btn" @click="toggleModal()">✖</view>
			</view>
			<view class="example-body">
				<uni-file-picker :mode="grid" :auto-upload="false" limit="1" title="最多选择1张图片"></uni-file-picker>
				<button @click="uploadWeibo()">上传微博</button>
			</view>
			<view class="uni-h6">是否参与微博上传<br>若参与，上传参与截图</view >
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0,
				serverUrl: 'http://127.0.0.1:8000/demo',
				tempFilePaths1: [],
				tempFilePaths: [],
				uploadPromises: [],
				isModalVisible: false,
				isModalVisible1: false,
			}
		},
		methods: {
			toggleModal() {
				this.isModalVisible = !this.isModalVisible;
				this.isModalVisible1 = false;
			},
			toggleModal1() {
				this.isModalVisible = false;
				this.isModalVisible1 = !this.isModalVisible1;
			},
			
			async handleSelect(res) {
				this.tempFilePaths = res.tempFilePaths;
			
			},
			async handleSelect1(res) {
				this.tempFilePaths1 = res.tempFilePaths;
			
			},
			async uploadImages(tempFilePaths) {
						// 创建一个Promise数组来处理所有上传任务
						const uploadPromises = tempFilePaths.map((filePath) => {
							return uni.uploadFile({
								url: this.serverUrl + '/uploadImage/',
								name: 'image',
								filePath: filePath,
							});
						});
			
						// 使用Promise.all来并行处理所有的上传Promise
						Promise.all(uploadPromises)
							.then((res) => {
								for (var i in res)
									console.log("第 i 张的 id 是" + res[i].id)
							})
							.catch(() => {
								alert('至少有一张图片上传失败')
							});
					},
					async uploadWeibo(tempFilePaths1) {
			
						this.uploadResult = await uni.uploadFile({
							url: this.serverUrl + '/uploadImage/',
							name: 'image',
							filePath: tempFilePaths1,
							success: (res) => {
								if (res.statusCode === 200) {
			
									alert('成功');
								} else {
									alert('失败');
								}
							},
							fail: (error) => {
								console.error('上传失败:', error);
								alert('上传失败');
							},
						});
					},
				},
			}
</script>

<style>
	.background-pic {
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 100vw;
	  height: 100vh;
	  object-fit: cover;
		z-index: -1; 
		filter: blur(5px); /* 模糊背景 */
		opacity: 0.99; /* 透明度降低 */  
	}
	/* 标题样式 */
	.title {
		font-size: 36px;
		font-weight: bold;
		color: #FF4B4B;
		/* 国庆红 */
		text-align: center;
		margin-top: 20px;
		/* 动画效果 */
		    opacity: 0;
		    transform: translateY(30px);
		    animation: fadeInUp 1s ease forwards; /* 1秒内完成动画 */
	}
	/* 文本容器样式 */
	.word {
		font-size: 18px;
	    line-height: 0.8;
	    text-align: center;
	    margin: auto;
	    max-width: 90%;
	    
	    /* 动画效果 */
	    opacity: 0;
	    transform: translateY(30px);
	    animation: fadeInUp 1s ease 0.5s forwards; /* 延迟0.5秒开始动画 */
	}
	
	/* 每段文本样式 */
	.word test {
	    display: block;
	    font-size: 20px;
	    /*font-weight: 500;*/
	    color: #333;
	    
	    /* 动画效果 */
	    opacity: 0;
	    transform: translateY(30px);
	    animation: fadeInUp 1s ease 1s forwards; /* 延迟1秒开始动画 */
	}
	
	/* 重点文本样式 */
	.word test:nth-child(1) {
	    font-size: 20px;
	    color: #000000;
	    animation-delay: 1.5s; /* 延迟1.5秒 */
	}
	
	.word test:nth-child(2),
	.word test:nth-child(3) {
	    font-size: 20px;
	    color: #333;
	    font-weight: normal;
	    animation-delay: 2s; /* 延迟2秒 */
	}
	
	/* 动画关键帧 */
	@keyframes fadeInUp {
	    0% {
	        opacity: 0;
	        transform: translateY(30px); /* 初始状态向下偏移 */
	    }
	    100% {
	        opacity: 1;
	        transform: translateY(0); /* 最终位置 */
	    }
	}
	/* 文字样式 */
	.uni-h6 {
		font-size: 10px;
		line-height: 1.8;
		/* 增加行间距 */
		color: #444;
		/* 使用更柔和的黑色 */
		text-align: center;
		margin-bottom: 20px;
	}

	/* 容器样式 */
	.container,
	.container2 {
		padding: 20px;
		background-color: #F5F5F5;
		border-radius: 10px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		margin: 20px auto;
		width: 90%;
	}

	/* 文件选择器样式 */
	.uni-file-picker {
		margin: 20px 0;
		border: 2px dashed #FFA64B;
		border-radius: 10px;
		padding: 10px;
		background-color: #FFF3E0;
	}
	.floating-button0 {
		position: fixed;
		bottom: 30px;
		left: 30px;
		width: 70px;
		height: 70px;
		background-color: #FF4B4B;
		color: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
		cursor: pointer;
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		z-index: 1000;
		/* 确保按钮在最上层 */
	}
	.floating-button {
		position: fixed;
		bottom: 30px;
		right: 30px;
		width: 70px;
		height: 70px;
		background-color: #FF4B4B;
		color: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
		cursor: pointer;
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		z-index: 1000;
		/* 确保按钮在最上层 */
	}

	.floating-button:hover {
		transform: scale(1.1);
		/* 悬浮时放大 */
		box-shadow: 0 6px 16px rgba(255, 75, 75, 0.4);
	}

	/* 画中画上传页面 */
	.modal {
		display: none;
		/* 默认隐藏 */
		position: fixed;
		bottom: 100px;
		right: 50px;
		width: 500rpx;
		height: 650rpx;
		background-color: white;
		border-radius: 15px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
		z-index: 999;
		/* 确保画中画页面显示在悬浮按钮上 */
		padding: 20px;
		transition: opacity 0.3s ease, transform 0.3s ease;
		opacity: 0;
		/* 初始状态透明 */
		transform: translateY(50px);
		/* 初始状态向下偏移 */
	}

	.modal.active {
		display: block;
		opacity: 1;
		transform: translateY(0);
		/* 显示时平移到原始位置 */
	}

	.modal-header {
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 15px;
		text-align: center;
	}

	.modal-body {
		text-align: center;
	}

	/* 关闭按钮 */
	.close-btn {
		position: absolute;
		top: 10px;
		right: 10px;
		cursor: pointer;
		font-size: 18px;
		color: #888;
	}

	.close-btn:hover {
		color: #FF4B4B;
	}
</style>
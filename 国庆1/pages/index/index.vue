<template>
	<view class="title">喜迎国庆</view>
	<view>
			<text class="uni-h6">张灯结彩欢度国庆佳节<br>锦绣中国，盛世华诞，举国同庆<br>热烈庆祝中国人民共和国成立75周年</text>
			<uni-section title="上传图片" type="line">
				<view class="example-body">
					<uni-file-picker 
					:mode="grid"
					:auto-upload="false" 
					limit="9" 
					title="最多选择9张图片"></uni-file-picker>
				</view>
			</uni-section>
		<button @click="uploadImages()">打卡</button>
		<view v-if="id != 0">{{'你是第 ' + id + '个'}}</view>
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
		                <uni-file-picker 
		                    :mode="grid"
		                    :auto-upload="false" 
		                    limit="1" 
		                    title="最多选择1张图片"
		                ></uni-file-picker>
		                <button @click="uploadWeibo()">上传微博</button>
		            </view>
					<text class="uni-h6">是否参与微博上传，若参与，上传参与截图</text>
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
				 isModalVisible: false,
			}
		},
		methods: {
			toggleModal() {
			            this.isModalVisible = !this.isModalVisible;
			        },
			        uploadImage() {
			            // 上传图片逻辑
			        },
			async handleSelect(res) {
			  const tempFilePaths = res.tempFilePaths;
			  await this.uploadImages(tempFilePaths);
			},
			async handleSelect1(res) {
			  const tempFilePaths1 = res.tempFilePaths;
			  await this.uploadWeibo(tempFilePaths1);
			},
			async uploadImages(tempFilePaths) {
			for (let filePath of tempFilePaths) {
							 const uploadResult = await uni.uploadFile({
								url: this.serverUrl + '/uploadImage/',
								name: 'image',
								filePath: filePath,
								success: (res) => {
									if (res.statusCode === 200) {
										this.id = res.data.id;
										alert('成功');
									} else alert('失败');
								},
								fail: (error) => {
									alert('失败');
								},
							});
							}
							},
			  // 使用Promise.all来并行处理所有的上传Promise
			 
			async uploadWeibo(tempFilePaths1) {
				
				 const uploadResult = await uni.uploadFile({
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
				            alert('失败');
				          },
				        });
			},
		},
	}
</script>

<style>
/* 标题样式 */
.title {
    font-size: 36px;
    font-weight: bold;
    color: #FF4B4B; /* 国庆红 */
    text-align: center;
    margin-top: 20px;
    animation: fadeIn 2s ease-in-out; /* 淡入动画 */
}

/* 文字样式 */
.uni-h6 {
    font-size: 18px;
    line-height: 1.8; /* 增加行间距 */
    color: #444; /* 使用更柔和的黑色 */
    text-align: center;
    margin-bottom: 20px;
}

/* 容器样式 */
.container, .container2 {
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
    z-index: 1000; /* 确保按钮在最上层 */
}

.floating-button:hover {
    transform: scale(1.1); /* 悬浮时放大 */
    box-shadow: 0 6px 16px rgba(255, 75, 75, 0.4);
}

/* 画中画上传页面 */
.modal {
    display: none; /* 默认隐藏 */
    position: fixed;
    bottom: 100px;
    right: 50px;
    width: 300px;
    height: 400px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    z-index: 999; /* 确保画中画页面显示在悬浮按钮上 */
    padding: 20px;
    transition: opacity 0.3s ease, transform 0.3s ease;
    opacity: 0; /* 初始状态透明 */
    transform: translateY(50px); /* 初始状态向下偏移 */
}

.modal.active {
    display: block;
    opacity: 1;
    transform: translateY(0); /* 显示时平移到原始位置 */
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
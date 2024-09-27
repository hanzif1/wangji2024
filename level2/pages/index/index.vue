<template>
	<template>
		<view class="container">
			<uni-card :is-shadow="false" is-full>
				<text class="uni-h6">文件选择上传组件，可以选择图片、视频等任意文件并上传到当前绑定的服务空间。</text>
			</uni-card>
			<uni-section title="只选择图片" type="line">
				<view class="example-body">
					<uni-file-picker limit="9" title="最多选择9张图片"></uni-file-picker>
				</view>
			</uni-section>
			<uni-section title="只选择视频" type="line">
				<view class="example-body">
					<uni-file-picker limit="9" file-mediatype="video" title="最多选择9个视频"></uni-file-picker>
				</view>
			</uni-section>
	
	
			<!-- #ifdef H5 || MP-WEIXIN -->
			<uni-section title="选择任意文件" type="line">
				<view class="example-body">
					<uni-file-picker limit="5" file-mediatype="all" title="最多选择5个文件"></uni-file-picker>
				</view>
			</uni-section>
			<!-- #endif -->
	
			<uni-section title="自定义图片大小" type="line">
				<view class="example-body custom-image-box">
					<text class="text">选择头像</text>
					<uni-file-picker limit="1" :del-icon="false" disable-preview :imageStyles="imageStyles"
						file-mediatype="image">选择</uni-file-picker>
				</view>
			</uni-section>
	
			<uni-section title="自定义图片大小" type="line">
				<view class="example-body ">
					<uni-file-picker readonly :value="fileLists" :imageStyles="imageStyles" file-mediatype="image">
					</uni-file-picker>
					<uni-file-picker readonly :value="fileLists" :listStyles="listStyles" file-mediatype="all">
					</uni-file-picker>
				</view>
			</uni-section>
	
		</view>
	</template>

</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
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
		color: #8f8f94;
	}
</style>

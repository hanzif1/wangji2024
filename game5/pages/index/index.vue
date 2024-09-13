<template>
	<view class="content" >
		<view class="header">
			<text>\n第 {{levelNumber}} 关啦</text>
		</view>
		<view class="main">
			<image src="/static/OK/a.png"
				style="position: relative; left: 0; top: 0; height: 900rpx; width:100% ;" mode:aspectFit />
			<image src="/static/OK/b.png" class="important"></image>
			<image src="/static/OK/c.png" class="notimportant"></image>
		</view>
		<view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				levelNumber: "五",
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
    .content{
		height: 900rpx;
		width:100%;
	}
	.important{
		position:relative;
		top:-423rpx;
		left:485rpx;
		width:120rpx;
		height:200rpx;
	}
	.notimportant{ 
		position:relative;
		top:-550rpx;
		left:110rpx; 
		width:200rpx;
		height:200rpx; 
		}
</style>

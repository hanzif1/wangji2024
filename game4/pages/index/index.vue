<template>
	<view class="content" >
		<view class="header">
			<text>\n第 {{levelNumber}} 关啦</text>
		</view>
		<view class="main">
			<image src="/static/New Folder/main.jpg" class="img" mode="aspectFill" ></image>
			<image :src="currentimage" mode="aspectFill" class="clock" @click="changeimage"></image>
			<view class="text">
				{{the_text}}
			</view>
		</view>
		=
	</view>
</template>

<script>
	export default {
		data() {
			return {
				levelNumber: "四",
				imgindex:0,
				images: ['/static/New Folder/图片2.png',
					'/static/New Folder/图片3.png',
					'/static/New Folder/图片4.png',
					'/static/New Folder/图片5.png',
					'/static/New Folder/图片1.png',
				],
				currentimage: '',
				the_text:"",
				texts:["别想打扰我学数学的心","别想打扰我学数学的心","别想打扰我学数学的心","别想打扰我学数学的心","什么？！军爷要下训了，快冲去吃饭！"]

			}
		},
		onLoad() {
			this.currentimage=this.images[this.imgindex];
			this.the_text=this.texts[this.imgindex];
		},
		methods: {
			changeimage(){
				this.imgindex=(this.imgindex+1)%this.images.length;
				this.currentimage=this.images[this.imgindex];
				this.the_text=this.texts[this.imgindex];
				 if (this.imgindex === 4) { 
				      setTimeout(() => {
				        alert('恭喜！顺利通过第四关~~');
				      }, 500); 
				    }
			}
		}
	}
</script>

<style>
	.spare {
		height: 100%;
	}

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
	.img{
		position: relative;
		 left: 0; 
		 top: 0; 
		 height: 1100rpx; 
		 width:100% ;
	}
	.text{
		position: relative;
		bottom: 240rpx;
		width:500rpx;
		
		text-align: center;
		background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);
		border-radius: 20rpx;
		margin-left: auto;
		  margin-right: auto;
	}
</style>
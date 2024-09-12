<template>

	<view class="content">

		<swiper class="swiper" circular autoplay interval="2000" indicator-dots="true" indicator-color=white
			indicator-active-color=pink>
			<swiper-item class="item">
				<image src="https://img.micosliang.space/cyonline/junxun/articles/desk.jpg" mode="aspectFill"></image>
			</swiper-item>

			<swiper-item class="item">
				<image src="/static/0459.jpg_wh860.jpg" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item class="item">
				<image src="/static/E-1132660-E49E79CB.jpg" mode="aspectFill"></image>
			</swiper-item>

		</swiper>


		<view class="a">
			<scroll-view class="scroll" scroll-y scroll-x>
				<view class="group">
					<view class=""
						v-for="(item,index) in ['军训要闻', '军训侧记',  '军训临时党支部建设', '领导风采', '总教练及常委风采', '记者排主高编风采']"
						:key="index">
						<h1 class="h1">
							{{item}}
						</h1>
						<view class="item">
							<ul>
								<li class="li" v-for="(se, si) in objects[index]" :key="si" @click="tiaozhuan(se)">
									{{se.title}}
								</li>
							</ul>
						</view>
					</view>
				</view>

			</scroll-view>
		</view>

	</view>
</template>

<script>
	const object = require('@/static/new_file.json');
	export default {
		data() {
			return {
				objects: [
					[],
					[],
					[],
					[],
					[],
					[]
				],
			}
		},
		onLoad() {
			console.log(this.objects);
			for (let x of object) {
				this.objects[x.mode - 1].push(x); //???
			}
		},
		methods: {
			open(url) {
				window.open(url);
			},
			tiaozhuan(item) {
				if (item.url) {
					open(item.url);
				} else {
					const itemString = JSON.stringify(item);
					// const encodedItem = encodeURIComponent(JSON.stringify(itemString));
					uni.navigateTo({
						url: `/pages/text/text?item=${itemString}`
					});
				}
			},
		},
	}
</script>

<style lang="scss">
	.swiper {
		height: 600rpx;

		.item {
			image {
				width: 100%;
				height: 600rpx;


			}
		}
	}

	.scroll {
		height: 1000rpx;
		border: 1px solid red;
		box-sizing: border-box;


		.group {
			white-space: nowrap;
			display: flex;
			justify-content: space-around;
			align-content: center;



			.item {
				width: 600rpx;
				height: 1100rpx;
				background: lightgreen;
				display: inline-block;
				margin-right: 35rpx;
				box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
				margin-top: 20rpx;
				border-radius: 20rpx;

			}
		}
	}

	li {
		cursor: pointer;

		color: deeppink;
		overflow: hidden;
		/* 隐藏超出的内容 */
		
		/* 不允许文本换行 */
		text-overflow: ellipsis;
		/* 用省略号表示超出部分 */
		margin-bottom: 25rpx;
		border-bottom: 3rpx solid tan;
	}

	li:hover {
		background-color: navajowhite;

	}

	.content {
		background-color: #FFE0B2;
	}
</style>
<template>
	<view class="content">
		<uni-nav-bar :left-icon="isBack" height="150rpx" @click="toHome()">
			<!-- <text class="title">兰州大学本科新生军训昆昆网</text> -->
			<image class="headimg" src="https://img.picui.cn/free/2024/09/03/66d707b7be8b2.png"></image>
		</uni-nav-bar>
		<uni-notice-bar show-icon text="我瞎写的 别骂了 /kk" />
		<view v-if="indexMod">
			<swiper class="swiper" indicator-dots autoplay>
				<swiper-item>
					<img src="https://img.micosliang.space/cyonline/junxun/articles/desk.jpg"></img>
				</swiper-item>
				<swiper-item>
					<img src="https://img.micosliang.space/cyonline/junxun/articles/17/1.jpg"></img>
				</swiper-item>
				<swiper-item>
					<img src="https://img.micosliang.space/cyonline/junxun/articles/14/4.jpg"></img>
				</swiper-item>
				<swiper-item>
					<img src="https://img.micosliang.space/cyonline/junxun/articles/14/1.jpg"></img>
				</swiper-item>
			</swiper>

			<view class="kk">
				<view class="ars">
					<view v-for="(item, index) in old_artis">
						<uni-card id="cards" :title="item.title" :extra="item.src" @click="displayPage(index)"
							v-if="index + 1 > (currentPage - 1) * 9 && index + 1 <= currentPage * 9">
							<text class="text-body" v-if="item.parts">{{item.parts[0].v}}</text>
							<text class="text-body"
								v-else-if="item.content">我们注意到，当前版本的页面在某些功能上存在不足，特别是缺乏对摘要信息的支持。我们深知摘要对于快速传达内容要点的重要性，因此我们正在积极努力改进。感谢您的耐心和理解。</text>
							<text
								v-else>请注意，本文链接指向的内容位于微信公众号，因此您需要通过打开微信公众号查看完整文章。请点击相应的链接，它将引导您至微信公众号，以便您能够阅读更多精彩内容。为什么会这样，请问学长。</text>
						</uni-card>
					</view>
					<uni-pagination :total="num" :current="currentPage" :page-size="pagesize" @change="onPageChange"
						prev-text="前一页" next-text="后一页" style="width: 100%;" />
				</view>
				<uni-group title="文章分类" mode="card">
					<uni-collapse>
						<view v-for="c in groups">
							<uni-collapse-item :title="c">
								<ul>
									<view v-for="(item, index) in old_artis">
										<li class="arli" v-if="item.src == c" @click="displayPage(index)">{{item.title}}</li>
									</view>
								</ul>
							</uni-collapse-item>
						</view>
					</uni-collapse>
				</uni-group>
			</view>
		</view>
		<view v-else class="pageDisplayer">
			<uni-card>
				<view v-if="old_artis[nowPageId].content" v-html="old_artis[nowPageId].content"></view>
				<view v-else>
					<h1>{{old_artis[nowPageId].title}}</h1>
					<uni-breadcrumb separator="/" style="margin-bottom: 1em;">
						<uni-breadcrumb-item>
							{{old_artis[nowPageId].time}}
						</uni-breadcrumb-item>
						<uni-breadcrumb-item>
							{{old_artis[nowPageId].src}}
						</uni-breadcrumb-item>
						<uni-breadcrumb-item>
							{{old_artis[nowPageId].author}}
						</uni-breadcrumb-item>
					</uni-breadcrumb>
					<!-- <text class="detail">
						{{old_artis[nowPageId].time + ' ' + old_artis[nowPageId].author + ' ' + old_artis[nowPageId].src}}
					</text> -->
					<view v-for="(c, index) in old_artis[nowPageId].parts" class="textFlex">
						<text v-if="c.t=='p'" class="mess">{{c.v}}</text>
						<image v-else :src="c.v"></image>
					</view>
				</view>
			</uni-card>
		</view>
	</view>
</template>
<!-- <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> -->
<script>
	import artis from '/static/articles.json'
	var map = {};
	var srcs = [];
	for (let c in artis) {
		map[artis[c].src] = 1;
	}
	for (let c in map) {
		srcs.push(c);
	}
	export default {
		data() {
			return {
				old_artis: artis,
				groups: srcs,
				num: artis.length,
				currentPage: 1,
				pagesize: 9,
				indexMod: 1,
				nowPageId: 0,
				isBack: "fire"
			}
		},
		methods: {
			onPageChange: function(e) {
				this.currentPage = e.current;
				console.log(this.currentPage);
			},
			open: function() {
				// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
				this.$refs.popup.open('top')
			},
			displayPage: function(i) {
				if (this.old_artis[i].url) {
					window.open(this.old_artis[i].url);
					return;
				}
				this.indexMod = 0;
				this.nowPageId = i;
				this.isBack = "arrow-left"
			},
			toHome: function() {
				this.indexMod = 1;
				this.isBack = "fire"
			}
		}
	}
</script>

<style lang="scss">
	.content {
		.title {
			font-size: 2em;
			margin-top: auto;
			margin-bottom: auto;
		}

		.pageDisplayer {
			width: 80%;
			margin: auto;
			.textFlex {
				display: flex;
				justify-content: center;
			}
			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				color: #000;
				line-height: 1.2;
				margin-bottom: 0.5em;
			}

			h1 {
				font-size: 2em;
				/* 标题大小 */
			}

			h2 {
				font-size: 1.5em;
			}

			h3 {
				font-size: 1.17em;
			}

			/* 段落样式 */
			uni-text.mess {
				margin-bottom: 1em;
				/* 段落下边距 */
				font-size: 1.3em;
				line-height: 1.5em;
				color: #000,
			}


		}

		#cards {
			width: 20em;
		}

		image.headimg {
			height: 150rpx;
			width: 750rpx;
		}

		.swiper {
			height: 800rpx;

			img {
				width: 100%;
				object-fit: cover;
			}
		}

		.arli {
			width: 100%;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}

		.kk {
			width: 90%;
			margin: auto;

			.ars {
				float: left;
				width: 75%;
				display: flex;
				flex-wrap: wrap;

				.ball {
					width: 60px;
					height: 60px;
					margin: 50px auto;
					position: relative;
				}

				.ball>div {
					position: absolute;
					background-color: #279fcf;
					width: 15px;
					height: 15px;
					border-radius: 100%;
					margin: 2px;
					animation: ball infinite both 1s;
				}

				.ball>div:nth-child(1) {
					top: -15px;
					left: 0px;
				}

				.ball>div:nth-child(2) {
					top: -4px;
					left: 16px;
					animation-delay: 0.17s;
				}

				.ball>div:nth-child(3) {
					top: 17px;
					left: 15px;
					animation-delay: 0.34s;
				}

				.ball>div:nth-child(4) {
					top: 18px;
					left: -8px;
					animation-delay: 0.51s;
				}

				.ball>div:nth-child(5) {
					top: 0px;
					left: -13px;
					animation-delay: 0.68s;
				}

				@keyframes ball {
					0% {
						-webkit-transform: scale(1);
						transform: scale(1);
					}

					50% {
						-webkit-transform: scale(0.5);
						transform: scale(0.5);
						opacity: 0.7;
					}

					100% {
						-webkit-transform: scale(1);
						transform: scale(1);
						opacity: 1;
					}
				}

				.text-body {
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 5;
					-webkit-box-orient: vertical;
				}


			}

			.list {
				float: right;
			}
		}
	}
</style>
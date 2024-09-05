<template>
	<view>
		<span class="title">兰州大学本科生军训昆仑网</span>
		<span>
			<nav>
				<view class="title2">
					<view><a href="https://www.lzu.edu.cn">兰州大学</a></view>
					<view><a href="www.baidu.com">军训要闻</a></view>
					<view><a href="www.baidu.com">军训通知</a></view>
					<view><a href="www.baidu.com">军训侧记</a></view>
					<view><a href="https://zzb.lzu.edu.cn">军训临时支部建设</a></view>
				</view>
			</nav>
		</span>
	</view>
	<view class="bigbigbox">
		<swiper class="bigbox" indicator-dots autoplay>
			<swiper-item>
				<image src="https://img.micosliang.space/cyonline/junxun/articles/desk.jpg" aspectFill></image>
			</swiper-item>
			<swiper-item>
				<image aspectFill
					src="https://mmbiz.qpic.cn/mmbiz_jpg/n25icv4iaMwciaz2xRtj16VYf22R6YM5VrhJztINns8Tw2V2t5xo2a9jusFZ4Wribu1GwyvwH8mjaVJc8NDZAG5ZAA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1">
				</image>
			</swiper-item>
			<swiper-item>
				<image aspectFill
					src="https://i1.hdslb.com/bfs/archive/e6c5f68a9ec5a7dc9d1dc0b13b4c312c412058b0.png@336w_190h_1c_!web-video-rcmd-cover.avif">
				</image>
			</swiper-item>
		</swiper>
	</view>

	<view class="container">
		<view class="section1"><view>军训要闻</view>
			<view class="content" v-for="(item,index) in list" :key="index">
				<view v-if="item.mode===0" class="titlebox">
					{{item.title}}
					{{item.time}}
				</view>
			</view>
		</view>
		<view class="section2"><view>军训通知</view>
			<view class="content" v-for="(item,index) in list" :key="index">
				<view class="titlebox" v-if="item.mode===2">
					{{item.title}}
					{{item.time}}
				</view>
			</view>
		</view>
		<view class="section3">军训临时支部建设
			<view class="content" v-for="(item,index) in list" :key="index">
				<view class="titlebox" v-if="item.mode===1">
					{{item.title}}
					{{item.time}}
				</view>
			</view>
		</view>
		<view class="section4">军训侧记
			<view class="content" v-for="(item,index) in list" :key="index">
				<view class="titlebox" v-if="item.mode===3">
					{{item.title}}
					{{item.time}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						title: "党旗在军训场地高高飘扬——四营十一连临时党支部召开第一次支部大会",
						uid: 1,
						time: "2023-09-08",
						mode: 0,
						url: "https://mp.weixin.qq.com/s/qaEB0tQyjExvuPLw80MZcA",
					},
					{
						title: "先锋培养丨党旗在军训场地高高飘扬（一）",
						uid: 2,
						time: "2023-09-08",
						mode: 0,
						url: "https://mp.weixin.qq.com/s/1rCdjrJlcII0IBUWP2ahLQ",
					},
					{
						title: "关于成立本科生军训临时党支部的通知",
						uid: 3,
						time: "2023-09-03",
						mode: 1,
						url: "https://zzb.lzu.edu.cn/bumengongzuo/bumentongzhi/2023/0903/226838.html"
					},
					{
						title: "党旗扬军营——四营十连临时党支部扎实做好军训期间教育服务工作",
						uid: 4,
						time: "2023-09-10",
						mode: 0,
						url: false,
					},
					{
						title: "厚植爱国情怀，坚定理想信念——军训团四营十一连临时党支部开展主题党日活动",
						uid: 5,
						time: "2023-09-10",
						mode: 0,
						url: "https://mp.weixin.qq.com/s/hVKcQmLDrBGzCVUEFt_yAw",
					},
					{
						title: "党旗飘扬||军训场上的思政课",
						uid: 6,
						time: "2023-09-12",
						mode: 2,
						url: "https://mp.weixin.qq.com/s/jVT4pPLsE3fwC0HG9h_HBw",
					},
					{
						title: "本科生军训团四营十一连临时党支部召开第一次支部大会",
						uid: 7,
						time: "2023-09-12",
						mode: 2,
						url: "https://news.lzu.edu.cn/c/202309/104869.html",
					},
					{
						title: "2023级本科生“红色课堂进军营，爱国情怀强担当”微党课活动",
						uid: 8,
						time: "2023-09-12",
						mode: 2,
						url: "https://mp.weixin.qq.com/s/epc1saUmqQgdX19rwG1G4g",
					},
					{
						title: "军训是真正的蜕变",
						uid: 9,
						time: "2023-09-12",
						mode: 2,
						url: false,
					},
					{
						title: "支部共建展风采、党史竞答促提升",
						uid: 10,
						time: "2023-09-12",
						mode: 0,
						url: false,
					},
					{
						title: "临时党支部发挥战斗堡垒作用，引领学生展现青春风采",
						uid: 11,
						time: "2023-09-13",
						mode: 2,
						url: false,
					},
					{
						title: "找寻青春的颜色--以党��创新理论引领青年",
						uid: 12,
						time: "2023-09-13",
						mode: 2,
						url: false,
					},
					{
						title: "培养国防意识，助力学生成长--一营一连临时党支部为军训增光添彩",
						uid: 13,
						time: "2023-09-13",
						mode: 2,
						url: false,
					},
					{
						title: "党旗飘扬耀四方，青春无悔永相随",
						uid: 14,
						time: "2023-09-14",
						mode: 1,
						url: false,
					},
					{
						title: "党旗飘扬||“路在脚下，行稳致远”思政宣讲活动顺利开展",
						uid: 15,
						time: "2023-09-15",
						mode: 2,
						url: "https://mp.weixin.qq.com/s/c1jiyo2OHlDnLh_IdRfADg",
					},
					{
						title: "校领导和生态学院慰问参训连队",
						uid: 16,
						time: "2023-09-17",
						mode: 0,
						url: false,
					},
					{
						title: "“学党史，铸军魂”——三营七连临时党支部开展党史宣传教育",
						uid: 17,
						time: "2023-09-20",
						mode: 0,
						url: false,
					},
					{
						title: "关于开展2024级学生军训工作的通知",
						uid: 18,
						time: "2024-08-31",
						mode: 3,
						url: false,
					},
					{
						title: "2024级学生军训军训教官与带队教师编排表",
						uid: 19,
						time: "2024-08-31",
						mode: 3,
						url: false,
					},
					{
						title: "2024级学生军训营连排编制表",
						uid: 20,
						time: "2024-08-30",
						mode: 3,
						url: false,
					},
					{
						title: "关于成立兰州大学2024年本科生军训临时党支部的通知",
						uid: 21,
						time: "2024-08-30",
						mode: 1,
						url: false,
					}
				],
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.titlebox {
		padding: 15px;
	}

	.bigbigbox {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.bigbox {
		width: 100vw;
		height: 50vh;
	}

	.title {
		display: flex;
		justify-content: center;
		background-color: lightblue;
		font-size: 70rpx;
	}

	.title2 {
		display: flex;
		justify-content: space-around;
		background-color: lightblue;
		font-size: 40rpx;
	}

	nav view {
		list-style-type: none;
		/* 移除列表前的默认符号 */
		padding: 0;
		margin: 0;
		background: lightblue;
		display: flex;
		justify-content: space-around;
	}

	nav li {
		padding: 10px;
		/* 给列表项添加一些内边距 */
	}

	nav a {
		text-decoration: none;
		/* 移除链接的下划线 */
		color: black;
		display: inline-block;
	}

	nav a:hover {
		text-decoration: underline;
	}

	image {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.container {
		background-color: #ffffff;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
	}

	.section1.section2.section3.section4 {
		margin-bottom: 20px;
		width: 45%;
	}

	h5 {
		font-size: 18px;
		color: #333;
		margin-bottom: 10px;
	}

	.content {
		background-color: #f0f0f0;
		border-radius: 5px;
		font-size: 30rpx;
		margin-bottom: 10px;
	}
</style>
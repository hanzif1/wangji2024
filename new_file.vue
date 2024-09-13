<template>
	<view>
		<view>
			<view class="aaa">
				<view class="l">
					兰州大学本科新生军训网
				</view>
				<view class="header">
				  <view><a href="https://www.lzu.edu.cn/">兰州大学</a></view>
				  <view><a href="https://www.lzu.edu.cn/">军训通知</a></view>
				  <view><a href="https://www.lzu.edu.cn/">军训要闻</a></view>
				  <view><a href="https://www.lzu.edu.cn/">军训侧记</a></view>
				  <view><a href="https://www.lzu.edu.cn/">军训临时党支部建设</a></view>
				</view>
			</view>
		</view>
		<view class="notice">
			<view class="left">
				<uni-icons type="sound-filled" size="20" color="#28b389"></uni-icons>
				<text class="text">公告</text>
			</view>
			<view class="center">
				<swiper class="swiper2" vertical autoplay interval="2500" duration="300" circular>
					<swiper-item v-for="(item, index) in items">
					{{ item.message }}</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="right" size="16" color="#333"></uni-icons>
			</view>
		</view>
		<view class="swiperbox" >
			<swiper indicator-dots circular autoplay style="width: 800rpx; height: 600rpx;display: flex;align-items: center;justify-content: center">
				<swiper-item><image src="../zhaopian/微信图片_20240903191840.jpg" ></image></swiper-item>
				<swiper-item><image src="../zhaopian/微信图片_20240903192028.jpg" ></image></swiper-item>
				<swiper-item><image src="../zhaopian/微信图片_20240903192033.jpg" ></image></swiper-item>
				<swiper-item><image src="../zhaopian/微信图片_20240903192036.jpg" ></image></swiper-item>
			</swiper>
		</view>
		<scroll-view scroll-y="true" class="a">
				<view class="title">军训临时党支部建设</view>
    			<view class="content"><a href="https://mp.weixin.qq.com/s/3uZiYDlJsjQpedQYExtedg">心中有党，路上有光——二营七连临时党支部召开新生入党启蒙教育大会</a></view>
				<view class="content"><a href="https://cyonline.lzu.edu.cn/junxun-articles/article.html?t=17">“学党史，铸军魂”——三营七连临时党支部开展党史宣传教育</a></view>
				<view class="content"><a href="https://cyonline.lzu.edu.cn/junxun-articles/article.html?t=16">校领导和生态学院慰问参训连队</a></view>
				<view class="content"><a href="https://cyonline.lzu.edu.cn/junxun-articles/article.html?t=10">支部共建展风采、党史竞答促提升</a></view>
				<view class="content"><a href="https://mp.weixin.qq.com/s/hVKcQmLDrBGzCVUEFt_yAw">厚植爱国情怀，坚定理想信念——军训团四营十一连临时党支部开展主题党日活动</a></view>
				<view class="content"><a href="https://cyonline.lzu.edu.cn/junxun-articles/article.html?t=4">党旗扬军营——四营十连临时党支部扎实做好军训期间教育服务工作</a></view>
				<view class="content"><a href="https://mp.weixin.qq.com/s/1rCdjrJlcII0IBUWP2ahLQ">先锋培养丨党旗在军训场地高高飘扬（一）</a></view> 
				<view class="content"><a href="https://mp.weixin.qq.com/s/qaEB0tQyjExvuPLw80MZcA">党旗在军训场地高高飘扬——四营十一连临时党支部召开第一次支部大会</a></view>
		</scroll-view>
		<scroll-view scroll-y="true" class="b">
			<view class="title">军训要闻</view>
 			<view class="content"><a href="https://cyonline.lzu.edu.cn/junxun-articles/article.html?t=25">赓续红色血脉，厚植爱国情怀——军训团一营一连、二连、三连、四连临时党支部联合开展理论宣讲活动</a></view>
 			<view class="content"><a href="https://cyonline.lzu.edu.cn/junxun-articles/article.html?t=26">三营排以上干部会议纪要及会后采访稿</a></view>
 			<view class="content"><a href="https://zzb.lzu.edu.cn/bumengongzuo/bumentongzhi/2024/0830/274102.html">关于成立兰州大学2024年本科生军训临时党支部的通知</a></view>
		</scroll-view>
		<scroll-view scroll-y="true" class="c">
			<view class="title">军训侧记</view>
 			<view class="content"><a href="https://mp.weixin.qq.com/s/MreLdvYODxzxbBzcUZM3CQ">学校领导慰问参训师生及教官</a></view>
 			<view class="content"><a href="https://cyonline.lzu.edu.cn/junxun-articles/article.html?t=21">军训看点——兰州大学顺利举办2024级本科生军训</a></view>
 			<view class="content"><a href="https://mp.weixin.qq.com/s/c1jiyo2OHlDnLh_IdRfADg">党旗飘扬||“路在脚下，行稳致远”思政宣讲活动顺利开展</a></view>
			<view class="content"><a href="https://cyonline.lzu.edu.cn/junxun-articles/article.html?t=13">培养国防意识，助力学生成长--一营一连临时党支部为军训增光添彩</a></view>
			<view class="content"><a href="https://cyonline.lzu.edu.cn/junxun-articles/article.html?t=12">找寻青春的颜色--以党的创新理论引领青年</a></view>
			<view class="content"><a href="https://cyonline.lzu.edu.cn/junxun-articles/article.html?t=11">临时党支部发挥战斗堡垒作用，引领学生展现青春风采</a></view>
			<view class="content"><a href="https://cyonline.lzu.edu.cn/junxun-articles/article.html?t=9">军训是真正的蜕变</a></view>
			<view class="content"><a href="https://mp.weixin.qq.com/s/epc1saUmqQgdX19rwG1G4g">2023级本科生“红色课堂进军营，爱国情怀强担当”微党课活动</a></view>
		</scroll-view>
		<scroll-view scroll-y="true" class="d">
			<view class="title">军训通知</view>
			<view class="content"><a href="https://cyonline.lzu.edu.cn/junxun-articles/article.html?t=20">2024级学生军训营连排编制表</a></view>
			<view class="content"><a href="https://cyonline.lzu.edu.cn/junxun-articles/article.html?t=19">2024级学生军训军训教官与带队教师编排表</a></view>
			<view class="content"><a href="https://cyonline.lzu.edu.cn/junxun-articles/article.html?t=18">关于开展2024级学生军训工作的通知</a></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// randomColor: this.getRandomColor(),
				items: [
						{ message: '欢迎付费观看新生军训' },
						{ message: '每个文档50k人民币' },
						{ message: '买不了吃亏买不了上当' },
					]
			}
		},
		onLoad() {
	
		},
		methods: {
			// getRandomColor() {
			//       const r = Math.floor(Math.random() * 256);
			//       const g = Math.floor(Math.random() * 256);
			//       const b = Math.floor(Math.random() * 256);
			//       return 'rgb(${r}, ${g}, ${b})';
	// 		    }
	
		}
	}
</script>


<style>
	*{
		box-sizing: border-box;
		margin:0;
		padding: 0;
	}
	.aaa{
	    display:flex;
	    align-items: center;
	    justify-content: space-between;
	    padding: 30px 5%;
	    background-color: #ff6060;
	    font-family: KaiTi;
	    font-size: 32px;
	    font-weight: 500;
	    color:red;
	    text-decoration: none;
	}
	a{
		font-family: KaiTi;
		font-size: 22px;
		font-weight: 500;
		color:yellow;
		text-decoration: none;
	}
	.header{
		font-family: KaiTi;
		font-size: 22px;
		font-weight: 500;
		color:#fdc629;
		text-decoration: none;
	}
	.title{
		font-family: KaiTi;
		font-size: 32px;
		font-weight: 500;
		color:white;
		text-decoration: none;
	}
	.header{
		list-style: none;
	}
	.header view{
		display:inline-block;
		padding: 0px,20px;
		margin:10px;
	}
	.header a{
		transition: all 0.3s ease 0s;
	}
	.header a:hover{
		color:blue
	}
    image {
		width:800rpx;
		height:600rpx;
		display: flex;
		border:2rpx solid forestgreen;
		justify-content: center;
		align-items:center;
		overflow: hidden; 
	}
	.swiperbox{
		display: flex;
		border:2rpx solid forestgreen;
		justify-content: center;
		align-items:center;
		width:100vw;
		height:auto;
	}
	.content{
		background-color: green;
		border-radius: 10px;
		padding:5px;
		line-height: 55px;
		margin:10px
	}
	.a{
		border: 6rpx double black;
		padding:20px 40px;
		margin:20rpx;
		width:95%;
		height:220px;
		background-color: red;
		line-height: 40px;
		.content{
			font-family: KaiTi;
			font-size: 22px;
			font-weight: 500;
			color:yellow;
			background-color:green;
		}
	}
	.b{
		border: 6rpx double black;
		padding:20px 40px;
		margin:20rpx;
		width:95%;
		height:220px;
		background-color: red;
		line-height: 40px;
		.content{
			font-family: KaiTi;
			font-size: 22px;
			font-weight: 500;
			color:yellow;
			background-color: green;
	    }
	}
	.c{
		border: 6rpx double black;
		padding:20px 40px;
		margin:20rpx;
		width:95%;
		height:220px;
		background-color: red;
		line-height: 40px;
		.content{
			font-family: KaiTi;
			font-size: 22px;
			font-weight: 500;
			color:yellow;
			background-color: green;
	    }
	}
	.d{
		border: 6rpx double black;
		padding:20px 40px;
		margin:20rpx;
		width:95%;
		height:220px;
		background-color: red;
		line-height: 40px;
		.content{
			font-family: KaiTi;
			font-size: 22px;
			font-weight: 500;
			color:yellow;
			background-color: green;
		}
	}
	image{
		position:absolute;
		width: 100%;
		height: 100%;
	}
	.l{
		display:flex;
		align-items: center;
		justify-content: space-between;
		padding: 40px 10%;
		background-color: #ff6060;
		font-family: KaiTi;
		font-size: 32px;
		font-weight: 500;
		color:#55d4e6;
		text-decoration: none;
	}
	.notice{
		width:100000000rpx;
		height:80rpx;
		line-height: 80rpx;
		background: #f9f9f9;
		margin:0 auto;
		border-radius: 80rpx;
		display: flex;
		.left{
			width:140rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			.text{
				color:#28b389;
				font-weight: 600;
				font-size: 28rpx;
			}
		}
		.center{
			flex:1; 
			swiper{
				height: 60rpx;
				&-item{
					height: 100%;
					font-size: 30rpx;
					color:#666;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
			}
		}
		.right{
			width:70rpx;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>

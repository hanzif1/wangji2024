<template>
	<view class="content fade-out">
		<view class="credits">
			<p>这个小游戏到这里呢就结束了，非常感谢大家游玩到这里。虽然我们只是一群刚接触编程的新手，但我们还是想尽力通过自己的努力，怀揣着满腔的热情与执着，在数不尽的深夜里打下一行行代码，妄图用这款粗糙的小游戏来记录我们的军训时光，来记住学长学姐手把手与我们一同前行的日子......  </p>
			<p><b>愿诸君都能够鹏北海，凤朝阳，又携书剑路茫茫。</b></p>    
			           
			                        <br /> 制作人名单：<br />
			吴晨阳<br />
			黄馨慧<br />
			马建川<br />
			李佳霖<br />
			张艺涵<br />
			黄昱嘉<br />
			以及全体学长学姐们<br /><br />
			特别鸣谢：<br /><br />
			<p class="sheji">设计部<br /></p>
		</view>
	</view>
</template>

<script>
	export default {
		mounted() {
			// 动画完成后跳转
			setTimeout(() => {
				this.$router.push('end').catch(err => {
      console.error(err);
    });
			}, 15000); 
		}
	}
</script>

<style lang="scss">
	@keyframes fadeOut {
		from {
			opacity: 1;
		}

		to {
			opacity: 0.4;
		}
	}

	.fade-out {
		animation: fadeOut 15s forwards;
		background-color: black;
		height:10000rpx
		/* 8秒内完成动画，并且保持结束状态 */
	}

	@keyframes scrollCredits {
		from {
			transform: translateY(80%);
		}

		to {
			transform: translateY(-60%);
		}
	}
	.credits {
	  animation: scrollCredits 25s linear forwards;
	  text-align: center;
	  background-color: black;
	  color:white;
	  height:1000rpx;
	}
	.sheji{
		font-size: 35rpx;
		font-weight: bold;
	}
</style>

<template>
	<view class="container">
		<input type="text" v-model="searchKeyword" placeholder="搜索..." @input="filterContent" class="input">

		<!-- 内容列表 -->
		<view v-for="(item, index) in filteredItems" :key="index" @click="tiaozhuan(item)" class="list">
			{{ item.title }}
		</view>
		<ul>
			<li v-for="(item, index) in items" :key="index" @click="tiaozhuan(item)">
				{{ item.title }}
			</li>
		</ul>
	</view>
</template>

<script>
	const object = require('@/static/new_file.json');
	export default {
		data() {

			return {
				searchKeyword: '', // 搜索关键词

				filteredItems: [], // 过滤后的内容列表
				items: object

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

					uni.navigateTo({
						url: `/pages/text/text?item=${itemString}`
					});
				}
			},
			filterContent() {
				// 根据搜索关键词过滤内容
				this.filteredItems = this.items.filter(object =>
					object.title.toLowerCase().includes(this.searchKeyword.toLowerCase()) 
					 // if (this.filteredItems ==items.title)
					 // {
						// this.filteredItems = [];
				 	// }
				);
			}
		},
		watch: {

			searchKeyword(new1) {
				  if (new1){
				  // if (new1 != null || new1 != undefined || new1 != ''){
					this.filterContent();
					}

			}
		},

	}
</script>

<style lang="scss">
	.container {

		background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
		height: 100%;
		width: 100%;
		border-radius: 80rpx;
	}

	li {
		cursor: pointer;
		margin-top: 50rpx;
		font-size: 50rpx;
		font-weight: bold;
	}

	li:hover {
		background-color: navajowhite;

	}

	.input {
		border-radius: 10px;
		border: none;
		padding: 10px 15px;
		height: 30px;
		width: 800px;
		margin-bottom: 10px;
		background-color: yellowgreen;
		display: block;
		/* 使input成为块级元素 */
		margin: 0 auto;
	}

	.list {
		display: block;
		margin: 0 auto;
		cursor: pointer;
		text-align: center;
		background-color: lightblue;
		width: 2000rpx;
		border-bottom: 1rpx solid lightpink;

	}

	.list:hover {
		background-color: navajowhite;
	}
</style>
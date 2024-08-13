<script setup></script>

<template>
	<div class="container">
		<div class="back-btn">
			<el-button
				@click="$router.go(-1)"
				type="danger">
				<span>
					<el-icon><Back /></el-icon>
				</span>
				返回主页
			</el-button>
		</div>
		<div class="atas">
			<div class="content-left">
				<div class="text title"><span style="color: #327792">《淡水小镇》 剧情概要</span></div>
				<br />
				<div class="text">我们人活著的时候，是不是每一个人都能明白生命的意义，每一分每一秒...</div>
				<br />
				<div class="text">每一颗星星都有一个故事。在这些星球里，有一个叫作「地球」的一颗星，地球上有个叫作「台湾」的小岛，岛上有一个小镇，我们把它叫作……「淡水」。</div>
				<br />
				<div class="text">
					淡水中描述一对青梅竹马的少年男女，从成长、结婚到离别的真情纪事，经历人生的况味，纵贯时代的记忆，最后当艾茉莉依恋的灵魂回到镇上，重温逝去的生活，才恍然生命的美好，「所有的事物都在运转不息，可是我们从不去注意…
				</div>
			</div>
			<div class="content-right">
				<div class="poster">
					<img
						style="width: 100%"
						src="../assets/poster.jpg"
						alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.container {
	height: 100vh;
	overflow: auto;
	.back-btn {
		position: fixed;
		right: 0;
		top: 0;
		margin: 20px;
	}

	.text {
		font-size: 20px;
		line-height: 1.5;
		text-align: left;
		font-family: "STSong";
		color: #fff;
	}

	.title {
		font-size: 24px;
		font-weight: bold;
	}

	.poster {
		align-items: center;
		width: 400px;
		height: 500px;
		background-color: #999;
	}

	.atas {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		padding: 20px;
		.content-left {
			padding: 20px;
			width: calc(100vw - 40px);
		}

		.content-right {
			padding: 20px;
		}
	}
}
</style>

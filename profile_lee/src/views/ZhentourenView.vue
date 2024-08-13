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
				<div class="text title"><span style="color: #327792">《枕头人》剧情概要</span></div>
				<br />
				<div class="text">“孩子代表了人民 ，或父母代表了政府？”</div>
				<div class="text">“不、这只是一个没有谜底的谜。”</div>
				<br />
				<div class="text">
					在一个阴冷的审讯室中，一位神秘的作家卡图兰，被突如其来的指控推向命运的边缘。几个孩子接连被害，而他们的死亡方式竟与卡图里安的黑暗短篇故事惊人地相似。在这场生死审问中，卡图兰被迫揭露自己内心深处那些令人不寒而栗的故事源头——一个充满暴力与扭曲的童年。
				</div>
				<br />
				<div class="text">
					与此同时，他智力受损的哥哥迈克尔被押入审讯室，他的天真与恐惧无意中将卡图兰推向了绝望的深渊。随着审讯的深入，兄弟间的血缘纽带与残酷的现实不断交织，故事与现实的界限逐渐模糊。
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

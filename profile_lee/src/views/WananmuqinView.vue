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
				<div class="content-right">
					<div class="text title"><span style="color: #327792">《晚安，母亲》</span></div>
					<br />
					<div class="text">“我要自杀，妈妈。”</div>
					<div class="text">“我没犯病，我很好。”</div>
					<div class="text">“终于等到身体已经好到有自杀的能力了”</div>
					<br />
					<div class="text">
						在一个平常的夜晚，女儿杰茜为自己设置了自杀倒计时。她要与母亲一起度过生命中最后的两小时。死亡就这样在平常的晚间生活中一分一秒静静的来到。女儿杰茜希望通过自杀获得自由，从被命运操控，变为命运的主宰，她对妈妈最后说了一句，“晚安了，妈妈”，一声枪响，一切尘埃落定。杰茜的自杀不是结束，而是一个新的开始。
					</div>
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

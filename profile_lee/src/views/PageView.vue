<script setup>
import poster1 from "@/assets/poster01.jpg"
import poster2 from "@/assets/poster02.jpg"
import poster3 from "@/assets/poster02.jpg"

const posterList = [
	{
		src: poster1,
		route: "/danshuixiaozhen",
		title: "《淡水小镇》",
	},
	{
		src: poster3,
		route: "/wananmuqin",
		title: "《晚安母亲》",
	},
	{
		src: poster2,
		route: "/zhentouren",
		title: "《枕头人》",
	},
]
</script>

<template>
	<div class="container">
		<div class="panel">
			<div class="paper">
				<!-- <div
					class="styleLine"
					style="border: none">
					<div class="styleCircleL"></div>
					<div class="styleCircleR"></div>
				</div> -->
				<div class="atas">
					<div class="content-left">
						<div class="text title">第20届戏剧与影像系布景课成果展</div>
						<div class="text title">
							<span style="color: #ff6600">妈妈在淡水小镇对枕头人说晚安</span>
						</div>
						<br />
						<div class="text">本次展览的名称巧妙地将三个组别的舞台作品：</div>
						<div class="text">《淡水小镇》《枕头人》《晚安，母亲》融合在一起，构筑了一个独特的艺术空间，欢迎您走入这三重截然不同却又紧密相连的戏剧世界。</div>
						<br />
						<div class="text title">展览主题与理念</div>
						<br />
						<div class="text">
							展览通过三个舞台布景的呈现，探索了人性、情感与社会阴影之间的复杂关系。在这场视觉盛宴中，您将看到学生们以不同的艺术风格和视角，对社会、家庭与个人心灵的深刻解读。
						</div>
						<br />
						<div class="text title">展览亮点</div>
						<br />
						<div class="text">
							本次展览不仅展现了学生们在布景艺术上的卓越创意与技巧，还展示了学生在视觉叙事上的深刻理解。除了三大主展区，展览还特设了个人作业展示区，展出了学生们精心绘制的物品三视图，细腻地展现了道具设计的每一个细节。
						</div>
						<br />
						<div class="text title">展区预览图</div>

						<div style="width: 100%">
							<img
								style="width: 100%"
								src="@/assets/state.png"
								alt="" />
						</div>
						<br />
						<div
							class="text"
							style="font-size: 11px; text-align: center">
							走进淡水小镇的夜晚，凝视枕头人，然后轻声道一句：“晚安，妈妈。”
						</div>
						<br />
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
				<hr style="margin: 20px 10px" />
				<!-- <div class="styleLine">
					<div class="styleCircleL"></div>
					<div class="styleCircleR"></div>
				</div> -->
				<div class="bawah">
					<!-- <div class="img-panel">
						<img
							src="@/assets/poster01.jpg"
							alt="" />
					</div>
					<div class="img-panel">
						<img
							src="@/assets/poster02.jpg"
							alt="" />
					</div>
					<div class="img-panel">
						<img
							src="@/assets/poster03.jpg"
							alt="" />
					</div> -->
					<el-carousel
						style="border: 1px solid black; box-shadow: 0px 0px 5px black"
						height="600px"
						:interval="5000"
						arrow="always">
						<el-carousel-item
							v-for="item in posterList"
							:key="item">
							<div class="lunbotu">
								<div>
									<el-image
										style="height: 600px"
										:src="item.src"
										fit="contain" />
								</div>
							</div>
						</el-carousel-item>
					</el-carousel>

					<!-- <div class="assignment-1">
						<div class="content-left">
							<div class="poster">这里放poster</div>
						</div>
						<div class="content-right">
							<div class="text title"><span style="color: #327792">《晚安，母亲》剧情概要</span></div>
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
					<div class="assignment-1">
						<div class="content-left">
							<div class="poster">这里放poster</div>
						</div>
						
					</div>
					<div class="assignment-1">
						<div class="content-left">
							<div class="poster"></div>
						</div>
						<div class="content-right">
							<div class="text title"><span style="color: #327792">《枕头人》剧情概要</span></div>
							<br />
							<div class="text">“孩子代表了人民 ，或父母代表了政府？”</div>
							<div class="text">“不、这只是一个没有谜底的谜。”</div>
							<br />
							<div class="text">
								在一个阴冷的审讯室中，一位神秘的作家卡图兰，被突如其来的指控推向命运的边缘。几个孩子接连被害，而他们的死亡方式竟与卡图里安的黑暗短篇故事惊人地相似。在这场生死审问中，卡图兰被迫揭露自己内心深处那些令人不寒而栗的故事源头——一个充满暴力与扭曲的童年。
							</div>
							<div class="text">
								与此同时，他智力受损的哥哥迈克尔被押入审讯室，他的天真与恐惧无意中将卡图兰推向了绝望的深渊。随着审讯的深入，兄弟间的血缘纽带与残酷的现实不断交织，故事与现实的界限逐渐模糊。
							</div>
						</div>
					</div> -->
				</div>
				<!-- <div
					class="styleLine"
					style="border: none">
					<div class="styleCircleL"></div>
					<div class="styleCircleR"></div>
				</div> -->
			</div>
			<!-- 版权信息 -->
		</div>
	</div>
</template>

<style scoped lang="scss">
.container {
	display: flex;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	// background-color: rgb(222, 222, 222);
	overflow: auto;

	.panel {
		position: relative;
		width: 100%;
		// animation: slideIn 2s ease-in-out forwards;
		margin-bottom: 30px;

		.paper {
			margin-bottom: 30px;
			// background-color: white;
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

			.styleLine {
				position: relative;
				display: flex;
				justify-content: space-between;
				width: 100%;
				border-top: 3px dashed rgb(222, 222, 222);

				.styleCircleL {
					position: absolute;
					transform: translate(-50%, -50%);
					width: 50px;
					height: 50px;
					border-radius: 50%;
					background-color: rgb(222, 222, 222);
				}

				.styleCircleR {
					position: absolute;
					right: 0;
					transform: translate(50%, -50%);
					width: 50px;
					height: 50px;
					border-radius: 50%;
					background-color: rgb(222, 222, 222);
				}
			}

			.bawah {
				padding: 20px;
				.assignment-1 {
					border-bottom: 1px solid #ccc;
					display: flex;
					flex-wrap: wrap;

					.content-left {
						padding: 20px;
					}

					.content-right {
						flex: 1;
						padding: 20px;
					}

					&:last-child {
						border-bottom: none;
					}
				}

				.poster {
					border: 3px solid #333;
				}

				.lunbotu {
					text-align: center;
				}

				.img-panel {
					margin-bottom: 30px;
					img {
						width: 400px;
						height: 500px;
					}
				}
			}
		}
	}

	// 动画效果
	@keyframes slideIn {
		0% {
			top: 100vh;
		}
		100% {
			top: 30px;
		}
	}
}
</style>

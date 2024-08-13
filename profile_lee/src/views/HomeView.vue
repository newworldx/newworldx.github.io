<script setup></script>

<template>
	<div id="dialog">
		<div class="moon-sticker">
			<img
				src="@/assets/moon.png"
				alt="" />
		</div>
		<div class="star-sticker">
			<img
				src="@/assets/star2.png"
				alt="" />
		</div>
		<div class="star-sticker">
			<img
				src="@/assets/star2.png"
				alt="" />
		</div>
		<div class="star-sticker">
			<img
				src="@/assets/star2.png"
				alt="" />
		</div>
		<div class="star-sticker">
			<img
				src="@/assets/star2.png"
				alt="" />
		</div>
		<div class="star-sticker">
			<img
				src="@/assets/star2.png"
				alt="" />
		</div>
		<div style="position: absolute; right: 0; top: 50%; transform: translateY(-50%); z-index: 0">
			<img
				src="@/assets/town1.png"
				alt="" />
		</div>
		<div style="position: absolute; left: 0; top: 50%; transform: translateY(-50%); z-index: 0">
			<img
				src="@/assets/town2.png"
				alt="" />
		</div>

		<div id="envelope">
			<div
				id="message"
				@click="$router.push('/page')">
				<div style="position: absolute; top: 0; right: 0">
					<img
						style="width: 100px; height: 100px; margin-top: 5px"
						src="@/assets/mother.png"
						alt="" />
				</div>
				<div style="position: absolute; top: 220px; left: 50%; transform: translateX(-50%)">
					<img
						style="height: 115px"
						src="@/assets/pillowman.png"
						alt="" />
				</div>
				<div class="text">欢迎来到第20届布景与制作课的成果展</div>
				<br />
				<div
					class="text"
					style="font-size: 18px; font-weight: bold; color: #a7633a">
					妈妈在淡水小镇对枕头人说晚安
				</div>
				<br />
				<div class="text">经过七堂课的辛勤学习，我们很高兴向大家展示我们的最终作品。</div>
				<div class="text">今天的展览以写实风格为主，通过精心制作的模型和三视图，展现了日常生活中的各种物品。让我们带你走进我们的创作世界，体验这些充满细节的布景吧！</div>
			</div>
			<div class="top"></div>
			<div class="bottom"></div>
			<div class="left"></div>
			<div class="right"></div>
		</div>
		<img
			src=""
			alt="" />
	</div>
</template>

<style lang="scss">
:root {
	--vw: 400px;
	--vh: 308px;
	--border-width: 10px;
	--border-color1: #062757;
	--border-color2: #c7955d;
	--border-color3: #9f0607;
	--inner-bgcolor: #e9ca8a;
	--lr-bgcolor: #a37f45;
	--top-bgcolor: #c9a05e;
	--bottom-bgcolor: #92713d;
}

body {
	font-family: "luck";
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	overflow: hidden;
}

#dialog {
	width: 100vw;
	height: 100vh;
	// background-image: url(@/assets/11.jpg);
	position: fixed;
	top: 0;
	left: 0;
	overflow: hidden;

	.moon-sticker {
		position: absolute;
		right: 0;
		top: 0;
		margin: 10px;
		animation: shake 3s linear infinite;
		img {
			width: 150px;
			height: 150px;
		}
	}

	.star-sticker {
		position: absolute;
		left: -350px;
		top: -150px;
		margin: 10px;
		img {
			width: 500px;
			height: 500px;
		}
	}

	.star-sticker:nth-child(2) {
		left: -100px;
		img {
			width: 400px;
			height: 400px;
		}
	}

	.star-sticker:nth-child(3) {
		left: -50px;
		top: 20px;
		img {
			width: 300px;
			height: 300px;
		}
	}

	.star-sticker:nth-child(4) {
		left: 2px;
	}

	@keyframes shake {
		0% {
			transform: rotate(10deg) translate(0, 0);
		}
		50% {
			transform: rotate(-10deg) translate(0, 0);
		}
		100% {
			transform: rotate(10deg) translate(0, 0);
		}
	}
}

#envelope {
	width: var(--vw);
	height: var(--vh);
	/*居中*/
	margin: 350px auto;
	box-sizing: border-box;
	background-color: var(--inner-bgcolor);
	position: relative;
	/* overflow: hidden; */
	animation: slideInX 3s cubic-bezier(0.36, 0, 0.64, 1) -2s forwards, slideInY 3s cubic-bezier(0.36, 0, 0.64, 1) forwards;
}

.close {
	position: absolute;
	right: -100px;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: #fff;
	z-index: 3;
}

@keyframes slideInY {
	0% {
		top: -800px;
		transform: rotate(45deg);
	}

	100% {
		top: 0px;
		transform: rotate(0deg);
	}
}

@keyframes slideInX {
	0% {
		left: -800px;
	}

	100% {
		left: 0px;
	}
}

.bottom,
.top {
	position: absolute;
	left: 0;
	width: var(--vw);
}

.bottom {
	bottom: 0;
	height: 230px;
	-webkit-clip-path: polygon(50% 42%, 0% 100%, 100% 100%);
	clip-path: polygon(50% 42%, 0% 100%, 100% 100%);
	background-color: var(--bottom-bgcolor);
	z-index: 2;
}

.top {
	top: 0;
	height: 215px;
	background-color: var(--top-bgcolor);
	-webkit-clip-path: polygon(53% 81%, 100% 0, 0 0);
	clip-path: polygon(50% 120%, 100% 0, 0 0);
	z-index: 3;
	transform-origin: top;
	animation: open 1s ease-in-out 3s forwards;
}

.left,
.right {
	position: absolute;
	top: 0;
	width: var(--vh);
	height: var(--vh);
	background-color: var(--lr-bgcolor);
	z-index: 1;
}

.left {
	left: 0;
	-webkit-clip-path: polygon(100% 100%, 0 0, 0 100%);
	clip-path: polygon(100% 100%, 0 0, 0 100%);
}

.right {
	right: 0;
	-webkit-clip-path: polygon(100% 100%, 100% 0, 0 100%);
	clip-path: polygon(100% 100%, 100% 0, 0 100%);
}

// /*封边条纹*/
// .bottom::before,
// .top::before,
// .right::before,
// .left::before {
// 	position: absolute;
// 	content: "";
// 	display: block;
// 	background-image: repeating-linear-gradient(
// 		-45deg,
// 		var(--border-color1) 0,
// 		var(--border-color1) 25px,
// 		var(--border-color2) 25px,
// 		var(--border-color2) 50px,
// 		var(--border-color3) 50px,
// 		var(--border-color3) 75px,
// 		var(--border-color2) 75px,
// 		var(--border-color2) 100px
// 	);
// }

.bottom::before,
.top::before {
	width: var(--vw);
	height: var(--border-width);
	left: 0;
}

.bottom::before {
	bottom: 0;
}

.top::before {
	top: 0;
	--border-color2: #e5d4b8;
	animation: openBorder 1s ease-in-out 3s forwards;
	transform-origin: top;
}

.left::before,
.right::before {
	top: 0;
	width: var(--border-width);
	height: var(--vw);
	--border-color2: #ead2ac;
}

.left::before {
	left: 0;
}

.right::before {
	right: 0;
}

@keyframes open {
	80% {
		z-index: 3;
	}

	100% {
		transform: rotateX(-180deg);
		background-color: rgba(233, 202, 138, 1);
		clip-path: polygon(50% 90%, 100% 0, 0 0);
		z-index: -1;
	}
}

@keyframes openBorder {
	100% {
		transform: rotateX(-180deg);
		opacity: 0;
	}
}

/*信纸*/
#message {
	font-family: "luck";
	position: absolute;
	top: 50px;
	left: 13px;
	transform: rotate(5deg);
	width: 370px;
	height: 200px;
	background-color: #fff;
	animation: rise 1s ease-in-out 4s forwards;
	z-index: 0;
	padding: 20px;
	overflow: hidden;
	&:hover {
		cursor: pointer;
		transform: translateY(-10px);
	}

	.text {
		font-size: 15px;
		line-height: 1.5;
		text-align: left;
		font-family: "STKaiti";
		color: #333;
	}

	.textCenter {
		text-align: center;
	}
}

@keyframes rise {
	/*纸张上升*/
	100% {
		height: 400px;
		top: -210px;
		transform: rotate(-3deg);
	}
}
</style>

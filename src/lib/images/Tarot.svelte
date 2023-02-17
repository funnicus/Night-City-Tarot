<script lang="ts">
	import CardBack from './back.png';

	export let image: string | undefined;
	export let z: number;

	const deg = Math.floor(Math.random() * 10);
	const rotaion = Math.floor(Math.random() * 2) ? -deg : deg;

	//const transform = `transform: rotate(${minus ? -deg : deg}deg)`;

	const onClick = (event: MouseEvent) => {
		const element = event.target as HTMLElement;
		//element.classList.toggle('flipped');
		//element.nextElementSibling?.classList.toggle('flipped');
		//document.querySelector('.front')?.classList.toggle('flipped');
		//document.querySelector('.back')?.classList.toggle('flipped');
		console.log(element.tagName);
	};

	//style={`z-index: ${z}; transform: rotate(${minus ? -deg : deg}deg)`}
</script>

<button class="card front" on:click={onClick}>
	<img src={image} alt="front" />
</button>
<button class="card back flipped" on:click={onClick}>
	<img src={CardBack} alt="back" />
</button>

<style>
	img {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.card {
		transform-style: preserve-3d;
		width: 300px;
		height: 500px;
		margin: auto;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		/*box-shadow: 0px 2px 30px #000;*/
		border-radius: 10px;
		border: 0.3em solid #000;
		background-color: #000;
		/*transition: transform 0.8s cubic-bezier(0.63, -0.32, 0.4, 1.39);*/
		backface-visibility: hidden;
	}

	.front {
		animation: flip-front 0.8s cubic-bezier(0.63, -0.32, 0.4, 1.39);
	}

	.back {
		animation: flip-back 0.8s cubic-bezier(0.63, -0.32, 0.4, 1.39);
	}

	@keyframes flip-front {
		from {
			transform: translateX(-560px) rotateY(180deg);
		}
		to {
			transform: translateX(0) rotateY(0deg);
		}
	}

	@keyframes flip-back {
		from {
			transform: translateX(-560px) rotateY(0deg);
		}
		to {
			transform: translateX(0) rotateY(180deg);
		}
	}
</style>

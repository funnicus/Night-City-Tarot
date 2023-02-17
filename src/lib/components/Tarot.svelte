<script lang="ts">
	//import { onMount } from 'svelte';
	import CardBack from '../images/back.png';

	export let image: string | undefined;
	export let id: number;

	const onClick = (event: MouseEvent) => {
		const element = event.target as HTMLElement;
		console.log(element.tagName);
	};

	// If we want to rotate the cards.
	/*onMount(() => {
		const frontId = `tarot-${id}-front`;
		const backId = `tarot-${id}-back`;

		const deg = Math.floor(Math.random() * 10);

		const front = document.getElementById(frontId);
		const back = document.getElementById(backId);

		if (front && back) {
			const rotate = Math.floor(Math.random() * 2) ? -deg : deg;
			front.style.animation;
			front.style.transform = `rotateY(0deg) rotate(${rotate}deg)`;
			back.style.transform = `rotateY(180deg) rotate(${rotate}deg)`;
		}
	});*/
</script>

<button id={`tarot-${id}-front`} class="card front" on:click={onClick}>
	<img src={image} alt="front" />
</button>
<button id={`tarot-${id}-back`} class="card back flipped" on:click={onClick}>
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

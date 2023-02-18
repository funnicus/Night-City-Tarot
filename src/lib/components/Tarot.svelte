<script lang="ts">
	// If there is a better way, I'm open for suggestions :)
	import CardBack from '$lib/assets/back.png';
	import Chariot from '$lib/assets/cards/chariot.png';
	import Death from '$lib/assets/cards/death.png';
	import Devil from '$lib/assets/cards/devil.png';
	import Emperor from '$lib/assets/cards/emperor.png';
	import Empress from '$lib/assets/cards/empress.png';
	import Fool from '$lib/assets/cards/fool.png';
	import HangedMan from '$lib/assets/cards/hanged-man.png';
	import Hermit from '$lib/assets/cards/hermit.png';
	import HighPriestess from '$lib/assets/cards/high-priestess.png';
	import Hierophant from '$lib/assets/cards/hierophant.png';
	import Judgement from '$lib/assets/cards/judgement.png';
	import Justice from '$lib/assets/cards/justice.png';
	import Lovers from '$lib/assets/cards/lovers.png';
	import Magician from '$lib/assets/cards/magician.png';
	import Moon from '$lib/assets/cards/moon.png';
	import Star from '$lib/assets/cards/star.png';
	import Strength from '$lib/assets/cards/strength.png';
	import Sun from '$lib/assets/cards/sun.png';
	import Temperance from '$lib/assets/cards/temperance.png';
	import Tower from '$lib/assets/cards/tower.png';
	import WheelOfFortune from '$lib/assets/cards/wheel-of-fortune.png';
	import World from '$lib/assets/cards/world.png';

	export let image: string;
	export let id: number;

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

<button id={`tarot-${id}-front`} class="card front">
	{#if image === 'fool.png'}
		<img src={Fool} alt="fool" />
	{:else if image === 'magician.png'}
		<img src={Magician} alt="magician" />
	{:else if image === 'high-priestess.png'}
		<img src={HighPriestess} alt="high priestess" />
	{:else if image === 'empress.png'}
		<img src={Empress} alt="empress" />
	{:else if image === 'emperor.png'}
		<img src={Emperor} alt="emperor" />
	{:else if image === 'hierophant.png'}
		<img src={Hierophant} alt="hierophant" />
	{:else if image === 'lovers.png'}
		<img src={Lovers} alt="lovers" />
	{:else if image === 'chariot.png'}
		<img src={Chariot} alt="chariot" />
	{:else if image === 'strength.png'}
		<img src={Strength} alt="strength" />
	{:else if image === 'hermit.png'}
		<img src={Hermit} alt="hermit" />
	{:else if image === 'wheel-of-fortune.png'}
		<img src={WheelOfFortune} alt="wheel-of-fortune" />
	{:else if image === 'justice.png'}
		<img src={Justice} alt="justice" />
	{:else if image === 'death.png'}
		<img src={Death} alt="death" />
	{:else if image === 'temperance.png'}
		<img src={Temperance} alt="temperance" />
	{:else if image === 'devil.png'}
		<img src={Devil} alt="devil" />
	{:else if image === 'tower.png'}
		<img src={Tower} alt="tower" />
	{:else if image === 'star.png'}
		<img src={Star} alt="star" />
	{:else if image === 'moon.png'}
		<img src={Moon} alt="moon" />
	{:else if image === 'sun.png'}
		<img src={Sun} alt="sun" />
	{:else if image === 'judgement.png'}
		<img src={Judgement} alt="judgement" />
	{:else if image === 'world.png'}
		<img src={World} alt="world" />
	{:else}
		<img src={HangedMan} alt="hanged man" />
	{/if}
</button>
<button id={`tarot-${id}-back`} class="card back flipped">
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
			transform: translateX(-560px) rotateY(0deg) scale(1.05);
		}
		to {
			transform: translateX(0) rotateY(180deg) scale(1);
		}
	}

	@media (max-width: 800px) {
		@keyframes flip-front {
			from {
				transform: translateY(-660px) rotateY(180deg);
			}
			to {
				transform: translateY(0) rotateY(0deg);
			}
		}

		@keyframes flip-back {
			from {
				transform: translateY(-660px) rotateY(0deg) scale(1.05);
			}
			to {
				transform: translateY(0) rotateY(180deg) scale(1);
			}
		}
	}
</style>

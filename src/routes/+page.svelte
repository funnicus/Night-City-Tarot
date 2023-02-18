<script lang="ts">
	import Tarot from '$lib/components/Tarot.svelte';
	import TarotBack from '$lib/components/TarotBack.svelte';
	import cards from '$lib/cards';
	import { shuffle } from '$lib/helpers';
	import { onMount } from 'svelte';

	let deck = shuffle([...cards]);
	let drawn: Card[] = [];
	let current: Card | undefined = drawn.length ? drawn[drawn.length - 1] : undefined;

	onMount(() => {
		const deckInStorage = window.localStorage.getItem('deck');
		const drawnInStorage = window.localStorage.getItem('drawn');
		if (deckInStorage && drawnInStorage) {
			deck = JSON.parse(deckInStorage) as Card[];
			drawn = JSON.parse(drawnInStorage) as Card[];
			current = drawn.length ? drawn[drawn.length - 1] : undefined;
		}
	});

	const onClick = () => {
		current = deck.pop();
		if (!current) return;
		drawn = [...drawn, current];
		deck = deck;

		window.localStorage.setItem('deck', JSON.stringify(deck));
		window.localStorage.setItem('drawn', JSON.stringify(drawn));
	};

	const shuffleCards = () => {
		deck = shuffle([...cards]);
		drawn = [];
		current = undefined;
	};
</script>

<svelte:head>
	<title>Night City Tarot</title>
	<meta
		name="description"
		content="Night City Tarot | Enhance your Cyberpunk RED combat by introducing wild and rare new Critical Injuries and outcomes!"
	/>
</svelte:head>

<section>
	<div class="deck">
		{#if deck.length}
			<TarotBack {onClick} />
		{:else}
			<button class="shuffle-button" on:click={shuffleCards}>Shuffle the deck!</button>
		{/if}
	</div>
	<div class="drawn">
		{#each drawn as card, i}
			<Tarot image={card.image} id={i} />
		{/each}
	</div>
</section>
<section>
	{#if !current}
		<div class="description">
			<h2>Welcome!</h2>
			<h3>
				<i
					>Night City Tarot is an optional new subsystem to enhance your Cyberpunk RED combat by
					introducing wild and rare new Critical Injuries and outcomes, providing climactic moments
					and shaking up your game.</i
				>
			</h3>
			<p>Now you only have to draw a card...</p>
		</div>
	{:else}
		<div class="description">
			<h2>{current.name}</h2>
			<h3><i>{current.descripiton}</i></h3>
			{#each current.effectParagraphs as paragraph}
				<p>{paragraph}</p>
			{/each}
		</div>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-wrap: wrap;
		font-family: Futura, Arial, Helvetica, sans-serif;
		height: 100%;
	}

	.shuffle-button {
		width: 300px;
		height: 500px;
		margin: auto;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		cursor: pointer;
		box-shadow: 0px 2px 30px #000;
		border-radius: 10px;
		border: 0.3em solid #000;
		background-color: #000;

		color: #fff;
		font-size: 2em;
	}

	.deck,
	.drawn {
		width: 400px;
		height: 600px;
		margin: auto;
		position: relative;
		user-select: none;
		transform: scale(0.9);
	}

	.description {
		width: 77%;
		margin: auto;
		height: 300px;
	}
</style>

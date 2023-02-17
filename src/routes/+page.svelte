<script lang="ts">
	import Tarot from '$lib/images/Tarot.svelte';
	import TarotBack from '$lib/images/TarotBack.svelte';
	import cards from '$lib/cards';

	export let data: { files: string[] };

	let images = [...cards];
	let drawn: any[] = [];
	let current: Card | undefined = undefined;

	const onClick = () => {
		current = images.pop();
		drawn = [...drawn, current];
		images = images;
	};
</script>

<svelte:head>
	<title>Night City Tarot</title>
	<meta name="description" content="Night City Tarot" />
</svelte:head>

<section>
	<div class="deck">
		{#if images.length}
			<TarotBack {onClick} />
		{:else}
			<span>Shuffle the deck!</span>
		{/if}
	</div>
	<div class="drawn">
		{#each drawn as image, i}
			<Tarot image={`src/lib/images/cards/${image.image}`} z={i} />
		{/each}
	</div>
</section>
<section>
	{#if !current}
		Draw a card!
	{:else}
		<div>
			<h2>{current.name}</h2>
			<i>{current.descripiton}</i>
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

	.deck,
	.drawn {
		width: 400px;
		height: 600px;
		margin: auto;
		position: relative;
		user-select: none;
		transform: scale(0.9);
	}
</style>

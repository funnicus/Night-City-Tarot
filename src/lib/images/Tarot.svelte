<script lang="ts">
	export let image: string | undefined;
	export let z: number;
	export let onClick: () => void = () => null;

	const minus = Math.floor(Math.random() * 2);
	const deg = Math.floor(Math.random() * 10);
</script>

<button
	class="tarot-card"
	style={`z-index: ${z}; transform: rotate(${minus ? -deg : deg}deg)`}
	on:click={onClick}
>
	<img alt="tarot card" src={image} />
</button>

<style>
	img {
		width: 100%;
		height: 100%;
	}

	.tarot-card {
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
	}
</style>

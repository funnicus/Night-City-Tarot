<script lang="ts">
	import CardBack from '../images/back.png';

	export let onClick: () => void = () => null;
</script>

<button class="tarot-card" on:click={onClick}>
	<img alt="tarot card deck" src={CardBack} />
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
		cursor: pointer;
		box-shadow: 0px 2px 30px #000;
		border-radius: 10px;
		border: 0.3em solid #000;
		background-color: #000;
	}
</style>

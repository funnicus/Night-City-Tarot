<script lang="ts">
	import FaRegQuestionCircle from 'svelte-icons/fa/FaRegQuestionCircle.svelte';

	const handleInfoClick = () => document.querySelector('.info-overlay')?.classList.toggle('hidden');
</script>

<div>
	<!-- A hacky solution to align these easily-->
	<div />

	<header>
		<h1>NIGHT CITY TAROT</h1>
	</header>

	<button class="info-button" on:click={handleInfoClick}>
		<FaRegQuestionCircle />
	</button>
</div>

<div class="info-overlay hidden" on:click={handleInfoClick} on:keypress={() => null}>
	<div class="info">
		<p>
			Whenever three or more dice rolled for damage from a Melee or Ranged Attack come up 6, draw
			the top card of your Night City Tarot deck and apply its effects as listed instead of a
			typical Critical Injury. There are two caveats.
		</p>
		<p>
			First, only draw a card if the Attack is against a single target. Never draw for grenades,
			rockets, or other Attacks with an area of effect.
		</p>
		<p>
			Second, only draw a card if both the attacker and defender are capable of sustaining Critical
			Injuries. For example, don’t draw if one of the combatants involved in the Attack is a drone.
		</p>
		<p>
			Many of the Night City Tarot card effects inflict Critical Injuries. Whenever a card inflicts
			multiple Critical Injuries, each Injury causes 5 bonus damage directly to HP unless noted
			otherwise. After the effect of the card is resolved, put that card on the bottom of the deck,
			and put the deck away, because only one card can be pulled from the Night City Tarot per game
			session.
		</p>
		<p>
			One last thing... after the first pull, don’t shuffle the deck until the campaign has
			experienced each card once... bad things happen when you tempt fate.
		</p>
	</div>
</div>

<style>
	header {
		display: flex;
		justify-content: center;
	}

	div {
		display: flex;
		justify-content: space-between;
	}

	.info-button {
		background: none;
		border: none;
		font-size: 2rem;
		margin-right: 2rem;
		width: 2rem;

		display: flex;
		justify-content: center;

		cursor: pointer;
	}

	.hidden {
		visibility: hidden;
		opacity: 0;
	}

	.info-overlay {
		position: fixed;
		margin: auto;
		width: 100%;
		height: 100%;

		z-index: 1000;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		background: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		transition: visibility 0s linear 0.5s, opacity 0.5s linear;
	}

	.info {
		width: 500px;
		height: 500px;

		padding: 1rem;
		text-align: center;

		background: #f5f6f6;
		border: 3px solid #ff381c;
		display: flex;
		flex-direction: column;
		overflow-y: scroll;
		transition: visibility 0s linear 0.5s, opacity 0.5s linear;
	}
</style>

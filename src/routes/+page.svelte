<script lang="ts">
	import { choices } from '$stores/choices';
	let chooseRandom = false;
</script>

<div class="container">
	{#if !chooseRandom}
		<p>{$choices}</p>
		{#each $choices as choice, id (id)}
			<input type="text" bind:value={choice} />
		{/each}
		<button class="add" on:click={() => choices.add('')}> + Choice </button>
	{:else}
		<p>The chosen one is</p>
		<h1>{$choices[Math.floor(Math.random() * $choices.length)]}</h1>
	{/if}

	<button on:click={() => (chooseRandom = !chooseRandom)}>PICK</button>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		min-height: 100vmin;
		min-width: 100vmax;
		justify-content: center;
		align-items: center;
	}

	input {
		background-color: var(--color-black);
		color: var(--color-white);
		border-radius: 0.5rem;
		height: 3rem;
		width: 32rem;
		border: 1px solid var(--color-gray);
		padding: 0 8px;
		font-family: 'Poppins';
		text-align: center;
	}

	input:focus {
		background-color: var(--color-gray);
		outline: 1px solid var(--color-gray);
	}
</style>

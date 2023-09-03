<script lang="ts">
	import { choices } from '$stores/choices';
	import SmallButton from '../components/SmallButton.svelte';
	let chooseRandom = false;

	function removeChoice(index: any) {
		choices.remove(index);
		console.log('Hello');
	}

	let addValue: string;

	function addChoice() {
		if (addValue != '') {
			choices.add(addValue);
			addValue = '';
		}
	}
</script>

<div class="container">
	{#if !chooseRandom}
		<p>{$choices}</p>
		{#each Object.entries($choices) as [index, choice] (index)}
			<div class="choice">
				<input type="text" bind:value={choice} />
				<SmallButton
					text="x"
					onClick={() => {
						removeChoice(index);
					}}
				/>
			</div>
		{/each}
		<div class="choice">
			<input
				class="add"
				type="text"
				bind:value={addValue}
				placeholder="Ex: Heads"
				on:change={addChoice}
			/>
			<SmallButton text="+" onClick={addChoice} dashed />
		</div>
	{:else}
		<p>The chosen one is</p>
		<h1>{$choices[Math.floor(Math.random() * $choices.length)]}</h1>
	{/if}

	<button class="cta" on:click={() => (chooseRandom = !chooseRandom)}>PICK</button>
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
		height: 4rem;
		width: 28rem;
		border: 2px solid var(--color-gray);
		font-family: 'Poppins';
		text-align: center;
		box-sizing: border-box;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
	}

	input:focus {
		background-color: var(--color-gray);
		outline: 2px solid var(--color-gray);
	}

	.choice {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	.add {
		border: 2px dashed var(--color-gray);
	}

	.cta {
		position: fixed;
		width: 10rem;
		height: 4rem;
		z-index: 10;
		bottom: 0;
		margin: 4rem 0;
		border: 0;
		border-radius: 4rem;
		background: var(--color-white);
		font-family: Poppins;
		font-size: 1.25rem;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		text-transform: uppercase;
		color: var(--color-black);
	}
</style>

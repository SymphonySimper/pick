<script lang="ts">
	import { choices } from '$stores/choices';
	import SmallButton from '../components/SmallButton.svelte';
	let chooseRandom = false;

	function removeChoice(index: number) {
		choices.remove(index);
		console.log('Hello');
	}

	let addValue: string;

	function changePadding() {
		const elements = document.querySelectorAll('input');
		const elementCount = elements.length;
		if (elementCount > 8) {
			document.querySelector('.container')?.setAttribute('style', 'padding: 8rem 0;');
		}
		elements[elementCount - 1].scrollIntoView();
	}

	function addChoice() {
		if (addValue != '') {
			choices.add(addValue);
			addValue = '';
			changePadding();
		}
	}
</script>

<div class="container" id={`${chooseRandom && 'result'}`}>
	{#if !chooseRandom}
		<h1>{$choices}</h1>
		{#each Object.entries($choices) as [index, choice] (index)}
			<div class="choice">
				<input type="text" bind:value={choice} />
				<SmallButton
					text="x"
					onClick={() => {
						removeChoice(Number(index));
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
		<div class="chosen">{$choices[Math.floor(Math.random() * $choices.length)]}</div>
	{/if}

	<div class="options">
		<button class="cta" on:click={() => (chooseRandom = !chooseRandom)}>PICK</button>
		<button class="cta" on:click={choices.reset}>RESET</button>
	</div>
</div>

<style>
	h1 {
		position: fixed;
		margin: 0;
		padding: 1rem 0;
		z-index: 10;
		border: 0;
		top: 0;
		background: var(--color-black);
		border-bottom: 1px solid var(--color-gray);
		width: 100%;
		text-align: center;
	}
	.container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		min-height: 100vmin;
		min-width: 100vmax;
		justify-content: center;
		align-items: center;
	}

	#result {
		padding: 0;
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

	.options {
		position: fixed;
		z-index: 10;
		bottom: 0;
		border-top: 1px solid var(--color-gray);
		background: var(--color-black);
		width: 100%;
		display: flex;
		justify-content: center;
		align-content: center;
	}

	.cta {
		width: 10rem;
		height: 4rem;
		color: var(--color-white);
		background: var(--color-black);
		font-family: Poppins;
		font-size: 1.25rem;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		text-transform: uppercase;
		border: 0;
		border-right: 1px solid var(--color-gray);
	}

	.cta:first-child {
		border-left: 1px solid var(--color-gray);
	}
	.chosen {
		font-family: 'Poppins';
		font-size: 4rem;
	}
</style>

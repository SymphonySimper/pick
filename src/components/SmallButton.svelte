<script lang="ts">
	export let text: string;
	export let onClick: () => void;
	export let dashed = false;
</script>

<button class={`${dashed && 'dashed'}`} on:click={onClick}>{text}</button>

<style>
	button {
		aspect-ratio: 1;
		height: 4rem;
		background: var(--color-black);
		border: 2px solid var(--color-gray);
		border-radius: 0.5rem;
		font-family: 'Poppins';
		color: var(--color-white);
		text-align: center;
	}

	.dashed {
		border: 2px dashed var(--color-gray);
	}
</style>

import { writable } from 'svelte/store'

const defaultChoice = ["Heads", "Tails"];

function createChoices() {
  const { subscribe, set, update } = writable(defaultChoice)
  return {
    subscribe,
    set,
    update,
    add: (choice: string) => update((c) => [...c, choice]),
    reset: () => set(defaultChoice)
  }
}

export const choices = createChoices();

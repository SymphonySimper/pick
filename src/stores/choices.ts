import { writable } from 'svelte/store'

const defaultChoice = ["Heads", "Tails"];

function createChoices() {
  const { subscribe, set, update } = writable(defaultChoice)
  return {
    subscribe,
    set,
    update,
    add: (choice: string) => update((c) => [...c, choice]),
    remove: (index: number) => update((c) => {
      c.splice(index, 1)
      return [...c];
    }),
    reset: () => set(defaultChoice)
  }
}

export const choices = createChoices();

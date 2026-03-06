import { State } from "./state.js";
export async function commandCatch(state: State, ...args: string[]): Promise<void> {
  const name = args[0]?.toLowerCase();
  if (!name) {
    console.log("You must provide a Pokémon name.");
    return;
  }

  console.log(`Throwing a Pokeball at ${name}...`);

  try {
    const pokemon = await state.pokeapi.fetchPokemon(name);

    // Example catch chance logic
    const chance = Math.random();
    const threshold = Math.max(0.1, 1 - pokemon.base_experience / 300);
    if (chance < threshold) {
      console.log(`${name} was caught!`);
      state.pokedex[name] = pokemon;
    } else {
      console.log(`${name} escaped!`);
    }

  } catch (err) {
    // Catch 404 or other network errors
    console.log(`${name} not found in the Pokedex.`);
  }
}

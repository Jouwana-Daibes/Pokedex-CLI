import type { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]): Promise<void> {
  const area = args[0];
  console.log("area = " + area);
  if (!area) {
    console.log("You must provide a location area.");
    return;
  }

  console.log(`Exploring ${area}...`);

  const location = await state.pokeapi.fetchLocation(area);

  console.log("Found Pokemon:");

  for (const encounter of location.pokemon_encounters) {
    console.log(` - ${encounter.pokemon.name}`);
  }
}

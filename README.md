# Pokedex CLI

## Overview
The Pokedex CLI project allows users to interact with a simulated Pokedex through a command-line interface (REPL). Users can explore, catch, inspect, and manage Pokémon in the world of Pokémon using real-time data fetched from the [PokeAPI](https://pokeapi.co/).

This project simulates a Pokedex that:
- Allows users to catch Pokémon.
- Displays the user's caught Pokémon.
- Offers detailed statistics and exploration of Pokémon.

Additionally, it features a **caching mechanism** for performance optimization, meaning once a location or Pokémon is fetched, subsequent accesses are immediate.

---

## Features
- **Commands:**
  - `help`: Displays a help message explaining available commands.
  - `exit`: Exits the Pokedex REPL.
  - `map`: Lists location areas in the Pokémon world.
  - `mapb`: Goes back to the previous 20 location areas.
  - `explore <area>`: Explores a given location area and lists encountered Pokémon.
  - `catch <pokemon>`: Catches a Pokémon and adds it to your Pokedex.
  - `inspect <pokemon>`: Displays detailed information about a caught Pokémon.
  - `pokedex`: Lists all the Pokémon you've caught.

- **Caching System:** 
  - The app caches data from the PokeAPI to reduce redundant API calls, improving performance for subsequent commands.

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/Pokedex-CLI.git
cd Pokedex-CLI
```
### 2. Install Dependencies
```
npm install
```
### 3. Run the Pokedex REPL
```
npm run dev
```
- This will start the REPL and allow you to interact with your Pokedex!
## Example Interaction
```
Pokedex > help
Commands:
  help            - Displays this help message.
  exit            - Exits the Pokedex REPL.
  map             - Lists location areas in the Pokémon world.
  mapb            - Goes back to the previous 20 location areas.
  explore <area>  - Explores a given location area and lists Pokémon.
  catch <pokemon> - Catches a Pokémon and adds it to your Pokedex.
  inspect <pokemon> - Displays detailed information about a caught Pokémon.
  pokedex         - Lists all the Pokémon you've caught.

Pokedex > catch pikachu
Throwing a Pokeball at pikachu...
pikachu was caught!

Pokedex > inspect pikachu
Name: pikachu
Height: 4
Weight: 60
Stats:
  - hp: 35
  - attack: 55
  - defense: 40
  - special-attack: 50
  - special-defense: 50
  - speed: 90
Types:
  - electric
```
## Development

If you want to modify or extend the project, here are some ideas:

- Simulate battles between caught Pokémon.
- Level up Pokémon and allow for evolution over time.
- Add unit tests for additional code coverage.
- Implement different types of Pokéballs (e.g., Great Balls, Ultra Balls).
- Persist user data by saving the Pokedex to a file.
- Make exploration more interactive by allowing users to navigate areas with commands like "left" or "right".

## Technologies Used

- TypeScript
- Node.js
- PokeAPI (RESTful API)
- Vitest (for testing)
- File system caching

## License
- This project is open-source and available under the MIT License.

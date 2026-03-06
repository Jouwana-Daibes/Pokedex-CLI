import type { State } from "./state.js";

export function startREPL(state: State) {

  state.rl.prompt();

  state.rl.on("line", async (line) => {

    const words = cleanInput(line);

    if (words.length === 0) {
      state.rl.prompt();
      return;
    }

    const commandName = words[0];
    const args = words.slice(1);
    const command = state.commands[commandName];

    if (!command) {
      console.log("Unknown command");
      state.rl.prompt();
      return;
    }

    try {
      command.callback(state, ...args);
    } catch (err) {
      console.error(err);
    }

    state.rl.prompt();
  });
}

export function cleanInput(input: string): string[] {
  return input
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);
}

import { Cache } from "./pokecache.js";
import { test, expect } from "vitest";

test("cache add and expire", async () => {
  const cache = new Cache(500);

  cache.add("test", "hello");

  expect(cache.get("test")).toBe("hello");

  await new Promise(r => setTimeout(r, 1000));

  expect(cache.get("test")).toBe(undefined);

  cache.stopReapLoop();
});

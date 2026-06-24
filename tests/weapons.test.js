import { z } from "zod";
import weapons from "../src/assets/weapons";
import { test, expect } from "vitest";

const syntax = z.object({
  name: z.string().refine((name) => name != ""),
  rarity: z.number().min(3).max(5),
  type: z.string().regex(/^(?:Claymore|Sword|Bow|Catalyst|Polearm)$/),
});
test("Syntax match for all weapons", () => {
  let error = false;
  Object.values(weapons).forEach((weapon) => {
    try {
      syntax.parse(weapon);
    } catch (e) {
      error = true;
      console.error(`Weapon Name: ${weapon.name}`)
      e.issues.forEach((issue) => {
        const path = issue.path.join(".");
        console.error(
          `  ${path}: (Value: ${issue.path.reduce((obj, key) => obj?.[key], weapon)}) ${issue.message}`,
        );
      });
    }
  });
  expect(error).toBe(false);
});

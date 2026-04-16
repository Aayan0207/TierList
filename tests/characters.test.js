import chars from "../src/assets/characters.js";
import { z } from "zod";
import { test, expect } from "vitest";

const allowedNames = chars.map((c) => c.name.toLowerCase());
const tier = z.union([
  z.literal(-1),
  z.literal(0),
  z.literal(0.5),
  z.literal(1),
  z.literal(1.5),
  z.literal(2),
  z.literal(3),
  z.literal(4),
]);
const syntax = z.object({
  name: z.string().regex(/^[a-zA-Z_]+$/),
  element: z.string().regex(/^(?:Electro|Pyro|Cryo|Hydro|Geo|Anemo|Dendro)$/i),
  weapon: z.string().regex(/^(?:Sword|Claymore|Polearm|Bow|Catalyst)$/i),
  rarity: z.number().min(4).max(5),
  role: z.object({
    dps: z.object({
      tier: tier,
      tags: z.object({
        constellation: z.number().min(0).max(6),
        expert: z.boolean(),
        partner: z
          .string()
          .refine(
            (name) => name == "" || allowedNames.includes(name.toLowerCase()),
          ),
      }),
    }),
    subdps: z.object({
      tier: tier,
      tags: z.object({
        constellation: z.number().min(0).max(6),
        expert: z.boolean(),
        partner: z
          .string()
          .refine(
            (name) => name == "" || allowedNames.includes(name.toLowerCase()),
          ),
      }),
    }),
    support: z.object({
      tier: tier,
      tags: z.object({
        constellation: z.number().min(0).max(6),
        expert: z.boolean(),
        partner: z
          .string()
          .refine(
            (name) => name == "" || allowedNames.includes(name.toLowerCase()),
          ),
      }),
    }),
  }),
});

test("Syntax match for all characters in the array", () => {
  let error = false;
  chars.forEach((char) => {
    try {
      syntax.parse(char);
    } catch (e) {
      error = true;
      console.error(`Character: ${char.name}`);
      e.issues.forEach((issue) => {
        const path = issue.path.join(".");
        console.error(
          `  ${path}: (Value: ${issue.path.reduce((obj, key) => obj?.[key], char)}) ${issue.message}`,
        );
      });
    }
  });
  expect(error).toBe(false);
});

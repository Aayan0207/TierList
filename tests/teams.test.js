import teams from "../src/assets/teams.js";
import { z } from "zod";
import { test, expect } from "vitest";
import chars from "../src/assets/characters.js";
import weapons from "../src/assets/weapons.js";
import artifacts from "../src/assets/artifacts.js";

const allowedNames = chars.map((c) => c.name.toLowerCase());

const character = z.object({
  constellation: z.number().min(0).max(6),
  refinement: z.number().min(1).max(5),
  weapon: z
    .object({
      name: z.string(),
      rarity: z.number().min(3).max(5),
      type: z.string().regex(/^(?:Claymore|Sword|Catalyst|Bow|Polearm)$/),
    })
    .refine((weapon) =>
      Object.values(weapons).some((w) => {
        return (
          w.name === weapon.name &&
          w.rarity === weapon.rarity &&
          w.type === weapon.type
        );
      }, `Weapon ${weapon} not found`),
    ),
  artifact: z
    .set(
      z
        .object({
          name: z.string(),
          rarity: z.number().min(4).max(5),
          link: z.string(),
        })
        .refine((artifact) =>
          Object.values(artifacts).some((a) => {
            return (
              a.name === artifact.name &&
              a.rarity === artifact.rarity &&
              a.link === artifact.link
            );
          }, `Artifact ${artifact} not found`),
        ),
    )
    .min(1)
    .max(2),
});

const syntax = z.object({
  dps: z.number().min(0),
  rotation: z.string(),
  notes: z.string(),
  characters: z
    .record(z.string(), character)
    .refine(
      (obj) =>
        Object.keys(obj).length === 4 &&
        Object.keys(obj).every((name) =>
          allowedNames.includes(name.toLowerCase()),
        ),
    ),
  members: z.set(z.string()).size(4),
});

test("Syntax match for all teams in teams.js", () => {
  let error = false;
  teams.forEach((team) => {
    try {
      syntax.parse(team);
    } catch (e) {
      error = true;
      console.error(`Team_Index: ${teams.indexOf(team)}`);
      e.issues.forEach((issue) => {
        const path = issue.path.join(".");
        console.error(
          `  ${path}: (Value: ${issue.path.reduce((obj, key) => obj?.[key], team)}) ${issue.message}`,
        );
      });
    }
  });
  expect(error).toBe(false);
});

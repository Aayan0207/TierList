import { z } from "zod";
import artifacts from "../src/assets/artifacts";
import { test, expect } from "vitest";

const syntax = z.object({
  name: z.string().refine((name) => name != ""),
  rarity: z.number().min(3).max(5),
  link: z.string().refine((link) => link != ""),
});
test("Syntax match for all artifacts", () => {
  let error = false;
  Object.values(artifacts).forEach((artifact) => {
    try {
      syntax.parse(artifact);
    } catch (e) {
      error = true;
      console.error(`Artifact Name: ${artifact.name}`)
      e.issues.forEach((issue) => {
        const path = issue.path.join(".");
        console.error(
          `  ${path}: (Value: ${issue.path.reduce((obj, key) => obj?.[key], artifact)}) ${issue.message}`,
        );
      });
    }
  });
  expect(error).toBe(false);
});

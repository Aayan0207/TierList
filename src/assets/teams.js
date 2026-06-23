import artifacts from "./artifacts";
import weapons from "./weapons";

const teams = [
  {
    title: "Varka - Prune - Durin - Nicole",
    dps: 153.0,
    rotation: "",
    notes:
      "Nicoles Talents 9-8. Combo N1 CA N5 CA N5 CA N1 CA N1 CA (not the best possible but close enough)",
    characters: [
      {
        name: "Varka",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Prune",
        role: "support",
        constellation: 2,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varka - Prune - Durin - Bennett",
    dps: 150.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Varka",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Prune",
        role: "support",
        constellation: 2,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
    ],
  },
  {
    title: "Varka - Prune - Durin - Nicole",
    dps: 150.0,
    rotation: "",
    notes: "9-8 talents",
    characters: [
      {
        name: "Varka",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Prune",
        role: "support",
        constellation: 2,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varka - Venti - Durin - Nicole",
    dps: 143.0,
    rotation: "",
    notes: "Nicoles Talents 9-6",
    characters: [
      {
        name: "Varka",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Venti",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varka - Prune - Bennett - Nicole",
    dps: 140.0,
    rotation: "",
    notes: "Nicoles Talents 9-6",
    characters: [
      {
        name: "Varka",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Prune",
        role: "support",
        constellation: 2,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varka - Prune - Durin - Nicole",
    dps: 128.0,
    rotation: "",
    notes: "Nicoles Talents 9-6",
    characters: [
      {
        name: "Varka",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Prune",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varka - Venti - Durin - Bennett",
    dps: 127.0,
    rotation: "",
    notes: "Special CA",
    characters: [
      {
        name: "Varka",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Venti",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varka - Venti - Durin - Bennett",
    dps: 126.0,
    rotation: "",
    notes: "Special CA, pyro goblet",
    characters: [
      {
        name: "Varka",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Venti",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varka - Venti - Durin - Bennett",
    dps: 125.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Varka",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Venti",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varka - Faruzan - Durin - Bennett",
    dps: 112.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Varka",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Faruzan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varka - Sucrose - Durin - Bennett",
    dps: 111.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Varka",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varka - Venti - Chevreuse - Bennett",
    dps: 111.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Varka",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Venti",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Chevreuse",
        role: "support",
        constellation: 6,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varka - Kazuha - Durin - Bennett",
    dps: 106.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Varka",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Kaedehara_Kazuha",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varka - Ifa - Durin - Bennett",
    dps: 106.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Varka",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Ifa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varka - Jean - Durin - Bennett",
    dps: 101.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Varka",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Jean",
        role: "support",
        constellation: 4,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varka - Venti - Durin - Bennett",
    dps: 101.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Varka",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Venti",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varka - Venti - Fischl - Iansan",
    dps: 101.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Varka",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Venti",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Iansan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varka - Sucrose - Chevreuse - Bennett",
    dps: 100.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Varka",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Chevreuse",
        role: "support",
        constellation: 6,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varka - Venti - Columbina - Ineffa",
    dps: 98.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Varka",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Venti",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varka - Albedo - Durin - Bennett",
    dps: 97.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Varka",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Albedo",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varka - Venti - Xiangling - Bennett",
    dps: 96.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Varka",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Venti",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Xiangling",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varka - Venti - Thoma - Bennett",
    dps: 96.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Varka",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Venti",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Thoma",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varka - Venti - Escoffier - Shenhe",
    dps: 95.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Varka",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Venti",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Shenhe",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varka - Sucrose - Fischl - Iansan",
    dps: 92.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Varka",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Iansan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varka - Venti - Escoffier - Skirk",
    dps: 92.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Varka",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Venti",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Skirk",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varka - Venti - Kujou_Sara - Iansan",
    dps: 90.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Varka",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Venti",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Kujou_Sara",
        role: "support",
        constellation: 6,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Iansan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varka - Jean - Furina - Mona",
    dps: 85.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Varka",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Jean",
        role: "support",
        constellation: 4,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Mona",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varka - Venti - Escoffier - Chongyun",
    dps: 81.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Varka",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Venti",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Chongyun",
        role: "support",
        constellation: 0,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Yae - Ineffa - Columbina - Sucrose",
    dps: 110.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Yae_Miko",
        role: "dps",
        constellation: 1,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Lohen - Nicole - Xilonen - Durin",
    dps: 192.0,
    rotation: "",
    notes:
      "N1C spam skill when up, skip Nicole Burst. Lohen burst should be slightly better to use when up but mine isn't levelled enough yet",
    characters: [
      {
        name: "Lohen",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
    ],
  },
  {
    title: "Lohen - Nicole - Xilonen - Durin",
    dps: 157.0,
    rotation: "",
    notes:
      "Same N1C Spam, Burst or Skill every 3 N1C - better play than others because of more practice. Every other team should see an upgrade when played like this",
    characters: [
      {
        name: "Lohen",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check weapon // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
    ],
  },
  {
    title: "Lohen - Nicole - Albedo - Durin",
    dps: 156.0,
    rotation: "",
    notes: "Using Burst like above",
    characters: [
      {
        name: "Lohen",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Albedo",
        role: "support",
        constellation: 1,
        weapon: weapons.harbinger_of_dawn,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
    ],
  },
  {
    title: "Lohen - Nicole - Xilonen - Durin",
    dps: 149.0,
    rotation: "",
    notes:
      "N1C spam skill when up, skip Nicole Burst. Lohen burst should be slightly better to use when up but mine isn't levelled enough yet",
    characters: [
      {
        name: "Lohen",
        role: "dps",
        constellation: 0,
        weapon: weapons.primordial_jade_winged_spear,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check weapon // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
    ],
  },
  {
    title: "Lohen - Nicole - Xilonen - Durin",
    dps: 142.0,
    rotation: "",
    notes:
      "N1C spam skill when up, skip Nicole Burst. Lohen burst should be slightly better to use when up but mine isn't levelled enough yet",
    characters: [
      {
        name: "Lohen",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check weapon // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
    ],
  },
  {
    title: "Lohen - Nicole - Citlali - Durin",
    dps: 136.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Lohen",
        role: "dps",
        constellation: 0,
        weapon: weapons.primordial_jade_winged_spear,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Citlali",
        role: "support",
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
    ],
  },
  {
    title: "Lohen - Nicole - Xilonen - Durin",
    dps: 136.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Lohen",
        role: "dps",
        constellation: 0,
        weapon: weapons.primordial_jade_winged_spear,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check weapon // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
    ],
  },
  {
    title: "Lohen - Bennett - Xilonen - Durin",
    dps: 132.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Lohen",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check weapon // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check weapon // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
    ],
  },
  {
    title: "Lohen - Nicole - Xilonen - Durin",
    dps: 131.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Lohen",
        role: "dps",
        constellation: 0,
        weapon: weapons.deathmatch,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check weapon // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
    ],
  },
  {
    title: "Lohen - Nicole - Prune - Durin",
    dps: 127.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Lohen",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Prune",
        role: "support",
        constellation: 2,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
    ],
  },
  {
    title: "Lohen - Albedo - Xilonen - Durin",
    dps: 127.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Lohen",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Albedo",
        role: "support",
        constellation: 1,
        weapon: weapons.harbinger_of_dawn, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check weapon // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
    ],
  },
  {
    title: "Lohen - Nicole - Emilie - Durin",
    dps: 123.0,
    rotation: "",
    notes: "Durin - Light mode",
    characters: [
      {
        name: "Lohen",
        role: "dps",
        constellation: 0,
        weapon: weapons.primordial_jade_winged_spear,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Emilie",
        role: "support",
        constellation: 0,
        weapon: weapons.deathmatch, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
    ],
  },
  {
    title: "Lohen - Bennett - Prune - Durin",
    dps: 123.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Lohen",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check weapon // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Prune",
        role: "support",
        constellation: 2,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
    ],
  },
  {
    title: "Lohen - Furina - Escoffier - Mona",
    dps: 122.0,
    rotation: "",
    notes: "Freeze",
    characters: [
      {
        name: "Lohen",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Mona",
        role: "support",
        constellation: 4,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Lohen - Bennett - Xilonen - Durin",
    dps: 117.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Lohen",
        role: "dps",
        constellation: 0,
        weapon: weapons.primordial_jade_winged_spear,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check weapon // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check weapon // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
    ],
  },
  {
    title: "Lohen - Nicole - Citlali - Mavuika",
    dps: 111.0,
    rotation: "",
    notes: "same",
    characters: [
      {
        name: "Lohen",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Citlali",
        role: "support",
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Mavuika",
        role: "support",
        constellation: 0,
        weapon: weapons.fang_of_the_mountain_king,
        refinement: 1,
        artifact: [artifacts.obsidian_codex, artifacts.noblesse_oblige],
      },
    ],
  },
  {
    title: "Lohen - Bennett - Prune - Xiangling",
    dps: 109.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Lohen",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check weapon // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Prune",
        role: "support",
        constellation: 2,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Xiangling",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check weapon
        refinement: 1,
        artifact: [artifacts.emblem_of_severed_fate],
      },
    ],
  },
  {
    title: "Lohen - Bennett - Prune - Xiangling",
    dps: 82.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Lohen",
        role: "dps",
        constellation: 0,
        weapon: weapons.deathmatch,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check weapon // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Prune",
        role: "support",
        constellation: 2,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Xiangling",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check weapon
        refinement: 1,
        artifact: [artifacts.emblem_of_severed_fate],
      },
    ],
  },
  {
    title: "Ifa - Ineffa - Columbina - Durin",
    dps: 110.0,
    rotation: "",
    notes: "Didn't have ineffa R1 at the time",
    characters: [
      {
        name: "Ifa",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
    ],
  },
  {
    title: "Wanderer - Faruzan - Durin - Nicole",
    dps: 103.0,
    rotation: "",
    notes: "see xiao for more variations",
    characters: [
      {
        name: "Wanderer",
        role: "dps",
        constellation: 1,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.desert_pavilion_chronicle],
      },
      {
        name: "Faruzan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.viridescent_venerer],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Wanderer - Columbina - Ineffa - Durin",
    dps: 89.0,
    rotation: "",
    notes: "Messes up Lunar Charged",
    characters: [
      {
        name: "Wanderer",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.desert_pavilion_chronicle],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
    ],
  },
  {
    title: "Wanderer - Faruzan - Durin - Bennett",
    dps: 77.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Wanderer",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.desert_pavilion_chronicle],
      },
      {
        name: "Faruzan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Wanderer - Faruzan - Furina - Bennett",
    dps: 67.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Wanderer",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.desert_pavilion_chronicle],
      },
      {
        name: "Faruzan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Xiao - Faruzan - Durin - Nicole",
    dps: 103.0,
    rotation: "",
    notes: "No healer Xiao losing health. 70% damage Xiao",
    characters: [
      {
        name: "Xiao",
        role: "dps",
        constellation: 0,
        weapon: weapons.staff_of_homa, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Faruzan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.viridescent_venerer],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Xiao - Faruzan - Durin - Nicole",
    dps: 97.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Xiao",
        role: "dps",
        constellation: 0,
        weapon: weapons.staff_of_homa, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Faruzan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.viridescent_venerer],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Xiao - Faruzan - Furina - Xianyun",
    dps: 90.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Xiao",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Faruzan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Xianyun",
        role: "support",
        constellation: 2,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Xiao - Faruzan - Durin - Nicole",
    dps: 90.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Xiao",
        role: "dps",
        constellation: 0,
        weapon: weapons.staff_of_homa, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Faruzan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Xiao - Prune - Durin - Nicole",
    dps: 83.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Xiao",
        role: "dps",
        constellation: 0,
        weapon: weapons.staff_of_homa, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Prune",
        role: "support",
        constellation: 2,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.viridescent_venerer],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Xiao - Faruzan - Furina - Bennett",
    dps: 55.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Xiao",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Faruzan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Cyno - Fischl - Durin - Chevreuse",
    dps: 85.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Cyno",
        role: "dps",
        constellation: 0,
        weapon: weapons.primordial_jade_winged_spear, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Chevreuse",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
    ],
  },
  {
    title: "Lyney - Fischl - Chevreuse - Durin",
    dps: 96.0,
    rotation: "",
    notes: "no shield RIP",
    characters: [
      {
        name: "Lyney",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.marechaussee_hunter],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Chevreuse",
        role: "support",
        constellation: 6,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
    ],
  },
  {
    title: "Lyney - Durin - Emilie - Nicole",
    dps: 85.0,
    rotation: "",
    notes: "I suck at lyney sorry",
    characters: [
      {
        name: "Lyney",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.marechaussee_hunter],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Emilie",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.unfinished_reverie],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Lyney - Fischl - Chevreuse - Nicole",
    dps: 83.0,
    rotation: "",
    notes: "so so bad at this",
    characters: [
      {
        name: "Lyney",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.marechaussee_hunter],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Chevreuse",
        role: "support",
        constellation: 6,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Ganyu - Durin - Emilie - Nicole",
    dps: 95.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Ganyu",
        role: "dps",
        constellation: 0,
        weapon: weapons.hunters_path, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Emilie",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Zongli - Columbina - Xilonen - Ineffa",
    dps: 105.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Zhongli",
        role: "dps",
        constellation: 0,
        weapon: weapons.ballad_of_the_fjords, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Kamisato_Ayaka - Furina - Escoffier - Shenhe",
    dps: 102.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Kamisato_Ayaka",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Shenhe",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
    ],
  },
  {
    title: "Yoimiya - Durin - Chevreuse - Fischl",
    dps: 97.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Yoimiya",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.echoes_of_an_offering],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Chevreuse",
        role: "support",
        constellation: 6,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Yoimiya - Durin - Chevreuse - Fischl",
    dps: 86.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Yoimiya",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.echoes_of_an_offering],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Chevreuse",
        role: "support",
        constellation: 6,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Yoimiya - Nicole - Chevreuse - Fischl",
    dps: 76.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Yoimiya",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.echoes_of_an_offering],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Chevreuse",
        role: "support",
        constellation: 6,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
    ],
  },
  {
    title: "Yoimiya - Nicole - Durin - Prune",
    dps: 75.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Yoimiya",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.echoes_of_an_offering],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Prune",
        role: "support",
        constellation: 2,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Klee - Durin - Chevreuse - Fischl",
    dps: 116.0,
    rotation: "",
    notes: "+1 CR and +1 CD to Klee of",
    characters: [
      {
        name: "Klee",
        role: "dps",
        constellation: 1,
        weapon: weapons.reliquary_of_truth,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Chevreuse",
        role: "support",
        constellation: 6,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Klee - Nicole - Chevreuse - Fischl",
    dps: 112.0,
    rotation: "",
    notes: "+1 CR and +1 CD to Klee, Nicole Talent lvl 9-6 of",
    characters: [
      {
        name: "Klee",
        role: "dps",
        constellation: 1,
        weapon: weapons.reliquary_of_truth,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Chevreuse",
        role: "support",
        constellation: 6,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Klee - Nicole - Durin - Prune",
    dps: 95.0,
    rotation: "",
    notes: "+1 CR and +1 CD to Klee, Nicole Talent lvl 9-6 of",
    characters: [
      {
        name: "Klee",
        role: "dps",
        constellation: 1,
        weapon: weapons.reliquary_of_truth,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Prune",
        role: "support",
        constellation: 2,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Clorinde - Durin - Chevreuse - Fischl",
    dps: 126.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Clorinde",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.fragment_of_harmonic_whimsy],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Chevreuse",
        role: "support",
        constellation: 6,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
    ],
  },
  {
    title: "Clorinde - Durin - Chevreuse - Nicole",
    dps: 113.0,
    rotation: "",
    notes: "TTDS almost exactly the same",
    characters: [
      {
        name: "Clorinde",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.fragment_of_harmonic_whimsy],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Chevreuse",
        role: "support",
        constellation: 6,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Clorinde - Durin - Fischl - Nicole",
    dps: 108.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Clorinde",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.fragment_of_harmonic_whimsy],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Raiden - Chevreuse - Durin - Nicole",
    dps: 143.0,
    rotation: "",
    notes: "9-8 talents Nicole",
    characters: [
      {
        name: "Raiden_Shogun",
        role: "dps",
        constellation: 4,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Chevreuse",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Raiden - Chevreuse - Durin - Fischl",
    dps: 136.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Raiden_Shogun",
        role: "dps",
        constellation: 4,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Chevreuse",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
    ],
  },
  {
    title: "Raiden - Chevreuse - Durin - Fischl",
    dps: 122.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Raiden_Shogun",
        role: "dps",
        constellation: 4,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Chevreuse",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
    ],
  },
  {
    title: "Raiden - Chevreuse - Durin - Nicole",
    dps: 112.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Raiden_Shogun",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Chevreuse",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Lauma - Xingqiu - Raiden - Yelan",
    dps: 105.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Lauma",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Xingqiu",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Raiden_Shogun",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Yelan",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Alhaitham - Lauma - Columbina - Kuki_Shinobu",
    dps: 90.0,
    rotation: "",
    notes: "+4 CR to Alhaitham for build",
    characters: [
      {
        name: "Alhaitham",
        role: "dps",
        constellation: 0,
        weapon: weapons.jade_cutter, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Lauma",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Kuki_Shinobu",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Alhaitham - Lauma - Furina - Kuki_Shinobu",
    dps: 80.0,
    rotation: "",
    notes: "+4 CR to Alhaitham for build",
    characters: [
      {
        name: "Alhaitham",
        role: "dps",
        constellation: 0,
        weapon: weapons.jade_cutter, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Lauma",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Kuki_Shinobu",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Alhaitham - Lauma - Yelan - Kuki_Shinobu",
    dps: 76.0,
    rotation: "",
    notes: "+4 CR to Alhaitham for build",
    characters: [
      {
        name: "Alhaitham",
        role: "dps",
        constellation: 0,
        weapon: weapons.jade_cutter, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Lauma",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Yelan",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Kuki_Shinobu",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Alhaitham - Nahida - Furina - Kuki_Shinobu",
    dps: 75.0,
    rotation: "",
    notes: "+4 CR to Alhaitham for build",
    characters: [
      {
        name: "Alhaitham",
        role: "dps",
        constellation: 0,
        weapon: weapons.jade_cutter, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Nahida",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Kuki_Shinobu",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Wrio - Furina - Escoffier - Skirk",
    dps: 108.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Wriothesley",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.marechaussee_hunter],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Skirk",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Wrio - Emilie - Durin - Nicole",
    dps: 105.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Wriothesley",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.marechaussee_hunter],
      },
      {
        name: "Emilie",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.unfinished_reverie],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Wrio - Furina - Escoffier - Yelan",
    dps: 87.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Wriothesley",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.marechaussee_hunter],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Yelan",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Wrio - Furina - Escoffier - Shenhe",
    dps: 70.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Wriothesley",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.marechaussee_hunter],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Shenhe",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Arlecchino - Nicole - Fischl - Chevreuse",
    dps: 138.0,
    rotation: "",
    notes: "+4 CR to Arle for build, Nicole Skill lvl 9",
    characters: [
      {
        name: "Arlecchino",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Chevreuse",
        role: "support",
        constellation: 6,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
    ],
  },
  {
    title: "Arlecchino - Durin - Fischl - Chevreuse",
    dps: 134.0,
    rotation: "",
    notes: "+4 CR to Arle for build",
    characters: [
      {
        name: "Arlecchino",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Chevreuse",
        role: "support",
        constellation: 6,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Arlecchino - Escoffier - Citlali - Bennett",
    dps: 128.0,
    rotation: "",
    notes: "+4 CR to Arle for build",
    characters: [
      {
        name: "Arlecchino",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Citlali",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Arlecchino - Nicole - Fischl - Chevreuse",
    dps: 127.0,
    rotation: "",
    notes: "+4 CR to Arle for build, Nicole Skill lvl 9",
    characters: [
      {
        name: "Arlecchino",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Chevreuse",
        role: "support",
        constellation: 6,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
    ],
  },
  {
    title: "Arlecchino - Columbina - Ineffa - Xilonen",
    dps: 115.0,
    rotation: "",
    notes: "+4 CR to Arle for build",
    characters: [
      {
        name: "Arlecchino",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Arlecchino - Durin - Fischl - Chevreuse",
    dps: 115.0,
    rotation: "",
    notes: "+4 CR to Arle for build, before nicole set",
    characters: [
      {
        name: "Arlecchino",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Chevreuse",
        role: "support",
        constellation: 6,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Arlecchino - Nicole - Escoffier - Citlali",
    dps: 111.0,
    rotation: "",
    notes: "+4 CR to Arle for build, Nicole Skill lvl 9",
    characters: [
      {
        name: "Arlecchino",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Citlali",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Arlecchino - Nicole - Prune - Durin",
    dps: 110.0,
    rotation: "",
    notes: "+4 CR to Arle for build, Nicole Skill lvl 9",
    characters: [
      {
        name: "Arlecchino",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Prune",
        role: "support",
        constellation: 2,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
    ],
  },
  {
    title: "Arlecchino - Durin - Fischl - Bennett",
    dps: 100.0,
    rotation: "",
    notes: "+4 CR to Arle for build, before nicole set",
    characters: [
      {
        name: "Arlecchino",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Flins - Ineffa - Columbina - Sucrose",
    dps: 177.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Flins",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check weapon // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Flins - Ineffa - Columbina - Sucrose",
    dps: 167.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Flins",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Flins - Ineffa - Columbina - Sucrose",
    dps: 165.0,
    rotation: "",
    notes: "big burst when available",
    characters: [
      {
        name: "Flins",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Flins - Ineffa - Columbina - Sucrose",
    dps: 161.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Flins",
        role: "dps",
        constellation: 0,
        weapon: weapons.primordial_jade_winged_spear, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Flins - Ineffa - Columbina - Xilonen",
    dps: 156.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Flins",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Flins - Ineffa - Columbina - Sucrose",
    dps: 155.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Flins",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Flins - Ineffa - Columbina - Jahoda",
    dps: 149.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Flins",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Jahoda",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Flins - Ineffa - Columbina - Durin",
    dps: 145.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Flins",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
    ],
  },
  {
    title: "Flins - Ineffa - Columbina - Chiori",
    dps: 145.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Flins",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Chiori",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
    ],
  },
  {
    title: "Flins - Ineffa - Columbina - Sucrose",
    dps: 141.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Flins",
        role: "dps",
        constellation: 0,
        weapon: weapons.deathmatch, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Flins - Ineffa - Columbina - Sucrose",
    dps: 140.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Flins",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm, // Check weapon // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Flins - Fischl - Columbina - Durin",
    dps: 135.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Flins",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
    ],
  },
  {
    title: "Flins - Ineffa - Furina - Sucrose",
    dps: 133.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Flins",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Flins - Iansan - Columbina - Sucrose",
    dps: 132.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Flins",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Iansan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Flins - Ineffa - Aino - Sucrose",
    dps: 130.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Flins",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Aino",
        role: "support",
        constellation: 6,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Flins - Ineffa - Furina - Sucrose",
    dps: 129.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Flins",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Flins - Fischl - Columbina - Sucrose",
    dps: 128.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Flins",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Flins - Fischl - Columbina - Nicole",
    dps: 125.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Flins",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Flins - Iansan - Columbina - Lan_Yan",
    dps: 122.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Flins",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Iansan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Lan_Yan",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Flins - Ineffa - Aino - Sucrose",
    dps: 120.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Flins",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Aino",
        role: "support",
        constellation: 6,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Flins - Kuki_Shinobu - Columbina - Sucrose",
    dps: 118.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Flins",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Kuki_Shinobu",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Flins - Ororon - Columbina - Sucrose",
    dps: 112.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Flins",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Ororon",
        role: "support",
        constellation: 4,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Flins - Fischl - Columbina - Lan_Yan",
    dps: 110.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Flins",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Lan_Yan",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Flins - Fischl - Aino - Lan_Yan",
    dps: 110.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Flins",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Aino",
        role: "support",
        constellation: 6,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Lan_Yan",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Flins - Fischl - Aino - Sucrose",
    dps: 104.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Flins",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Aino",
        role: "support",
        constellation: 6,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Flins - Fischl - Aino - Sucrose",
    dps: 85.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Flins",
        role: "dps",
        constellation: 0,
        weapon: weapons.deathmatch, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Aino",
        role: "support",
        constellation: 6,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Mavuika - Iansan - Bennett - Citlali",
    dps: 180.0,
    rotation: "",
    notes: "3C FD Standard easy combo",
    characters: [
      {
        name: "Mavuika",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Iansan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Citlali",
        role: "support",
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Mavuika - Sucrose - Nicole - Citlali",
    dps: 160.0,
    rotation: "",
    notes: "3C FD Standard easy combo",
    characters: [
      {
        name: "Mavuika",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.viridescent_venerer],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Citlali",
        role: "support",
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Mavuika - Xilonen - Bennett - Citlali",
    dps: 155.0,
    rotation: "",
    notes: "3C FD Standard easy combo",
    characters: [
      {
        name: "Mavuika",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Citlali",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Mavuika - Escoffier - Bennett - Citlali",
    dps: 145.0,
    rotation: "",
    notes: "3C FD Standard easy combo",
    characters: [
      {
        name: "Mavuika",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Citlali",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Mavuika - Ororon - Iansan - Chevreuse",
    dps: 135.0,
    rotation: "",
    notes:
      "April's Account. Charge Dash Combo. Can do 140 if executed pefectly.",
    characters: [
      {
        name: "Mavuika",
        role: "dps",
        constellation: 0,
        weapon: weapons.fang_of_the_mountain_king, // Mavuika sig
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Ororon",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.scroll_of_the_hero_of_cinder_city],
      },
      {
        name: "Iansan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
      {
        name: "Chevreuse",
        role: "support",
        constellation: 6,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.song_of_days_past],
      },
    ],
  },
  {
    title: "Mavuika - Iansan - Mona - Sucrose",
    dps: 129.0,
    rotation: "",
    notes: "too skill issue to swirl pyro sorry",
    characters: [
      {
        name: "Mavuika",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Iansan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Mona",
        role: "support",
        constellation: 4,
        weapon: weapons.any_catalyst, // Check weapon // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Mualani - Mona - Mavuika - Sucrose",
    dps: 151.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Mualani",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Mona",
        role: "support",
        constellation: 4,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Mavuika",
        role: "support",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.scroll_of_the_hero_of_cinder_city],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check weapon
        refinement: 1,
        artifact: [artifacts.viridescent_venerer],
      },
    ],
  },
  {
    title: "Venti - Durin - Faruzan - Nicole",
    dps: 127.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Venti",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
      {
        name: "Faruzan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.viridescent_venerer],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Venti - Columbina - Ineffa - Durin",
    dps: 94.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Venti",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
    ],
  },
  {
    title: "Venti - Faruzan - Durin - Bennett",
    dps: 93.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Venti",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Faruzan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Venti - Columbina - Ineffa - Sucrose",
    dps: 93.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Venti",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varesa - Nicole - Durin - Iansan",
    dps: 158.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Varesa",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.long_nights_oath],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
      {
        name: "Iansan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varesa - Iansan - Durin - Chevreuse",
    dps: 153.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Varesa",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.long_nights_oath],
      },
      {
        name: "Iansan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Chevreuse",
        role: "support",
        constellation: 6,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
    ],
  },
  {
    title: "Varesa - Nicole - Durin - Iansan",
    dps: 152.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Varesa",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.long_nights_oath],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Iansan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varesa - Fischl - Durin - Chevreuse",
    dps: 148.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Varesa",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.long_nights_oath],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Chevreuse",
        role: "support",
        constellation: 6,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
    ],
  },
  {
    title: "Varesa - Iansan - Mavuika - Chevreuse",
    dps: 145.0,
    rotation: "",
    notes:
      "April's Account. Mavuika combo: CDCDCF CDCD. Fang = SS in calcs for Mavuika. 150k peak with Durin on my account",
    characters: [
      {
        name: "Varesa",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.long_nights_oath],
      },
      {
        name: "Iansan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Mavuika",
        role: "support",
        constellation: 0,
        weapon: weapons.fang_of_the_mountain_king, // Mavuika sig
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Chevreuse",
        role: "support",
        constellation: 6,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varesa - Nicole - Durin - Chevreuse",
    dps: 140.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Varesa",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.long_nights_oath],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Chevreuse",
        role: "support",
        constellation: 6,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varesa - Iansan - Durin - Chevreuse",
    dps: 137.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Varesa",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Iansan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Chevreuse",
        role: "support",
        constellation: 6,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varesa - Iansan - Mavuika - Chevreuse",
    dps: 128.0,
    rotation: "",
    notes: "Mavuika combo: Charge Dash Normal Combo (No special CD)",
    characters: [
      {
        name: "Varesa",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.long_nights_oath],
      },
      {
        name: "Iansan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Mavuika",
        role: "support",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Chevreuse",
        role: "support",
        constellation: 6,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varesa - Fischl - Durin - Nicole",
    dps: 127.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Varesa",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.long_nights_oath],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varesa - Ineffa - Columbina - Sucrose",
    dps: 123.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Varesa",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.long_nights_oath],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Varesa - Fischl - Durin - Chevreuse",
    dps: 118.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Varesa",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.long_nights_oath],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Chevreuse",
        role: "support",
        constellation: 6,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Kinich - Iansan - Durin - Nicole",
    dps: 156.0,
    rotation: "",
    notes: "Nicole lvl 9 skill",
    characters: [
      {
        name: "Kinich",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Iansan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Kinich - Emilie - Durin - Nicole",
    dps: 137.0,
    rotation: "",
    notes: "Nicole lvl 9 skill",
    characters: [
      {
        name: "Kinich",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Emilie",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Kinich - Lauma - Iansan - Bennett",
    dps: 125.0,
    rotation: "",
    notes:
      "Scroll every other rotation, TTDS every other rotation (inverse of scroll)",
    characters: [
      {
        name: "Kinich",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Lauma",
        role: "support",
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers,
        refinement: 1,
        artifact: [artifacts.deepwood_memories],
      },
      {
        name: "Iansan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Kinich - Emilie - Iansan - Bennett",
    dps: 119.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Kinich",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Emilie",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Iansan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Kinich - Iansan - Durin - Bennett",
    dps: 105.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Kinich",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Iansan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Chasca - Nicole - Durin - Iansan",
    dps: 133.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Chasca",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
      {
        name: "Iansan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Chasca - Durin - Nicole - Mona",
    dps: 115.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Chasca",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Mona",
        role: "support",
        constellation: 4,
        weapon: weapons.thrilling_tales_of_dragon_slayers,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
    ],
  },
  {
    title: "Chasca - Nicole - Durin - Citlali",
    dps: 112.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Chasca",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Citlali",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Chasca - Iansan - Durin - Mona",
    dps: 110.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Chasca",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Iansan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Mona",
        role: "support",
        constellation: 3,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Chasca - Iansan - Mavuika - Citlali",
    dps: 109.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Chasca",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Iansan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Mavuika",
        role: "support",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Citlali",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Chasca - Mavuika - Citlali - Bennett",
    dps: 107.0,
    rotation: "",
    notes: "higher peaks lower lows it seems",
    characters: [
      {
        name: "Chasca",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Mavuika",
        role: "support",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Citlali",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Chasca - Ineffa - Columbina - Durin",
    dps: 105.0,
    rotation: "",
    notes: "codex > VV",
    characters: [
      {
        name: "Chasca",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
    ],
  },
  {
    title: "Chasca - Iansan - Furina - Bennett",
    dps: 105.0,
    rotation: "",
    notes: "Surprisingly Solid",
    characters: [
      {
        name: "Chasca",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Iansan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Chasca - Ineffa - Columbina - Bennett",
    dps: 103.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Chasca",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Chasca - Nicole - Mona - Iansan",
    dps: 100.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Chasca",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Mona",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Iansan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Chasca - Iansan - Furina - Chevreuse",
    dps: 95.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Chasca",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Iansan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Chevreuse",
        role: "support",
        constellation: 6,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Chasca - Iansan - Durin - Citlali",
    dps: 90.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Chasca",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Iansan",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Citlali",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Chasca - Furina - Citlali - Bennett",
    dps: 90.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Chasca",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Citlali",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Chasca - Fischl - Chevreuse - Nicole",
    dps: 88.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Chasca",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Chevreuse",
        role: "support",
        constellation: 6,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Chasca - Furina - Xilonen - Bennett",
    dps: 75.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Chasca",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Arataki_Itto - Columbina - Illuga - Linnea",
    dps: 118.0,
    rotation: "",
    notes: "+6 Crit rate -2 Crit dmg to Arataki_Itto",
    characters: [
      {
        name: "Arataki_Itto",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Illuga",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Linnea",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.aubade_of_morningstar_and_moon],
      },
    ],
  },
  {
    title: "Arataki_Itto - Columbina - Ineffa - Linnea",
    dps: 114.0,
    rotation: "",
    notes: "+6 Crit rate -2 Crit dmg to Arataki_Itto",
    characters: [
      {
        name: "Arataki_Itto",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Linnea",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.aubade_of_morningstar_and_moon],
      },
    ],
  },
  {
    title: "Arataki_Itto - Columbina - Ineffa - Xilonen",
    dps: 110.0,
    rotation: "",
    notes: "+6 Crit rate -2 Crit dmg to Arataki_Itto",
    characters: [
      {
        name: "Arataki_Itto",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Arataki_Itto - Columbina - Gorou - Linnea",
    dps: 105.0,
    rotation: "",
    notes: "+6 Crit rate -2 Crit dmg to Arataki_Itto",
    characters: [
      {
        name: "Arataki_Itto",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Gorou",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Linnea",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.aubade_of_morningstar_and_moon],
      },
    ],
  },
  {
    title: "Yelan - Columbina - Ineffa - Sucrose",
    dps: 115.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Yelan",
        role: "dps",
        constellation: 0,
        weapon: weapons.aqua_simulacra, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Yelan - Furina - Citlali - Escoffier",
    dps: 102.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Yelan",
        role: "dps",
        constellation: 0,
        weapon: weapons.aqua_simulacra, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Citlali",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Durin - Fischl - Chevreuse - Bennett",
    dps: 120.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Durin",
        role: "dps",
        constellation: 0,
        weapon: weapons.mistsplitter_reforged,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Chevreuse",
        role: "support",
        constellation: 6,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.song_of_days_past],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 6,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
    ],
  },
  {
    title: "Durin - Fischl - Chevreuse - Bennett",
    dps: 113.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Durin",
        role: "dps",
        constellation: 0,
        weapon: weapons.mistsplitter_reforged,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Chevreuse",
        role: "support",
        constellation: 6,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.song_of_days_past],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 6,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
    ],
  },
  {
    title: "Durin - Furina - Mona - Bennett",
    dps: 95.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Durin",
        role: "dps",
        constellation: 0,
        weapon: weapons.mistsplitter_reforged,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Mona",
        role: "support",
        constellation: 3,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 6,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Noelle - Columbina - Ineffa - Linnea",
    dps: 119.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Noelle",
        role: "dps",
        constellation: 0,
        weapon: weapons.redhorn_stonethresher,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Linnea",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.aubade_of_morningstar_and_moon],
      },
    ],
  },
  {
    title: "Noelle - Columbina - Illuga - Linnea",
    dps: 110.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Noelle",
        role: "dps",
        constellation: 0,
        weapon: weapons.redhorn_stonethresher,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Illuga",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Linnea",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.aubade_of_morningstar_and_moon],
      },
    ],
  },
  {
    title: "Noelle - Columbina - Ineffa - Xilonen",
    dps: 98.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Noelle",
        role: "dps",
        constellation: 0,
        weapon: weapons.redhorn_stonethresher,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Navia - Columbina - Ineffa - Linnea",
    dps: 131.0,
    rotation: "",
    notes: "+3 Crit Rate to Navia because of build",
    characters: [
      {
        name: "Navia",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Linnea",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.aubade_of_morningstar_and_moon],
      },
    ],
  },
  {
    title: "Navia - Columbina - Illuga - Linnea",
    dps: 130.0,
    rotation: "",
    notes: "+3 Crit Rate to Navia because of build",
    characters: [
      {
        name: "Navia",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Illuga",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Linnea",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.aubade_of_morningstar_and_moon],
      },
    ],
  },
  {
    title: "Navia - Columbina - Ineffa - Xilonen",
    dps: 126.0,
    rotation: "",
    notes: "+3 Crit Rate to Navia because of build",
    characters: [
      {
        name: "Navia",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Navia - Columbina - Furina - Linnea",
    dps: 115.0,
    rotation: "",
    notes: "+3 Crit Rate to Navia because of build",
    characters: [
      {
        name: "Navia",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Linnea",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.aubade_of_morningstar_and_moon],
      },
    ],
  },
  {
    title: "Navia - Xilonen - Durin - Nicole",
    dps: 112.0,
    rotation: "",
    notes: "+3 Crit Rate to Navia because of build",
    characters: [
      {
        name: "Navia",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.nighttime_whispers_in_the_echoing_woods],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Navia - Columbina - Ineffa - Illuga",
    dps: 108.0,
    rotation: "",
    notes: "+3 Crit Rate to Navia because of build",
    characters: [
      {
        name: "Navia",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Illuga",
        role: "support",
        constellation: 2,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Navia - Albedo - Durin - Bennett",
    dps: 97.0,
    rotation: "",
    notes: "+3 Crit Rate to Navia because of build",
    characters: [
      {
        name: "Navia",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.nighttime_whispers_in_the_echoing_woods],
      },
      {
        name: "Albedo",
        role: "support",
        constellation: 0,
        weapon: weapons.harbinger_of_dawn, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Navia - Columbina - Xilonen - Furina",
    dps: 84.0,
    rotation: "",
    notes: "+3 Crit Rate to Navia because of build",
    characters: [
      {
        name: "Navia",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Navia - Mavuika - Bennett - Xilonen",
    dps: 86.0,
    rotation: "",
    notes: "+3 Crit Rate to Navia because of build",
    characters: [
      {
        name: "Navia",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.nighttime_whispers_in_the_echoing_woods],
      },
      {
        name: "Mavuika",
        role: "support",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Navia - Xilonen - Durin - Bennett",
    dps: 80.0,
    rotation: "",
    notes: "+3 Crit Rate to Navia because of build",
    characters: [
      {
        name: "Navia",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.nighttime_whispers_in_the_echoing_woods],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Neuv - Columbina - Ineffa - Xilonen",
    dps: 123.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build",
    characters: [
      {
        name: "Neuvillette",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.marechaussee_hunter],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Neuv - Columbina - Ineffa - Lauma",
    dps: 115.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build",
    characters: [
      {
        name: "Neuvillette",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.marechaussee_hunter],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Lauma",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Neuv - Columbina - Ineffa - Durin",
    dps: 112.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build mode",
    characters: [
      {
        name: "Neuvillette",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.marechaussee_hunter],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
    ],
  },
  {
    title: "Neuv - Furina - Ineffa - Lauma",
    dps: 112.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build",
    characters: [
      {
        name: "Neuvillette",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.marechaussee_hunter],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Lauma",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Neuv - Furina - Escoffier - Skirk",
    dps: 111.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build",
    characters: [
      {
        name: "Neuvillette",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.marechaussee_hunter],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Skirk",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Neuv - Columbina - Ineffa - Sucrose",
    dps: 108.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build",
    characters: [
      {
        name: "Neuvillette",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.marechaussee_hunter],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Neuv - Furina - Escoffier - Citlali",
    dps: 101.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build",
    characters: [
      {
        name: "Neuvillette",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.marechaussee_hunter],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Citlali",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Neuv - Columbina - Ineffa - Linnea",
    dps: 105.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build",
    characters: [
      {
        name: "Neuvillette",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.marechaussee_hunter],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Linnea",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.aubade_of_morningstar_and_moon],
      },
    ],
  },
  {
    title: "Neuv - Furina - Lauma - Raiden",
    dps: 100.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build",
    characters: [
      {
        name: "Neuvillette",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.marechaussee_hunter],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Lauma",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Raiden_Shogun",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Neuv - Furina - Xilonen - Kazuha",
    dps: 96.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build",
    characters: [
      {
        name: "Neuvillette",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.marechaussee_hunter],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Kaedehara_Kazuha",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Neuv - Furina - Ineffa - Kazuha",
    dps: 92.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build",
    characters: [
      {
        name: "Neuvillette",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.marechaussee_hunter],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Kaedehara_Kazuha",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Neuv - Columbina - Lauma - Raiden",
    dps: 92.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build",
    characters: [
      {
        name: "Neuvillette",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.marechaussee_hunter],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Lauma",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Raiden_Shogun",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Neuv - Furina - Durin - Ineffa",
    dps: 92.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build",
    characters: [
      {
        name: "Neuvillette",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.marechaussee_hunter],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Neuv - Furina - Durin - Albedo",
    dps: 91.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build",
    characters: [
      {
        name: "Neuvillette",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.marechaussee_hunter],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Albedo",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Neuv - Furina - Ineffa - Albedo",
    dps: 91.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build",
    characters: [
      {
        name: "Neuvillette",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.marechaussee_hunter],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Albedo",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Neuv - Furina - Ineffa - Xilonen",
    dps: 85.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build",
    characters: [
      {
        name: "Neuvillette",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.marechaussee_hunter],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Neuv - Furina - Durin - Lauma",
    dps: 83.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build",
    characters: [
      {
        name: "Neuvillette",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.marechaussee_hunter],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Lauma",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Kamisato_Ayato - Ineffa - Columbina - Sucrose",
    dps: 90.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Kamisato_Ayato",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Kamisato_Ayato - Durin - Xilonen - Nicole",
    dps: 85.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Kamisato_Ayato",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Kamisato_Ayato - Escoffier - Furina - Yelan",
    dps: 62.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Kamisato_Ayato",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Yelan",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Sucrose - Ineffa - Columbina - Linnea",
    dps: 138.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Sucrose",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Linnea",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.aubade_of_morningstar_and_moon],
      },
    ],
  },
  {
    title: "Sucrose - Ineffa - Columbina - Xilonen",
    dps: 126.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Sucrose",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Sucrose - Ineffa - Columbina - Durin",
    dps: 131.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Sucrose",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.a_day_carved_from_rising_winds],
      },
    ],
  },
  {
    title: "Sucrose - Ineffa - Columbina - Fischl",
    dps: 120.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Sucrose",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Sucrose - Ineffa - Columbina - Linnea",
    dps: 116.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Sucrose",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Linnea",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.aubade_of_morningstar_and_moon],
      },
    ],
  },
  {
    title: "Mizuki - Ineffa - Columbina - Durin",
    dps: 110.0,
    rotation: "",
    notes: "Didn't have ineffa R1 at the time",
    characters: [
      {
        name: "Yumemizuki_Mizuki",
        role: "dps",
        constellation: 2,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Durin",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Mizuki - Ineffa - Columbina - Ororon",
    dps: 104.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Yumemizuki_Mizuki",
        role: "dps",
        constellation: 2,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Ororon",
        role: "support",
        constellation: 4,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Hu - Columbina - Ineffa - Yelan",
    dps: 115.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Hu_Tao",
        role: "dps",
        constellation: 1,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Yelan",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Hu - Columbina - Ineffa - Aino",
    dps: 100.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Hu_Tao",
        role: "dps",
        constellation: 1,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Aino",
        role: "support",
        constellation: 0,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Hu - Xingqiu - Nicole - Mona",
    dps: 100.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Hu_Tao",
        role: "dps",
        constellation: 1,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Xingqiu",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Mona",
        role: "support",
        constellation: 4,
        weapon: weapons.thrilling_tales_of_dragon_slayers,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
    ],
  },
  {
    title: "Hu - Yelan - Nicole - Mona",
    dps: 97.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Hu_Tao",
        role: "dps",
        constellation: 1,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Yelan",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Nicole",
        role: "support",
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Mona",
        role: "support",
        constellation: 4,
        weapon: weapons.thrilling_tales_of_dragon_slayers,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
    ],
  },
  {
    title: "Hu - Furina - Yelan - Xilonen",
    dps: 93.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Hu_Tao",
        role: "dps",
        constellation: 1,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.marechaussee_hunter],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Yelan",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Skirk - Furina - Escoffier - Shenhe",
    dps: 239.0,
    rotation: "",
    notes: "Skirk (Level 100)",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 2,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Shenhe",
        role: "support",
        constellation: 2,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
    ],
  },
  {
    title: "Skirk - Furina - Escoffier - Shenhe",
    dps: 224.0,
    rotation: "",
    notes: "Skirk (Level 100)",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 2,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Shenhe",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
    ],
  },
  {
    title: "Skirk - Furina - Escoffier - Shenhe",
    dps: 203.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 2,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Shenhe",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
    ],
  },
  {
    title: "Skirk - Furina - Escoffier - Shenhe",
    dps: 176.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 1,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Shenhe",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
    ],
  },
  {
    title: "Skirk - Furina - Escoffier - Shenhe",
    dps: 173.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Shenhe",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
    ],
  },
  {
    title: "Skirk - Furina - Escoffier - Shenhe",
    dps: 166.0,
    rotation: "",
    notes: "N2 Combo - mid execution",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Shenhe",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
    ],
  },
  {
    title: "Skirk - Furina - Escoffier - Shenhe",
    dps: 164.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Shenhe",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
    ],
  },
  {
    title: "Skirk - Furina - Escoffier - Shenhe",
    dps: 162.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Shenhe",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
    ],
  },
  {
    title: "Skirk - Furina - Escoffier - Yelan",
    dps: 160.0,
    rotation: "",
    notes: "note you lose cryo res against non-freezable enemies",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Yelan",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
    ],
  },
  {
    title: "Skirk - Furina - Escoffier - Mona",
    dps: 158.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Mona",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
    ],
  },
  {
    title: "Skirk - Furina - Escoffier - Shenhe",
    dps: 155.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.marechaussee_hunter],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Shenhe",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
    ],
  },
  {
    title: "Skirk - Furina - Escoffier - Dahlia",
    dps: 154.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Dahlia",
        role: "support",
        constellation: 6,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Skirk - Furina - Escoffier - Shenhe",
    dps: 154.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Shenhe",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
    ],
  },
  {
    title: "Skirk - Furina - Escoffier - Mona",
    dps: 152.0,
    rotation: "",
    notes: "N2 Combo",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.haran_geppaku_futsu,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Mona",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
    ],
  },
  {
    title: "Skirk - Yelan - Escoffier - Mona",
    dps: 152.0,
    rotation: "",
    notes: "note you lose cryo resonance against non freezable enemies",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Yelan",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.emblem_of_severed_fate],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Mona",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
    ],
  },
  {
    title: "Skirk - Furina - Escoffier - Columbina",
    dps: 151.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
    ],
  },
  {
    title: "Skirk - Furina - Escoffier - Citlali",
    dps: 150.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Citlali",
        role: "support",
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers,
        refinement: 1,
        artifact: [artifacts.scroll_of_the_hero_of_cinder_city],
      },
    ],
  },
  {
    title: "Skirk - Furina - Escoffier - Mualani",
    dps: 150.0,
    rotation: "",
    notes: "160k first rotation",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Mualani",
        role: "support",
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers,
        refinement: 1,
        artifact: [artifacts.scroll_of_the_hero_of_cinder_city],
      },
    ],
  },
  {
    title: "Skirk - Furina - Escoffier - Candace",
    dps: 148.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Candace",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Skirk - Furina - Escoffier - Xingqiu",
    dps: 147.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Xingqiu",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Skirk - Shenhe - Escoffier - Mona",
    dps: 146.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Shenhe",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Mona",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Skirk - Furina - Escoffier - Charlotte",
    dps: 145.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Charlotte",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Skirk - Furina - Escoffier - Rosaria",
    dps: 145.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Rosaria",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Skirk - Furina - Escoffier - Dahlia",
    dps: 142.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Dahlia",
        role: "support",
        constellation: 4,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Skirk - Furina - Escoffier - Chongyun",
    dps: 142.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Chongyun",
        role: "support",
        constellation: 0,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Skirk - Furina - Escoffier - Mika",
    dps: 142.0,
    rotation: "",
    notes: "Mika's talent is lvl 8",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Mika",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Skirk - Furina - Escoffier - Kamisato_Ayaka",
    dps: 140.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Kamisato_Ayaka",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Skirk - Furina - Escoffier - Ganyu",
    dps: 140.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Ganyu",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Skirk - Mona - Escoffier - Candace",
    dps: 132.0,
    rotation: "",
    notes: "ER issues",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Mona",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Candace",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Skirk - Mona - Escoffier - Xingqiu",
    dps: 130.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Mona",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Xingqiu",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Skirk - Furina - Escoffier - Shenhe",
    dps: 129.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.finale_of_the_deep,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Shenhe",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
    ],
  },
  {
    title: "Skirk - Furina - Escoffier - Shenhe",
    dps: 126.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.finale_of_the_deep,
        refinement: 1,
        artifact: [artifacts.marechaussee_hunter],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Shenhe",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
    ],
  },
  {
    title: "Skirk - Furina - Escoffier - Mona",
    dps: 124.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.finale_of_the_deep,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Mona",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Skirk - Furina - Shenhe - Charlotte",
    dps: 120.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Shenhe",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Charlotte",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Skirk - Yelan - Escoffier - Mona",
    dps: 119.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.finale_of_the_deep,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Yelan",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Escoffier",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.golden_troupe],
      },
      {
        name: "Mona",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Skirk - Furina - Candace - Charlotte",
    dps: 110.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Candace",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Charlotte",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Skirk - Furina - Mika - Mona",
    dps: 108.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Mika",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Mona",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Skirk - Yelan - Shenhe - Columbina",
    dps: 105.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Yelan",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Shenhe",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
    ],
  },
  {
    title: "Skirk - Furina - Dahlia - Charlotte",
    dps: 100.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Skirk",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.finale_of_the_deep_galleries],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.tenacity_of_the_millelith],
      },
      {
        name: "Dahlia",
        role: "support",
        constellation: 4,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Charlotte",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Chiori - Columbina - Ineffa - Linnea",
    dps: 137.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Chiori",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Linnea",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.aubade_of_morningstar_and_moon],
      },
    ],
  },
  {
    title: "Chiori - Columbina - Illuga - Linnea",
    dps: 115.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Chiori",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Illuga",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Linnea",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.aubade_of_morningstar_and_moon],
      },
    ],
  },
  {
    title: "Albedo - Columbina - Illuga - Linnea",
    dps: 105.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Albedo",
        role: "dps",
        constellation: 0,
        weapon: weapons.uraku_misugiri, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Illuga",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Linnea",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.aubade_of_morningstar_and_moon],
      },
    ],
  },
  {
    title: "Linnea - Columbina - Illuga - Gorou",
    dps: 90.0,
    rotation: "",
    notes: "trash?",
    characters: [
      {
        name: "Linnea",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Illuga",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Gorou",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Zibai - Illuga - Columbina - Linnea",
    dps: 207.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Zibai",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Illuga",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Linnea",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.aubade_of_morningstar_and_moon],
      },
    ],
  },
  {
    title: "Zibai - Illuga - Columbina - Linnea",
    dps: 188.0,
    rotation: "",
    notes: "used peak patrol song which is better than flute worse than HOD",
    characters: [
      {
        name: "Zibai",
        role: "dps",
        constellation: 0,
        weapon: weapons.peak_patrol_song,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Illuga",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Linnea",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.aubade_of_morningstar_and_moon],
      },
    ],
  },
  {
    title: "Zibai - Illuga - Columbina - Linnea",
    dps: 186.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Zibai",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Illuga",
        role: "support",
        constellation: 2,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Linnea",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.aubade_of_morningstar_and_moon],
      },
    ],
  },
  {
    title: "Zibai - Chiori - Columbina - Linnea",
    dps: 184.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Zibai",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Chiori",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Linnea",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.aubade_of_morningstar_and_moon],
      },
    ],
  },
  {
    title: "Zibai - Ineffa - Columbina - Linnea",
    dps: 176.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Zibai",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Linnea",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.aubade_of_morningstar_and_moon],
      },
    ],
  },
  {
    title: "Zibai - Gorou - Columbina - Linnea",
    dps: 175.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Zibai",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Gorou",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Linnea",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.aubade_of_morningstar_and_moon],
      },
    ],
  },
  {
    title: "Zibai - Illuga - Aino - Linnea",
    dps: 167.0,
    rotation: "",
    notes: "no bina",
    characters: [
      {
        name: "Zibai",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Illuga",
        role: "support",
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Aino",
        role: "support",
        constellation: 6,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Linnea",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.aubade_of_morningstar_and_moon],
      },
    ],
  },
  {
    title: "Zibai - Gorou - Columbina - Linnea",
    dps: 166.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Zibai",
        role: "dps",
        constellation: 0,
        weapon: weapons.peak_patrol_song,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Gorou",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Linnea",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.aubade_of_morningstar_and_moon],
      },
    ],
  },
  {
    title: "Zibai - Ineffa - Columbina - Linnea",
    dps: 160.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Zibai",
        role: "dps",
        constellation: 0,
        weapon: weapons.peak_patrol_song,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Linnea",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.aubade_of_morningstar_and_moon],
      },
    ],
  },
  {
    title: "Zibai - Illuga - Columbina - Gorou",
    dps: 157.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Zibai",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Illuga",
        role: "support",
        constellation: 2,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Gorou",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Zibai - Xilonen - Columbina - Ineffa",
    dps: 156.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Zibai",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.scroll_of_the_hero_of_cinder_city],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Zibai - Illuga - Columbina - Chiori",
    dps: 151.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Zibai",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Illuga",
        role: "support",
        constellation: 2,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Chiori",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
    ],
  },
  {
    title: "Zibai - Illuga - Columbina - Ineffa",
    dps: 147.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Zibai",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Illuga",
        role: "support",
        constellation: 2,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Zibai - Gorou - Aino - Linnea",
    dps: 146.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Zibai",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Gorou",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Aino",
        role: "support",
        constellation: 6,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Linnea",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.aubade_of_morningstar_and_moon],
      },
    ],
  },
  {
    title: "Zibai - Ineffa - Columbina - Xilonen",
    dps: 145.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Zibai",
        role: "dps",
        constellation: 0,
        weapon: weapons.peak_patrol_song,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Zibai - Illuga - Columbina - Zhongli",
    dps: 138.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Zibai",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Illuga",
        role: "support",
        constellation: 2,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Zhongli",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Zibai - Illuga - Columbina - Gorou",
    dps: 133.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Zibai",
        role: "dps",
        constellation: 0,
        weapon: weapons.peak_patrol_song,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Illuga",
        role: "support",
        constellation: 2,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Gorou",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Zibai - Albedo - Columbina - Fischl",
    dps: 130.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Zibai",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Albedo",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Zibai - Illuga - Columbina - Aino",
    dps: 127.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Zibai",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Illuga",
        role: "support",
        constellation: 2,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Aino",
        role: "support",
        constellation: 5,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Zibai - Illuga - Columbina - Yelan",
    dps: 127.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Zibai",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Illuga",
        role: "support",
        constellation: 2,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Yelan",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Zibai - Illuga - Aino - Gorou",
    dps: 124.0,
    rotation: "",
    notes: "no bina",
    characters: [
      {
        name: "Zibai",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Illuga",
        role: "support",
        constellation: 2,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Aino",
        role: "support",
        constellation: 6,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Gorou",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Zibai - Illuga - Columbina - Fischl",
    dps: 123.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Zibai",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Illuga",
        role: "support",
        constellation: 2,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Fischl",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Zibai - Illuga - Columbina - Jahoda",
    dps: 120.0,
    rotation: "",
    notes: "(Normal x8 Skill x2 Normal x1 Skill Burst Skill)  2N4 2E N1 E Q E",
    characters: [
      {
        name: "Zibai",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Illuga",
        role: "support",
        constellation: 2,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Jahoda",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Zibai - Illuga - Columbina - Dahlia",
    dps: 119.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Zibai",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Illuga",
        role: "support",
        constellation: 2,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Dahlia",
        role: "support",
        constellation: 2,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Zibai - Ineffa - Aino - Xilonen",
    dps: 116.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Zibai",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Aino",
        role: "support",
        constellation: 0,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Zibai - Illuga - Columbina - Navia",
    dps: 115.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Zibai",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Illuga",
        role: "support",
        constellation: 2,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Navia",
        role: "support",
        constellation: 0,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
    ],
  },
  {
    title: "Zibai - Xilonen - Columbina - Furina",
    dps: 115.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Zibai",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Zibai - Illuga - Aino - Gorou",
    dps: 105.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Zibai",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Illuga",
        role: "support",
        constellation: 2,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Aino",
        role: "support",
        constellation: 5,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Gorou",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Columbina - Ineffa - Lauma - Aino",
    dps: 164.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Columbina",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.aubade_of_morningstar_and_moon],
      },
      {
        name: "Lauma",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Aino",
        role: "support",
        constellation: 6,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.deepwood_memories],
      },
    ],
  },
  {
    title: "Columbina - Ineffa - Lauma - Furina",
    dps: 157.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Columbina",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.aubade_of_morningstar_and_moon],
      },
      {
        name: "Lauma",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.deepwood_memories],
      },
    ],
  },
  {
    title: "Columbina - Ineffa - Lauma - Linnea",
    dps: 145.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Columbina",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Lauma",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Linnea",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.aubade_of_morningstar_and_moon],
      },
    ],
  },
  {
    title: "Columbina - Ineffa - Lauma - Aino",
    dps: 141.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Columbina",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Lauma",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Aino",
        role: "support",
        constellation: 5,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Columbina - Ineffa - Lauma - Furina",
    dps: 140.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Columbina",
        role: "dps",
        constellation: 0,
        weapon: weapons.widsith,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Lauma",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Columbina - Kuki_Shinobu - Lauma - Furina",
    dps: 135.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Columbina",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Kuki_Shinobu",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.flower_of_paradise_lost],
      },
      {
        name: "Lauma",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Furina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.deepwood_memories],
      },
    ],
  },
  {
    title: "Columbina - Nahida - Lauma - Nilou",
    dps: 130.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Columbina",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Nahida",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Lauma",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Nilou",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Columbina - Ineffa - Lauma - Nahida",
    dps: 130.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Columbina",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Lauma",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Nahida",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
    ],
  },
  {
    title: "Nefer - Lauma - Columbina - Sucrose",
    dps: 191.0,
    rotation: "",
    notes: "would be higher but i miss swirls cause skill issue",
    characters: [
      {
        name: "Nefer",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Lauma",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.deepwood_memories],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.instructor],
      },
    ],
  },
  {
    title: "Nefer - Lauma - Columbina - Sucrose",
    dps: 188.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Nefer",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Lauma",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.deepwood_memories],
      },
    ],
  },
  {
    title: "Nefer - Lauma - Columbina - Nahida",
    dps: 184.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Nefer",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Lauma",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Nahida",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.deepwood_memories],
      },
    ],
  },
  {
    title: "Nefer - Lauma - Columbina - Ineffa",
    dps: 184.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Nefer",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Lauma",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.deepwood_memories],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Ineffa",
        role: "support",
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: [artifacts.instructor],
      },
    ],
  },
  {
    title: "Nefer - Lauma - Columbina - Kuki_Shinobu",
    dps: 172.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Nefer",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Lauma",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.deepwood_memories],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Kuki_Shinobu",
        role: "support",
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: [artifacts.instructor],
      },
    ],
  },
  {
    title: "Nefer - Lauma - Columbina - Linnea",
    dps: 170.0,
    rotation: "",
    notes: "Linnea tap tap tap",
    characters: [
      {
        name: "Nefer",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Lauma",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.deepwood_memories],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Linnea",
        role: "support",
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: [artifacts.aubade_of_morningstar_and_moon],
      },
    ],
  },
  {
    title: "Nefer - Lauma - Columbina - Jahoda",
    dps: 165.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Nefer",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Lauma",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.deepwood_memories],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Jahoda",
        role: "support",
        constellation: 6,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: [artifacts.instructor],
      },
    ],
  },
  {
    title: "Nefer - Lauma - Columbina - Sucrose",
    dps: 165.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Nefer",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Lauma",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.deepwood_memories],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.instructor],
      },
    ],
  },
  {
    title: "Nefer - Lauma - Aino - Sucrose",
    dps: 151.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Nefer",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Lauma",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Aino",
        role: "support",
        constellation: 6,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: [artifacts.deepwood_memories],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.instructor],
      },
    ],
  },
  {
    title: "Nefer - Lauma - Columbina - Sucrose",
    dps: 151.0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Nefer",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Lauma",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.any],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.instructor],
      },
    ],
  },
  {
    title: "Nefer - Columbina - Nahida - Sucrose",
    dps: 110.0,
    rotation: "",
    notes: "no Lauma",
    characters: [
      {
        name: "Nefer",
        role: "dps",
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Columbina",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Nahida",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.deepwood_memories],
      },
      {
        name: "Sucrose",
        role: "support",
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
    ],
  },
];

export default teams;

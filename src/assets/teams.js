import artifacts from "./artifacts";
import weapons from "./weapons";

const teams = [
  {
    dps: 153.0,
    rotation: "",
    notes:
      "Nicoles Talents 9-8. Combo N1 CA N5 CA N5 CA N1 CA N1 CA (not the best possible but close enough)",
    members: new Set(["Varka", "Prune", "Durin", "Nicole"]),
    characters: {
      Varka: {
        constellation: 0,
        weapon: weapons.gest_of_the_mighty_wolf,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Prune: {
        constellation: 2,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 150.0,
    rotation: "",
    notes: "",
    members: new Set(["Varka", "Prune", "Durin", "Bennett"]),
    characters: {
      Varka: {
        constellation: 0,
        weapon: weapons.gest_of_the_mighty_wolf,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Prune: {
        constellation: 2,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },
    },
  },
  {
    dps: 150.0,
    rotation: "",
    notes: "9-8 talents",
    members: new Set(["Varka", "Prune", "Durin", "Nicole"]),
    characters: {
      Varka: {
        constellation: 0,
        weapon: weapons.gest_of_the_mighty_wolf,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Prune: {
        constellation: 2,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 143.0,
    rotation: "",
    notes: "Nicoles Talents 9-6",
    members: new Set(["Varka", "Venti", "Durin", "Nicole"]),
    characters: {
      Varka: {
        constellation: 0,
        weapon: weapons.gest_of_the_mighty_wolf,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Venti: {
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 140.0,
    rotation: "",
    notes: "Nicoles Talents 9-6",
    members: new Set(["Varka", "Prune", "Bennett", "Nicole"]),
    characters: {
      Varka: {
        constellation: 0,
        weapon: weapons.gest_of_the_mighty_wolf,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Prune: {
        constellation: 2,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 128.0,
    rotation: "",
    notes: "Nicoles Talents 9-6",
    members: new Set(["Varka", "Prune", "Durin", "Nicole"]),
    characters: {
      Varka: {
        constellation: 0,
        weapon: weapons.gest_of_the_mighty_wolf,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Prune: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 127.0,
    rotation: "",
    notes: "Special CA",
    members: new Set(["Varka", "Venti", "Durin", "Bennett"]),
    characters: {
      Varka: {
        constellation: 0,
        weapon: weapons.gest_of_the_mighty_wolf,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Venti: {
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 126.0,
    rotation: "",
    notes: "Special CA, pyro goblet",
    members: new Set(["Varka", "Venti", "Durin", "Bennett"]),
    characters: {
      Varka: {
        constellation: 0,
        weapon: weapons.gest_of_the_mighty_wolf,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Venti: {
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 125.0,
    rotation: "",
    notes: "",
    members: new Set(["Varka", "Venti", "Durin", "Bennett"]),
    characters: {
      Varka: {
        constellation: 0,
        weapon: weapons.gest_of_the_mighty_wolf,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Venti: {
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 112.0,
    rotation: "",
    notes: "",
    members: new Set(["Varka", "Faruzan", "Durin", "Bennett"]),
    characters: {
      Varka: {
        constellation: 0,
        weapon: weapons.gest_of_the_mighty_wolf,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Faruzan: {
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 111.0,
    rotation: "",
    notes: "",
    members: new Set(["Varka", "Sucrose", "Durin", "Bennett"]),
    characters: {
      Varka: {
        constellation: 0,
        weapon: weapons.gest_of_the_mighty_wolf,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 111.0,
    rotation: "",
    notes: "",
    members: new Set(["Varka", "Venti", "Chevreuse", "Bennett"]),
    characters: {
      Varka: {
        constellation: 0,
        weapon: weapons.gest_of_the_mighty_wolf,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Venti: {
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Chevreuse: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 106.0,
    rotation: "",
    notes: "",
    members: new Set(["Varka", "Kaedehara_Kazuha", "Durin", "Bennett"]),
    characters: {
      Varka: {
        constellation: 0,
        weapon: weapons.gest_of_the_mighty_wolf,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Kaedehara_Kazuha: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 106.0,
    rotation: "",
    notes: "",
    members: new Set(["Varka", "Ifa", "Durin", "Bennett"]),
    characters: {
      Varka: {
        constellation: 0,
        weapon: weapons.gest_of_the_mighty_wolf,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Ifa: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 101.0,
    rotation: "",
    notes: "",
    members: new Set(["Varka", "Jean", "Durin", "Bennett"]),
    characters: {
      Varka: {
        constellation: 0,
        weapon: weapons.gest_of_the_mighty_wolf,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Jean: {
        constellation: 4,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 101.0,
    rotation: "",
    notes: "",
    members: new Set(["Varka", "Venti", "Durin", "Bennett"]),
    characters: {
      Varka: {
        constellation: 0,
        weapon: weapons.gest_of_the_mighty_wolf,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Venti: {
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 101.0,
    rotation: "",
    notes: "",
    members: new Set(["Varka", "Venti", "Fischl", "Iansan"]),
    characters: {
      Varka: {
        constellation: 0,
        weapon: weapons.gest_of_the_mighty_wolf,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Venti: {
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Fischl: {
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Iansan: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 100.0,
    rotation: "",
    notes: "",
    members: new Set(["Varka", "Sucrose", "Chevreuse", "Bennett"]),
    characters: {
      Varka: {
        constellation: 0,
        weapon: weapons.gest_of_the_mighty_wolf,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Chevreuse: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 98.0,
    rotation: "",
    notes: "",
    members: new Set(["Varka", "Venti", "Columbina", "Ineffa"]),
    characters: {
      Varka: {
        constellation: 0,
        weapon: weapons.gest_of_the_mighty_wolf,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Venti: {
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 97.0,
    rotation: "",
    notes: "",
    members: new Set(["Varka", "Albedo", "Durin", "Bennett"]),
    characters: {
      Varka: {
        constellation: 0,
        weapon: weapons.gest_of_the_mighty_wolf,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Albedo: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 96.0,
    rotation: "",
    notes: "",
    members: new Set(["Varka", "Venti", "Xiangling", "Bennett"]),
    characters: {
      Varka: {
        constellation: 0,
        weapon: weapons.gest_of_the_mighty_wolf,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Venti: {
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Xiangling: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 96.0,
    rotation: "",
    notes: "",
    members: new Set(["Varka", "Venti", "Thoma", "Bennett"]),
    characters: {
      Varka: {
        constellation: 0,
        weapon: weapons.gest_of_the_mighty_wolf,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Venti: {
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Thoma: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 95.0,
    rotation: "",
    notes: "",
    members: new Set(["Varka", "Venti", "Escoffier", "Shenhe"]),
    characters: {
      Varka: {
        constellation: 0,
        weapon: weapons.gest_of_the_mighty_wolf,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Venti: {
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Shenhe: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 92.0,
    rotation: "",
    notes: "",
    members: new Set(["Varka", "Sucrose", "Fischl", "Iansan"]),
    characters: {
      Varka: {
        constellation: 0,
        weapon: weapons.gest_of_the_mighty_wolf,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Fischl: {
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Iansan: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 92.0,
    rotation: "",
    notes: "",
    members: new Set(["Varka", "Venti", "Escoffier", "Skirk"]),
    characters: {
      Varka: {
        constellation: 0,
        weapon: weapons.gest_of_the_mighty_wolf,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Venti: {
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Skirk: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 90.0,
    rotation: "",
    notes: "",
    members: new Set(["Varka", "Venti", "Kujou_Sara", "Iansan"]),
    characters: {
      Varka: {
        constellation: 0,
        weapon: weapons.gest_of_the_mighty_wolf,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Venti: {
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Kujou_Sara: {
        constellation: 6,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Iansan: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 85.0,
    rotation: "",
    notes: "",
    members: new Set(["Varka", "Jean", "Furina", "Mona"]),
    characters: {
      Varka: {
        constellation: 0,
        weapon: weapons.gest_of_the_mighty_wolf,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Jean: {
        constellation: 4,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Mona: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 81.0,
    rotation: "",
    notes: "",
    members: new Set(["Varka", "Venti", "Escoffier", "Chongyun"]),
    characters: {
      Varka: {
        constellation: 0,
        weapon: weapons.gest_of_the_mighty_wolf,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Venti: {
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Chongyun: {
        constellation: 0,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 85,
    rotation: "",
    notes: "",
    members: new Set(["Razor", "Chevreuse", "Durin", "Bennett"]),
    characters: {
      Razor: {
        constellation: 6,
        weapon: weapons.a_thousand_blazing_suns,
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Chevreuse: {
        constellation: 6,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },

      Bennett: {
        constellation: 6,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 85,
    rotation: "",
    notes: "",
    members: new Set(["Razor", "Columbina", "Ineffa", "Sucrose"]),
    characters: {
      Razor: {
        constellation: 6,
        weapon: weapons.a_thousand_blazing_suns,
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 110.0,
    rotation: "",
    notes: "",
    members: new Set(["Yae_Miko", "Ineffa", "Columbina", "Sucrose"]),
    characters: {
      Yae_Miko: {
        constellation: 1,
        weapon: weapons.kaguras_verity, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 192.0,
    rotation: "",
    notes:
      "N1C spam skill when up, skip Nicole Burst. Lohen burst should be slightly better to use when up but mine isn't levelled enough yet",
    members: new Set(["Lohen", "Nicole", "Xilonen", "Durin"]),
    characters: {
      Lohen: {
        constellation: 0,
        weapon: weapons.disaster_and_remorse,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Xilonen: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },
    },
  },
  {
    dps: 157.0,
    rotation: "",
    notes:
      "Same N1C Spam, Burst or Skill every 3 N1C - better play than others because of more practice. Every other team should see an upgrade when played like this",
    members: new Set(["Lohen", "Nicole", "Xilonen", "Durin"]),
    characters: {
      Lohen: {
        constellation: 0,
        weapon: weapons.disaster_and_remorse,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Xilonen: {
        constellation: 0,
        weapon: weapons.any_sword, // Check weapon // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },
    },
  },
  {
    dps: 156.0,
    rotation: "",
    notes: "Using Burst like above",
    members: new Set(["Lohen", "Nicole", "Albedo", "Durin"]),
    characters: {
      Lohen: {
        constellation: 0,
        weapon: weapons.disaster_and_remorse,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Albedo: {
        constellation: 1,
        weapon: weapons.harbinger_of_dawn,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },
    },
  },
  {
    dps: 149.0,
    rotation: "",
    notes:
      "N1C spam skill when up, skip Nicole Burst. Lohen burst should be slightly better to use when up but mine isn't levelled enough yet",
    members: new Set(["Lohen", "Nicole", "Xilonen", "Durin"]),
    characters: {
      Lohen: {
        constellation: 0,
        weapon: weapons.primordial_jade_winged_spear,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Xilonen: {
        constellation: 0,
        weapon: weapons.any_sword, // Check weapon // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },
    },
  },
  {
    dps: 142.0,
    rotation: "",
    notes:
      "N1C spam skill when up, skip Nicole Burst. Lohen burst should be slightly better to use when up but mine isn't levelled enough yet",
    members: new Set(["Lohen", "Nicole", "Xilonen", "Durin"]),
    characters: {
      Lohen: {
        constellation: 0,
        weapon: weapons.disaster_and_remorse,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Xilonen: {
        constellation: 0,
        weapon: weapons.any_sword, // Check weapon // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },
    },
  },
  {
    dps: 136.0,
    rotation: "",
    notes: "",
    members: new Set(["Lohen", "Nicole", "Citlali", "Durin"]),
    characters: {
      Lohen: {
        constellation: 0,
        weapon: weapons.primordial_jade_winged_spear,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Citlali: {
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },
    },
  },
  {
    dps: 136.0,
    rotation: "",
    notes: "",
    members: new Set(["Lohen", "Nicole", "Xilonen", "Durin"]),
    characters: {
      Lohen: {
        constellation: 0,
        weapon: weapons.primordial_jade_winged_spear,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Xilonen: {
        constellation: 0,
        weapon: weapons.any_sword, // Check weapon // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },
    },
  },
  {
    dps: 132.0,
    rotation: "",
    notes: "",
    members: new Set(["Lohen", "Bennett", "Xilonen", "Durin"]),
    characters: {
      Lohen: {
        constellation: 0,
        weapon: weapons.disaster_and_remorse,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check weapon // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Xilonen: {
        constellation: 0,
        weapon: weapons.any_sword, // Check weapon // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },
    },
  },
  {
    dps: 131.0,
    rotation: "",
    notes: "",
    members: new Set(["Lohen", "Nicole", "Xilonen", "Durin"]),
    characters: {
      Lohen: {
        constellation: 0,
        weapon: weapons.deathmatch,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Xilonen: {
        constellation: 0,
        weapon: weapons.any_sword, // Check weapon // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },
    },
  },
  {
    dps: 127.0,
    rotation: "",
    notes: "",
    members: new Set(["Lohen", "Nicole", "Prune", "Durin"]),
    characters: {
      Lohen: {
        constellation: 0,
        weapon: weapons.disaster_and_remorse,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Prune: {
        constellation: 2,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },
    },
  },
  {
    dps: 127.0,
    rotation: "",
    notes: "",
    members: new Set(["Lohen", "Albedo", "Xilonen", "Durin"]),
    characters: {
      Lohen: {
        constellation: 0,
        weapon: weapons.disaster_and_remorse,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Albedo: {
        constellation: 1,
        weapon: weapons.harbinger_of_dawn, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Xilonen: {
        constellation: 0,
        weapon: weapons.any_sword, // Check weapon // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },
    },
  },
  {
    dps: 123.0,
    rotation: "",
    notes: "Durin - Light mode",
    members: new Set(["Lohen", "Nicole", "Emilie", "Durin"]),
    characters: {
      Lohen: {
        constellation: 0,
        weapon: weapons.primordial_jade_winged_spear,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Emilie: {
        constellation: 0,
        weapon: weapons.deathmatch, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },
    },
  },
  {
    dps: 123.0,
    rotation: "",
    notes: "",
    members: new Set(["Lohen", "Bennett", "Prune", "Durin"]),
    characters: {
      Lohen: {
        constellation: 0,
        weapon: weapons.disaster_and_remorse,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check weapon // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Prune: {
        constellation: 2,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },
    },
  },
  {
    dps: 122.0,
    rotation: "",
    notes: "Freeze",
    members: new Set(["Lohen", "Furina", "Escoffier", "Mona"]),
    characters: {
      Lohen: {
        constellation: 0,
        weapon: weapons.disaster_and_remorse,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Mona: {
        constellation: 4,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 117.0,
    rotation: "",
    notes: "",
    members: new Set(["Lohen", "Bennett", "Xilonen", "Durin"]),
    characters: {
      Lohen: {
        constellation: 0,
        weapon: weapons.primordial_jade_winged_spear,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check weapon // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Xilonen: {
        constellation: 0,
        weapon: weapons.any_sword, // Check weapon // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },
    },
  },
  {
    dps: 111.0,
    rotation: "",
    notes: "same",
    members: new Set(["Lohen", "Nicole", "Citlali", "Mavuika"]),
    characters: {
      Lohen: {
        constellation: 0,
        weapon: weapons.disaster_and_remorse,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Citlali: {
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Mavuika: {
        constellation: 0,
        weapon: weapons.fang_of_the_mountain_king,
        refinement: 1,
        artifact: new Set([
          artifacts.obsidian_codex,
          artifacts.noblesse_oblige,
        ]),
      },
    },
  },
  {
    dps: 109.0,
    rotation: "",
    notes: "",
    members: new Set(["Lohen", "Bennett", "Prune", "Xiangling"]),
    characters: {
      Lohen: {
        constellation: 0,
        weapon: weapons.disaster_and_remorse,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check weapon // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Prune: {
        constellation: 2,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Xiangling: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check weapon
        refinement: 1,
        artifact: new Set([artifacts.emblem_of_severed_fate]),
      },
    },
  },
  {
    dps: 82.0,
    rotation: "",
    notes: "",
    members: new Set(["Lohen", "Bennett", "Prune", "Xiangling"]),
    characters: {
      Lohen: {
        constellation: 0,
        weapon: weapons.deathmatch,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check weapon // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Prune: {
        constellation: 2,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Xiangling: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check weapon
        refinement: 1,
        artifact: new Set([artifacts.emblem_of_severed_fate]),
      },
    },
  },
  {
    dps: 110.0,
    rotation: "",
    notes: "Didn't have ineffa R1 at the time",
    members: new Set(["Ifa", "Ineffa", "Columbina", "Durin"]),
    characters: {
      Ifa: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.nocturnes_curtain_call,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },
    },
  },
  {
    dps: 103.0,
    rotation: "",
    notes: "see xiao for more variations",
    members: new Set(["Wanderer", "Faruzan", "Durin", "Nicole"]),
    characters: {
      Wanderer: {
        constellation: 1,
        weapon: weapons.tulaytullahss_remembrance,
        refinement: 1,
        artifact: new Set([artifacts.desert_pavilion_chronicle]),
      },

      Faruzan: {
        constellation: 6,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.viridescent_venerer]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 89.0,
    rotation: "",
    notes: "Messes up Lunar Charged",
    members: new Set(["Wanderer", "Columbina", "Ineffa", "Durin"]),
    characters: {
      Wanderer: {
        constellation: 0,
        weapon: weapons.tulaytullahss_remembrance,
        refinement: 1,
        artifact: new Set([artifacts.desert_pavilion_chronicle]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },
    },
  },
  {
    dps: 77.0,
    rotation: "",
    notes: "",
    members: new Set(["Wanderer", "Faruzan", "Durin", "Bennett"]),
    characters: {
      Wanderer: {
        constellation: 0,
        weapon: weapons.tulaytullahss_remembrance,
        refinement: 1,
        artifact: new Set([artifacts.desert_pavilion_chronicle]),
      },

      Faruzan: {
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 67.0,
    rotation: "",
    notes: "",
    members: new Set(["Wanderer", "Faruzan", "Furina", "Bennett"]),
    characters: {
      Wanderer: {
        constellation: 0,
        weapon: weapons.tulaytullahss_remembrance,
        refinement: 1,
        artifact: new Set([artifacts.desert_pavilion_chronicle]),
      },

      Faruzan: {
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 103.0,
    rotation: "",
    notes: "No healer Xiao losing health. 70% damage Xiao",
    members: new Set(["Xiao", "Faruzan", "Durin", "Nicole"]),
    characters: {
      Xiao: {
        constellation: 0,
        weapon: weapons.staff_of_homa, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Faruzan: {
        constellation: 6,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.viridescent_venerer]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 97.0,
    rotation: "",
    notes: "",
    members: new Set(["Xiao", "Faruzan", "Durin", "Nicole"]),
    characters: {
      Xiao: {
        constellation: 0,
        weapon: weapons.staff_of_homa, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Faruzan: {
        constellation: 6,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.viridescent_venerer]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 90.0,
    rotation: "",
    notes: "",
    members: new Set(["Xiao", "Faruzan", "Furina", "Xianyun"]),
    characters: {
      Xiao: {
        constellation: 0,
        weapon: weapons.primordial_jade_winged_spear, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Faruzan: {
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Xianyun: {
        constellation: 2,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 90.0,
    rotation: "",
    notes: "",
    members: new Set(["Xiao", "Faruzan", "Durin", "Nicole"]),
    characters: {
      Xiao: {
        constellation: 0,
        weapon: weapons.staff_of_homa, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Faruzan: {
        constellation: 6,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 83.0,
    rotation: "",
    notes: "",
    members: new Set(["Xiao", "Prune", "Durin", "Nicole"]),
    characters: {
      Xiao: {
        constellation: 0,
        weapon: weapons.staff_of_homa, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Prune: {
        constellation: 2,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.viridescent_venerer]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 55.0,
    rotation: "",
    notes: "",
    members: new Set(["Xiao", "Faruzan", "Furina", "Bennett"]),
    characters: {
      Xiao: {
        constellation: 0,
        weapon: weapons.primordial_jade_winged_spear, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Faruzan: {
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 85.0,
    rotation: "",
    notes: "",
    members: new Set(["Cyno", "Fischl", "Durin", "Chevreuse"]),
    characters: {
      Cyno: {
        constellation: 0,
        weapon: weapons.primordial_jade_winged_spear, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Fischl: {
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Chevreuse: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },
    },
  },
  {
    dps: 96.0,
    rotation: "",
    notes: "no shield RIP",
    members: new Set(["Lyney", "Fischl", "Chevreuse", "Durin"]),
    characters: {
      Lyney: {
        constellation: 0,
        weapon: weapons.the_first_great_magic,
        refinement: 1,
        artifact: new Set([artifacts.marechaussee_hunter]),
      },

      Fischl: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Chevreuse: {
        constellation: 6,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },
    },
  },
  {
    dps: 85.0,
    rotation: "",
    notes: "I suck at lyney sorry",
    members: new Set(["Lyney", "Durin", "Emilie", "Nicole"]),
    characters: {
      Lyney: {
        constellation: 0,
        weapon: weapons.the_first_great_magic,
        refinement: 1,
        artifact: new Set([artifacts.marechaussee_hunter]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Emilie: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.unfinished_reverie]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 83.0,
    rotation: "",
    notes: "so so bad at this",
    members: new Set(["Lyney", "Fischl", "Chevreuse", "Nicole"]),
    characters: {
      Lyney: {
        constellation: 0,
        weapon: weapons.the_first_great_magic,
        refinement: 1,
        artifact: new Set([artifacts.marechaussee_hunter]),
      },

      Fischl: {
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Chevreuse: {
        constellation: 6,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 95.0,
    rotation: "",
    notes: "",
    members: new Set(["Ganyu", "Durin", "Emilie", "Nicole"]),
    characters: {
      Ganyu: {
        constellation: 0,
        weapon: weapons.hunters_path,
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Emilie: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.skyward_atlas,
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 105.0,
    rotation: "",
    notes: "",
    members: new Set(["Zhongli", "Columbina", "Xilonen", "Ineffa"]),
    characters: {
      Zhongli: {
        constellation: 0,
        weapon: weapons.ballad_of_the_fjords,
        refinement: 5,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Xilonen: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 102.0,
    rotation: "",
    notes: "",
    members: new Set(["Kamisato_Ayaka", "Furina", "Escoffier", "Shenhe"]),
    characters: {
      Kamisato_Ayaka: {
        constellation: 0,
        weapon: weapons.mistsplitter_reforged,
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Shenhe: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },
    },
  },
  {
    dps: 97.0,
    rotation: "",
    notes: "",
    members: new Set(["Yoimiya", "Durin", "Chevreuse", "Fischl"]),
    characters: {
      Yoimiya: {
        constellation: 0,
        weapon: weapons.thundering_pulse,
        refinement: 1,
        artifact: new Set([artifacts.echoes_of_an_offering]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Chevreuse: {
        constellation: 6,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },

      Fischl: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 86.0,
    rotation: "",
    notes: "",
    members: new Set(["Yoimiya", "Durin", "Chevreuse", "Fischl"]),
    characters: {
      Yoimiya: {
        constellation: 0,
        weapon: weapons.thundering_pulse,
        refinement: 1,
        artifact: new Set([artifacts.echoes_of_an_offering]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Chevreuse: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Fischl: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 76.0,
    rotation: "",
    notes: "",
    members: new Set(["Yoimiya", "Nicole", "Chevreuse", "Fischl"]),
    characters: {
      Yoimiya: {
        constellation: 0,
        weapon: weapons.thundering_pulse,
        refinement: 1,
        artifact: new Set([artifacts.echoes_of_an_offering]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Chevreuse: {
        constellation: 6,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },

      Fischl: {
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },
    },
  },
  {
    dps: 75.0,
    rotation: "",
    notes: "",
    members: new Set(["Yoimiya", "Nicole", "Durin", "Prune"]),
    characters: {
      Yoimiya: {
        constellation: 0,
        weapon: weapons.thundering_pulse,
        refinement: 1,
        artifact: new Set([artifacts.echoes_of_an_offering]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Prune: {
        constellation: 2,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 116.0,
    rotation: "",
    notes: "+1 CR and +1 CD to Klee of",
    members: new Set(["Klee", "Durin", "Chevreuse", "Fischl"]),
    characters: {
      Klee: {
        constellation: 1,
        weapon: weapons.reliquary_of_truth,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Chevreuse: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Fischl: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 112.0,
    rotation: "",
    notes: "+1 CR and +1 CD to Klee, Nicole Talent lvl 9-6 of",
    members: new Set(["Klee", "Nicole", "Chevreuse", "Fischl"]),
    characters: {
      Klee: {
        constellation: 1,
        weapon: weapons.reliquary_of_truth,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Chevreuse: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Fischl: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 95.0,
    rotation: "",
    notes: "+1 CR and +1 CD to Klee, Nicole Talent lvl 9-6 of",
    members: new Set(["Klee", "Nicole", "Durin", "Prune"]),
    characters: {
      Klee: {
        constellation: 1,
        weapon: weapons.reliquary_of_truth,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Prune: {
        constellation: 2,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 126.0,
    rotation: "",
    notes: "",
    members: new Set(["Clorinde", "Durin", "Chevreuse", "Fischl"]),
    characters: {
      Clorinde: {
        constellation: 0,
        weapon: weapons.absolution,
        refinement: 1,
        artifact: new Set([artifacts.fragment_of_harmonic_whimsy]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Chevreuse: {
        constellation: 6,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },

      Fischl: {
        constellation: 6,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },
    },
  },
  {
    dps: 113.0,
    rotation: "",
    notes: "TTDS almost exactly the same",
    members: new Set(["Clorinde", "Durin", "Chevreuse", "Nicole"]),
    characters: {
      Clorinde: {
        constellation: 0,
        weapon: weapons.absolution,
        refinement: 1,
        artifact: new Set([artifacts.fragment_of_harmonic_whimsy]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Chevreuse: {
        constellation: 6,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 108.0,
    rotation: "",
    notes: "",
    members: new Set(["Clorinde", "Durin", "Fischl", "Nicole"]),
    characters: {
      Clorinde: {
        constellation: 0,
        weapon: weapons.absolution,
        refinement: 1,
        artifact: new Set([artifacts.fragment_of_harmonic_whimsy]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Fischl: {
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 143.0,
    rotation: "",
    notes: "9-8 talents Nicole",
    members: new Set(["Raiden_Shogun", "Chevreuse", "Durin", "Nicole"]),
    characters: {
      Raiden_Shogun: {
        constellation: 4,
        weapon: weapons.engulfing_lightning, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Chevreuse: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 136.0,
    rotation: "",
    notes: "",
    members: new Set(["Raiden_Shogun", "Chevreuse", "Durin", "Fischl"]),
    characters: {
      Raiden_Shogun: {
        constellation: 4,
        weapon: weapons.engulfing_lightning, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Chevreuse: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Fischl: {
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },
    },
  },
  {
    dps: 122.0,
    rotation: "",
    notes: "",
    members: new Set(["Raiden_Shogun", "Chevreuse", "Durin", "Fischl"]),
    characters: {
      Raiden_Shogun: {
        constellation: 4,
        weapon: weapons.engulfing_lightning, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Chevreuse: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Fischl: {
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },
    },
  },
  {
    dps: 112.0,
    rotation: "",
    notes: "",
    members: new Set(["Raiden_Shogun", "Chevreuse", "Durin", "Nicole"]),
    characters: {
      Raiden_Shogun: {
        constellation: 0,
        weapon: weapons.engulfing_lightning, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Chevreuse: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 105.0,
    rotation: "",
    notes: "",
    members: new Set(["Lauma", "Xingqiu", "Raiden_Shogun", "Yelan"]),
    characters: {
      Lauma: {
        constellation: 0,
        weapon: weapons.nightweavers_looking_glass,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Xingqiu: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Raiden_Shogun: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Yelan: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 90.0,
    rotation: "",
    notes: "+4 CR to Alhaitham for build",
    members: new Set(["Alhaitham", "Lauma", "Columbina", "Kuki_Shinobu"]),
    characters: {
      Alhaitham: {
        constellation: 0,
        weapon: weapons.primordial_jade_cutter, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Lauma: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Kuki_Shinobu: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 80.0,
    rotation: "",
    notes: "+4 CR to Alhaitham for build",
    members: new Set(["Alhaitham", "Lauma", "Furina", "Kuki_Shinobu"]),
    characters: {
      Alhaitham: {
        constellation: 0,
        weapon: weapons.primordial_jade_cutter, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Lauma: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Kuki_Shinobu: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 76.0,
    rotation: "",
    notes: "+4 CR to Alhaitham for build",
    members: new Set(["Alhaitham", "Lauma", "Yelan", "Kuki_Shinobu"]),
    characters: {
      Alhaitham: {
        constellation: 0,
        weapon: weapons.primordial_jade_cutter, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Lauma: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Yelan: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Kuki_Shinobu: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 75.0,
    rotation: "",
    notes: "+4 CR to Alhaitham for build",
    members: new Set(["Alhaitham", "Nahida", "Furina", "Kuki_Shinobu"]),
    characters: {
      Alhaitham: {
        constellation: 0,
        weapon: weapons.primordial_jade_cutter, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Nahida: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Kuki_Shinobu: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 108.0,
    rotation: "",
    notes: "",
    members: new Set(["Wriothesley", "Furina", "Escoffier", "Skirk"]),
    characters: {
      Wriothesley: {
        constellation: 0,
        weapon: weapons.cashflow_supervision,
        refinement: 1,
        artifact: new Set([artifacts.marechaussee_hunter]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Skirk: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 105.0,
    rotation: "",
    notes: "",
    members: new Set(["Wriothesley", "Emilie", "Durin", "Nicole"]),
    characters: {
      Wriothesley: {
        constellation: 0,
        weapon: weapons.cashflow_supervision,
        refinement: 1,
        artifact: new Set([artifacts.marechaussee_hunter]),
      },

      Emilie: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.unfinished_reverie]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 87.0,
    rotation: "",
    notes: "",
    members: new Set(["Wriothesley", "Furina", "Escoffier", "Yelan"]),
    characters: {
      Wriothesley: {
        constellation: 0,
        weapon: weapons.cashflow_supervision,
        refinement: 1,
        artifact: new Set([artifacts.marechaussee_hunter]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Yelan: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 70.0,
    rotation: "",
    notes: "",
    members: new Set(["Wriothesley", "Furina", "Escoffier", "Shenhe"]),
    characters: {
      Wriothesley: {
        constellation: 0,
        weapon: weapons.cashflow_supervision,
        refinement: 1,
        artifact: new Set([artifacts.marechaussee_hunter]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Shenhe: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 138.0,
    rotation: "",
    notes: "+4 CR to Arle for build, Nicole Skill lvl 9",
    members: new Set(["Arlecchino", "Nicole", "Fischl", "Chevreuse"]),
    characters: {
      Arlecchino: {
        constellation: 0,
        weapon: weapons.crimson_moons_semblance, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Fischl: {
        constellation: 6,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Chevreuse: {
        constellation: 6,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },
    },
  },
  {
    dps: 134.0,
    rotation: "",
    notes: "+4 CR to Arle for build",
    members: new Set(["Arlecchino", "Durin", "Fischl", "Chevreuse"]),
    characters: {
      Arlecchino: {
        constellation: 0,
        weapon: weapons.crimson_moons_semblance, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Fischl: {
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Chevreuse: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 128.0,
    rotation: "",
    notes: "+4 CR to Arle for build",
    members: new Set(["Arlecchino", "Escoffier", "Citlali", "Bennett"]),
    characters: {
      Arlecchino: {
        constellation: 0,
        weapon: weapons.crimson_moons_semblance, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Citlali: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 127.0,
    rotation: "",
    notes: "+4 CR to Arle for build, Nicole Skill lvl 9",
    members: new Set(["Arlecchino", "Nicole", "Fischl", "Chevreuse"]),
    characters: {
      Arlecchino: {
        constellation: 0,
        weapon: weapons.crimson_moons_semblance, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Fischl: {
        constellation: 6,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Chevreuse: {
        constellation: 6,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },
    },
  },
  {
    dps: 115.0,
    rotation: "",
    notes: "+4 CR to Arle for build",
    members: new Set(["Arlecchino", "Columbina", "Ineffa", "Xilonen"]),
    characters: {
      Arlecchino: {
        constellation: 0,
        weapon: weapons.crimson_moons_semblance, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Xilonen: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 115.0,
    rotation: "",
    notes: "+4 CR to Arle for build, before nicole set",
    members: new Set(["Arlecchino", "Durin", "Fischl", "Chevreuse"]),
    characters: {
      Arlecchino: {
        constellation: 0,
        weapon: weapons.crimson_moons_semblance, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Fischl: {
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Chevreuse: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 111.0,
    rotation: "",
    notes: "+4 CR to Arle for build, Nicole Skill lvl 9",
    members: new Set(["Arlecchino", "Nicole", "Escoffier", "Citlali"]),
    characters: {
      Arlecchino: {
        constellation: 0,
        weapon: weapons.crimson_moons_semblance, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Citlali: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 110.0,
    rotation: "",
    notes: "+4 CR to Arle for build, Nicole Skill lvl 9",
    members: new Set(["Arlecchino", "Nicole", "Prune", "Durin"]),
    characters: {
      Arlecchino: {
        constellation: 0,
        weapon: weapons.crimson_moons_semblance, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Prune: {
        constellation: 2,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },
    },
  },
  {
    dps: 100.0,
    rotation: "",
    notes: "+4 CR to Arle for build, before nicole set",
    members: new Set(["Arlecchino", "Durin", "Fischl", "Bennett"]),
    characters: {
      Arlecchino: {
        constellation: 0,
        weapon: weapons.crimson_moons_semblance, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Fischl: {
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 177.0,
    rotation: "",
    notes: "",
    members: new Set(["Flins", "Ineffa", "Columbina", "Sucrose"]),
    characters: {
      Flins: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.fractured_halo, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.sacrificial_fragments, // Check weapon // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 167.0,
    rotation: "",
    notes: "",
    members: new Set(["Flins", "Ineffa", "Columbina", "Sucrose"]),
    characters: {
      Flins: {
        constellation: 0,
        weapon: weapons.bloodsoaked_ruins, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 165.0,
    rotation: "",
    notes: "big burst when available",
    members: new Set(["Flins", "Ineffa", "Columbina", "Sucrose"]),
    characters: {
      Flins: {
        constellation: 0,
        weapon: weapons.bloodsoaked_ruins, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 161.0,
    rotation: "",
    notes: "",
    members: new Set(["Flins", "Ineffa", "Columbina", "Sucrose"]),
    characters: {
      Flins: {
        constellation: 0,
        weapon: weapons.primordial_jade_winged_spear, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 156.0,
    rotation: "",
    notes: "",
    members: new Set(["Flins", "Ineffa", "Columbina", "Xilonen"]),
    characters: {
      Flins: {
        constellation: 0,
        weapon: weapons.bloodsoaked_ruins, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Xilonen: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 155.0,
    rotation: "",
    notes: "",
    members: new Set(["Flins", "Ineffa", "Columbina", "Sucrose"]),
    characters: {
      Flins: {
        constellation: 0,
        weapon: weapons.bloodsoaked_ruins, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 149.0,
    rotation: "",
    notes: "",
    members: new Set(["Flins", "Ineffa", "Columbina", "Jahoda"]),
    characters: {
      Flins: {
        constellation: 0,
        weapon: weapons.bloodsoaked_ruins, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Jahoda: {
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 145.0,
    rotation: "",
    notes: "",
    members: new Set(["Flins", "Ineffa", "Columbina", "Durin"]),
    characters: {
      Flins: {
        constellation: 0,
        weapon: weapons.bloodsoaked_ruins, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },
    },
  },
  {
    dps: 145.0,
    rotation: "",
    notes: "",
    members: new Set(["Flins", "Ineffa", "Columbina", "Chiori"]),
    characters: {
      Flins: {
        constellation: 0,
        weapon: weapons.bloodsoaked_ruins, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Chiori: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },
    },
  },
  {
    dps: 141.0,
    rotation: "",
    notes: "",
    members: new Set(["Flins", "Ineffa", "Columbina", "Sucrose"]),
    characters: {
      Flins: {
        constellation: 0,
        weapon: weapons.deathmatch, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 140.0,
    rotation: "",
    notes: "",
    members: new Set(["Flins", "Ineffa", "Columbina", "Sucrose"]),
    characters: {
      Flins: {
        constellation: 0,
        weapon: weapons.bloodsoaked_ruins, // Check weapon // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 135.0,
    rotation: "",
    notes: "",
    members: new Set(["Flins", "Fischl", "Columbina", "Durin"]),
    characters: {
      Flins: {
        constellation: 0,
        weapon: weapons.bloodsoaked_ruins, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Fischl: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },
    },
  },
  {
    dps: 133.0,
    rotation: "",
    notes: "",
    members: new Set(["Flins", "Ineffa", "Furina", "Sucrose"]),
    characters: {
      Flins: {
        constellation: 0,
        weapon: weapons.bloodsoaked_ruins, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 132.0,
    rotation: "",
    notes: "",
    members: new Set(["Flins", "Iansan", "Columbina", "Sucrose"]),
    characters: {
      Flins: {
        constellation: 0,
        weapon: weapons.bloodsoaked_ruins, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Iansan: {
        constellation: 6,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 130.0,
    rotation: "",
    notes: "",
    members: new Set(["Flins", "Ineffa", "Aino", "Sucrose"]),
    characters: {
      Flins: {
        constellation: 0,
        weapon: weapons.bloodsoaked_ruins, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Aino: {
        constellation: 6,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 129.0,
    rotation: "",
    notes: "",
    members: new Set(["Flins", "Ineffa", "Furina", "Sucrose"]),
    characters: {
      Flins: {
        constellation: 0,
        weapon: weapons.bloodsoaked_ruins, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 128.0,
    rotation: "",
    notes: "",
    members: new Set(["Flins", "Fischl", "Columbina", "Sucrose"]),
    characters: {
      Flins: {
        constellation: 0,
        weapon: weapons.bloodsoaked_ruins, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Fischl: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 125.0,
    rotation: "",
    notes: "",
    members: new Set(["Flins", "Fischl", "Columbina", "Nicole"]),
    characters: {
      Flins: {
        constellation: 0,
        weapon: weapons.bloodsoaked_ruins, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Fischl: {
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 122.0,
    rotation: "",
    notes: "",
    members: new Set(["Flins", "Iansan", "Columbina", "Lan_Yan"]),
    characters: {
      Flins: {
        constellation: 0,
        weapon: weapons.bloodsoaked_ruins, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Iansan: {
        constellation: 6,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Lan_Yan: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 120.0,
    rotation: "",
    notes: "",
    members: new Set(["Flins", "Ineffa", "Aino", "Sucrose"]),
    characters: {
      Flins: {
        constellation: 0,
        weapon: weapons.bloodsoaked_ruins, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Aino: {
        constellation: 6,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 118.0,
    rotation: "",
    notes: "",
    members: new Set(["Flins", "Kuki_Shinobu", "Columbina", "Sucrose"]),
    characters: {
      Flins: {
        constellation: 0,
        weapon: weapons.bloodsoaked_ruins, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Kuki_Shinobu: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 112.0,
    rotation: "",
    notes: "",
    members: new Set(["Flins", "Ororon", "Columbina", "Sucrose"]),
    characters: {
      Flins: {
        constellation: 0,
        weapon: weapons.bloodsoaked_ruins, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Ororon: {
        constellation: 4,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 110.0,
    rotation: "",
    notes: "",
    members: new Set(["Flins", "Fischl", "Columbina", "Lan_Yan"]),
    characters: {
      Flins: {
        constellation: 0,
        weapon: weapons.bloodsoaked_ruins, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Fischl: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Lan_Yan: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 110.0,
    rotation: "",
    notes: "",
    members: new Set(["Flins", "Fischl", "Aino", "Lan_Yan"]),
    characters: {
      Flins: {
        constellation: 0,
        weapon: weapons.bloodsoaked_ruins, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Fischl: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Aino: {
        constellation: 6,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Lan_Yan: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 104.0,
    rotation: "",
    notes: "",
    members: new Set(["Flins", "Fischl", "Aino", "Sucrose"]),
    characters: {
      Flins: {
        constellation: 0,
        weapon: weapons.bloodsoaked_ruins, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Fischl: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Aino: {
        constellation: 6,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 85.0,
    rotation: "",
    notes: "",
    members: new Set(["Flins", "Fischl", "Aino", "Sucrose"]),
    characters: {
      Flins: {
        constellation: 0,
        weapon: weapons.deathmatch, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Fischl: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Aino: {
        constellation: 6,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 180.0,
    rotation: "",
    notes: "3C FD Standard easy combo",
    members: new Set(["Mavuika", "Iansan", "Bennett", "Citlali"]),
    characters: {
      Mavuika: {
        constellation: 0,
        weapon: weapons.a_thousand_blazing_suns,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Iansan: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Citlali: {
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 160.0,
    rotation: "",
    notes: "3C FD Standard easy combo",
    members: new Set(["Mavuika", "Sucrose", "Nicole", "Citlali"]),
    characters: {
      Mavuika: {
        constellation: 0,
        weapon: weapons.a_thousand_blazing_suns,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.viridescent_venerer]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Citlali: {
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 155.0,
    rotation: "",
    notes: "3C FD Standard easy combo",
    members: new Set(["Mavuika", "Xilonen", "Bennett", "Citlali"]),
    characters: {
      Mavuika: {
        constellation: 0,
        weapon: weapons.a_thousand_blazing_suns,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Xilonen: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Citlali: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 145.0,
    rotation: "",
    notes: "3C FD Standard easy combo",
    members: new Set(["Mavuika", "Escoffier", "Bennett", "Citlali"]),
    characters: {
      Mavuika: {
        constellation: 0,
        weapon: weapons.a_thousand_blazing_suns,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Citlali: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 135.0,
    rotation: "",
    notes:
      "April's Account. Charge Dash Combo. Can do 140 if executed pefectly.",
    members: new Set(["Mavuika", "Ororon", "Iansan", "Chevreuse"]),
    characters: {
      Mavuika: {
        constellation: 0,
        weapon: weapons.fang_of_the_mountain_king, // Mavuika sig
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Ororon: {
        constellation: 6,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.scroll_of_the_hero_of_cinder_city]),
      },

      Iansan: {
        constellation: 6,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },

      Chevreuse: {
        constellation: 6,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.song_of_days_past]),
      },
    },
  },
  {
    dps: 129.0,
    rotation: "",
    notes: "too skill issue to swirl pyro sorry",
    members: new Set(["Mavuika", "Iansan", "Mona", "Sucrose"]),
    characters: {
      Mavuika: {
        constellation: 0,
        weapon: weapons.a_thousand_blazing_suns,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Iansan: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Mona: {
        constellation: 4,
        weapon: weapons.any_catalyst, // Check weapon // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 151.0,
    rotation: "",
    notes: "",
    members: new Set(["Mualani", "Mona", "Mavuika", "Sucrose"]),
    characters: {
      Mualani: {
        constellation: 0,
        weapon: weapons.surfs_up,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Mona: {
        constellation: 4,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Mavuika: {
        constellation: 0,
        weapon: weapons.a_thousand_blazing_suns,
        refinement: 1,
        artifact: new Set([artifacts.scroll_of_the_hero_of_cinder_city]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check weapon
        refinement: 1,
        artifact: new Set([artifacts.viridescent_venerer]),
      },
    },
  },
  {
    dps: 127.0,
    rotation: "",
    notes: "",
    members: new Set(["Venti", "Durin", "Faruzan", "Nicole"]),
    characters: {
      Venti: {
        constellation: 0,
        weapon: weapons.the_daybreak_chronicles,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },

      Faruzan: {
        constellation: 6,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.viridescent_venerer]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 94.0,
    rotation: "",
    notes: "",
    members: new Set(["Venti", "Columbina", "Ineffa", "Durin"]),
    characters: {
      Venti: {
        constellation: 0,
        weapon: weapons.the_daybreak_chronicles,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },
    },
  },
  {
    dps: 93.0,
    rotation: "",
    notes: "",
    members: new Set(["Venti", "Faruzan", "Durin", "Bennett"]),
    characters: {
      Venti: {
        constellation: 0,
        weapon: weapons.the_daybreak_chronicles,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Faruzan: {
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 93.0,
    rotation: "",
    notes: "",
    members: new Set(["Venti", "Columbina", "Ineffa", "Sucrose"]),
    characters: {
      Venti: {
        constellation: 0,
        weapon: weapons.the_daybreak_chronicles,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 158.0,
    rotation: "",
    notes: "",
    members: new Set(["Varesa", "Nicole", "Durin", "Iansan"]),
    characters: {
      Varesa: {
        constellation: 0,
        weapon: weapons.vivid_notions,
        refinement: 1,
        artifact: new Set([artifacts.long_nights_oath]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },

      Iansan: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 153.0,
    rotation: "",
    notes: "",
    members: new Set(["Varesa", "Iansan", "Durin", "Chevreuse"]),
    characters: {
      Varesa: {
        constellation: 0,
        weapon: weapons.vivid_notions,
        refinement: 1,
        artifact: new Set([artifacts.long_nights_oath]),
      },

      Iansan: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Chevreuse: {
        constellation: 6,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },
    },
  },
  {
    dps: 152.0,
    rotation: "",
    notes: "",
    members: new Set(["Varesa", "Nicole", "Durin", "Iansan"]),
    characters: {
      Varesa: {
        constellation: 0,
        weapon: weapons.vivid_notions,
        refinement: 1,
        artifact: new Set([artifacts.long_nights_oath]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Iansan: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 148.0,
    rotation: "",
    notes: "",
    members: new Set(["Varesa", "Fischl", "Durin", "Chevreuse"]),
    characters: {
      Varesa: {
        constellation: 0,
        weapon: weapons.vivid_notions,
        refinement: 1,
        artifact: new Set([artifacts.long_nights_oath]),
      },

      Fischl: {
        constellation: 6,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Chevreuse: {
        constellation: 6,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },
    },
  },
  {
    dps: 145.0,
    rotation: "",
    notes:
      "April's Account. Mavuika combo: CDCDCF CDCD. Fang = SS in calcs for Mavuika. 150k peak with Durin on my account",
    members: new Set(["Varesa", "Iansan", "Mavuika", "Chevreuse"]),
    characters: {
      Varesa: {
        constellation: 0,
        weapon: weapons.vivid_notions,
        refinement: 1,
        artifact: new Set([artifacts.long_nights_oath]),
      },

      Iansan: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Mavuika: {
        constellation: 0,
        weapon: weapons.fang_of_the_mountain_king, // Mavuika sig
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Chevreuse: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 140.0,
    rotation: "",
    notes: "",
    members: new Set(["Varesa", "Nicole", "Durin", "Chevreuse"]),
    characters: {
      Varesa: {
        constellation: 0,
        weapon: weapons.vivid_notions,
        refinement: 1,
        artifact: new Set([artifacts.long_nights_oath]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Chevreuse: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 137.0,
    rotation: "",
    notes: "",
    members: new Set(["Varesa", "Iansan", "Durin", "Chevreuse"]),
    characters: {
      Varesa: {
        constellation: 0,
        weapon: weapons.vivid_notions,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Iansan: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Chevreuse: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 128.0,
    rotation: "",
    notes: "Mavuika combo: Charge Dash Normal Combo (No special CD)",
    members: new Set(["Varesa", "Iansan", "Mavuika", "Chevreuse"]),
    characters: {
      Varesa: {
        constellation: 0,
        weapon: weapons.vivid_notions,
        refinement: 1,
        artifact: new Set([artifacts.long_nights_oath]),
      },

      Iansan: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Mavuika: {
        constellation: 0,
        weapon: weapons.a_thousand_blazing_suns,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Chevreuse: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 127.0,
    rotation: "",
    notes: "",
    members: new Set(["Varesa", "Fischl", "Durin", "Nicole"]),
    characters: {
      Varesa: {
        constellation: 0,
        weapon: weapons.vivid_notions,
        refinement: 1,
        artifact: new Set([artifacts.long_nights_oath]),
      },

      Fischl: {
        constellation: 6,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 123.0,
    rotation: "",
    notes: "",
    members: new Set(["Varesa", "Ineffa", "Columbina", "Sucrose"]),
    characters: {
      Varesa: {
        constellation: 0,
        weapon: weapons.vivid_notions,
        refinement: 1,
        artifact: new Set([artifacts.long_nights_oath]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 118.0,
    rotation: "",
    notes: "",
    members: new Set(["Varesa", "Fischl", "Durin", "Chevreuse"]),
    characters: {
      Varesa: {
        constellation: 0,
        weapon: weapons.vivid_notions,
        refinement: 1,
        artifact: new Set([artifacts.long_nights_oath]),
      },

      Fischl: {
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Chevreuse: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 156.0,
    rotation: "",
    notes: "Nicole lvl 9 skill",
    members: new Set(["Kinich", "Iansan", "Durin", "Nicole"]),
    characters: {
      Kinich: {
        constellation: 0,
        weapon: weapons.fang_of_the_mountain_king,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Iansan: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 137.0,
    rotation: "",
    notes: "Nicole lvl 9 skill",
    members: new Set(["Kinich", "Emilie", "Durin", "Nicole"]),
    characters: {
      Kinich: {
        constellation: 0,
        weapon: weapons.fang_of_the_mountain_king,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Emilie: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 125.0,
    rotation: "",
    notes:
      "Scroll every other rotation, TTDS every other rotation (inverse of scroll)",
    members: new Set(["Kinich", "Lauma", "Iansan", "Bennett"]),
    characters: {
      Kinich: {
        constellation: 0,
        weapon: weapons.fang_of_the_mountain_king,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Lauma: {
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers,
        refinement: 1,
        artifact: new Set([artifacts.deepwood_memories]),
      },

      Iansan: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 119.0,
    rotation: "",
    notes: "",
    members: new Set(["Kinich", "Emilie", "Iansan", "Bennett"]),
    characters: {
      Kinich: {
        constellation: 0,
        weapon: weapons.fang_of_the_mountain_king,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Emilie: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Iansan: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 105.0,
    rotation: "",
    notes: "",
    members: new Set(["Kinich", "Iansan", "Durin", "Bennett"]),
    characters: {
      Kinich: {
        constellation: 0,
        weapon: weapons.fang_of_the_mountain_king,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Iansan: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 133.0,
    rotation: "",
    notes: "",
    members: new Set(["Chasca", "Nicole", "Durin", "Iansan"]),
    characters: {
      Chasca: {
        constellation: 0,
        weapon: weapons.astral_vultures_crimson_plumage,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },

      Iansan: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 115.0,
    rotation: "",
    notes: "",
    members: new Set(["Chasca", "Durin", "Nicole", "Mona"]),
    characters: {
      Chasca: {
        constellation: 0,
        weapon: weapons.astral_vultures_crimson_plumage,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Mona: {
        constellation: 4,
        weapon: weapons.thrilling_tales_of_dragon_slayers,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },
    },
  },
  {
    dps: 112.0,
    rotation: "",
    notes: "",
    members: new Set(["Chasca", "Nicole", "Durin", "Citlali"]),
    characters: {
      Chasca: {
        constellation: 0,
        weapon: weapons.astral_vultures_crimson_plumage,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Citlali: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 110.0,
    rotation: "",
    notes: "",
    members: new Set(["Chasca", "Iansan", "Durin", "Mona"]),
    characters: {
      Chasca: {
        constellation: 0,
        weapon: weapons.astral_vultures_crimson_plumage,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Iansan: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Mona: {
        constellation: 3,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 109.0,
    rotation: "",
    notes: "",
    members: new Set(["Chasca", "Iansan", "Mavuika", "Citlali"]),
    characters: {
      Chasca: {
        constellation: 0,
        weapon: weapons.astral_vultures_crimson_plumage,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Iansan: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Mavuika: {
        constellation: 0,
        weapon: weapons.a_thousand_blazing_suns,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Citlali: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 107.0,
    rotation: "",
    notes: "higher peaks lower lows it seems",
    members: new Set(["Chasca", "Mavuika", "Citlali", "Bennett"]),
    characters: {
      Chasca: {
        constellation: 0,
        weapon: weapons.astral_vultures_crimson_plumage,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Mavuika: {
        constellation: 0,
        weapon: weapons.a_thousand_blazing_suns,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Citlali: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 105.0,
    rotation: "",
    notes: "codex > VV",
    members: new Set(["Chasca", "Ineffa", "Columbina", "Durin"]),
    characters: {
      Chasca: {
        constellation: 0,
        weapon: weapons.astral_vultures_crimson_plumage,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },
    },
  },
  {
    dps: 105.0,
    rotation: "",
    notes: "Surprisingly Solid",
    members: new Set(["Chasca", "Iansan", "Furina", "Bennett"]),
    characters: {
      Chasca: {
        constellation: 0,
        weapon: weapons.astral_vultures_crimson_plumage,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Iansan: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 103.0,
    rotation: "",
    notes: "",
    members: new Set(["Chasca", "Ineffa", "Columbina", "Bennett"]),
    characters: {
      Chasca: {
        constellation: 0,
        weapon: weapons.astral_vultures_crimson_plumage,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 100.0,
    rotation: "",
    notes: "",
    members: new Set(["Chasca", "Nicole", "Mona", "Iansan"]),
    characters: {
      Chasca: {
        constellation: 0,
        weapon: weapons.astral_vultures_crimson_plumage,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Mona: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Iansan: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 95.0,
    rotation: "",
    notes: "",
    members: new Set(["Chasca", "Iansan", "Furina", "Chevreuse"]),
    characters: {
      Chasca: {
        constellation: 0,
        weapon: weapons.astral_vultures_crimson_plumage,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Iansan: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Chevreuse: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 90.0,
    rotation: "",
    notes: "",
    members: new Set(["Chasca", "Iansan", "Durin", "Citlali"]),
    characters: {
      Chasca: {
        constellation: 0,
        weapon: weapons.astral_vultures_crimson_plumage,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Iansan: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Citlali: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 90.0,
    rotation: "",
    notes: "",
    members: new Set(["Chasca", "Furina", "Citlali", "Bennett"]),
    characters: {
      Chasca: {
        constellation: 0,
        weapon: weapons.astral_vultures_crimson_plumage,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Citlali: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 88.0,
    rotation: "",
    notes: "",
    members: new Set(["Chasca", "Fischl", "Chevreuse", "Nicole"]),
    characters: {
      Chasca: {
        constellation: 0,
        weapon: weapons.astral_vultures_crimson_plumage,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Fischl: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Chevreuse: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 75.0,
    rotation: "",
    notes: "",
    members: new Set(["Chasca", "Furina", "Xilonen", "Bennett"]),
    characters: {
      Chasca: {
        constellation: 0,
        weapon: weapons.astral_vultures_crimson_plumage,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Xilonen: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 118.0,
    rotation: "",
    notes: "+6 Crit rate -2 Crit dmg to Arataki_Itto",
    members: new Set(["Arataki_Itto", "Columbina", "Illuga", "Linnea"]),
    characters: {
      Arataki_Itto: {
        constellation: 0,
        weapon: weapons.redhorn_stonethresher, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Illuga: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Linnea: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.aubade_of_morningstar_and_moon]),
      },
    },
  },
  {
    dps: 114.0,
    rotation: "",
    notes: "+6 Crit rate -2 Crit dmg to Arataki_Itto",
    members: new Set(["Arataki_Itto", "Columbina", "Ineffa", "Linnea"]),
    characters: {
      Arataki_Itto: {
        constellation: 0,
        weapon: weapons.redhorn_stonethresher, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Linnea: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.aubade_of_morningstar_and_moon]),
      },
    },
  },
  {
    dps: 110.0,
    rotation: "",
    notes: "+6 Crit rate -2 Crit dmg to Arataki_Itto",
    members: new Set(["Arataki_Itto", "Columbina", "Ineffa", "Xilonen"]),
    characters: {
      Arataki_Itto: {
        constellation: 0,
        weapon: weapons.redhorn_stonethresher, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Xilonen: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 105.0,
    rotation: "",
    notes: "+6 Crit rate -2 Crit dmg to Arataki_Itto",
    members: new Set(["Arataki_Itto", "Columbina", "Gorou", "Linnea"]),
    characters: {
      Arataki_Itto: {
        constellation: 0,
        weapon: weapons.redhorn_stonethresher, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Gorou: {
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Linnea: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.aubade_of_morningstar_and_moon]),
      },
    },
  },
  {
    dps: 115.0,
    rotation: "",
    notes: "",
    members: new Set(["Yelan", "Columbina", "Ineffa", "Sucrose"]),
    characters: {
      Yelan: {
        constellation: 0,
        weapon: weapons.aqua_simulacra, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 102.0,
    rotation: "",
    notes: "",
    members: new Set(["Yelan", "Furina", "Citlali", "Escoffier"]),
    characters: {
      Yelan: {
        constellation: 0,
        weapon: weapons.aqua_simulacra, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Citlali: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 120.0,
    rotation: "",
    notes: "",
    members: new Set(["Durin", "Fischl", "Chevreuse", "Bennett"]),
    characters: {
      Durin: {
        constellation: 0,
        weapon: weapons.mistsplitter_reforged,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Fischl: {
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Chevreuse: {
        constellation: 6,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.song_of_days_past]),
      },

      Bennett: {
        constellation: 6,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },
    },
  },
  {
    dps: 113.0,
    rotation: "",
    notes: "",
    members: new Set(["Durin", "Fischl", "Chevreuse", "Bennett"]),
    characters: {
      Durin: {
        constellation: 0,
        weapon: weapons.mistsplitter_reforged,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Fischl: {
        constellation: 6,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Chevreuse: {
        constellation: 6,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.song_of_days_past]),
      },

      Bennett: {
        constellation: 6,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },
    },
  },
  {
    dps: 95.0,
    rotation: "",
    notes: "",
    members: new Set(["Durin", "Furina", "Mona", "Bennett"]),
    characters: {
      Durin: {
        constellation: 0,
        weapon: weapons.mistsplitter_reforged,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Mona: {
        constellation: 3,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Bennett: {
        constellation: 6,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 119.0,
    rotation: "",
    notes: "",
    members: new Set(["Noelle", "Columbina", "Ineffa", "Linnea"]),
    characters: {
      Noelle: {
        constellation: 0,
        weapon: weapons.redhorn_stonethresher,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Linnea: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.aubade_of_morningstar_and_moon]),
      },
    },
  },
  {
    dps: 110.0,
    rotation: "",
    notes: "",
    members: new Set(["Noelle", "Columbina", "Illuga", "Linnea"]),
    characters: {
      Noelle: {
        constellation: 0,
        weapon: weapons.redhorn_stonethresher,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Illuga: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Linnea: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.aubade_of_morningstar_and_moon]),
      },
    },
  },
  {
    dps: 98.0,
    rotation: "",
    notes: "",
    members: new Set(["Noelle", "Columbina", "Ineffa", "Xilonen"]),
    characters: {
      Noelle: {
        constellation: 0,
        weapon: weapons.redhorn_stonethresher,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Xilonen: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 131.0,
    rotation: "",
    notes: "+3 Crit Rate to Navia because of build",
    members: new Set(["Navia", "Columbina", "Ineffa", "Linnea"]),
    characters: {
      Navia: {
        constellation: 0,
        weapon: weapons.verdict,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Linnea: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.aubade_of_morningstar_and_moon]),
      },
    },
  },
  {
    dps: 130.0,
    rotation: "",
    notes: "+3 Crit Rate to Navia because of build",
    members: new Set(["Navia", "Columbina", "Illuga", "Linnea"]),
    characters: {
      Navia: {
        constellation: 0,
        weapon: weapons.verdict,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Illuga: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Linnea: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.aubade_of_morningstar_and_moon]),
      },
    },
  },
  {
    dps: 126.0,
    rotation: "",
    notes: "+3 Crit Rate to Navia because of build",
    members: new Set(["Navia", "Columbina", "Ineffa", "Xilonen"]),
    characters: {
      Navia: {
        constellation: 0,
        weapon: weapons.verdict,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Xilonen: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 115.0,
    rotation: "",
    notes: "+3 Crit Rate to Navia because of build",
    members: new Set(["Navia", "Columbina", "Furina", "Linnea"]),
    characters: {
      Navia: {
        constellation: 0,
        weapon: weapons.verdict,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Linnea: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.aubade_of_morningstar_and_moon]),
      },
    },
  },
  {
    dps: 112.0,
    rotation: "",
    notes: "+3 Crit Rate to Navia because of build",
    members: new Set(["Navia", "Xilonen", "Durin", "Nicole"]),
    characters: {
      Navia: {
        constellation: 0,
        weapon: weapons.verdict,
        refinement: 1,
        artifact: new Set([artifacts.nighttime_whispers_in_the_echoing_woods]),
      },

      Xilonen: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 108.0,
    rotation: "",
    notes: "+3 Crit Rate to Navia because of build",
    members: new Set(["Navia", "Columbina", "Ineffa", "Illuga"]),
    characters: {
      Navia: {
        constellation: 0,
        weapon: weapons.verdict,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Illuga: {
        constellation: 2,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 97.0,
    rotation: "",
    notes: "+3 Crit Rate to Navia because of build",
    members: new Set(["Navia", "Albedo", "Durin", "Bennett"]),
    characters: {
      Navia: {
        constellation: 0,
        weapon: weapons.verdict,
        refinement: 1,
        artifact: new Set([artifacts.nighttime_whispers_in_the_echoing_woods]),
      },

      Albedo: {
        constellation: 0,
        weapon: weapons.harbinger_of_dawn, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 84.0,
    rotation: "",
    notes: "+3 Crit Rate to Navia because of build",
    members: new Set(["Navia", "Columbina", "Xilonen", "Furina"]),
    characters: {
      Navia: {
        constellation: 0,
        weapon: weapons.verdict,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Xilonen: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 86.0,
    rotation: "",
    notes: "+3 Crit Rate to Navia because of build",
    members: new Set(["Navia", "Mavuika", "Bennett", "Xilonen"]),
    characters: {
      Navia: {
        constellation: 0,
        weapon: weapons.verdict,
        refinement: 1,
        artifact: new Set([artifacts.nighttime_whispers_in_the_echoing_woods]),
      },

      Mavuika: {
        constellation: 0,
        weapon: weapons.a_thousand_blazing_suns,
        refinement: 1,
        artifact: new Set([artifacts.obsidian_codex]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Xilonen: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 80.0,
    rotation: "",
    notes: "+3 Crit Rate to Navia because of build",
    members: new Set(["Navia", "Xilonen", "Durin", "Bennett"]),
    characters: {
      Navia: {
        constellation: 0,
        weapon: weapons.verdict,
        refinement: 1,
        artifact: new Set([artifacts.nighttime_whispers_in_the_echoing_woods]),
      },

      Xilonen: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Bennett: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 123.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build",
    members: new Set(["Neuvillette", "Columbina", "Ineffa", "Xilonen"]),
    characters: {
      Neuvillette: {
        constellation: 0,
        weapon: weapons.tome_of_the_eternal_flow,
        refinement: 1,
        artifact: new Set([artifacts.marechaussee_hunter]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Xilonen: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 115.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build",
    members: new Set(["Neuvillette", "Columbina", "Ineffa", "Lauma"]),
    characters: {
      Neuvillette: {
        constellation: 0,
        weapon: weapons.tome_of_the_eternal_flow,
        refinement: 1,
        artifact: new Set([artifacts.marechaussee_hunter]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Lauma: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 112.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build mode",
    members: new Set(["Neuvillette", "Columbina", "Ineffa", "Durin"]),
    characters: {
      Neuvillette: {
        constellation: 0,
        weapon: weapons.tome_of_the_eternal_flow,
        refinement: 1,
        artifact: new Set([artifacts.marechaussee_hunter]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },
    },
  },
  {
    dps: 112.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build",
    members: new Set(["Neuvillette", "Furina", "Ineffa", "Lauma"]),
    characters: {
      Neuvillette: {
        constellation: 0,
        weapon: weapons.tome_of_the_eternal_flow,
        refinement: 1,
        artifact: new Set([artifacts.marechaussee_hunter]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Lauma: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 111.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build",
    members: new Set(["Neuvillette", "Furina", "Escoffier", "Skirk"]),
    characters: {
      Neuvillette: {
        constellation: 0,
        weapon: weapons.tome_of_the_eternal_flow,
        refinement: 1,
        artifact: new Set([artifacts.marechaussee_hunter]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Skirk: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 108.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build",
    members: new Set(["Neuvillette", "Columbina", "Ineffa", "Sucrose"]),
    characters: {
      Neuvillette: {
        constellation: 0,
        weapon: weapons.tome_of_the_eternal_flow,
        refinement: 1,
        artifact: new Set([artifacts.marechaussee_hunter]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 101.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build",
    members: new Set(["Neuvillette", "Furina", "Escoffier", "Citlali"]),
    characters: {
      Neuvillette: {
        constellation: 0,
        weapon: weapons.tome_of_the_eternal_flow,
        refinement: 1,
        artifact: new Set([artifacts.marechaussee_hunter]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Citlali: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 105.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build",
    members: new Set(["Neuvillette", "Columbina", "Ineffa", "Linnea"]),
    characters: {
      Neuvillette: {
        constellation: 0,
        weapon: weapons.tome_of_the_eternal_flow,
        refinement: 1,
        artifact: new Set([artifacts.marechaussee_hunter]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Linnea: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.aubade_of_morningstar_and_moon]),
      },
    },
  },
  {
    dps: 100.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build",
    members: new Set(["Neuvillette", "Furina", "Lauma", "Raiden_Shogun"]),
    characters: {
      Neuvillette: {
        constellation: 0,
        weapon: weapons.tome_of_the_eternal_flow,
        refinement: 1,
        artifact: new Set([artifacts.marechaussee_hunter]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Lauma: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Raiden_Shogun: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 96.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build",
    members: new Set(["Neuvillette", "Furina", "Xilonen", "Kaedehara_Kazuha"]),
    characters: {
      Neuvillette: {
        constellation: 0,
        weapon: weapons.tome_of_the_eternal_flow,
        refinement: 1,
        artifact: new Set([artifacts.marechaussee_hunter]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Xilonen: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Kaedehara_Kazuha: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 92.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build",
    members: new Set(["Neuvillette", "Furina", "Ineffa", "Kaedehara_Kazuha"]),
    characters: {
      Neuvillette: {
        constellation: 0,
        weapon: weapons.tome_of_the_eternal_flow,
        refinement: 1,
        artifact: new Set([artifacts.marechaussee_hunter]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Kaedehara_Kazuha: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 92.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build",
    members: new Set(["Neuvillette", "Columbina", "Lauma", "Raiden_Shogun"]),
    characters: {
      Neuvillette: {
        constellation: 0,
        weapon: weapons.tome_of_the_eternal_flow,
        refinement: 1,
        artifact: new Set([artifacts.marechaussee_hunter]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Lauma: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Raiden_Shogun: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 92.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build",
    members: new Set(["Neuvillette", "Furina", "Durin", "Ineffa"]),
    characters: {
      Neuvillette: {
        constellation: 0,
        weapon: weapons.tome_of_the_eternal_flow,
        refinement: 1,
        artifact: new Set([artifacts.marechaussee_hunter]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 91.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build",
    members: new Set(["Neuvillette", "Furina", "Durin", "Albedo"]),
    characters: {
      Neuvillette: {
        constellation: 0,
        weapon: weapons.tome_of_the_eternal_flow,
        refinement: 1,
        artifact: new Set([artifacts.marechaussee_hunter]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Albedo: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 91.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build",
    members: new Set(["Neuvillette", "Furina", "Ineffa", "Albedo"]),
    characters: {
      Neuvillette: {
        constellation: 0,
        weapon: weapons.tome_of_the_eternal_flow,
        refinement: 1,
        artifact: new Set([artifacts.marechaussee_hunter]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Albedo: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 85.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build",
    members: new Set(["Neuvillette", "Furina", "Ineffa", "Xilonen"]),
    characters: {
      Neuvillette: {
        constellation: 0,
        weapon: weapons.tome_of_the_eternal_flow,
        refinement: 1,
        artifact: new Set([artifacts.marechaussee_hunter]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Xilonen: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 83.0,
    rotation: "",
    notes: "+2 HP +2 crit damage added to Neuv because of build",
    members: new Set(["Neuvillette", "Furina", "Durin", "Lauma"]),
    characters: {
      Neuvillette: {
        constellation: 0,
        weapon: weapons.tome_of_the_eternal_flow,
        refinement: 1,
        artifact: new Set([artifacts.marechaussee_hunter]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Lauma: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 90.0,
    rotation: "",
    notes: "",
    members: new Set(["Kamisato_Ayato", "Ineffa", "Columbina", "Sucrose"]),
    characters: {
      Kamisato_Ayato: {
        constellation: 0,
        weapon: weapons.haran_geppaku_futsu, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 85.0,
    rotation: "",
    notes: "",
    members: new Set(["Kamisato_Ayato", "Durin", "Xilonen", "Nicole"]),
    characters: {
      Kamisato_Ayato: {
        constellation: 0,
        weapon: weapons.haran_geppaku_futsu, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },

      Xilonen: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 62.0,
    rotation: "",
    notes: "",
    members: new Set(["Kamisato_Ayato", "Escoffier", "Furina", "Yelan"]),
    characters: {
      Kamisato_Ayato: {
        constellation: 0,
        weapon: weapons.haran_geppaku_futsu, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Yelan: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 138.0,
    rotation: "",
    notes: "",
    members: new Set(["Sucrose", "Ineffa", "Columbina", "Linnea"]),
    characters: {
      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.fractured_halo, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Linnea: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.aubade_of_morningstar_and_moon]),
      },
    },
  },
  {
    dps: 126.0,
    rotation: "",
    notes: "",
    members: new Set(["Sucrose", "Ineffa", "Columbina", "Xilonen"]),
    characters: {
      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.fractured_halo, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Xilonen: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 131.0,
    rotation: "",
    notes: "",
    members: new Set(["Sucrose", "Ineffa", "Columbina", "Durin"]),
    characters: {
      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.fractured_halo, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.a_day_carved_from_rising_winds]),
      },
    },
  },
  {
    dps: 120.0,
    rotation: "",
    notes: "",
    members: new Set(["Sucrose", "Ineffa", "Columbina", "Fischl"]),
    characters: {
      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.nocturnes_curtain_call,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Fischl: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 116.0,
    rotation: "",
    notes: "",
    members: new Set(["Sucrose", "Ineffa", "Columbina", "Linnea"]),
    characters: {
      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Linnea: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.aubade_of_morningstar_and_moon]),
      },
    },
  },
  {
    dps: 110.0,
    rotation: "",
    notes: "Didn't have ineffa R1 at the time",
    members: new Set(["Yumemizuki_Mizuki", "Ineffa", "Columbina", "Durin"]),
    characters: {
      Yumemizuki_Mizuki: {
        constellation: 2,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.nocturnes_curtain_call,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Durin: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 104.0,
    rotation: "",
    notes: "",
    members: new Set(["Yumemizuki_Mizuki", "Ineffa", "Columbina", "Ororon"]),
    characters: {
      Yumemizuki_Mizuki: {
        constellation: 2,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.nocturnes_curtain_call,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Ororon: {
        constellation: 4,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 115.0,
    rotation: "",
    notes: "",
    members: new Set(["Hu_Tao", "Columbina", "Ineffa", "Yelan"]),
    characters: {
      Hu_Tao: {
        constellation: 1,
        weapon: weapons.staff_of_homa, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Yelan: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 100.0,
    rotation: "",
    notes: "",
    members: new Set(["Hu_Tao", "Columbina", "Ineffa", "Aino"]),
    characters: {
      Hu_Tao: {
        constellation: 1,
        weapon: weapons.staff_of_homa, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Aino: {
        constellation: 0,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 100.0,
    rotation: "",
    notes: "",
    members: new Set(["Hu_Tao", "Xingqiu", "Nicole", "Mona"]),
    characters: {
      Hu_Tao: {
        constellation: 1,
        weapon: weapons.staff_of_homa, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Xingqiu: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Mona: {
        constellation: 4,
        weapon: weapons.thrilling_tales_of_dragon_slayers,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },
    },
  },
  {
    dps: 97.0,
    rotation: "",
    notes: "",
    members: new Set(["Hu_Tao", "Yelan", "Nicole", "Mona"]),
    characters: {
      Hu_Tao: {
        constellation: 1,
        weapon: weapons.staff_of_homa, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Yelan: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Nicole: {
        constellation: 0,
        weapon: weapons.skyward_atlas, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Mona: {
        constellation: 4,
        weapon: weapons.thrilling_tales_of_dragon_slayers,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },
    },
  },
  {
    dps: 93.0,
    rotation: "",
    notes: "",
    members: new Set(["Hu_Tao", "Furina", "Yelan", "Xilonen"]),
    characters: {
      Hu_Tao: {
        constellation: 1,
        weapon: weapons.staff_of_homa,
        refinement: 1,
        artifact: new Set([artifacts.marechaussee_hunter]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Yelan: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Xilonen: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 239.0,
    rotation: "",
    notes: "Skirk (Level 100)",
    members: new Set(["Skirk", "Furina", "Escoffier", "Shenhe"]),
    characters: {
      Skirk: {
        constellation: 2,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Shenhe: {
        constellation: 2,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },
    },
  },
  {
    dps: 224.0,
    rotation: "",
    notes: "Skirk (Level 100)",
    members: new Set(["Skirk", "Furina", "Escoffier", "Shenhe"]),
    characters: {
      Skirk: {
        constellation: 2,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Shenhe: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },
    },
  },
  {
    dps: 203.0,
    rotation: "",
    notes: "",
    members: new Set(["Skirk", "Furina", "Escoffier", "Shenhe"]),
    characters: {
      Skirk: {
        constellation: 2,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Shenhe: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },
    },
  },
  {
    dps: 176.0,
    rotation: "",
    notes: "",
    members: new Set(["Skirk", "Furina", "Escoffier", "Shenhe"]),
    characters: {
      Skirk: {
        constellation: 1,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Shenhe: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },
    },
  },
  {
    dps: 173.0,
    rotation: "",
    notes: "",
    members: new Set(["Skirk", "Furina", "Escoffier", "Shenhe"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.symphonist_of_scents,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Shenhe: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },
    },
  },
  {
    dps: 166.0,
    rotation: "",
    notes: "N2 Combo - mid execution",
    members: new Set(["Skirk", "Furina", "Escoffier", "Shenhe"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Shenhe: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },
    },
  },
  {
    dps: 164.0,
    rotation: "",
    notes: "",
    members: new Set(["Skirk", "Furina", "Escoffier", "Shenhe"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Shenhe: {
        constellation: 0,
        weapon: weapons.calamity_queller,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },
    },
  },
  {
    dps: 162.0,
    rotation: "",
    notes: "",
    members: new Set(["Skirk", "Furina", "Escoffier", "Shenhe"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Shenhe: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },
    },
  },
  {
    dps: 160.0,
    rotation: "",
    notes: "note you lose cryo res against non-freezable enemies",
    members: new Set(["Skirk", "Furina", "Escoffier", "Yelan"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Yelan: {
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },
    },
  },
  {
    dps: 158.0,
    rotation: "",
    notes: "",
    members: new Set(["Skirk", "Furina", "Escoffier", "Mona"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Mona: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },
    },
  },
  {
    dps: 155.0,
    rotation: "",
    notes: "",
    members: new Set(["Skirk", "Furina", "Escoffier", "Shenhe"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.marechaussee_hunter]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Shenhe: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },
    },
  },
  {
    dps: 154.0,
    rotation: "",
    notes: "",
    members: new Set(["Skirk", "Furina", "Escoffier", "Dahlia"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Dahlia: {
        constellation: 6,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 154.0,
    rotation: "",
    notes: "",
    members: new Set(["Skirk", "Furina", "Escoffier", "Shenhe"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Shenhe: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },
    },
  },
  {
    dps: 152.0,
    rotation: "",
    notes: "N2 Combo",
    members: new Set(["Skirk", "Furina", "Escoffier", "Mona"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.haran_geppaku_futsu,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Mona: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },
    },
  },
  {
    dps: 152.0,
    rotation: "",
    notes: "note you lose cryo resonance against non freezable enemies",
    members: new Set(["Skirk", "Yelan", "Escoffier", "Mona"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Yelan: {
        constellation: 0,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.emblem_of_severed_fate]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Mona: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },
    },
  },
  {
    dps: 151.0,
    rotation: "",
    notes: "",
    members: new Set(["Skirk", "Furina", "Escoffier", "Columbina"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },
    },
  },
  {
    dps: 150.0,
    rotation: "",
    notes: "",
    members: new Set(["Skirk", "Furina", "Escoffier", "Citlali"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Citlali: {
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers,
        refinement: 1,
        artifact: new Set([artifacts.scroll_of_the_hero_of_cinder_city]),
      },
    },
  },
  {
    dps: 150.0,
    rotation: "",
    notes: "160k first rotation",
    members: new Set(["Skirk", "Furina", "Escoffier", "Mualani"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Mualani: {
        constellation: 0,
        weapon: weapons.thrilling_tales_of_dragon_slayers,
        refinement: 1,
        artifact: new Set([artifacts.scroll_of_the_hero_of_cinder_city]),
      },
    },
  },
  {
    dps: 148.0,
    rotation: "",
    notes: "",
    members: new Set(["Skirk", "Furina", "Escoffier", "Candace"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Candace: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 147.0,
    rotation: "",
    notes: "",
    members: new Set(["Skirk", "Furina", "Escoffier", "Xingqiu"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Xingqiu: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 146.0,
    rotation: "",
    notes: "",
    members: new Set(["Skirk", "Shenhe", "Escoffier", "Mona"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Shenhe: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Mona: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 145.0,
    rotation: "",
    notes: "",
    members: new Set(["Skirk", "Furina", "Escoffier", "Charlotte"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Charlotte: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 145.0,
    rotation: "",
    notes: "",
    members: new Set(["Skirk", "Furina", "Escoffier", "Rosaria"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Rosaria: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 142.0,
    rotation: "",
    notes: "",
    members: new Set(["Skirk", "Furina", "Escoffier", "Dahlia"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Dahlia: {
        constellation: 4,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 142.0,
    rotation: "",
    notes: "",
    members: new Set(["Skirk", "Furina", "Escoffier", "Chongyun"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Chongyun: {
        constellation: 0,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 142.0,
    rotation: "",
    notes: "Mika's talent is lvl 8",
    members: new Set(["Skirk", "Furina", "Escoffier", "Mika"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Mika: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 140.0,
    rotation: "",
    notes: "",
    members: new Set(["Skirk", "Furina", "Escoffier", "Kamisato_Ayaka"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Kamisato_Ayaka: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 140.0,
    rotation: "",
    notes: "",
    members: new Set(["Skirk", "Furina", "Escoffier", "Ganyu"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Ganyu: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 132.0,
    rotation: "",
    notes: "ER issues",
    members: new Set(["Skirk", "Mona", "Escoffier", "Candace"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Mona: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Candace: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 130.0,
    rotation: "",
    notes: "",
    members: new Set(["Skirk", "Mona", "Escoffier", "Xingqiu"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Mona: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Xingqiu: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 129.0,
    rotation: "",
    notes: "",
    members: new Set(["Skirk", "Furina", "Escoffier", "Shenhe"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.finale_of_the_deep,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Shenhe: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },
    },
  },
  {
    dps: 126.0,
    rotation: "",
    notes: "",
    members: new Set(["Skirk", "Furina", "Escoffier", "Shenhe"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.finale_of_the_deep,
        refinement: 1,
        artifact: new Set([artifacts.marechaussee_hunter]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Shenhe: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.noblesse_oblige]),
      },
    },
  },
  {
    dps: 124.0,
    rotation: "",
    notes: "",
    members: new Set(["Skirk", "Furina", "Escoffier", "Mona"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.finale_of_the_deep,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Mona: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 120.0,
    rotation: "",
    notes: "",
    members: new Set(["Skirk", "Furina", "Shenhe", "Charlotte"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Shenhe: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Charlotte: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 119.0,
    rotation: "",
    notes: "",
    members: new Set(["Skirk", "Yelan", "Escoffier", "Mona"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.finale_of_the_deep,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Yelan: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Escoffier: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.golden_troupe]),
      },

      Mona: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 110.0,
    rotation: "",
    notes: "",
    members: new Set(["Skirk", "Furina", "Candace", "Charlotte"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Candace: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Charlotte: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 108.0,
    rotation: "",
    notes: "",
    members: new Set(["Skirk", "Furina", "Mika", "Mona"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Mika: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Mona: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 105.0,
    rotation: "",
    notes: "",
    members: new Set(["Skirk", "Yelan", "Shenhe", "Columbina"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Yelan: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Shenhe: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },
    },
  },
  {
    dps: 100.0,
    rotation: "",
    notes: "",
    members: new Set(["Skirk", "Furina", "Dahlia", "Charlotte"]),
    characters: {
      Skirk: {
        constellation: 0,
        weapon: weapons.azurelight,
        refinement: 1,
        artifact: new Set([artifacts.finale_of_the_deep_galleries]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.tenacity_of_the_millelith]),
      },

      Dahlia: {
        constellation: 4,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Charlotte: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 137.0,
    rotation: "",
    notes: "",
    members: new Set(["Chiori", "Columbina", "Ineffa", "Linnea"]),
    characters: {
      Chiori: {
        constellation: 0,
        weapon: weapons.uraku_misugiri,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Linnea: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.aubade_of_morningstar_and_moon]),
      },
    },
  },
  {
    dps: 115.0,
    rotation: "",
    notes: "",
    members: new Set(["Chiori", "Columbina", "Illuga", "Linnea"]),
    characters: {
      Chiori: {
        constellation: 0,
        weapon: weapons.uraku_misugiri,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Illuga: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Linnea: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.aubade_of_morningstar_and_moon]),
      },
    },
  },
  {
    dps: 105.0,
    rotation: "",
    notes: "",
    members: new Set(["Albedo", "Columbina", "Illuga", "Linnea"]),
    characters: {
      Albedo: {
        constellation: 0,
        weapon: weapons.uraku_misugiri, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Illuga: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Linnea: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.aubade_of_morningstar_and_moon]),
      },
    },
  },
  {
    dps: 90.0,
    rotation: "",
    notes: "trash?",
    members: new Set(["Linnea", "Columbina", "Illuga", "Gorou"]),
    characters: {
      Linnea: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Illuga: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Gorou: {
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 207.0,
    rotation: "",
    notes: "",
    members: new Set(["Zibai", "Illuga", "Columbina", "Linnea"]),
    characters: {
      Zibai: {
        constellation: 0,
        weapon: weapons.lightbearing_moonshard,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Illuga: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Linnea: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.aubade_of_morningstar_and_moon]),
      },
    },
  },
  {
    dps: 188.0,
    rotation: "",
    notes: "used peak patrol song which is better than flute worse than HOD",
    members: new Set(["Zibai", "Illuga", "Columbina", "Linnea"]),
    characters: {
      Zibai: {
        constellation: 0,
        weapon: weapons.peak_patrol_song,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Illuga: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Linnea: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.aubade_of_morningstar_and_moon]),
      },
    },
  },
  {
    dps: 186.0,
    rotation: "",
    notes: "",
    members: new Set(["Zibai", "Illuga", "Columbina", "Linnea"]),
    characters: {
      Zibai: {
        constellation: 0,
        weapon: weapons.lightbearing_moonshard,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Illuga: {
        constellation: 2,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Linnea: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.aubade_of_morningstar_and_moon]),
      },
    },
  },
  {
    dps: 184.0,
    rotation: "",
    notes: "",
    members: new Set(["Zibai", "Chiori", "Columbina", "Linnea"]),
    characters: {
      Zibai: {
        constellation: 0,
        weapon: weapons.lightbearing_moonshard,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Chiori: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Linnea: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.aubade_of_morningstar_and_moon]),
      },
    },
  },
  {
    dps: 176.0,
    rotation: "",
    notes: "",
    members: new Set(["Zibai", "Ineffa", "Columbina", "Linnea"]),
    characters: {
      Zibai: {
        constellation: 0,
        weapon: weapons.lightbearing_moonshard,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Linnea: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.aubade_of_morningstar_and_moon]),
      },
    },
  },
  {
    dps: 175.0,
    rotation: "",
    notes: "",
    members: new Set(["Zibai", "Gorou", "Columbina", "Linnea"]),
    characters: {
      Zibai: {
        constellation: 0,
        weapon: weapons.lightbearing_moonshard,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Gorou: {
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Linnea: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.aubade_of_morningstar_and_moon]),
      },
    },
  },
  {
    dps: 167.0,
    rotation: "",
    notes: "no bina",
    members: new Set(["Zibai", "Illuga", "Aino", "Linnea"]),
    characters: {
      Zibai: {
        constellation: 0,
        weapon: weapons.lightbearing_moonshard,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Illuga: {
        constellation: 6,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Aino: {
        constellation: 6,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Linnea: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.aubade_of_morningstar_and_moon]),
      },
    },
  },
  {
    dps: 166.0,
    rotation: "",
    notes: "",
    members: new Set(["Zibai", "Gorou", "Columbina", "Linnea"]),
    characters: {
      Zibai: {
        constellation: 0,
        weapon: weapons.peak_patrol_song,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Gorou: {
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Linnea: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.aubade_of_morningstar_and_moon]),
      },
    },
  },
  {
    dps: 160.0,
    rotation: "",
    notes: "",
    members: new Set(["Zibai", "Ineffa", "Columbina", "Linnea"]),
    characters: {
      Zibai: {
        constellation: 0,
        weapon: weapons.peak_patrol_song,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Linnea: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.aubade_of_morningstar_and_moon]),
      },
    },
  },
  {
    dps: 157.0,
    rotation: "",
    notes: "",
    members: new Set(["Zibai", "Illuga", "Columbina", "Gorou"]),
    characters: {
      Zibai: {
        constellation: 0,
        weapon: weapons.lightbearing_moonshard,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Illuga: {
        constellation: 2,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Gorou: {
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 156.0,
    rotation: "",
    notes: "",
    members: new Set(["Zibai", "Xilonen", "Columbina", "Ineffa"]),
    characters: {
      Zibai: {
        constellation: 0,
        weapon: weapons.lightbearing_moonshard,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Xilonen: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.scroll_of_the_hero_of_cinder_city]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 151.0,
    rotation: "",
    notes: "",
    members: new Set(["Zibai", "Illuga", "Columbina", "Chiori"]),
    characters: {
      Zibai: {
        constellation: 0,
        weapon: weapons.lightbearing_moonshard,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Illuga: {
        constellation: 2,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Chiori: {
        constellation: 0,
        weapon: weapons.uraku_misugiri,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },
    },
  },
  {
    dps: 147.0,
    rotation: "",
    notes: "",
    members: new Set(["Zibai", "Illuga", "Columbina", "Ineffa"]),
    characters: {
      Zibai: {
        constellation: 0,
        weapon: weapons.lightbearing_moonshard,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Illuga: {
        constellation: 2,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 146.0,
    rotation: "",
    notes: "",
    members: new Set(["Zibai", "Gorou", "Aino", "Linnea"]),
    characters: {
      Zibai: {
        constellation: 0,
        weapon: weapons.lightbearing_moonshard,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Gorou: {
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Aino: {
        constellation: 6,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Linnea: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.aubade_of_morningstar_and_moon]),
      },
    },
  },
  {
    dps: 145.0,
    rotation: "",
    notes: "",
    members: new Set(["Zibai", "Ineffa", "Columbina", "Xilonen"]),
    characters: {
      Zibai: {
        constellation: 0,
        weapon: weapons.peak_patrol_song,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Xilonen: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 138.0,
    rotation: "",
    notes: "",
    members: new Set(["Zibai", "Illuga", "Columbina", "Zhongli"]),
    characters: {
      Zibai: {
        constellation: 0,
        weapon: weapons.lightbearing_moonshard,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Illuga: {
        constellation: 2,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Zhongli: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 133.0,
    rotation: "",
    notes: "",
    members: new Set(["Zibai", "Illuga", "Columbina", "Gorou"]),
    characters: {
      Zibai: {
        constellation: 0,
        weapon: weapons.peak_patrol_song,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Illuga: {
        constellation: 2,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Gorou: {
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 130.0,
    rotation: "",
    notes: "",
    members: new Set(["Zibai", "Albedo", "Columbina", "Fischl"]),
    characters: {
      Zibai: {
        constellation: 0,
        weapon: weapons.lightbearing_moonshard,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Albedo: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Fischl: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 127.0,
    rotation: "",
    notes: "",
    members: new Set(["Zibai", "Illuga", "Columbina", "Aino"]),
    characters: {
      Zibai: {
        constellation: 0,
        weapon: weapons.lightbearing_moonshard,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Illuga: {
        constellation: 2,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Aino: {
        constellation: 5,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 127.0,
    rotation: "",
    notes: "",
    members: new Set(["Zibai", "Illuga", "Columbina", "Yelan"]),
    characters: {
      Zibai: {
        constellation: 0,
        weapon: weapons.lightbearing_moonshard,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Illuga: {
        constellation: 2,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Yelan: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 124.0,
    rotation: "",
    notes: "no bina",
    members: new Set(["Zibai", "Illuga", "Aino", "Gorou"]),
    characters: {
      Zibai: {
        constellation: 0,
        weapon: weapons.lightbearing_moonshard,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Illuga: {
        constellation: 2,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Aino: {
        constellation: 6,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Gorou: {
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 123.0,
    rotation: "",
    notes: "",
    members: new Set(["Zibai", "Illuga", "Columbina", "Fischl"]),
    characters: {
      Zibai: {
        constellation: 0,
        weapon: weapons.lightbearing_moonshard,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Illuga: {
        constellation: 2,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Fischl: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 120.0,
    rotation: "",
    notes: "(Normal x8 Skill x2 Normal x1 Skill Burst Skill)  2N4 2E N1 E Q E",
    members: new Set(["Zibai", "Illuga", "Columbina", "Jahoda"]),
    characters: {
      Zibai: {
        constellation: 0,
        weapon: weapons.lightbearing_moonshard,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Illuga: {
        constellation: 2,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Jahoda: {
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 119.0,
    rotation: "",
    notes: "",
    members: new Set(["Zibai", "Illuga", "Columbina", "Dahlia"]),
    characters: {
      Zibai: {
        constellation: 0,
        weapon: weapons.lightbearing_moonshard,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Illuga: {
        constellation: 2,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Dahlia: {
        constellation: 2,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 116.0,
    rotation: "",
    notes: "",
    members: new Set(["Zibai", "Ineffa", "Aino", "Xilonen"]),
    characters: {
      Zibai: {
        constellation: 0,
        weapon: weapons.lightbearing_moonshard,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Aino: {
        constellation: 0,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Xilonen: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 115.0,
    rotation: "",
    notes: "",
    members: new Set(["Zibai", "Illuga", "Columbina", "Navia"]),
    characters: {
      Zibai: {
        constellation: 0,
        weapon: weapons.lightbearing_moonshard,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Illuga: {
        constellation: 2,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Navia: {
        constellation: 0,
        weapon: weapons.verdict,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },
    },
  },
  {
    dps: 115.0,
    rotation: "",
    notes: "",
    members: new Set(["Zibai", "Xilonen", "Columbina", "Furina"]),
    characters: {
      Zibai: {
        constellation: 0,
        weapon: weapons.lightbearing_moonshard,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Xilonen: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 105.0,
    rotation: "",
    notes: "",
    members: new Set(["Zibai", "Illuga", "Aino", "Gorou"]),
    characters: {
      Zibai: {
        constellation: 0,
        weapon: weapons.lightbearing_moonshard,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Illuga: {
        constellation: 2,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Aino: {
        constellation: 5,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Gorou: {
        constellation: 6,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 164.0,
    rotation: "",
    notes: "",
    members: new Set(["Columbina", "Ineffa", "Lauma", "Aino"]),
    characters: {
      Columbina: {
        constellation: 0,
        weapon: weapons.nocturnes_curtain_call,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.aubade_of_morningstar_and_moon]),
      },

      Lauma: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Aino: {
        constellation: 6,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: new Set([artifacts.deepwood_memories]),
      },
    },
  },
  {
    dps: 157.0,
    rotation: "",
    notes: "",
    members: new Set(["Columbina", "Ineffa", "Lauma", "Furina"]),
    characters: {
      Columbina: {
        constellation: 0,
        weapon: weapons.nocturnes_curtain_call,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.aubade_of_morningstar_and_moon]),
      },

      Lauma: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.deepwood_memories]),
      },
    },
  },
  {
    dps: 145.0,
    rotation: "",
    notes: "",
    members: new Set(["Columbina", "Ineffa", "Lauma", "Linnea"]),
    characters: {
      Columbina: {
        constellation: 0,
        weapon: weapons.nocturnes_curtain_call,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Lauma: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Linnea: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.aubade_of_morningstar_and_moon]),
      },
    },
  },
  {
    dps: 141.0,
    rotation: "",
    notes: "",
    members: new Set(["Columbina", "Ineffa", "Lauma", "Aino"]),
    characters: {
      Columbina: {
        constellation: 0,
        weapon: weapons.nocturnes_curtain_call,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Lauma: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Aino: {
        constellation: 5,
        weapon: weapons.any_claymore, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 140.0,
    rotation: "",
    notes: "",
    members: new Set(["Columbina", "Ineffa", "Lauma", "Furina"]),
    characters: {
      Columbina: {
        constellation: 0,
        weapon: weapons.the_widsith,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Lauma: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 135.0,
    rotation: "",
    notes: "",
    members: new Set(["Columbina", "Kuki_Shinobu", "Lauma", "Furina"]),
    characters: {
      Columbina: {
        constellation: 0,
        weapon: weapons.nocturnes_curtain_call,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Kuki_Shinobu: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.flower_of_paradise_lost]),
      },

      Lauma: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Furina: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.deepwood_memories]),
      },
    },
  },
  {
    dps: 130.0,
    rotation: "",
    notes: "",
    members: new Set(["Columbina", "Nahida", "Lauma", "Nilou"]),
    characters: {
      Columbina: {
        constellation: 0,
        weapon: weapons.nocturnes_curtain_call,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Nahida: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Lauma: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Nilou: {
        constellation: 0,
        weapon: weapons.any_sword, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 130.0,
    rotation: "",
    notes: "",
    members: new Set(["Columbina", "Ineffa", "Lauma", "Nahida"]),
    characters: {
      Columbina: {
        constellation: 0,
        weapon: weapons.nocturnes_curtain_call,
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Lauma: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Nahida: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },
    },
  },
  {
    dps: 191.0,
    rotation: "",
    notes: "would be higher but i miss swirls cause skill issue",
    members: new Set(["Nefer", "Lauma", "Columbina", "Sucrose"]),
    characters: {
      Nefer: {
        constellation: 0,
        weapon: weapons.reliquary_of_truth, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Lauma: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.deepwood_memories]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.instructor]),
      },
    },
  },
  {
    dps: 188.0,
    rotation: "",
    notes: "",
    members: new Set(["Nefer", "Lauma", "Columbina", "Sucrose"]),
    characters: {
      Nefer: {
        constellation: 0,
        weapon: weapons.reliquary_of_truth, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Lauma: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.deepwood_memories]),
      },
    },
  },
  {
    dps: 184.0,
    rotation: "",
    notes: "",
    members: new Set(["Nefer", "Lauma", "Columbina", "Nahida"]),
    characters: {
      Nefer: {
        constellation: 0,
        weapon: weapons.reliquary_of_truth, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Lauma: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Nahida: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.deepwood_memories]),
      },
    },
  },
  {
    dps: 184.0,
    rotation: "",
    notes: "",
    members: new Set(["Nefer", "Lauma", "Columbina", "Ineffa"]),
    characters: {
      Nefer: {
        constellation: 0,
        weapon: weapons.reliquary_of_truth, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Lauma: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.deepwood_memories]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Ineffa: {
        constellation: 0,
        weapon: weapons.any_polearm,
        refinement: 1,
        artifact: new Set([artifacts.instructor]),
      },
    },
  },
  {
    dps: 172.0,
    rotation: "",
    notes: "",
    members: new Set(["Nefer", "Lauma", "Columbina", "Kuki_Shinobu"]),
    characters: {
      Nefer: {
        constellation: 0,
        weapon: weapons.reliquary_of_truth, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Lauma: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.deepwood_memories]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Kuki_Shinobu: {
        constellation: 0,
        weapon: weapons.any_sword,
        refinement: 1,
        artifact: new Set([artifacts.instructor]),
      },
    },
  },
  {
    dps: 170.0,
    rotation: "",
    notes: "Linnea tap tap tap",
    members: new Set(["Nefer", "Lauma", "Columbina", "Linnea"]),
    characters: {
      Nefer: {
        constellation: 0,
        weapon: weapons.reliquary_of_truth, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Lauma: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.deepwood_memories]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Linnea: {
        constellation: 0,
        weapon: weapons.any_bow, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.aubade_of_morningstar_and_moon]),
      },
    },
  },
  {
    dps: 165.0,
    rotation: "",
    notes: "",
    members: new Set(["Nefer", "Lauma", "Columbina", "Jahoda"]),
    characters: {
      Nefer: {
        constellation: 0,
        weapon: weapons.reliquary_of_truth, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Lauma: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.deepwood_memories]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Jahoda: {
        constellation: 6,
        weapon: weapons.any_bow,
        refinement: 1,
        artifact: new Set([artifacts.instructor]),
      },
    },
  },
  {
    dps: 165.0,
    rotation: "",
    notes: "",
    members: new Set(["Nefer", "Lauma", "Columbina", "Sucrose"]),
    characters: {
      Nefer: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Lauma: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.deepwood_memories]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.instructor]),
      },
    },
  },
  {
    dps: 151.0,
    rotation: "",
    notes: "",
    members: new Set(["Nefer", "Lauma", "Aino", "Sucrose"]),
    characters: {
      Nefer: {
        constellation: 0,
        weapon: weapons.reliquary_of_truth, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Lauma: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Aino: {
        constellation: 6,
        weapon: weapons.any_claymore,
        refinement: 1,
        artifact: new Set([artifacts.deepwood_memories]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.instructor]),
      },
    },
  },
  {
    dps: 151.0,
    rotation: "",
    notes: "",
    members: new Set(["Nefer", "Lauma", "Columbina", "Sucrose"]),
    characters: {
      Nefer: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Lauma: {
        constellation: 0,
        weapon: weapons.any_catalyst, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.any]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.instructor]),
      },
    },
  },
  {
    dps: 110.0,
    rotation: "",
    notes: "no Lauma",
    members: new Set(["Nefer", "Columbina", "Nahida", "Sucrose"]),
    characters: {
      Nefer: {
        constellation: 0,
        weapon: weapons.reliquary_of_truth, // Check artifact
        refinement: 1,
        artifact: new Set([artifacts.night_of_the_skys_unveiling]),
      },

      Columbina: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.aubade_of_morningstar_and_moon]),
      },

      Nahida: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.deepwood_memories]),
      },

      Sucrose: {
        constellation: 0,
        weapon: weapons.any_catalyst,
        refinement: 1,
        artifact: new Set([artifacts.silken_moon_serenade]),
      },
    },
  },
];

export default teams;

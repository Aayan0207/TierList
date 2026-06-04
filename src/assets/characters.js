const chars = [
  {
    name: "Aino",
    element: "Hydro",
    weapon: "Claymore",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 1,
        tags: { constellation: 6, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Albedo",
    element: "Geo",
    weapon: "Sword",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 1.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Alhaitham",
    element: "Dendro",
    weapon: "Sword",
    rarity: 5,
    role: {
      dps: {
        tier: 1,
        tags: { constellation: 0, expert: false, partner: "Lauma" },
      },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Aloy",
    element: "Cryo",
    weapon: "Bow",
    rarity: 5,
    role: {
      dps: { tier: 3, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Amber",
    element: "Pyro",
    weapon: "Bow",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 3,
        tags: { constellation: 2, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Arataki_Itto",
    element: "Geo",
    weapon: "Claymore",
    rarity: 5,
    role: {
      dps: {
        tier: 1.5,
        tags: { constellation: 0, expert: false, partner: "Linnea" },
      },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Arlecchino",
    element: "Pyro",
    weapon: "Polearm",
    rarity: 5,
    role: {
      dps: {
        tier: 0.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Baizhu",
    element: "Dendro",
    weapon: "Catalyst",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Barbara",
    element: "Hydro",
    weapon: "Catalyst",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 2,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Beidou",
    element: "Electro",
    weapon: "Claymore",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 1.5,
        tags: { constellation: 6, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Bennett",
    element: "Pyro",
    weapon: "Sword",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 0,
        tags: { constellation: 1, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Candace",
    element: "Hydro",
    weapon: "Polearm",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 1.5,
        tags: { constellation: 6, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Charlotte",
    element: "Cryo",
    weapon: "Catalyst",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 1,
        tags: { constellation: 6, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Chasca",
    element: "Anemo",
    weapon: "Bow",
    rarity: 5,
    role: {
      dps: {
        tier: 0.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Chevreuse",
    element: "Pyro",
    weapon: "Polearm",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 0,
        tags: { constellation: 6, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Chiori",
    element: "Geo",
    weapon: "Sword",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Chongyun",
    element: "Cryo",
    weapon: "Claymore",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 2,
        tags: { constellation: 6, expert: false, partner: "" },
      },
      support: {
        tier: 3,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Citlali",
    element: "Cryo",
    weapon: "Catalyst",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 0,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Clorinde",
    element: "Electro",
    weapon: "Sword",
    rarity: 5,
    role: {
      dps: { tier: 1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Collei",
    element: "Dendro",
    weapon: "Bow",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 1.5,
        tags: { constellation: 6, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Columbina",
    element: "Hydro",
    weapon: "Catalyst",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 0,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Cyno",
    element: "Electro",
    weapon: "Polearm",
    rarity: 5,
    role: {
      dps: {
        tier: 1.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Dahlia",
    element: "Hydro",
    weapon: "Sword",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 1.5,
        tags: { constellation: 6, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Dehya",
    element: "Pyro",
    weapon: "Claymore",
    rarity: 5,
    role: {
      dps: { tier: 3, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 2,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 1.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Diluc",
    element: "Pyro",
    weapon: "Claymore",
    rarity: 5,
    role: {
      dps: {
        tier: 1.5,
        tags: { constellation: 0, expert: false, partner: "Xianyun" },
      },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Diona",
    element: "Cryo",
    weapon: "Bow",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 1,
        tags: { constellation: 6, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Dori",
    element: "Electro",
    weapon: "Claymore",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 2,
        tags: { constellation: 4, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Durin",
    element: "Pyro",
    weapon: "Sword",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 0,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Emilie",
    element: "Dendro",
    weapon: "Polearm",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 0.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Escoffier",
    element: "Cryo",
    weapon: "Polearm",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 0,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Eula",
    element: "Cryo",
    weapon: "Claymore",
    rarity: 5,
    role: {
      dps: { tier: 3, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Faruzan",
    element: "Anemo",
    weapon: "Bow",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 1,
        tags: { constellation: 6, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Fischl",
    element: "Electro",
    weapon: "Bow",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 0.5,
        tags: { constellation: 6, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Flins",
    element: "Electro",
    weapon: "Polearm",
    rarity: 5,
    role: {
      dps: {
        tier: 0,
        tags: { constellation: 0, expert: false, partner: "Ineffa" },
      },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Freminet",
    element: "Cryo",
    weapon: "Claymore",
    rarity: 4,
    role: {
      dps: { tier: 3, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Furina",
    element: "Hydro",
    weapon: "Sword",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 0,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Gaming",
    element: "Pyro",
    weapon: "Claymore",
    rarity: 4,
    role: {
      dps: { tier: 1, tags: { constellation: 6, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Ganyu",
    element: "Cryo",
    weapon: "Bow",
    rarity: 5,
    role: {
      dps: {
        tier: 1.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      subdps: {
        tier: 1.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Gorou",
    element: "Geo",
    weapon: "Bow",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 1,
        tags: { constellation: 6, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Hu_Tao",
    element: "Pyro",
    weapon: "Polearm",
    rarity: 5,
    role: {
      dps: { tier: 1, tags: { constellation: 1, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Iansan",
    element: "Electro",
    weapon: "Polearm",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 0,
        tags: { constellation: 2, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Ifa",
    element: "Anemo",
    weapon: "Catalyst",
    rarity: 4,
    role: {
      dps: { tier: 2, tags: { constellation: 6, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Illuga",
    element: "Geo",
    weapon: "Polearm",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 0.5,
        tags: { constellation: 2, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Ineffa",
    element: "Electro",
    weapon: "Polearm",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 0,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 0.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Jahoda",
    element: "Anemo",
    weapon: "Bow",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 1.5,
        tags: { constellation: 6, expert: false, partner: "" },
      },
      support: {
        tier: 1.5,
        tags: { constellation: 6, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Jean",
    element: "Anemo",
    weapon: "Sword",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Kachina",
    element: "Geo",
    weapon: "Polearm",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 1.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Kaedehara_Kazuha",
    element: "Anemo",
    weapon: "Sword",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 0.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Kaeya",
    element: "Cryo",
    weapon: "Sword",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 2,
        tags: { constellation: 2, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Kamisato_Ayaka",
    element: "Cryo",
    weapon: "Sword",
    rarity: 5,
    role: {
      dps: {
        tier: 1,
        tags: { constellation: 0, expert: false, partner: "Escoffier" },
      },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Kamisato_Ayato",
    element: "Hydro",
    weapon: "Sword",
    rarity: 5,
    role: {
      dps: {
        tier: 1.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Kaveh",
    element: "Dendro",
    weapon: "Claymore",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 2,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Keqing",
    element: "Electro",
    weapon: "Sword",
    rarity: 5,
    role: {
      dps: { tier: 2, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Kinich",
    element: "Dendro",
    weapon: "Claymore",
    rarity: 5,
    role: {
      dps: {
        tier: 0.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Kirara",
    element: "Dendro",
    weapon: "Sword",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 1,
        tags: { constellation: 6, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Klee",
    element: "Pyro",
    weapon: "Catalyst",
    rarity: 5,
    role: {
      dps: { tier: 1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Kujou_Sara",
    element: "Electro",
    weapon: "Bow",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 1.5,
        tags: { constellation: 6, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Kuki_Shinobu",
    element: "Electro",
    weapon: "Sword",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 0.5,
        tags: { constellation: 4, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Lan_Yan",
    element: "Anemo",
    weapon: "Catalyst",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 1,
        tags: { constellation: 2, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Lauma",
    element: "Dendro",
    weapon: "Catalyst",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 0,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Layla",
    element: "Cryo",
    weapon: "Sword",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 1,
        tags: { constellation: 1, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Lisa",
    element: "Electro",
    weapon: "Catalyst",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 2,
        tags: { constellation: 4, expert: false, partner: "" },
      },
      support: {
        tier: 3,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Lynette",
    element: "Anemo",
    weapon: "Sword",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 2,
        tags: { constellation: 6, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Lyney",
    element: "Pyro",
    weapon: "Bow",
    rarity: 5,
    role: {
      dps: { tier: 1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Mavuika",
    element: "Pyro",
    weapon: "Claymore",
    rarity: 5,
    role: {
      dps: { tier: 0, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 0,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Mika",
    element: "Cryo",
    weapon: "Polearm",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 3,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Mona",
    element: "Hydro",
    weapon: "Catalyst",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 0.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Mualani",
    element: "Hydro",
    weapon: "Catalyst",
    rarity: 5,
    role: {
      dps: {
        tier: 0.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Nahida",
    element: "Dendro",
    weapon: "Catalyst",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 0.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 0.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Navia",
    element: "Geo",
    weapon: "Claymore",
    rarity: 5,
    role: {
      dps: {
        tier: 1,
        tags: { constellation: 0, expert: false, partner: "Linnea" },
      },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Linnea",
    element: "Geo",
    weapon: "Bow",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 0,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Nefer",
    element: "Dendro",
    weapon: "Catalyst",
    rarity: 5,
    role: {
      dps: {
        tier: 0,
        tags: { constellation: 0, expert: false, partner: "Lauma" },
      },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Neuvillette",
    element: "Hydro",
    weapon: "Catalyst",
    rarity: 5,
    role: {
      dps: {
        tier: 0.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Nilou",
    element: "Hydro",
    weapon: "Sword",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 0.5,
        tags: { constellation: 0, expert: false, partner: "Lauma" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Ningguang",
    element: "Geo",
    weapon: "Catalyst",
    rarity: 4,
    role: {
      dps: { tier: 2, tags: { constellation: 6, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Noelle",
    element: "Geo",
    weapon: "Claymore",
    rarity: 4,
    role: {
      dps: { tier: 2, tags: { constellation: 6, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 3,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Ororon",
    element: "Electro",
    weapon: "Bow",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Qiqi",
    element: "Cryo",
    weapon: "Sword",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 3,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Raiden_Shogun",
    element: "Electro",
    weapon: "Polearm",
    rarity: 5,
    role: {
      dps: {
        tier: 1.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      subdps: {
        tier: 0.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Razor",
    element: "Electro",
    weapon: "Claymore",
    rarity: 4,
    role: {
      dps: { tier: 1, tags: { constellation: 6, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Rosaria",
    element: "Cryo",
    weapon: "Polearm",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 1,
        tags: { constellation: 6, expert: false, partner: "" },
      },
      support: {
        tier: 1.5,
        tags: { constellation: 6, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Sangonomiya_Kokomi",
    element: "Hydro",
    weapon: "Catalyst",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 1.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Sayu",
    element: "Anemo",
    weapon: "Claymore",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 2,
        tags: { constellation: 2, expert: false, partner: "" },
      },
      support: {
        tier: 2,
        tags: { constellation: 6, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Sethos",
    element: "Electro",
    weapon: "Bow",
    rarity: 4,
    role: {
      dps: {
        tier: 1.5,
        tags: { constellation: 6, expert: false, partner: "" },
      },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Shenhe",
    element: "Cryo",
    weapon: "Polearm",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 0.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Shikanoin_Heizou",
    element: "Anemo",
    weapon: "Catalyst",
    rarity: 4,
    role: {
      dps: { tier: 2, tags: { constellation: 6, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Sigewinne",
    element: "Hydro",
    weapon: "Bow",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 1.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Skirk",
    element: "Cryo",
    weapon: "Sword",
    rarity: 5,
    role: {
      dps: {
        tier: 0,
        tags: { constellation: 0, expert: false, partner: "Escoffier" },
      },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Sucrose",
    element: "Anemo",
    weapon: "Catalyst",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 1,
        tags: { constellation: 1, expert: false, partner: "" },
      },
      support: {
        tier: 0,
        tags: { constellation: 1, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Tartaglia",
    element: "Hydro",
    weapon: "Bow",
    rarity: 5,
    role: {
      dps: {
        tier: 1.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Thoma",
    element: "Pyro",
    weapon: "Polearm",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 1.5,
        tags: { constellation: 6, expert: false, partner: "" },
      },
      support: {
        tier: 1.5,
        tags: { constellation: 6, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Tighnari",
    element: "Dendro",
    weapon: "Bow",
    rarity: 5,
    role: {
      dps: {
        tier: 1.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Traveler",
    element: "Anemo",
    weapon: "Sword",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 3,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Traveler",
    element: "Geo",
    weapon: "Sword",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 3,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Traveler",
    element: "Electro",
    weapon: "Sword",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 2,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Traveler",
    element: "Dendro",
    weapon: "Sword",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 1.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Traveler",
    element: "Hydro",
    weapon: "Sword",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 3,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Traveler",
    element: "Pyro",
    weapon: "Sword",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Varesa",
    element: "Electro",
    weapon: "Catalyst",
    rarity: 5,
    role: {
      dps: { tier: 0, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Varka",
    element: "Anemo",
    weapon: "Claymore",
    rarity: 5,
    role: {
      dps: {
        tier: 0.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Venti",
    element: "Anemo",
    weapon: "Bow",
    rarity: 5,
    role: {
      dps: {
        tier: 1,
        tags: { constellation: 0, expert: false, partner: "Durin" },
      },
      subdps: {
        tier: 1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Wanderer",
    element: "Anemo",
    weapon: "Catalyst",
    rarity: 5,
    role: {
      dps: {
        tier: 1.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Wriothesley",
    element: "Cryo",
    weapon: "Catalyst",
    rarity: 5,
    role: {
      dps: {
        tier: 1,
        tags: { constellation: 0, expert: false, partner: "Escoffier" },
      },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Xiangling",
    element: "Pyro",
    weapon: "Polearm",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 0.5,
        tags: { constellation: 4, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Xianyun",
    element: "Anemo",
    weapon: "Catalyst",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Xiao",
    element: "Anemo",
    weapon: "Polearm",
    rarity: 5,
    role: {
      dps: {
        tier: 1.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Xilonen",
    element: "Geo",
    weapon: "Sword",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 0.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Xingqiu",
    element: "Hydro",
    weapon: "Sword",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 0.5,
        tags: { constellation: 6, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Xinyan",
    element: "Pyro",
    weapon: "Claymore",
    rarity: 4,
    role: {
      dps: { tier: 3, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 3,
        tags: { constellation: 6, expert: false, partner: "" },
      },
      support: {
        tier: 3,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Yae_Miko",
    element: "Electro",
    weapon: "Catalyst",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Yanfei",
    element: "Pyro",
    weapon: "Catalyst",
    rarity: 4,
    role: {
      dps: { tier: 2, tags: { constellation: 6, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Yaoyao",
    element: "Dendro",
    weapon: "Polearm",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Yelan",
    element: "Hydro",
    weapon: "Bow",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: 0.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Yoimiya",
    element: "Pyro",
    weapon: "Bow",
    rarity: 5,
    role: {
      dps: {
        tier: 1.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Yumemizuki_Mizuki",
    element: "Anemo",
    weapon: "Catalyst",
    rarity: 5,
    role: {
      dps: { tier: 2, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 1.5,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Yun_Jin",
    element: "Geo",
    weapon: "Polearm",
    rarity: 4,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 1.5,
        tags: { constellation: 6, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Zhongli",
    element: "Geo",
    weapon: "Polearm",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
  {
    name: "Zibai",
    element: "Geo",
    weapon: "Sword",
    rarity: 5,
    role: {
      dps: { tier: 0, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
    },
  },
    {
    name: "Nicole",
    element: "Pyro",
    weapon: "Catalyst",
    rarity: 5,
    role: {
      dps: { tier: -1, tags: { constellation: 0, expert: false, partner: "" } },
      subdps: {
        tier: -1,
        tags: { constellation: 0, expert: false, partner: "" },
      },
      support: {
        tier: 0.5,
        tags: { constellation: 0, expert: false, partner: "Hexerei" },
      },
    },
  },
];

export default chars;

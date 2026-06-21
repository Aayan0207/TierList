import artifacts from "./artifacts";
import weapons from "./weapons";

const teams = [
  {
    title: "Mavuika Hypercarry",
    dps: 0,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Mavuika",
        role: "dps",
        constellation: 0,
        weapon: weapons.a_thousand_blazing_suns,
        refinement: 1,
        artifact: [artifacts.obsidian_codex],
      },
      {
        name: "Citlali",
        role: "support",
        constellation: 0,
        weapon: weapons.starcallers_watch,
        refinement: 1,
        artifact: [artifacts.scroll_of_the_hero_of_cinder_city],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.peak_patrol_song,
        refinement: 1,
        artifact: [artifacts.archaic_petra],
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 1,
        weapon: weapons.aquila_favonia,
        refinement: 1,
        artifact: [artifacts.noblesse_oblige],
      },
    ],
  },
  {
    title: "Neuvillette Hypercarry",
    dps: 123,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Neuvillette",
        role: "dps",
        constellation: 0,
        weapon: weapons.tome_of_the_eternal_flow,
        refinement: 2,
        artifact: [artifacts.marechaussee_hunter],
      },
      {
        name: "Columbina",
        role: "subdps",
        constellation: 0,
        weapon: weapons.nocturnes_curtain_call,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Ineffa",
        role: "subdps",
        constellation: 0,
        weapon: weapons.fractured_halo,
        refinement: 1,
        artifact: [artifacts.aubade_of_morningstar_and_moon],
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 1,
        weapon: weapons.peak_patrol_song,
        refinement: 1,
        artifact: [artifacts.archaic_petra],
      },
    ],
  },
  {
    title: "Nefer Hypercarry",
    dps: 150,
    rotation: "",
    notes: "",
    characters: [
      {
        name: "Nefer",
        role: "dps",
        constellation: 0,
        weapon: weapons.reliquary_of_truth,
        refinement: 1,
        artifact: [artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Columbina",
        role: "subdps",
        constellation: 0,
        weapon: weapons.nocturnes_curtain_call,
        refinement: 1,
        artifact: [artifacts.silken_moon_serenade],
      },
      {
        name: "Lauma",
        role: "subdps",
        constellation: 0,
        weapon: weapons.nightweavers_looking_glass,
        refinement: 1,
        artifact: [artifacts.aubade_of_morningstar_and_moon, artifacts.night_of_the_skys_unveiling],
      },
      {
        name: "Nahida",
        role: "support",
        constellation: 1,
        weapon: weapons.a_thousand_floating_dreams,
        refinement: 1,
        artifact: [artifacts.deepwood_memories],
      },
    ],
  },
];

export default teams;

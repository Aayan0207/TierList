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
        role: "DPS",
        constellation: 0,
        weapon: weapons.thousand_blazing_suns,
        artifact: artifacts.obsidian,
      },
      {
        name: "Citlali",
        role: "Support",
        constellation: 0,
        weapon: weapons.starcallers_watch,
        artifact: artifacts.scroll,
      },
      {
        name: "Xilonen",
        role: "Support",
        constellation: 0,
        weapon: weapons.peak_patrol_song,
        artifact: artifacts.petra,
      },
      {
        name: "Bennett",
        role: "Support",
        constellation: 1,
        weapon: weapons.aquila_favonia,
        artifact: artifacts.noblesse,
      },
    ],
  },
];

export default teams;

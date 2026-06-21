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
        weapon: weapons.thousand_blazing_suns,
        artifact: artifacts.obsidian,
      },
      {
        name: "Citlali",
        role: "support",
        constellation: 0,
        weapon: weapons.starcallers_watch,
        artifact: artifacts.scroll,
      },
      {
        name: "Xilonen",
        role: "support",
        constellation: 0,
        weapon: weapons.peak_patrol_song,
        artifact: artifacts.petra,
      },
      {
        name: "Bennett",
        role: "support",
        constellation: 1,
        weapon: weapons.aquila_favonia,
        artifact: artifacts.noblesse,
      },
    ],
  },
];

export default teams;

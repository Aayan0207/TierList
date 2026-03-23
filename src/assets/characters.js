const chars = [
  { id: 1, name: "Aino", element: "Hydro", weapon: "Claymore", rarity: 4, tier: -1 },
  { id: 2, name: "Albedo", element: "Geo", weapon: "Sword", rarity: 5, tier: -1 },
  { id: 3, name: "Alhaitham", element: "Dendro", weapon: "Sword", rarity: 5, tier: -1 },
  { id: 4, name: "Aloy", element: "Cryo", weapon: "Bow", rarity: 5, tier: -1 },
  { id: 5, name: "Amber", element: "Pyro", weapon: "Bow", rarity: 4, tier: -1 },
  { id: 6, name: "Arataki Itto", element: "Geo", weapon: "Claymore", rarity: 5, tier: -1 },
  { id: 7, name: "Arlecchino", element: "Pyro", weapon: "Polearm", rarity: 5, tier: -1 },
  { id: 8, name: "Baizhu", element: "Dendro", weapon: "Catalyst", rarity: 5, tier: -1 },
  { id: 9, name: "Barbara", element: "Hydro", weapon: "Catalyst", rarity: 4, tier: -1 },
  { id: 10, name: "Beidou", element: "Electro", weapon: "Claymore", rarity: 4, tier: -1 },
  { id: 11, name: "Bennett", element: "Pyro", weapon: "Sword", rarity: 4, tier: -1 },
  { id: 12, name: "Candace", element: "Hydro", weapon: "Polearm", rarity: 4, tier: -1 },
  { id: 13, name: "Charlotte", element: "Cryo", weapon: "Catalyst", rarity: 4, tier: -1 },
  { id: 14, name: "Chevreuse", element: "Pyro", weapon: "Polearm", rarity: 4, tier: -1 },
  { id: 15, name: "Chiori", element: "Geo", weapon: "Sword", rarity: 5, tier: -1 },
  { id: 16, name: "Chongyun", element: "Cryo", weapon: "Claymore", rarity: 4, tier: -1 },
  { id: 17, name: "Clorinde", element: "Electro", weapon: "Sword", rarity: 5, tier: -1 },
  { id: 18, name: "Collei", element: "Dendro", weapon: "Bow", rarity: 4, tier: -1 },
  { id: 19, name: "Columbina", element: "Hydro", weapon: "Catalyst", rarity: 5, tier: -1 },
  { id: 20, name: "Cyno", element: "Electro", weapon: "Polearm", rarity: 5, tier: -1 },

  { id: 21, name: "Dahlia", element: "Hydro", weapon: "Sword", rarity: 4, tier: -1 },
  { id: 22, name: "Dehya", element: "Pyro", weapon: "Claymore", rarity: 5, tier: -1 },
  { id: 23, name: "Diluc", element: "Pyro", weapon: "Claymore", rarity: 5, tier: -1 },
  { id: 24, name: "Diona", element: "Cryo", weapon: "Bow", rarity: 4, tier: -1 },
  { id: 25, name: "Dori", element: "Electro", weapon: "Claymore", rarity: 4, tier: -1 },

  { id: 26, name: "Emilie", element: "Dendro", weapon: "Polearm", rarity: 5, tier: -1 },
  { id: 27, name: "Escoffier", element: "Cryo", weapon: "Polearm", rarity: 5, tier: -1 },
  { id: 28, name: "Eula", element: "Cryo", weapon: "Claymore", rarity: 5, tier: -1 },

  { id: 29, name: "Faruzan", element: "Anemo", weapon: "Bow", rarity: 4, tier: -1 },
  { id: 30, name: "Fischl", element: "Electro", weapon: "Bow", rarity: 4, tier: -1 },
  { id: 31, name: "Flins", element: "Electro", weapon: "Polearm", rarity: 5, tier: -1 },
  { id: 32, name: "Freminet", element: "Cryo", weapon: "Claymore", rarity: 4, tier: -1 },
  { id: 33, name: "Furina", element: "Hydro", weapon: "Sword", rarity: 5, tier: -1 },

  { id: 34, name: "Gaming", element: "Pyro", weapon: "Claymore", rarity: 4, tier: -1 },
  { id: 35, name: "Ganyu", element: "Cryo", weapon: "Bow", rarity: 5, tier: -1 },
  { id: 36, name: "Gorou", element: "Geo", weapon: "Bow", rarity: 4, tier: -1 },

  { id: 37, name: "Hu Tao", element: "Pyro", weapon: "Polearm", rarity: 5, tier: -1 },

  { id: 38, name: "Iansan", element: "Electro", weapon: "Polearm", rarity: 4, tier: -1 },
  { id: 39, name: "Ifa", element: "Anemo", weapon: "Catalyst", rarity: 4, tier: -1 },
  { id: 40, name: "Illuga", element: "Geo", weapon: "Polearm", rarity: 4, tier: -1 },
  { id: 41, name: "Ineffa", element: "Electro", weapon: "Polearm", rarity: 5, tier: -1 },

  { id: 42, name: "Jahoda", element: "Anemo", weapon: "Bow", rarity: 4, tier: -1 },
  { id: 43, name: "Jean", element: "Anemo", weapon: "Sword", rarity: 5, tier: -1 },

  { id: 44, name: "Kachina", element: "Geo", weapon: "Polearm", rarity: 4, tier: -1 },
  { id: 45, name: "Kaedehara Kazuha", element: "Anemo", weapon: "Sword", rarity: 5, tier: -1 },
  { id: 46, name: "Kaeya", element: "Cryo", weapon: "Sword", rarity: 4, tier: -1 },
  { id: 47, name: "Kamisato Ayaka", element: "Cryo", weapon: "Sword", rarity: 5, tier: -1 },
  { id: 48, name: "Kamisato Ayato", element: "Hydro", weapon: "Sword", rarity: 5, tier: -1 },
  { id: 49, name: "Kaveh", element: "Dendro", weapon: "Claymore", rarity: 4, tier: -1 },
  { id: 50, name: "Keqing", element: "Electro", weapon: "Sword", rarity: 5, tier: -1 },

  { id: 51, name: "Kinich", element: "Dendro", weapon: "Claymore", rarity: 5, tier: -1 },
  { id: 52, name: "Kirara", element: "Dendro", weapon: "Sword", rarity: 4, tier: -1 },
  { id: 53, name: "Klee", element: "Pyro", weapon: "Catalyst", rarity: 5, tier: -1 },
  { id: 54, name: "Kujou Sara", element: "Electro", weapon: "Bow", rarity: 4, tier: -1 },
  { id: 55, name: "Kuki Shinobu", element: "Electro", weapon: "Sword", rarity: 4, tier: -1 },

  { id: 56, name: "Lan Yan", element: "Anemo", weapon: "Catalyst", rarity: 4, tier: -1 },
  { id: 57, name: "Lauma", element: "Dendro", weapon: "Catalyst", rarity: 5, tier: -1 },
  { id: 58, name: "Layla", element: "Cryo", weapon: "Sword", rarity: 4, tier: -1 },
  { id: 59, name: "Lisa", element: "Electro", weapon: "Catalyst", rarity: 4, tier: -1 },
  { id: 60, name: "Lynette", element: "Anemo", weapon: "Sword", rarity: 4, tier: -1 },
  { id: 61, name: "Lyney", element: "Pyro", weapon: "Bow", rarity: 5, tier: -1 },

  { id: 62, name: "Mavuika", element: "Pyro", weapon: "Claymore", rarity: 5, tier: -1 },
  { id: 63, name: "Mika", element: "Cryo", weapon: "Polearm", rarity: 4, tier: -1 },
  { id: 64, name: "Mona", element: "Hydro", weapon: "Catalyst", rarity: 5, tier: -1 },
  { id: 65, name: "Mualani", element: "Hydro", weapon: "Catalyst", rarity: 5, tier: -1 },

  { id: 66, name: "Nahida", element: "Dendro", weapon: "Catalyst", rarity: 5, tier: -1 },
  { id: 67, name: "Navia", element: "Geo", weapon: "Claymore", rarity: 5, tier: -1 },
  { id: 68, name: "Nefer", element: "Hydro", weapon: "Catalyst", rarity: 4, tier: -1 },
  { id: 69, name: "Neuvillette", element: "Hydro", weapon: "Catalyst", rarity: 5, tier: -1 },
  { id: 70, name: "Nilou", element: "Hydro", weapon: "Sword", rarity: 5, tier: -1 },
  { id: 71, name: "Ningguang", element: "Geo", weapon: "Catalyst", rarity: 4, tier: -1 },
  { id: 72, name: "Noelle", element: "Geo", weapon: "Claymore", rarity: 4, tier: -1 },

  { id: 73, name: "Qiqi", element: "Cryo", weapon: "Sword", rarity: 5, tier: -1 },

  { id: 74, name: "Raiden Shogun", element: "Electro", weapon: "Polearm", rarity: 5, tier: -1 },
  { id: 75, name: "Razor", element: "Electro", weapon: "Claymore", rarity: 4, tier: -1 },
  { id: 76, name: "Rosaria", element: "Cryo", weapon: "Polearm", rarity: 4, tier: -1 },

  { id: 77, name: "Sangonomiya Kokomi", element: "Hydro", weapon: "Catalyst", rarity: 5, tier: -1 },
  { id: 78, name: "Sayu", element: "Anemo", weapon: "Claymore", rarity: 4, tier: -1 },
  { id: 79, name: "Sethos", element: "Electro", weapon: "Bow", rarity: 4, tier: -1 },
  { id: 80, name: "Shenhe", element: "Cryo", weapon: "Polearm", rarity: 5, tier: -1 },
  { id: 81, name: "Shikanoin Heizou", element: "Anemo", weapon: "Catalyst", rarity: 4, tier: -1 },
  { id: 82, name: "Sigewinne", element: "Hydro", weapon: "Bow", rarity: 5, tier: -1 },
  { id: 83, name: "Skirk", element: "Cryo", weapon: "Sword", rarity: 5, tier: -1 },
  { id: 84, name: "Sucrose", element: "Anemo", weapon: "Catalyst", rarity: 4, tier: -1 },

  { id: 85, name: "Tartaglia", element: "Hydro", weapon: "Bow", rarity: 5, tier: -1 },
  { id: 86, name: "Thoma", element: "Pyro", weapon: "Polearm", rarity: 4, tier: -1 },
  { id: 87, name: "Tighnari", element: "Dendro", weapon: "Bow", rarity: 5, tier: -1 },

  { id: 88, name: "Traveler", element: "None", weapon: "Sword", rarity: 5, tier: -1 },

  { id: 89, name: "Varka", element: "Anemo", weapon: "Claymore", rarity: 5, tier: -1 },
  { id: 90, name: "Venti", element: "Anemo", weapon: "Bow", rarity: 5, tier: -1 },

  { id: 91, name: "Wanderer", element: "Anemo", weapon: "Catalyst", rarity: 5, tier: -1 },
  { id: 92, name: "Wriothesley", element: "Cryo", weapon: "Catalyst", rarity: 5, tier: -1 },

  { id: 93, name: "Xiangling", element: "Pyro", weapon: "Polearm", rarity: 4, tier: -1 },
  { id: 94, name: "Xianyun", element: "Anemo", weapon: "Catalyst", rarity: 5, tier: -1 },
  { id: 95, name: "Xiao", element: "Anemo", weapon: "Polearm", rarity: 5, tier: -1 },
  { id: 96, name: "Xingqiu", element: "Hydro", weapon: "Sword", rarity: 4, tier: -1 },
  { id: 97, name: "Xinyan", element: "Pyro", weapon: "Claymore", rarity: 4, tier: -1 },

  { id: 98, name: "Yae Miko", element: "Electro", weapon: "Catalyst", rarity: 5, tier: -1 },
  { id: 99, name: "Yanfei", element: "Pyro", weapon: "Catalyst", rarity: 4, tier: -1 },
  { id: 100, name: "Yaoyao", element: "Dendro", weapon: "Polearm", rarity: 4, tier: -1 },
  { id: 101, name: "Yelan", element: "Hydro", weapon: "Bow", rarity: 5, tier: -1 },
  { id: 102, name: "Yoimiya", element: "Pyro", weapon: "Bow", rarity: 5, tier: -1 },
  { id: 103, name: "Yun Jin", element: "Geo", weapon: "Polearm", rarity: 4, tier: -1 },

  { id: 104, name: "Zhongli", element: "Geo", weapon: "Polearm", rarity: 5, tier: -1 },
  { id: 105, name: "Zibai", element: "Hydro", weapon: "Catalyst", rarity: 5, tier: -1 }
];
export default chars;

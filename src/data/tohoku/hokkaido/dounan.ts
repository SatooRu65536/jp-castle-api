import { Castle } from "../../../types/types";

export const HokkaidoDounanCastles: Castle[] = [
  {
    name: "五稜郭",
    alias: ["柳野城", "亀田御役所土塁"],
    build: 1866,
    scale: 5,
    type: "平城",
    latlng: [41.7969, 140.75696],
    place: {
      prefecture: "北海道",
      area: "道南",
      city: "函館市",
      address: "北海道函館市五稜郭町44",
    },
    castle_tower: null,
    remains: ["堀", "石垣", "土塁", "曲輪", "蔵"],
    restorations: ["奉行所"],
    categories: ["特別史跡", "百名城"],
    site: "https://www.goryokaku-tower.co.jp/",
  },
  {
    name: "松前城",
    alias: ["福山城"],
    build: 1874,
    scale: 5,
    type: "平山城",
    latlng: [41.43032, 140.1086],
    place: {
      prefecture: "北海道",
      area: "道南",
      city: "松前町",
      address: "北海道松前郡松前町松城144",
    },
    castle_tower: {
      structure: [3, 3],
      condition: "復元",
    },
    remains: ["門", "石垣", "土塁", "堀"],
    restorations: ["天守閣"],
    categories: ["国指定史跡", "百名城"],
    site: "https://www.town.matsumae.hokkaido.jp/bunkazai/",
  },
];

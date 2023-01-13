import { Castle } from "../../../types/types";

export const HokkaidoCastles: Castle[] = [
  {
    name: "ヲンネモトチャシ",
    alias: ["根室チャシ跡群"],
    build: null,
    scale: 5,
    type: "面崖式",
    owners: [],
    place: {
      prefecture: "北海道",
      area: "道東",
      city: "根室市",
    },
    latlng: [43.38848, 145.78197],
    castle_tower: null,
    remains: ["堀", "曲輪"],
    restorations: [],
    categories: ["国指定史跡", "百名城"],
    site: "https://www.nemuro-kankou.com/tourism/ainuchashi/",
  },
  {
    name: "五稜郭",
    alias: ["亀田御役所土塁", "柳野城"],
    owners: [],
    build: 1866,
    scale: 5,
    latlng: [41.79696, 140.75714],
    place: {
      prefecture: "北海道",
      area: "道南",
      city: "函館市"
    },
    castle_tower: null,
    type: "平城",
    remains: ["堀", "土塁", "曲輪", "虎口"],
    restorations: ["奉行所"],
    categories: [],
    site: "todo",
  },
];

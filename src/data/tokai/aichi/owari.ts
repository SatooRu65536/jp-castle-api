import { Castle } from "../../../types/types";

export const OwariCastles: Castle[] = [
  {
    name: "名古屋城",
    alias: ["金鯱城", "金城", "柳城", "亀屋城", "蓬左城"],
    build: 1619,
    owners: ["尾張徳川家"],
    castle_tower: {
      structure: [5, 5],
      condition: "復元",
    },
    scale: 5,
    latlng: [35.18551, 136.89923],
    place: {
      prefecture: "愛知県",
      area: "尾張",
      city: "名古屋市",
      address: "愛知県名古屋市中区本丸1",
    },
    remains: [
      "堀",
      "竪堀",
      "堀切",
      "土塁",
      "石垣",
      "曲輪",
      "虎口",
      "柵",
      "塀",
      "井戸",
      "門",
      "櫓",
      "天守閣",
      "庭園",
    ],
    type: "平城",
    category: ["重要文化財", "特別史跡", "百名城", "三大名城"],
    site: "https://www.nagoyajo.city.nagoya.jp",
  },
];

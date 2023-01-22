import { Castle } from "../../../types/types";

export const OwariCastles: Castle[] = [
  {
    name: "名古屋城",
    alias: ["金鯱城", "金城", "柳城", "亀屋城", "蓬左城"],
    build: 1619,
    castle_tower: {
      structure: [5, 5],
      condition: "復元",
    },
    scale: 5,
    type: "平城",
    latlng: [35.18551, 136.89923],
    place: {
      prefecture: "愛知県",
      area: "尾張",
      city: "名古屋市中区",
      address: "愛知県名古屋市中区本丸1-1",
    },
    remains: ["堀", "土塁", "石垣", "曲輪", "虎口", "井戸", "櫓", "庭園"],
    restorations: ["天守閣", "門", "塀"],
    categories: ["重要文化財", "特別史跡", "百名城", "三大名城"],
    site: "https://www.nagoyajo.city.nagoya.jp",
  },
];

import { Castle } from "../../../types/types";

export const AomoriCastles: Castle[] = [
  {
    name: "弘前城",
    alias: ["高岡城", "鷹岡城"],
    build: 1611,
    scale: 5,
    type: "平山城",
    latlng: [40.60804, 140.46381],
    place: {
      prefecture: "青森県",
      area: "青森",
      city: "弘前市",
      address: "青森県弘前市下白銀町1-1",
    },
    castle_tower: {
      structure: [3, 3],
      condition: "現存",
    },
    remains: ["堀", "櫓", "天守閣", "土塁", "石垣"],
    restorations: [],
    categories: ["百名城", "国指定史跡"],
    site: "http://www.city.hirosaki.aomori.jp/gaiyou/shisetsu/2014-1206-1528-48.html",
  },
  {
    name: "根城",
    alias: [],
    build: 1334,
    scale: 4,
    type: "平山城",
    latlng: [40.50634, 141.45961],
    place: {
      prefecture: "青森県",
      area: "青森",
      city: "八戸市",
      address: "青森県八戸市根城",
    },
    castle_tower: null,
    remains: ["土塁", "堀", "井戸"],
    restorations: ["主殿", "馬屋", "工房"],
    categories: ["国指定史跡", "百名城"],
    site: "https://hachinohe-city-museum.jp/",
  },
];

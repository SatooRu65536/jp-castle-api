import { AreaType, PrefType } from "./areas";
import { Tohoku } from "./place_name/tohoku";

export type valueOf<T> = T[keyof T];

export type PrefDataType = {
  prefecture: string;
  area: string | null;
};

// 地名
type Place = Tohoku;

// 天守の状況
const CastleTowerConditions = ["現存", "復元", "復興", "模擬"] as const;
type CastleTower = {
  structure: [number, number];
  condition: typeof CastleTowerConditions[number];
};

// 形式
const CastleTypes = [
  "山城",
  "平山城",
  "平城",
  "海城",
  "湖城",
  "面崖式",
  "丘先式",
] as const;
type CastleType = typeof CastleTypes[number];

// 構造物
const CastleStructures = [
  "堀",
  "竪堀",
  "堀切",
  "土塁",
  "石垣",
  "虎口",
  "曲輪",
  "柵",
  "塀",
  "井戸",
  "門",
  "櫓",
  "天守閣",
  "御殿",
  "蔵",
  "奉行所",
  "庭園",
] as const;
type CastleStructures = typeof CastleStructures[number];

// カテゴリー
const CastleCategories = [
  "世界遺産",
  "国宝",
  "重要文化財",
  "特別史跡",
  "国指定史跡",
  "都指定史跡",
  "道指定史跡",
  "府指定史跡",
  "県指定史跡",
  "市指定史跡",
  "区指定史跡",
  "町指定史跡",
  "村指定史跡",
  "現存天守",
  "百名城",
  "続百名城",
  "三大名城",
  "三大山城",
  "三大海城",
  "三大湖城",
] as const;
type CastleCategories = typeof CastleCategories[number];

export type Castle = {
  name: string;
  alias: string[];
  build: number | null;
  owners: string[];
  scale: 5 | 4 | 3 | 2 | 1 | 0;
  latlng: [number, number];
  place: Place;
  castle_tower: CastleTower | null;
  type: CastleType;
  remains: CastleStructures[];
  restorations: CastleStructures[];
  categories: CastleCategories[];
  site: string;
};

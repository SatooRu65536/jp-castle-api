import {
  HokkaidoDouou,
  HokkaidoDouhoku,
  HokkaidoDoutou,
  HokkaidoDounan,
  Aomori,
  Iwate,
  Miyagi,
  Akita,
  Yamagata,
  Fukushima,
} from "./place_name/tohoku";

export type valueOf<T> = T[keyof T];

export type PrefDataType = {
  prefecture: string;
  area: string | null;
};

export const Prefs = {
  HokkaidoDouou,
  HokkaidoDouhoku,
  HokkaidoDoutou,
  HokkaidoDounan,
  Aomori,
  Iwate,
  Miyagi,
  Akita,
  Yamagata,
  Fukushima,
};
export type Prefs = valueOf<typeof Prefs>;

type CastleTower = {
  structure: [number, number];
  condition: "現存" | "復元" | "復興" | "模擬" | null;
};

type CastleType = "山城" | "平山城" | "平城" | "海城" | "湖城";

type CastleRemain =
  | "堀"
  | "竪堀"
  | "堀切"
  | "土塁"
  | "石垣"
  | "虎口"
  | "曲輪"
  | "柵"
  | "塀"
  | "井戸"
  | "門"
  | "櫓"
  | "天守閣"
  | "庭園";

type CastleCategory =
  | "世界遺産"
  | "国宝"
  | "重要文化財"
  | "特別史跡"
  | "国指定史跡"
  | "都指定史跡"
  | "道指定史跡"
  | "府指定史跡"
  | "県指定史跡"
  | "市指定史跡"
  | "区指定史跡"
  | "町指定史跡"
  | "村指定史跡"
  | "現存天守"
  | "百名城"
  | "続百名城"
  | "三大名城"
  | "三大山城"
  | "三大海城"
  | "三大湖城";

export type Castle = {
  name: string;
  alias: string[];
  build: number;
  owners: string[];
  scale: 5 | 4 | 3 | 2 | 1 | 0;
  latlng: [number, number];
  place: {
    prefecture: string;
    area: string | null;
    city: string;
    address: string;
  };
  castle_tower: CastleTower;
  type: CastleType;
  remains: CastleRemain[];
  categories: CastleCategory[];
  site: string;
};

type GetCastle = {
  name: string;
  city: ReturnType<Prefs["selectCity"]>;
  scale: 5 | 4 | 3 | 2 | 1 | 0;
  latlng: [number, number];
  castle_tower: CastleTower;
  type: CastleType;
  remains: CastleRemain[];
  categories: CastleCategory[];
  site: string;
};

export class Castles {
  constructor(private pref: PrefDataType) {}

  public getCastle({
    name,
    city,
    scale,
    latlng,
    castle_tower,
    type,
    remains,
    categories,
    site,
  }: GetCastle): Castle {
    return {
      name,
      place: {
        prefecture: this.pref.prefecture,
        area: this.pref.area,
        city: city,
        address: "",
      },
      alias: [],
      build: 0,
      owners: [],
      scale,
      latlng,
      castle_tower,
      type,
      remains,
      categories,
      site,
    };
  }
}

export type Prefectures = {
  [index: string]: {
    name: string;
    region: string;
    area: string[];
    path: string;
  };
};

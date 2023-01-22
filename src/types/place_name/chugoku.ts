// 鳥取県
export const TottoriCities = [
  "鳥取市",
  "米子市",
  "倉吉市",
  "境港市",
  "岩美町",
  "若桜町",
  "智頭町",
  "八頭町",
  "三朝町",
  "湯梨浜町",
  "琴浦町",
  "北栄町",
  "日吉津村",
  "大山町",
  "南部町",
  "伯耆町",
  "日南町",
  "日野町",
  "江府町",
] as const;
interface Tottori {
  prefecture: "鳥取県";
  area: "鳥取";
  city: typeof TottoriCities[number];
  address: string;
}

// 島根県
export const ShimaneCities = [
  "松江市",
  "浜田市",
  "出雲市",
  "益田市",
  "大田市",
  "安来市",
  "江津市",
  "雲南市",
  "奥出雲町",
  "飯南町",
  "川本町",
  "美郷町",
  "邑南町",
  "津和野町",
  "吉賀町",
  "海士町",
  "西ノ島町",
  "知夫村",
  "隠岐の島町",
] as const;
interface Shimane {
  prefecture: "島根県";
  area: "島根";
  city: typeof ShimaneCities[number];
  address: string;
}

// 岡山県 備前
export const OkayamaBizenCities = [
  "和気町",
  "赤磐市",
  "瀬戸内市",
  "備前市",
  "吉備中央町",
  "玉野市",
  "岡山市北区",
  "岡山市中区",
  "岡山市東区",
  "岡山市南区",
] as const;
interface OkayamaBizen {
  prefecture: "岡山県";
  area: "備前";
  city: typeof OkayamaBizenCities[number];
  address: string;
}

// 岡山県 備中
export const OkayamaBicchuCities = [
  "新見市",
  "真庭市",
  "高梁市",
  "矢掛町",
  "里庄町",
  "浅口市",
  "井原市",
  "笠岡市",
  "早島町",
  "総社市",
  "倉敷市",
] as const;
interface OkayamaBicchu {
  prefecture: "岡山県";
  area: "岡山";
  city: typeof OkayamaBicchuCities[number];
  address: string;
}

// 岡山県 美作
export const OkayamaMisakuCities = [
  "津山市",
  "美作市",
  "新庄村",
  "鏡野町",
  "勝央町",
  "奈義町",
  "西粟倉村",
  "久米南町",
  "美咲町",
] as const;
interface OkayamaMisaku {
  prefecture: "岡山県";
  area: "岡山";
  city: typeof OkayamaMisakuCities[number];
  address: string;
}

type Okayama = OkayamaBizen | OkayamaBicchu | OkayamaMisaku;

// 広島県 備後
export const HiroshimaBingoCities = [
  "神石高原町",
  "世羅町",
  "三原市",
  "尾道市",
  "府中市",
  "福山市",
] as const;
interface HiroshimaBingo {
  prefecture: "広島県";
  area: "備後";
  city: typeof HiroshimaBingoCities[number];
  address: string;
}

// 広島県 備北
export const HiroshimaBihokuCities = ["三次市", "庄原市"] as const;
interface HiroshimaBihoku {
  prefecture: "広島県";
  area: "備北";
  city: typeof HiroshimaBihokuCities[number];
  address: string;
}

// 広島県 安芸
export const HiroshimaAkiCities = [
  "坂町",
  "大崎上島町",
  "熊野町",
  "海田町",
  "府中町",
  "大竹市",
  "廿日市市",
  "広島市中区",
  "広島市東区",
  "広島市南区",
  "広島市西区",
  "広島市安佐南区",
  "広島市安佐北区",
  "広島市安芸区",
  "広島市佐伯区",
  "江田島市",
  "呉市",
  "東広島市",
  "竹原市",
] as const;
interface HiroshimaAki {
  prefecture: "広島県";
  area: "安芸";
  city: typeof HiroshimaAkiCities[number];
  address: string;
}

// 広島県 芸北
export const HiroshimaGeihokuCities = [
  "安芸高田市",
  "安芸太田町",
  "北広島町",
] as const;
interface HiroshimaGeihoku {
  prefecture: "広島県";
  area: "芸北";
  city: typeof HiroshimaGeihokuCities[number];
  address: string;
}

type Hiroshima =
  | HiroshimaBingo
  | HiroshimaBihoku
  | HiroshimaAki
  | HiroshimaGeihoku;

// 山口県
export const YamaguchiCities = [
  "下関市",
  "宇部市",
  "山口市",
  "萩市",
  "防府市",
  "下松市",
  "岩国市",
  "光市",
  "長門市",
  "柳井市",
  "美祢市",
  "周南市",
  "山陽小野田市",
  "周防大島町",
  "和木町",
  "上関町",
  "田布施町",
  "平生町",
  "阿武町",
] as const;
interface Yamaguchi {
  prefecture: "山口県";
  area: "山口";
  city: typeof YamaguchiCities[number];
  address: string;
}

export type Chugoku = Tottori | Shimane | Okayama | Hiroshima | Yamaguchi;

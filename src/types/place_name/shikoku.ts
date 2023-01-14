// 徳島県
export const TokushimaCities = [
  "徳島市",
  "鳴門市",
  "小松島市",
  "阿南市",
  "吉野川市",
  "阿波市",
  "美馬市",
  "三好市",
  "勝浦町",
  "上勝町",
  "佐那河内村",
  "石井町",
  "神山町",
  "那賀町",
  "牟岐町",
  "美波町",
  "海陽町",
  "松茂町",
  "北島町",
  "藍住町",
  "板野町",
  "上板町",
  "つるぎ町",
  "東みよし町",
] as const;
interface Tokushima {
  prefecture: "徳島県";
  area: "徳島";
  city: typeof TokushimaCities[number];
}

// 香川県
export const KagawaCities = [
  "高松市",
  "丸亀市",
  "坂出市",
  "善通寺市",
  "観音寺市",
  "さぬき市",
  "東かがわ市",
  "三豊市",
  "土庄町",
  "小豆島町",
  "三木町",
  "直島町",
  "宇多津町",
  "綾川町",
  "琴平町",
  "多度津町",
  "まんのう町",
] as const;
interface Kagawa {
  prefecture: "香川県";
  area: "香川";
  city: typeof KagawaCities[number];
}

// 愛媛県
export const EhimeCities = [
  "松山市",
  "今治市",
  "宇和島市",
  "八幡浜市",
  "新居浜市",
  "西条市",
  "大洲市",
  "伊予市",
  "四国中央市",
  "西予市",
  "東温市",
  "上島町",
  "久万高原町",
  "松前町",
  "砥部町",
  "内子町",
  "伊方町",
  "松野町",
  "鬼北町",
  "愛南町",
] as const;
interface Ehime {
  prefecture: "愛媛県";
  area: "愛媛";
  city: typeof EhimeCities[number];
}

// 高知県
export const KoushiCities = [
  "高知市",
  "室戸市",
  "安芸市",
  "南国市",
  "土佐市",
  "須崎市",
  "宿毛市",
  "土佐清水市",
  "四万十市",
  "香南市",
  "香美市",
  "東洋町",
  "奈半利町",
  "田野町",
  "安田町",
  "北川村",
  "馬路村",
  "芸西村",
  "本山町",
  "大豊町",
  "土佐町",
  "大川村",
  "いの町",
  "仁淀川町",
  "中土佐町",
  "佐川町",
  "越知町",
  "梼原町",
  "日高村",
  "津野町",
  "四万十町",
  "大月町",
  "三原村",
  "黒潮町",
] as const;
interface Koushi {
  prefecture: "高知県";
  area: "高知";
  city: typeof KoushiCities[number];
}

export type Shikoku = Tokushima | Kagawa | Ehime | Koushi;

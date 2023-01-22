// 富山県
export const ToyamaCities = [
  "富山市",
  "高岡市",
  "魚津市",
  "氷見市",
  "滑川市",
  "黒部市",
  "砺波市",
  "小矢部市",
  "南砺市",
  "射水市",
  "舟橋村",
  "上市町",
  "立山町",
  "入善町",
  "朝日町",
] as const;
interface Toyama {
  prefecture: "富山県";
  area: "富山";
  city: typeof ToyamaCities[number];
  address: string;
}

// 石川県
export const IshikawaCities = [
  "金沢市",
  "七尾市",
  "小松市",
  "輪島市",
  "珠洲市",
  "加賀市",
  "羽咋市",
  "かほく市",
  "白山市",
  "能美市",
  "野々市市",
  "川北町",
  "津幡町",
  "内灘町",
  "志賀町",
  "宝達志水町",
  "中能登町",
  "穴水町",
  "能登町",
] as const;
interface Ishikawa {
  prefecture: "石川県";
  area: "石川";
  city: typeof IshikawaCities[number];
  address: string;
}

// 福井県
export const FukuiCities = [
  "福井市",
  "敦賀市",
  "小浜市",
  "大野市",
  "勝山市",
  "鯖江市",
  "あわら市",
  "越前市",
  "坂井市",
  "永平寺町",
  "池田町",
  "南越前町",
  "越前町",
  "美浜町",
  "高浜町",
  "おおい町",
  "若狭町",
] as const;
interface Fukui {
  prefecture: "福井県";
  area: "福井";
  city: typeof FukuiCities[number];
  address: string;
}

export type Hokuriku = Toyama | Ishikawa | Fukui;

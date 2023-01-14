// 静岡県
export const ShizuokaCities = [
  "静岡市",
  "沼津市",
  "熱海市",
  "三島市",
  "富士宮市",
  "伊東市",
  "島田市",
  "富士市",
  "磐田市",
  "焼津市",
  "掛川市",
  "藤枝市",
  "御殿場市",
  "袋井市",
  "下田市",
  "裾野市",
  "湖西市",
  "伊豆市",
  "御前崎市",
  "菊川市",
  "伊豆の国市",
  "牧之原市",
  "東伊豆町",
  "河津町",
  "南伊豆町",
  "松崎町",
  "西伊豆町",
  "函南町",
  "清水町",
  "長泉町",
  "小山町",
  "吉田町",
  "川根本町",
  "森町",
] as const;
interface Shizuoka {
  prefecture: "静岡県";
  area: "静岡";
  city: typeof ShizuokaCities[number];
}

// 岐阜県
export const GifuCities = [
  "岐阜市",
  "大垣市",
  "高山市",
  "多治見市",
  "関市",
  "中津川市",
  "美濃市",
  "瑞浪市",
  "羽島市",
  "恵那市",
  "美濃加茂市",
  "土岐市",
  "各務原市",
  "可児市",
  "山県市",
  "瑞穂市",
  "飛騨市",
  "本巣市",
  "郡上市",
  "下呂市",
  "海津市",
  "岐南町",
  "笠松町",
  "養老町",
  "垂井町",
  "関ケ原町",
  "神戸町",
  "輪之内町",
  "安八町",
  "揖斐川町",
  "大野町",
  "池田町",
  "北方町",
  "坂祝町",
  "富加町",
  "川辺町",
  "七宗町",
  "八百津町",
  "白川町",
  "東白川村",
  "御嵩町",
  "白川村",
] as const;
interface Gifu {
  prefecture: "岐阜県";
  area: "岐阜";
  city: typeof GifuCities[number];
}

// 愛知県 東三河
export const AichiHigashimikawaCities = [
  "蒲郡市",
  "豊川市",
  "田原市",
  "新城市",
  "設楽町",
  "豊橋市",
  "豊根村",
] as const;
interface AichiHigashimikawa {
  prefecture: "愛知県";
  area: "東三河";
  city: typeof AichiHigashimikawaCities[number];
}

// 愛知県 西三河
export const AichiNishimikawaCities = [
  "みよし市",
  "刈谷市",
  "高浜市",
  "碧南市",
  "知立市",
  "安城市",
  "西尾市",
  "幸田町",
  "豊田市",
  "知多市",
  "岡崎市",
] as const;
interface AichiNishimikawa {
  prefecture: "愛知県";
  area: "西三河";
  city: typeof AichiNishimikawaCities[number];
}

// 愛知県 尾張
export const AichiOwariCities = [
  "名古屋市",
  "一宮市",
  "瀬戸市",
  "半田市",
  "春日井市",
  "津島市",
  "犬山市",
  "常滑市",
  "江南市",
  "小牧市",
  "稲沢市",
  "東海市",
  "大府市",
  "尾張旭市",
  "岩倉市",
  "豊明市",
  "日進市",
  "愛西市",
  "清須市",
  "北名古屋市",
  "弥富市",
  "あま市",
  "長久手市",
  "東郷町",
  "豊山町",
  "大口町",
  "扶桑町",
  "大治町",
  "蟹江町",
  "飛島村",
  "阿久比町",
  "東浦町",
  "南知多町",
  "美浜町",
  "武豊町",
  "東栄町",
] as const;
interface AichiOwari {
  prefecture: "愛知県";
  area: "尾張";
  city: typeof AichiOwariCities[number];
}

// 三重県
export const MieCities = [
  "津市",
  "四日市市",
  "伊勢市",
  "松阪市",
  "桑名市",
  "鈴鹿市",
  "名張市",
  "尾鷲市",
  "亀山市",
  "鳥羽市",
  "熊野市",
  "いなべ市",
  "志摩市",
  "伊賀市",
  "木曽岬町",
  "東員町",
  "菰野町",
  "朝日町",
  "川越町",
  "多気町",
  "明和町",
  "大台町",
  "玉城町",
  "度会町",
  "大紀町",
  "南伊勢町",
  "紀北町",
  "御浜町",
  "紀宝町",
] as const;
interface Mie {
  prefecture: "三重県";
  area: "三重";
  city: typeof MieCities[number];
}

type Aichi = AichiHigashimikawa | AichiNishimikawa | AichiOwari;

export type Tokai = Shizuoka | Gifu | Aichi | Mie;

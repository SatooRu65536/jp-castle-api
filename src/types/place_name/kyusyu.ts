// 福岡県 北九州
export const FukuokaKitakyusyuCities = [
  "上毛町",
  "築上町",
  "みやこ町",
  "苅田町",
  "豊前市",
  "行橋市",
  "岡垣町",
  "水巻町",
  "芦屋町",
  "遠賀町",
  "中間市",
  "北九州市門司区",
  "北九州市若松区",
  "北九州市戸畑区",
  "北九州市小倉北区",
  "北九州市小倉南区",
  "北九州市八幡東区",
  "北九州市八幡西区",
] as const;
interface FukuokaKitakyusyu {
  prefecture: "福岡県";
  area: "北九州";
  city: typeof FukuokaKitakyusyuCities[number];
  address: string;
}

// 福岡県 筑豊
export const FukuokaChikuhouCities = [
  "福智町",
  "赤村",
  "大任町",
  "川崎町",
  "糸田町",
  "添田町",
  "香春町",
  "田川市",
  "桂川町",
  "嘉麻市",
  "飯塚市",
  "小竹町",
  "鞍手町",
  "宮若市",
  "直方市",
] as const;
interface FukuokaChikuhou {
  prefecture: "福岡県";
  area: "筑豊";
  city: typeof FukuokaChikuhouCities[number];
  address: string;
}

// 福岡県 筑後
export const FukuokaChikugoCities = [
  "みやま市",
  "柳川市",
  "大牟田市",
  "大木町",
  "大刀洗町",
  "うきは市",
  "小郡市",
  "大川市",
  "久留米市",
  "広川町",
  "筑後市",
  "八女市",
] as const;
interface FukuokaChikugo {
  prefecture: "福岡県";
  area: "筑後";
  city: typeof FukuokaChikugoCities[number];
  address: string;
}

// 福岡県 福岡
export const FukuokaFukuokaCities = [
  "福岡市東区",
  "福岡市博多区",
  "福岡市中央区",
  "福岡市南区",
  "福岡市西区",
  "福岡市城南区",
  "福岡市早良区",
  "筑紫野市",
  "春日市",
  "大野城市",
  "宗像市",
  "太宰府市",
  "古賀市",
  "福津市",
  "朝倉市",
  "糸島市",
  "那珂川市",
  "宇美町",
  "篠栗町",
  "志免町",
  "須恵町",
  "新宮町",
  "久山町",
  "粕屋町",
  "筑前町",
  "東峰村",
  "吉富町",
] as const;
interface FukuokaFukuoka {
  prefecture: "福岡県";
  area: "福岡";
  city: typeof FukuokaFukuokaCities[number];
  address: string;
}

// 佐賀県
export const SagaCities = [
  "佐賀市",
  "唐津市",
  "鳥栖市",
  "多久市",
  "伊万里市",
  "武雄市",
  "鹿島市",
  "小城市",
  "嬉野市",
  "神埼市",
  "吉野ヶ里町",
  "基山町",
  "上峰町",
  "みやき町",
  "玄海町",
  "有田町",
  "大町町",
  "江北町",
  "白石町",
  "太良町",
] as const;
interface Saga {
  prefecture: "佐賀県";
  area: "佐賀";
  city: typeof SagaCities[number];
  address: string;
}

// 長崎県
export const NagasakiCities = [
  "長崎市",
  "佐世保市",
  "島原市",
  "諫早市",
  "大村市",
  "平戸市",
  "松浦市",
  "対馬市",
  "壱岐市",
  "五島市",
  "西海市",
  "雲仙市",
  "南島原市",
  "長与町",
  "時津町",
  "東彼杵町",
  "川棚町",
  "波佐見町",
  "小値賀町",
  "佐々町",
  "新上五島町",
] as const;
interface Nagasaki {
  prefecture: "長崎県";
  area: "長崎";
  city: typeof NagasakiCities[number];
  address: string;
}

// 熊本県
export const KumamotoCities = [
  "熊本市中央区",
  "熊本市東区",
  "熊本市西区",
  "熊本市南区",
  "熊本市北区",
  "八代市",
  "人吉市",
  "荒尾市",
  "水俣市",
  "玉名市",
  "山鹿市",
  "菊池市",
  "宇土市",
  "上天草市",
  "宇城市",
  "阿蘇市",
  "天草市",
  "合志市",
  "美里町",
  "玉東町",
  "南関町",
  "長洲町",
  "和水町",
  "大津町",
  "菊陽町",
  "南小国町",
  "小国町",
  "産山村",
  "高森町",
  "西原村",
  "南阿蘇村",
  "御船町",
  "嘉島町",
  "益城町",
  "甲佐町",
  "山都町",
  "氷川町",
  "芦北町",
  "津奈木町",
  "錦町",
  "多良木町",
  "湯前町",
  "水上村",
  "相良村",
  "五木村",
  "山江村",
  "球磨村",
  "あさぎり町",
  "苓北町",
] as const;
interface Kumamoto {
  prefecture: "熊本県";
  area: "熊本";
  city: typeof KumamotoCities[number];
  address: string;
}

// 大分県
export const OitaCities = [
  "大分市",
  "別府市",
  "中津市",
  "日田市",
  "佐伯市",
  "臼杵市",
  "津久見市",
  "竹田市",
  "豊後高田市",
  "杵築市",
  "宇佐市",
  "豊後大野市",
  "由布市",
  "国東市",
  "姫島村",
  "日出町",
  "九重町",
  "玖珠町",
] as const;
interface Oita {
  prefecture: "大分県";
  area: "大分";
  city: typeof OitaCities[number];
  address: string;
}

// 宮崎県
export const MiyazakiCities = [
  "宮崎市",
  "都城市",
  "延岡市",
  "日南市",
  "小林市",
  "日向市",
  "串間市",
  "西都市",
  "えびの市",
  "三股町",
  "高原町",
  "国富町",
  "綾町",
  "高鍋町",
  "新富町",
  "西米良村",
  "木城町",
  "川南町",
  "都農町",
  "門川町",
  "諸塚村",
  "椎葉村",
  "美郷町",
  "高千穂町",
  "日之影町",
  "五ヶ瀬町",
] as const;
interface Miyazaki {
  prefecture: "宮崎県";
  area: "宮崎";
  city: typeof MiyazakiCities[number];
  address: string;
}

// 鹿児島県
export const KagoshimaCities = [
  "鹿児島市",
  "鹿屋市",
  "枕崎市",
  "阿久根市",
  "出水市",
  "指宿市",
  "西之表市",
  "垂水市",
  "薩摩川内市",
  "日置市",
  "曽於市",
  "霧島市",
  "いちき串木野市",
  "ひとが輝き",
  "南さつま市",
  "志布志市",
  "奄美市",
  "南九州市",
  "伊佐市",
  "姶良市",
  "三島村",
  "十島村",
  "さつま町",
  "長島町",
  "湧水町",
  "大崎町",
  "東串良町",
  "錦江町",
  "南大隅町",
  "肝付町",
  "中種子町",
  "南種子町",
  "屋久島町",
  "大和村",
  "宇検村",
  "瀬戸内町",
  "龍郷町",
  "喜界町",
  "徳之島町",
  "天城町",
  "伊仙町",
  "和泊町",
  "知名町",
  "与論町",
] as const;
interface Kagoshima {
  prefecture: "鹿児島県";
  area: "鹿児島";
  city: typeof KagoshimaCities[number];
  address: string;
}

// 沖縄県
export const OkinawaCities = [
  "那覇市",
  "宜野湾市",
  "石垣市",
  "浦添市",
  "名護市",
  "糸満市",
  "沖縄市",
  "豊見城市",
  "うるま市",
  "宮古島市",
  "南城市",
  "国頭村",
  "大宜味村",
  "東村",
  "今帰仁村",
  "本部町",
  "恩納村",
  "宜野座村",
  "金武町",
  "伊江村",
  "読谷村",
  "嘉手納町",
  "北谷町",
  "北中城村",
  "中城村",
  "西原町",
  "与那原町",
  "南風原町",
  "渡嘉敷村",
  "座間味村",
  "粟国村",
  "渡名喜村",
  "南大東村",
  "北大東村",
  "伊平屋村",
  "伊是名村",
  "久米島町",
  "八重瀬町",
  "多良間村",
  "竹富町",
  "与那国町",
] as const;
interface Okinawa {
  prefecture: "沖縄県";
  area: "沖縄";
  city: typeof OkinawaCities[number];
  address: string;
}

type Fukuoka =
  | FukuokaKitakyusyu
  | FukuokaChikuhou
  | FukuokaChikugo
  | FukuokaFukuoka;

export type Kyusyu =
  | Fukuoka
  | Saga
  | Nagasaki
  | Kumamoto
  | Oita
  | Miyazaki
  | Kagoshima
  | Okinawa;

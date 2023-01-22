// 滋賀県
export const ShigaCities = [
  "大津市",
  "彦根市",
  "長浜市",
  "近江八幡市",
  "草津市",
  "守山市",
  "栗東市",
  "甲賀市",
  "野洲市",
  "湖南市",
  "高島市",
  "東近江市",
  "米原市",
  "日野町",
  "竜王町",
  "愛荘町",
  "豊郷町",
  "甲良町",
  "多賀町",
] as const;
interface Shiga {
  prefecture: "滋賀県";
  area: "滋賀";
  city: typeof ShigaCities[number];
  address: string;
}

// 京都府
export const KyotoCities = [
  "京都市北区",
  "京都市上京区",
  "京都市左京区",
  "京都市中京区",
  "京都市東山区",
  "京都市下京区",
  "京都市南区",
  "京都市右京区",
  "京都市伏見区",
  "京都市山科区",
  "京都市西京区",
  "福知山市",
  "舞鶴市",
  "綾部市",
  "宇治市",
  "宮津市",
  "亀岡市",
  "城陽市",
  "向日市",
  "長岡京市",
  "八幡市",
  "京田辺市",
  "京丹後市",
  "南丹市",
  "木津川市",
  "大山崎町",
  "久御山町",
  "井手町",
  "宇治田原町",
  "笠置町",
  "和束町",
  "精華町",
  "南山城村",
  "京丹波町",
  "伊根町",
  "与謝野町",
] as const;
interface Kyoto {
  prefecture: "京都府";
  area: "京都";
  city: typeof KyotoCities[number];
  address: string;
}

// 大阪府
export const OsakaCities = [
  "大阪市都島区",
  "大阪市福島区",
  "大阪市此花区",
  "大阪市西区",
  "大阪市港区",
  "大阪市大正区",
  "大阪市天王寺区",
  "大阪市浪速区",
  "大阪市西淀川区",
  "大阪市東淀川区",
  "大阪市東成区",
  "大阪市生野区",
  "大阪市旭区",
  "大阪市城東区",
  "大阪市阿倍野区",
  "大阪市住吉区",
  "大阪市東住吉区",
  "大阪市西成区",
  "大阪市淀川区",
  "大阪市鶴見区",
  "大阪市住之江区",
  "大阪市平野区",
  "大阪市北区",
  "大阪市中央区",
  "堺市堺区",
  "堺市中区",
  "堺市東区",
  "堺市西区",
  "堺市南区",
  "堺市北区",
  "堺市美原区",
  "岸和田市",
  "豊中市",
  "池田市",
  "吹田市",
  "泉大津市",
  "高槻市",
  "貝塚市",
  "守口市",
  "枚方市",
  "茨木市",
  "八尾市",
  "泉佐野市",
  "富田林市",
  "寝屋川市",
  "河内長野市",
  "松原市",
  "大東市",
  "和泉市",
  "箕面市",
  "柏原市",
  "羽曳野市",
  "門真市",
  "摂津市",
  "高石市",
  "藤井寺市",
  "東大阪市",
  "泉南市",
  "四條畷市",
  "交野市",
  "大阪狭山市",
  "阪南市",
  "島本町",
  "豊能町",
  "能勢町",
  "忠岡町",
  "熊取町",
  "田尻町",
  "岬町",
  "太子町",
  "河南町",
  "千早赤阪村",
] as const;
interface Osaka {
  prefecture: "大阪府";
  area: "大阪";
  city: typeof OsakaCities[number];
  address: string;
}

// 兵庫県 淡路
export const HyogoAwajiCities = ["淡路市", "洲本市", "南あわじ市"] as const;
interface HyogoAwaji {
  prefecture: "兵庫県";
  area: "淡路";
  city: typeof HyogoAwajiCities[number];
  address: string;
}

// 兵庫県 丹波
export const HyogoTanbaCities = ["丹波篠山市", "丹波市"] as const;
interface HyogoTanba {
  prefecture: "兵庫県";
  area: "丹波";
  city: typeof HyogoTanbaCities[number];
  address: string;
}

// 兵庫県 但馬
export const HyogoTajimaCities = [
  "豊岡市",
  "西脇市",
  "三木市",
  "小野市",
  "加西市",
  "養父市",
  "朝来市",
  "加東市",
  "稲美町",
  "香美町",
  "新温泉町",
] as const;
interface HyogoTajima {
  prefecture: "兵庫県";
  area: "但馬";
  city: typeof HyogoTajimaCities[number];
  address: string;
}

// 兵庫県 阪神
export const HyogoHanshinCities = [
  "神戸市東灘区",
  "神戸市灘区",
  "神戸市兵庫区",
  "神戸市長田区",
  "神戸市須磨区",
  "神戸市垂水区",
  "神戸市北区",
  "神戸市中央区",
  "神戸市西区",
  "猪名川町",
  "三田市",
  "川西市",
  "宝塚市",
  "伊丹市",
  "芦屋市",
  "西宮市",
  "尼崎市",
] as const;
interface HyogoHanshin {
  prefecture: "兵庫県";
  area: "阪神";
  city: typeof HyogoHanshinCities[number];
  address: string;
}

// 兵庫県 播磨
export const HyogoHarimaCities = [
  "上郡町",
  "赤穂市",
  "太子町",
  "たつの市",
  "佐用町",
  "宍粟市",
  "相生市",
  "福崎町",
  "神河町",
  "市川町",
  "姫路市",
  "多可町",
  "加古川市",
  "播磨町",
  "高砂市",
  "明石市",
] as const;
interface HyogoHarima {
  prefecture: "兵庫県";
  area: "播磨";
  city: typeof HyogoHarimaCities[number];
  address: string;
}

type Hyogo = HyogoAwaji | HyogoTanba | HyogoHarima | HyogoHanshin;

// 奈良県
export const NaraCities = [
  "奈良市",
  "大和高田市",
  "大和郡山市",
  "天理市",
  "橿原市",
  "桜井市",
  "五條市",
  "御所市",
  "生駒市",
  "香芝市",
  "葛城市",
  "宇陀市",
  "山添村",
  "平群町",
  "三郷町",
  "斑鳩町",
  "安堵町",
  "川西町",
  "三宅町",
  "田原本町",
  "曽爾村",
  "御杖村",
  "高取町",
  "明日香村",
  "上牧町",
  "王寺町",
  "広陵町",
  "河合町",
  "吉野町",
  "大淀町",
  "下市町",
  "黒滝村",
  "天川村",
  "野迫川村",
  "十津川村",
  "下北山村",
  "上北山村",
  "川上村",
  "東吉野村",
] as const;
interface Nara {
  prefecture: "奈良県";
  area: "奈良";
  city: typeof NaraCities[number];
  address: string;
}

// 和歌山県
export const WakayamaCities = [
  "和歌山市",
  "海南市",
  "橋本市",
  "有田市",
  "御坊市",
  "田辺市",
  "新宮市",
  "紀の川市",
  "岩出市",
  "紀美野町",
  "かつらぎ町",
  "九度山町",
  "高野町",
  "湯浅町",
  "広川町",
  "有田川町",
  "美浜町",
  "日高町",
  "由良町",
  "印南町",
  "みなべ町",
  "日高川町",
  "白浜町",
  "上富田町",
  "すさみ町",
  "那智勝浦町",
  "太地町",
  "古座川町",
  "北山村",
  "串本町",
] as const;
interface Wakayama {
  prefecture: "和歌山県";
  area: "和歌山";
  city: typeof WakayamaCities[number];
  address: string;
}

export type Kinki = Shiga | Kyoto | Osaka | Hyogo | Nara | Wakayama;

// 新潟県
export const NigataCities = [
  "新潟市北区",
  "新潟市東区",
  "新潟市中央区",
  "新潟市江南区",
  "新潟市秋葉区",
  "新潟市南区",
  "新潟市西区",
  "新潟市西蒲区",
  "長岡市",
  "三条市",
  "柏崎市",
  "新発田市",
  "小千谷市",
  "加茂市",
  "十日町市",
  "見附市",
  "村上市",
  "燕市",
  "糸魚川市",
  "妙高市",
  "五泉市",
  "上越市",
  "阿賀野市",
  "佐渡市",
  "魚沼市",
  "南魚沼市",
  "胎内市",
  "聖籠町",
  "弥彦村",
  "田上町",
  "阿賀町",
  "出雲崎町",
  "湯沢町",
  "津南町",
  "刈羽村",
  "関川村",
  "粟島浦村",
] as const;
interface Nigata {
  prefecture: "新潟県";
  area: "新潟";
  city: typeof NigataCities[number];
  address: string;
}

// 長野県 北信
export const NaganoHokushinCities = [
  "山ノ内町",
  "栄村",
  "野沢温泉村",
  "飯山市",
  "木島平村",
  "中野市",
  "長野市",
  "信濃町",
  "小川村",
  "飯綱町",
  "千曲市",
  "坂城町",
  "須坂市",
  "高山村",
  "小布施町",
] as const;
interface NaganoHokushin {
  prefecture: "長野県";
  area: "北信";
  city: typeof NaganoHokushinCities[number];
  address: string;
}

// 長野県 東信
export const NaganoToushinCities = [
  "北相木村",
  "南相木村",
  "川上村",
  "南牧村",
  "小海町",
  "軽井沢町",
  "佐久市",
  "佐久穂町",
  "御代田町",
  "小諸市",
  "立科町",
  "東御市",
  "長和町",
  "上田市",
  "青木村",
] as const;
interface NaganoToushin {
  prefecture: "長野県";
  area: "東信";
  city: typeof NaganoToushinCities[number];
  address: string;
}

// 長野県 中信
export const NaganoChushinCities = [
  "安曇野市",
  "朝日村",
  "松本市",
  "山形村",
  "塩尻市",
  "生坂村",
  "筑北村",
  "麻績村",
  "大町市",
  "池田町",
  "松川村",
  "白馬村",
  "小谷村",
  "木祖村",
  "上松町",
  "南木曽町",
  "王滝村",
  "大桑村",
  "木曽町",
] as const;
interface NaganoChushin {
  prefecture: "長野県";
  area: "中信";
  city: typeof NaganoChushinCities[number];
  address: string;
}

// 長野県 南信
export const NaganoNanshinCities = [
  "岡谷市",
  "飯田市",
  "諏訪市",
  "伊那市",
  "駒ヶ根市",
  "茅野市",
  "下諏訪町",
  "富士見町",
  "原村",
  "箕輪町",
  "南箕輪村",
  "辰野町",
  "飯島町",
  "中川村",
  "宮田村",
  "松川町",
  "高森町",
  "阿南町",
  "阿智村",
  "平谷村",
  "根羽村",
  "下條村",
  "売木村",
  "天龍村",
  "泰阜村",
  "喬木村",
  "豊丘村",
  "大鹿村",
] as const;
interface NaganoNanshin {
  prefecture: "長野県";
  area: "南信";
  city: typeof NaganoNanshinCities[number];
  address: string;
}

// 山梨県
export const YamanashiCities = [
  "甲府市",
  "富士吉田市",
  "都留市",
  "山梨市",
  "大月市",
  "韮崎市",
  "南アルプス市",
  "北杜市",
  "甲斐市",
  "笛吹市",
  "上野原市",
  "甲州市",
  "中央市",
  "市川三郷町",
  "早川町",
  "身延町",
  "南部町",
  "富士川町",
  "昭和町",
  "道志村",
  "西桂町",
  "忍野村",
  "山中湖村",
  "鳴沢村",
  "富士河口湖町",
  "小菅村",
  "丹波山村",
] as const;
interface Yamanashi {
  prefecture: "山梨県";
  area: "山梨";
  city: typeof YamanashiCities[number];
  address: string;
}

type Nagano = NaganoHokushin | NaganoToushin | NaganoChushin | NaganoNanshin;

export type Koushinetsu = Nigata | Nagano | Yamanashi;

# 日本の城 API
日本の城をJSON形式でまとめてます。目標は1000城!!  
助っ人求む `情報提供` `プルリク` `Issues` 是非お願いします  

- [情報提供 Form](https://forms.gle/rXdaRjGiUroPJVLx9)
- [GitHub](https://github.com/SatooRu65536/jp-castle-api)


## サンプルデータ
```json
{
    "name": "名古屋城",
    "alias": ["金鯱城", "金城", "柳城", "亀屋城", "蓬左城"],
    "build": 1619,
    "owners": ["尾張徳川家"],
    "castle_tower": {
        "structure": [5, 5],
        "condition": "復元",
    },
    "scale": 5,
    "latlng": [
        35.18551,
        136.89923
    ],
    "place": {
      "area": "尾張",
      "prefectur": "愛知県",
      "city": "名古屋市",
      "address": "愛知県名古屋市中区本丸1"
    },
    "remains": [
        "堀",
        "竪堀",
        "堀切",
        "土塁"
        "石垣",
        "曲輪",
        "虎口",
        "柵",
        "塀",
        "井戸",
        "門",
        "櫓",
        "天守閣",
        "庭園"
    ],
    "type": "平城",
    "category": [
        "重要文化財",
        "特別史跡",
        "百名城",
        "三大名城"
    ],
    "site": "https://www.nagoyajo.city.nagoya.jp"
}
```

## 項目
### name
城名

### alias
別名

### build
築城年

### owners
主な城主

### castle_tower
#### structure
天守の構造 [層(重), 階]

#### condition
天守の状態
- 現存
- 復元
- 復興
- 模擬

### scale
城の規模
- 5 : 外堀の内側は整備されている
- 4 : 本丸周りは残っている
- 3 : 一部の建物や堀・石垣はある
- 2 : 看板のみある
- 1 : 何も無い
- 0 : 位置も曖昧

### latlng
座標 [緯度, 経度]

### prefectur
都道府県

### area
地域

### city
市区町村

### address
住所

### remains
- 堀
- 竪堀
- 堀切
- 土塁
- 石垣
- 虎口
- 曲輪(郭)
- 柵
- 塀
- 井戸
- 門
- 櫓
- 天守閣
- 庭園

### type
- 山城
- 平山城
- 平城
- 海城
- 湖城

### category
- 世界遺産
- 国宝
- 重要文化財
- 都指定史跡
- 道指定史跡
- 府指定史跡
- 県指定史跡
- 市指定史跡
- 区指定史跡
- 町指定史跡
- 村指定史跡
- 現存天守
- 百名城
- 続百名城
- 三大名城
- 三大山城
- 三大海城
- 三大湖城
- 特別史跡

### site
公式サイト

## AUTHOR
- [SatooRu](https://satooru.me)

## LICENSE
[MIT](./LICENSE)

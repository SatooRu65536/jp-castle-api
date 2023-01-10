# 日本の城 API
日本の城をJSON形式でまとめてます。目標は1000城!!  
助っ人求む `情報提供` `プルリク` `Issues` 是非お願いします  

- [情報提供 Form](https://forms.gle/rXdaRjGiUroPJVLx9)
- [GitHub](https://github.com/SatooRu65536/jp-castle-api)


## サンプルデータ
```json
{
    "name": "名古屋城",
    "latlng": [
        35.18551,
        136.89923
    ],
    "area": "尾張",
    "prefectur": "愛知県",
    "city": "名古屋市",
    "address": "愛知県名古屋市中区本丸1",
    "remains": [
        "moat",
        "koguchi",
        "kuruwa",
        "fence",
        "well",
        "gate",
        "turret",
        "stone_wall",
        "castle_tower",
        "earthworks"
    ],
    "terrain_type": "flatland",
    "category": [
        "100_fine_castles",
        "best3_castles"
    ],
    "site": "https://www.nagoyajo.city.nagoya.jp"
}
```

## 遺構
- 堀 : moat
- 竪堀 : vertical_moat
- 堀切 : horikiri
- 虎口 : koguchi
- 曲輪・郭 : kuruwa
- 塀 : fence
- 井戸 : well
- 門 : gate
- 櫓 : turret
- 石垣 : stone_wall
- 天守閣 : castle_tower
- 土塁 : earthworks

## 城の地形分類
- 山城 : mountain
- 平山城 : flatland_mountain
- 平城 : flatland
- 海城 : sea
- 湖城 : lake

## カテゴリー
- 世界遺産 : world_heritage
- 国宝 : national_treasure
- 現存天守 : existing_castle_tower
- 百名城 : 100_fine_castles
- 続百名城 : continued_100_fine_castles
- 三大名城 : best3_castles
- 三大山城 : best3_mountain_castles
- 三大海城 : best3_sea_castles
- 三大湖城 : best3_lake_castles


## AUTHOR
- [SatooRu](https://satooru.me)

## LICENSE
[MIT](./LICENSE)

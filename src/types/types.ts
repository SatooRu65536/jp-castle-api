import { Tohoku } from "./place_name/tohoku";

type Prefectur = Tohoku;

export type Castle = {
    "name": string;
    "alias": string[];
    "build": number,
    "owners": string[],
    "castle_tower": {
        "structure": [number, number],
        "condition": "現存" | "復元" | "復興" | "模擬"
    };
    "scale": 5 | 4 | 3 | 2 | 1 | 0;
    "latlng": [
        number,
        number
    ],
    "place": Prefectur,
    "address": string,
    "remains": "堀" | "竪堀" | "堀切" | "土塁" | "石垣" | "虎口" | "曲輪" | "柵" | "塀" | "井戸" | "門" | "櫓" | "天守閣" | "庭園"[];
    "type": "山城" | "平山城" | "平城" | "海城" | "湖城";
    "category": 
    "世界遺産" | "国宝" | "重要文化財" | "特別史跡" | "都指定史跡" | "道指定史跡" | "府指定史跡" | "県指定史跡" | "市指定史跡" | "区指定史跡" |
    "町指定史跡" | "村指定史跡" | "現存天守" | "百名城" | "続百名城" | "三大名城" | "三大山城" | "三大海城" | "三大湖城"[];
    "site": string
}

import { Castle, Castles, Prefs } from "../types/types";

const HokkaidoCastles: Castle[] = [
  new Castles(Prefs.HokkaidoDoutou).getCastle({
    city: Prefs.HokkaidoDoutou.selectCity("根室市"),
    name: "名古屋城",
    scale: 5,
    latlng: [43.38848, 145.78197],
    castle_tower: {
      condition: null,
      structure: [0, 0],
    },
    type: "海城",
    remains: ["堀"],
    categories: ["百名城", "国指定史跡"],
    site: "https://www.nemuro-kankou.com/tourism/ainuchashi/",
  }),
];

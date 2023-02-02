import glob from "glob";
import path from "path";
import fs from "fs";
import sqlite3 from "sqlite3";
import Settings from "../export_setting";
import { JPCastles } from "./util";
import { AreasFromPref, AreaType, Prefs, PrefType } from "./types/areas";
import { Castle } from "./types/types";
import { getDatabase, get, ref, remove } from "@firebase/database";
import {
  CastleCategories,
  CastleStructures,
  CastleType,
  TowerCondtion,
} from "./types/types";
import { getApp, getApps, initializeApp } from "firebase/app";
import dotenv from "dotenv";

const dirInit = (dirname: string) => {
  if (fs.existsSync(dirname)) fs.rmSync(dirname, { recursive: true });
  fs.mkdirSync(dirname);
};

const genDataTsfile = (searchDir: string, dataDir: string) => {
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

  glob(path.join(searchDir, "/**/*"), { nodir: true }, (err, files) => {
    if (err) throw err;

    files.map((file) => {
      const newDir = path.dirname(file).replace(/^src\/data\//, `${dataDir}/`);
      const area = path.basename(file, ".ts") as AreaType;
      const newFile = area + ".json";
      const newPath = `${newDir}/${newFile}`;
      const pathArr = newDir.split("/");

      pathArr.map((p, index) => {
        const currentPath = path.join(...pathArr.slice(0, index + 1));
        if (!fs.existsSync(currentPath)) {
          fs.mkdirSync(currentPath);
        }
      });

      const pref = pathArr[2] as PrefType;
      if (!Prefs.includes(pref))
        throw new Error(
          `フォルダ名が間違っています。  '${pref}' 'src/data/${pathArr[1]}/${pathArr[2]}'\n` +
            " > npm run areas\n"
        );
      if (!AreasFromPref[pref].includes(area))
        throw new Error(
          `フォルダ名が間違っています。 '${area}' 'src/data/${pathArr[1]}/${pathArr[2]}/${pathArr[3]}'\n` +
            " > npm run areas"
        );

      const data = JPCastles[pref][area];
      fs.writeFile(newPath, JSON.stringify(data), (err) => {
        if (err) throw err;
      });
    });
  });
};

const setCasstlesToDB = (searchDir: string) => {
  glob(path.join(searchDir, "/**/*"), { nodir: true }, (err, files) => {
    if (err) throw err;

    const db = new sqlite3.Database("./db/castles.db");
    db.serialize(() => {
      db.run(`CREATE TABLE IF NOT EXISTS castles(
      key INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      alias TEXT,
      build INTEGER,
      scale INTEGER,
      lat REAL,
      lng REAL,
      prefecture TEXT,
      area TEXT,
      city TEXT,
      address TEXT,
      tower_condition TEXT,
      tower_layer INTEGER,
      tower_floor INTEGER,
      type TEXT,
      remains TEXT,
      restorations TEXT,
      categories TEXT,
      site TEXT
    )`);
      db.run("DELETE FROM castles");

      files.map((file) => {
        const pathArr = file.split("/");
        const area = path.basename(pathArr[4], ".ts") as AreaType;
        const pref = file.split("/")[3] as PrefType;

        if (!Prefs.includes(pref))
          throw new Error(
            `フォルダ名が間違っています。  '${pref}' 'src/data/${pathArr[2]}/${pathArr[3]}'\n`
          );
        if (!AreasFromPref[pref].includes(area))
          throw new Error(
            `フォルダ名が間違っています。 '${area}' 'src/data/${pathArr[2]}/${pathArr[3]}/${pathArr[4]}'\n`
          );

        const data = JPCastles[pref][area];
        if (data === undefined) return;
        data.map((d) => {
          const sql = `INSERT INTO castles (
            name,
            alias,
            build,
            scale,
            lat,
            lng,
            prefecture,
            area,
            city,
            address,
            tower_condition,
            tower_layer,
            tower_floor,
            type,
            remains,
            restorations,
            categories,
            site
          ) VALUES (
          '${d.name}',
          '${JSON.stringify(d.alias)}',
          ${d.build},
          ${d.scale},
          ${d.latlng[0]},
          ${d.latlng[1]},
          '${d.place.prefecture}',
          '${d.place.area}',
          '${d.place.city}',
          '${d.place.address}',
          '${d.castle_tower ? d.castle_tower.condition : "なし"}',
          '${d.castle_tower ? d.castle_tower.structure[0] : 0}',
          '${d.castle_tower ? d.castle_tower.structure[1] : 0}',
          '${d.type}',
          '${JSON.stringify(d.remains)}',
          '${JSON.stringify(d.restorations)}',
          '${JSON.stringify(d.categories)}',
          '${d.site}'
        )`;
          db.run(sql);
        });
      });
    });
  });
};

const genDataByLatlng = (dataDir: string) => {
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);
  dataDir = path.join(dataDir, "latlng");
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

  const db = new sqlite3.Database("./db/castles.db");
  db.serialize(() => {
    db.get(
      "SELECT \
        MAX(lat) as latmax,\
        min(lat) as latmin,\
        MAX(lng) as lngmax,\
        min(lng) as lngmin \
      FROM castles",
      (err, row) => {
        if (err) throw err;
        const latlngRound = (value: number, isMax: boolean) => {
          if (isMax) {
            value = Math.ceil(value * 10);
            if (value % 2 === 1) value += 1;
          } else {
            value = Math.floor(value * 10);
            if (value % 2 === 1) value -= 1;
          }
          return value / 10;
        };
        const llRange = {
          min: {
            lat: latlngRound(row.latmin, false),
            lng: latlngRound(row.lngmin, false),
          },
          max: {
            lat: latlngRound(row.latmax, true),
            lng: latlngRound(row.lngmax, true),
          },
        };

        for (let lat = llRange.min.lat; lat <= llRange.max.lat; lat += 0.2) {
          lat = Math.round(lat * 10) / 10;
          fs.mkdir(`data/latlng/${lat.toFixed(1)}`, (err) => {
            if (err) throw err;
            for (
              let lng = llRange.min.lng;
              lng <= llRange.max.lng;
              lng += 0.2
            ) {
              lng = Math.round(lng * 10) / 10;

              const file = `${dataDir}/${lat.toFixed(1)}/${lng.toFixed(
                1
              )}.json`;
              const sql = `SELECT
            name, alias, build, scale, 
            lat, lng, prefecture, area, city, address
            tower_condition, tower_layer, tower_floor, type, remains, 
            restorations, categories, site
            FROM castles WHERE
            ${lat} <= lat AND lat < ${lat}+0.2 AND
            ${lng} <= lng AND lng < ${lng}+0.2`;
              db.all(sql, (err, rows) => {
                if (err) throw err;
                if (rows.length === 0) return;

                const data: Castle[] = rows.map((row) => {
                  return {
                    name: row.name,
                    alias: JSON.parse(row.alias),
                    build: row.build,
                    scale: row.scale,
                    latlng: [row.lat, row.lng],
                    place: {
                      prefecture: row.prefecture,
                      area: row.area,
                      city: row.city,
                      address: row.address,
                    },
                    castle_tower:
                      row.tower_condition === "なし"
                        ? null
                        : {
                            condition: row.tower_condition,
                            structure: [row.tower_layer, row.floor],
                          },
                    type: row.type,
                    remains: JSON.parse(row.remains),
                    restorations: JSON.parse(row.restorations),
                    categories: JSON.parse(row.categories),
                    site: row.site,
                  };
                });
                console.log(file);
                fs.writeFile(file, JSON.stringify(data), (err) => {
                  if (err) throw err;
                });
              });
            }
          });
        }
      }
    );
  });
};

type CastleData = {
  name: string;
  alias: string[];
  latlng: {
    lat: string;
    lng: string;
  };
  pref: string;
  area: string;
  city: string;
  address: string;
  build: string;
  scale: number;
  type: CastleType;
  tower: {
    isExist: boolean;
    structure: [number, number];
    condition: TowerCondtion;
  };
  remains: CastleStructures[];
  restorations: CastleStructures[];
  categories: CastleCategories[];
  site: string;
  reference: string;
};

type RTDBData = {
  [index: string]: {
    [index: string]: {
      [index: string]: {
        [index: string]: {
          [index: string]: {
            json: string;
          };
        };
      };
    };
  };
};

const getTsCode = (data: CastleData) => {
  const build = data.build === "" ? "null" : Number(data.build);
  const tower = data.tower.isExist
    ? "null"
    : `{
      structure: [${data.tower.structure[0]}, ${data.tower.structure[1]}],
      condition: "復元",
    }`;

  return `  // ${data.pref} ${data.area} ${data.city}${
    data.reference ? "\n  // " + data.reference : ""
  }
  {
    name: "${data.name}",
    alias: ${JSON.stringify(data.alias)},
    build: ${build},
    scale: ${data.scale},
    type: "${data.type}",
    latlng: [${Number(data.latlng.lat)}, ${Number(data.latlng.lng)}],
    place: {
      prefecture: "${data.pref}",
      area: "${data.area}",
      city: "${data.city}",
      address: "${data.address}",
    },
    castle_tower: ${tower},
    remains: ${JSON.stringify(data.remains)},
    restorations: ${JSON.stringify(data.restorations)},
    categories: ${JSON.stringify(data.categories)},
    site: "${data.site}",
  },`;
};

const genDatumFileFromRTDB = async () => {
  dotenv.config();
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_apiKey,
    authDomain: process.env.FIREBASE_authDomain,
    projectId: process.env.FIREBASE_projectId,
    storageBucket: process.env.FIREBASE_storageBucket,
    messagingSenderId: process.env.FIREBASE_messagingSenderId,
    appId: process.env.FIREBASE_appId,
    measurementId: process.env.FIREBASE_measurementId,
  };
  initializeApp(firebaseConfig);

  try {
    const db = getDatabase();
    const dbRef = ref(db, "castles");
    const data: RTDBData = await (await get(dbRef)).val();
    remove(dbRef);

    const stream = fs.createWriteStream("data/rtdb.ts");
    stream.write("const data = [\n");
    Object.values(data).map((prefData) => {
      Object.values(prefData).map((areaData) => {
        Object.values(areaData).map((cityData) => {
          Object.values(cityData).map((castleData) => {
            Object.values(castleData).map((data) => {
              const tsCode = getTsCode(JSON.parse(data.json));
              stream.write(tsCode + "\n");
            });
          });
        });
      });
    });
    stream.write("];");
    stream.end("\n");
  } catch (e) {
    console.error(e);
  }

  process.exit()
};

const args = process.argv;

if (args.includes("--set-db")) {
  setCasstlesToDB("src/data");
} else if (args.includes("--gen-by-tsfile")) {
  genDataTsfile("src/data", Settings.export_dir);
} else if (args.includes("--gen-by-latlng")) {
  genDataByLatlng(Settings.export_dir);
} else if (args.includes("--exportdir-init")) {
  dirInit(Settings.export_dir);
} else if (args.includes("--get-from-rtdb")) {
  genDatumFileFromRTDB();
}

import _ from "lodash";
import glob from "glob";
import path from "path";
import fs from "fs";
import Settings from "../export_setting";
import { JPCastles } from "./util";
import { AreasFromPref, AreaType, Prefs, PrefType } from "./types/areas";

const dirInit = (dirname: string) => {
  if (fs.existsSync(dirname)) fs.rmSync(dirname, { recursive: true });
  fs.mkdirSync(dirname);
};

const addDataByPref = (searchDir: string, dataDir: string) => {
  glob(path.join(searchDir, "/**/*"), { nodir: true }, (err, files) => {
    if (err) throw err;

    files.map((file) => {
      const newDir = path.dirname(file).replace(/^src\/data\//, `${dataDir}/`);
      const area = path.basename(file, ".ts");
      const newFile = area + ".json";
      const newPath = `${newDir}/${newFile}`;
      const pathArr = newDir.split("/");

      const pref = pathArr[2] as PrefType;
      if (!Prefs.includes(pref))
        throw new Error(
          `フォルダ名が間違っています。  '${pref}' 'src/data/${pathArr[1]}/${pathArr[2]}'\n` +
            " > npm run areas\n"
        );
      if (!(area in AreasFromPref))
        throw new Error(
          `フォルダ名が間違っています。 '${area}' 'src/data/${pathArr[1]}/${pathArr[2]}/${pathArr[3]}'\n` +
            " > npm run areas"
        );

      const data = JPCastles[pref as PrefType][area as AreaType];

      pathArr.map((p, index) => {
        const currentPath = path.join(...pathArr.slice(0, index + 1));
        if (!fs.existsSync(currentPath)) {
          fs.mkdirSync(currentPath);
        }
      });

      fs.writeFile(newPath, JSON.stringify(data), (err) => {
        if (err) throw err;
      });
    });
  });
};

dirInit(Settings.export_dir);
addDataByPref("src/data", Settings.export_dir);

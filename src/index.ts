import _ from "lodash";
import glob from "glob";
import path from "path";
import fs from "fs";
import Settings from "../export_setting";

const dirInit = (dirname: string) => {
  fs.rmSync(dirname, { recursive: true });
  fs.mkdirSync(dirname);
};

const addData = (searchDir: string, dataDir: string) => {
  glob(path.join(searchDir, "/**/*"), { nodir: true }, (err, files) => {
    if (err) throw err;

    files.map((file) => {
      const newDir = path.dirname(file).replace(/^src\/data\//, `${dataDir}/`);
      const newFile = path.basename(file, ".ts") + ".json";
      const newPath = `${newDir}/${newFile}`;
      const pathArr = newDir.split("/");

      pathArr.map((p, index) => {
        const currentPath = path.join(...pathArr.slice(0, index + 1));
        if (!fs.existsSync(currentPath)) {
          fs.mkdirSync(currentPath);
        }
      });

      fs.writeFile(newPath, newPath, (err) => {
        if (err) throw err;
        console.log("正常に書き込みが完了しました");
      });
    });
  });
};

dirInit(Settings.export_dirname);
addData("src/data", Settings.export_dirname);

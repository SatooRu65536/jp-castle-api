import path from "path";
import fs from "fs";

const getAreas = () => {
  const folders = fs.readdirSync("src/data");
  const regions = [...folders];
  let prefs: string[] = [];
  let areas: string[] = [];
  let type: { [index: string]: string[] } = {};

  folders.map((folder) => {
    const folders = fs.readdirSync(path.join("src/data", folder));
    prefs.push(...folders);
    folders.map((f) => {
      const currentPath = path.join("src/data", folder, f);
      const area = fs.readdirSync(path.join(currentPath)).map((f) => {
        return path.basename(f, ".ts");
      });
      type[f] = area;
      areas.push(...area);
    });
  });
  return {
    type: JSON.stringify(type),
    regions: JSON.stringify(regions),
    areas: JSON.stringify(areas),
    prefs: JSON.stringify(prefs),
  };
};

const genArea = (
  type: string,
  regions: string,
  areas: string,
  prefs: string
) => {
  const Areas =
    'import { Castle } from "./types";\n\n' +
    "export const Areas = " +
    areas
      .replace(/\["/g, '[\n  "')
      .replace(/",/g, '",\n  ')
      .replace(/"]/g, '",\n]') +
    " as const;\nexport type AreaType = typeof Areas[number];\n\n";

  const Regions =
    "export const Regions = " +
    regions
      .replace(/\["/g, '[\n  "')
      .replace(/",/g, '",\n  ')
      .replace(/"]/g, '",\n]') +
    " as const;\nexport type RegionType = typeof Prefs[number];\n\n";

  const Prefs =
    "export const Prefs = " +
    prefs
      .replace(/\["/g, '[\n  "')
      .replace(/",/g, '",\n  ')
      .replace(/"]/g, '",\n]') +
    " as const;\nexport type PrefType = typeof Prefs[number];\n\n";

  const AreasFromPref =
    "type AreasFromPrefType = {\n" +
    "  [key in PrefType]: AreaType[];\n" +
    "};" +
    "\nexport const AreasFromPref: AreasFromPrefType =" +
    type
      .replace(/^\{/, " {\n  ")
      .replace(/\["/g, "¥tmpa¥")
      .replace(/"\],/g, "¥tmpb¥")
      .replace(/"\]/g, "¥tmpc¥")
      .replace(/","/g, "¥tmpd¥")
      .replace(/"/g, "")
      .replace(/¥tmpa¥/g, '["')
      .replace(/¥tmpb¥/g, '"],\n  ')
      .replace(/¥tmpc¥/g, '"],\n')
      .replace(/¥tmpd¥/g, '","')
      .replace(/:/g, ": ") +
    ";\n\n";

  const JPCastlesType =
    "export type JPCastlesType = {\n" +
    "  [key in PrefType]: {\n" +
    "    [key in AreaType]?: Castle[];\n" +
    "  };\n" +
    '};\n';

  return Areas + Regions + Prefs + AreasFromPref + JPCastlesType;
};

const write = (text: string) => {
  fs.writeFile("src/types/areas.ts", text, (err) => {
    if (err) throw err;
  });
};

const { type, regions, areas, prefs } = getAreas();
write(genArea(type, regions, areas, prefs));

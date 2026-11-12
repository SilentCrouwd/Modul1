import fs from "node:fs";
const __dirname = import.meta.dirname;

export function writeFile(
  datesArray: string[],
  fileName: string,
  path?: string,
) {
  fs.writeFile(
    `${path || __dirname + "/../"}${fileName}.csv`,
    datesArray.join("\n") + "\n",
    { flag: "a" },
    (err) => {
      if (err) console.log(err);
    },
  );
}
export function readFile(fileName: string, path?: string) {
  fs.readFile(
    `${path || __dirname + "/../"}/${fileName}.csv`,
    "utf-8",
    (err, data) => {
      if (err) console.log(err);
      else {
        console.log(data);
      }
    },
  );
}

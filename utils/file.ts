import fs from "node:fs";

export function writeFile(datesArray: string[], fileName: string) {
  fs.writeFile(
    `${fileName}.csv`,
    datesArray.join("\n") + "\n",
    { flag: "a" },
    (err) => {
      if (err) console.log(err);
    },
  );
}

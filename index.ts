import { generateDates } from "./utils/generator.js";
import { formatArray } from "./utils/formating.js";
import { readFile, writeFile } from "./utils/file.js";

const generateValue = process.argv.splice(2);

if (generateValue.length <= 0 || generateValue.length > 1) {
  console.log("Bitte beachte es darf nur 1 Argument übergebenwerden ");
  process.exit(1);
} else {
  const datesRawArray = generateDates(Number(generateValue));
  if (datesRawArray) {
    const datesFormatArray = formatArray(datesRawArray);

    writeFile(datesFormatArray, "datesLog");
    readFile("datesLog");
  }
}
//console.log(datesRawArray);

import { generateDates } from "./utils/generator.js";
import { formatArray } from "./utils/formating.js";
import { writeFile } from "./utils/file.js";

const generateValue = process.argv;

const datesRawArray = generateDates(Number(generateValue[2]));
//console.log(datesRawArray);
const datesFormatArray = formatArray(datesRawArray);

writeFile(datesFormatArray, "test");

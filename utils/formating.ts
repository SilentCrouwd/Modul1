import { compareAsc, format } from "date-fns";

export function formatArray(rawArray: string[]) {
  //console.log(datesRawArray);
  rawArray.sort(compareAsc);
  const datesFormatArray = rawArray.map((date) => {
    return format(date, "dd.MM.yyyy");
  });

  return datesFormatArray;
}

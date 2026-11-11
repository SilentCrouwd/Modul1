import { compareAsc, format } from "date-fns";

export function formatArray(rawArray: string[]) {
  //console.log(datesRawArray);
  const datesFormatArray = rawArray
    .map((date) => {
      return format(date, "PPPP");
    })
    .sort(compareAsc);

  return datesFormatArray;
}

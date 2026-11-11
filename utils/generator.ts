import { fromUnixTime } from "date-fns";

export function generateDates(amount: number) {
  const pushedDates = [];
  for (let i = 0; i < amount; i++) {
    const rndDate = Math.floor(Math.random() * 100000000);

    pushedDates.push(fromUnixTime(rndDate));
  }
  return pushedDates;
}

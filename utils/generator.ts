import { fromUnixTime } from "date-fns";

export function generateDates(amount: number) {
  const pushedDates = [];

  if (amount === 0) {
    console.log("Argument darf nicht 0 sein!");
  } else {
    for (let i = 0; i < amount; i++) {
      const rndDate = Math.floor(Math.random() * 100000000);

      pushedDates.push(fromUnixTime(rndDate));
    }
    return pushedDates;
  }
}

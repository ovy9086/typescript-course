const array = [1, 2, 3] as const;

const objArray = new Array<string>("hello", "yes");
const days = ["M", "T", "W"] as const;

const daysR: readonly string[] = ["s"]

function printDays(days: ReadonlyArray<string>) {
  console.log("days of week", days);
}

printDays(days);



// function processInput(input: string | number): void {
//   if (typeof input === "string") {
//     // Process string input
//     console.log("You entered a string:", input.toUpperCase());
//   } else if (typeof input === "number") {
//     // Process numeric input
//     console.log("You entered a number:", input * 2);
//   } else {
//     console.log("Invalid input.");
//   }
// }

// type Predicate = (x: unknown) => boolean;
// type R = ReturnType<Predicate>;
// // type R = boolean

// function f() {
//   return { x: 10, y: 3 };
// }
// type P = ReturnType<typeof f>;

// const Level = {
//   DEBUG: "debug",
//   INFO: "info",
//   WARN: "warn",
//   ERROR: "error",
// } as const;

// type LogLevelType = (typeof Level)[keyof typeof Level];

// log("error", "Ooops!");
// log(Level.ERROR, "Ooops!");

// function log(level: LogLevelType, msg: string) {
//   //...
// }

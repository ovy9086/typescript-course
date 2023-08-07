enum LogLevel1 {
  DEBUG = "debug",
  INFO = "info",
  WARN = "warn",
  ERROR = "error",
}

function log1(level: LogLevel1, msg: string) {
  //...
}

log1(LogLevel1.ERROR, "Oooops!");
// log1("warn", "Warning");

type LogLevel = "debug" | "info" | "warn" | "error";

function log2(level: LogLevel, msg: string) {
  //...
}

log2("error", "Ooops!");

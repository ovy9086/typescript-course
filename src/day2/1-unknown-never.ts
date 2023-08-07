function printAnyError(error: any) {
  console.warn(error.msg.text);
}

function printError(error: unknown) {
  if (typeof error !== "object" || error === null) {
    return;
  }
  //error is object and not null
  if ("msg" in error) {
    console.warn(error.msg);
  }
}

try {
} catch (e) {
  printAnyError(e);
}

fetch("http://someurl.com/").then((result) => {
  result.json().then((json) => {
    const name = (json as any).data.name;
    console.log(`Hello ${name}`);
  });
});

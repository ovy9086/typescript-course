function sendLogs(msg: string) {
  //...
}

function logData(data: string | LogData | null | object) {
  // can be made unknown

  if (data === null) {
    return;
  } else if (typeof data === "string") {
    sendLogs(data);
  } else if (data instanceof LogData) {
    sendLogs(data.msg);
  } else {
    //Generic object... maybe it has msg in it
    if ("msg" in data && typeof data.msg === "string") {
      sendLogs(data.msg);
    }
  }
}

class LogData {
  constructor(readonly msg: string) {}
}

// we might want to add unknown as signature, because as catch(e:unkwnow)
//unknown is much better than any. allows everything to be passed in , but we need to check when accessing

type ApiRequest = { method: "GET"; url: string } | { method: "POST"; url: string; body: object };

function request(request: ApiRequest) {
  if (request.method === "POST") {
    const json = JSON.stringify(request.body);
    //...
  }
  //...
}

request({ method: "GET", url: "https://api.io/orders" });
request({ method: "POST", url: "https://api.io/orders", body: { data: "all" } });

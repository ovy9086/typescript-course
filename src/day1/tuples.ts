let tuple: [boolean, string] = [true, "{json}"];

const [success, data] = tuple;

let objTuple: { status: boolean; data: string } = { status: true, data: "json" };

const { status: objStatus, data: objData } = objTuple;

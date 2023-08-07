type FieldSettings = { required: boolean; label: string };

const fieldSettings: Record<UserFormKeys, FieldSettings> = {
  age: { required: true, label: "Age" },
  name: { required: true, label: "Namge" },
  email: { required: true, label: "Email" },
};

fieldSettings.age;
fieldSettings["age"];

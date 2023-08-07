type UserForm = {
  name: string;
  email: string;
  age: number;
};

type UserFormKeys = keyof UserForm; // 'name'|'email'|'age'
// ^?


function validateFormField<K extends UserFormKeys>(field: K, value: UserForm[K]) {
  //...
}
validateFormField("name", "Ovidiu");
// validateFormField("age", "19");

function getFormField(field: keyof UserForm, form: UserForm) {
  return form[field];
}

let form: UserForm = {} as UserForm;

getFormField("age", form);
// getFormField("username", form);

validateFormField("name", "asdsa");
//validateFormField("age", "asd");

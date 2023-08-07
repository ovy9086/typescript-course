//index signatures

type KeyValueStore = {
  [K: string]: string;
};

type FormStore = {
  [T in keyof UserForm]: string;
};

type FormFieldsValid = {
  age: boolean;
  name: boolean;
  email: boolean;
};

type FormFieldValid = Partial<{
  [T in keyof UserForm]: boolean;
}>;

let valid: FormFieldValid = { age: false, email: false, name: false };

type PartialForm = {
  [K in keyof UserForm]?: UserForm[K];
};

// let partialForm: PartialForm = {};

type GenericPartial<T> = {
  [K in keyof T]?: T[K];
};

let partialForm: GenericPartial<UserForm> = {};

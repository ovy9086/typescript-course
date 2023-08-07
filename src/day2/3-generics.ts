//Generics with functions

// Generic function to create an array of a specified length, filled with a default value
function createArray<T>(length: number, defaultValue: T): T[] {
  return Array.from({ length }, () => defaultValue);
}

createArray<number>(5, 0);
createArray<string>(5, "hello");
createArray<{ value: number }>(10, { value: 0 });

// Generic interface for a Box that can hold any type of value
interface IBox<T> {
  value: T;
}

// Usage example
const numberBox: IBox<number> = { value: 42 }; // A box holding the number 42
const stringBox: IBox<string> = { value: "hello" }; // A box holding the string 'hello'

class Box<T> {
  private value: T;

  constructor(initialValue: T) {
    this.value = initialValue;
  }

  getValue(): T {
    return this.value;
  }

  setValue(newValue: T): void {
    this.value = newValue;
  }
}

// Generic type alias for a key-value pair
type KeyValuePair<K, V> = {
  key: K;
  value: V;
};

// Usage example
const numberPair: KeyValuePair<string, number> = {
  key: "age",
  value: 30,
};

const stringPair: KeyValuePair<number, string> = {
  key: 1,
  value: "John Doe",
};

interface IProduct {
  id: string;
  price: number;
}

function addToCart<T extends IProduct>(item: T) {
  //...
}

interface X extends IProduct {
  description: string;
}

addToCart({ id: "asdad", price: 123, description: "asdasd" });

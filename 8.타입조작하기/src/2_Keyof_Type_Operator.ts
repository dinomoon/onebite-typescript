interface Person {
  name: string;
  age: number;
  hasCat: boolean;
}

const person: Person = {
  name: 'mgchoi24',
  age: 27,
  hasCat: false,
};

function getProperty(obj: Person, key: keyof Person) {
  return obj[key];
}

function getProperty2(obj: Person, key: keyof typeof person) {
  return obj[key];
}

function getProperty3<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const name = getProperty(person, 'name');
console.log(name); // mgchoi24
const hasCat = getProperty2(person, 'hasCat');
console.log(hasCat); // false
const age = getProperty3(person, 'age');
console.log(age); // 27
// const unknown = getProperty(person, 'unknown'); // error

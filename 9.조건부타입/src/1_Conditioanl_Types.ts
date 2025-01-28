interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;
// Example1 = number

type Example2 = RegExp extends Animal ? number : string;
// Example2 = string

/**
 * Conditional Types with Generic
 */
type StringNumberSwitch<T> = T extends string ? number : string;

type Example3 = StringNumberSwitch<'hello'>;
// Example3 = number

type Example4 = StringNumberSwitch<123>;
// Example4 = string

interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw 'unimplemented';
}

let a = createLabel('typescript');
// let a: NameLabel;

let b = createLabel(2.8);
// let b: IdLabel;

let c = createLabel(Math.random() ? 'hello' : 42);
// let c: IdLabel | NameLabel;

function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === 'string') {
    return text.replace(/\s/g, '');
  } else {
    return undefined;
  }
}

const result = removeSpaces('hello world');
result.toUpperCase();

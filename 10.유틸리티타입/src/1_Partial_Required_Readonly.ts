type Partial<T> = {
  [key in keyof T]?: T[key];
};

type Required<T> = {
  [key in keyof T]-?: T[key];
};

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

interface User {
  name: string;
  age: number;
}
type PartialUser = Partial<User>;
type RequiredUser = Required<User>;
type ReadonlyUser = Readonly<User>;

interface User {
  name: string;
  age: number;
  hasCat: boolean;
}

const user: User = {
  name: 'mgchoi24',
  age: 27,
  hasCat: false,
};

type PartialUser = {
  [key in keyof User]?: User[key];
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

function fetchUser(id: string): ReadonlyUser {
  // ...
  return user;
}

const fetchedUser = fetchUser('mgchoi24');
// fetchedUser.name = 'dinomoon'; // error

function updateUser(user: PartialUser) {
  // ...
}

updateUser({ name: 'dinomoon' });

// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;
// type UnlockedAccount = {
//     id: string;
//     name: string;
// }

// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type User2 = Concrete<MaybeUser>;
// type User2 = {
//     id: string;
//     name: string;
//     age: number;
// }

type ToArray<Type> = Type extends any ? Type[] : never;
type StrArrOrNumArr = ToArray<string | number>;
// type StrArrOrNumArr = string[] | number[]

// 과정
// ToArray<string | number> => ToArray<string> | ToArray<number> => string[] | number[]

// [] 로 묶어주면 분산하지 않는다.
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;

// 'ArrOfStrOrNum' is no longer a union.
type ArrOfStrOrNum = ToArrayNonDist<string | number>;
// type ArrOfStrOrNum = [string | number]

type Exclude<T, U> = T extends U ? never : T;
type Extract<T, U> = T extends U ? T : never;

type A = Exclude<string | number | boolean, string | boolean>;
// type A = number

type B = Extract<string | number | boolean, boolean>;
// type B = boolean

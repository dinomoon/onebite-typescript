# 함수와 타입

## 함수 타입 표현식

```ts
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;
```

```ts
const add = (a: number, b: number) => a + b;
const sub = (a: number, b: number) => a - b;
const multiply = (a: number, b: number) => a * b;
const divide = (a: number, b: number) => a / b;
```

## 호출 시그니쳐(Call Signature)

```ts
type Operation2 = {
  (a: number, b: number): number;
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;
```

```ts
type Operation2 = {
  (a: number, b: number): number;
  name: string;
};

const add2: Operation2 = (a, b) => a + b;
(...)

add2(1, 2);

```

## 함수 타입의 호환성

함수 타입의 호환성이란 특정 함수 타입을 다른 함수 타입으로 괜찮은지 판단하는 것을 의미합니다.
다음 2가지 기준으로 함수 타입의 호환성을 판단하게 됩니다.

- 두 함수의 반환값 타입이 호환되는가?
- 두 함수의 매개변수의 타입이 호환되는가?

```ts
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // ✅
b = a; // ❌
```

```ts
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

c = d; // ❌
d = c; // ✅
```

```ts
type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

animalFunc = dogFunc; // ❌
dogFunc = animalFunc; // ✅
```

```ts
let animalFunc = (animal: Animal) => {
  console.log(animal.name); // ✅
  console.log(animal.color); // ❌
};
```

```ts
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
};
```

```ts
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // ✅
func2 = func1; // ❌
```

## 함수 오버로딩

함수 오버로딩이란 하나의 함수를 매개변수의 개수나 타입에 따라 다르게 동작하도록 만드는 문법입니다.

타입스크립트에서 함수 오버로딩을 구현하려면 먼저 다음과 같이 버전별 오버로드 시그니쳐를 만들어 줘야 합니다.

```ts
// 버전들 -> 오버로드 시그니쳐
function func(a: number): void;
function func(a: number, b: number, c: number): void;
```

이렇게 구현부 없이 선언부만 만들어둔 함수를 ‘오버로드 시그니쳐’라고 합니다. 위 코드에서는 2개의 오버로드 시그니쳐를 만들었으며 각각 함수의 버전을 의미합니다. 위 코드는 func 함수는 매개변수를 1개 받는 버전과 3개 받는 2개의 버전이 있다고 알리는 것 과 같습니다.
오버로드 시그니쳐를 만들었다면 다음으로는 구현 시그니쳐를 만들어줘야 합니다. 구현 시그니쳐는 실제로 함수가 어떻게 실행될 것인지를 정의하는 부분입니다.

```ts
// 버전들 -> 오버로드 시그니쳐
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> 구현 시그니쳐
function func(a: number, b?: number, c?: number) {
  if (typeof b === 'number' && typeof c === 'number') {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

func(1); // ✅ 버전 1 - 오버로드 시그니쳐
func(1, 2); // ❌
func(1, 2, 3); // ✅ 버전 3 - 오버로드 시그니쳐
```

## 사용자 정의 타입가드

사용자 정의 타입가드란 참 또는 거짓을 반환하는 함수를 이용해 우리 입맛대로 타입 가드를 만들 수 있도록 도와주는 타입스크립트의 문법입니다.

```ts
type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

function warning(animal: Animal) {
  if ('isBark' in animal) {
    console.log(animal.isBark ? '짖습니다' : '안짖어요');
  } else if ('isScratch' in animal) {
    console.log(animal.isScratch ? '할큅니다' : '안할퀴어요');
  }
}
```

```ts
(...)

// Dog 타입인지 확인하는 타입 가드
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

// Cat 타입인지 확인하는 타입가드
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    console.log(animal.isBark ? "짖습니다" : "안짖어요");
  } else {
    console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
  }
}
```

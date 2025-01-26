# 타입스크립트 이해하기

## 타입은 집합이다.

![image](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F96054ff9-aac2-4d59-9b98-324328b88028%2FUntitled.png?table=block&id=348d5a9f-4b79-4cfd-8eb0-dc04b4783e51&cache=v2)

### 타입 호환성

![img](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6d8d4723-95f0-4e61-9a8f-44c89c0d7ee8%2FUntitled.png?table=block&id=5d5226d2-6d24-4051-8f54-f942b9f741ce&cache=v2)

![img](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcad65769-77bb-4f9c-8ce2-4c426a02d5fb%2FUntitled.png?table=block&id=994a3752-bc88-46ab-8754-d56ca53d6a19&cache=v2)

![img](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2eaf3a72-a18b-420f-958f-c2572afef1db%2FUntitled.png?table=block&id=459fa4cb-c5a7-4ad3-88be-27a70181ce59&cache=v2)

![img](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F42382978-4468-424e-a3ea-95b6747653ca%2FUntitled.png?table=block&id=53270154-fdd5-45fd-ad96-579ec8f10c0a&cache=v2)

## 타입 계층도와 함께 기본타입 살펴보기

### unknown

unknown 타입은 타입 계층도의 최 상단에 위치합니다.

![img](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F72176d4a-bd08-4157-9f88-33a0edc9695d%2FUntitled.png?table=block&id=f951ab9d-dab7-40c4-b8fd-051ab0dd1df3&cache=v2)

따라서 unknown 타입 변수에는 모든 타입의 값을 할당할 수 있습니다. 바꿔 말하면 모든 타입은 unknown 타입으로 업 캐스트 할 수 있습니다.

```ts
let a: unknown = 1; // number -> unknown
let b: unknown = 'hello'; // string -> unknown
let c: unknown = true; // boolean -> unknown
let d: unknown = null; // null -> unknown
let e: unknown = undefined; // undefined -> unknown
let f: unknown = []; // Array -> unknown
let g: unknown = {}; // Object -> unknown
let h: unknown = () => {}; // Function -> unknown
```

결국 unknown 타입은 모든 타입을 부분집합으로 갖는 타입스크립트 전체 집합 입니다.

![img](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Faed93e77-34a4-46d4-b424-0c73fda867fa%2FUntitled.png?table=block&id=fa7cbbce-c70a-4f43-9122-8a2492b43ab1&cache=v2)

### never

never 타입은 타입 계층도에서 가장 아래에 위치합니다.

![img](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5bfe7128-7f40-43b4-8e31-01c7907d4693%2FUntitled.png?table=block&id=3ce09502-1a38-426f-9cb0-cd822883c56b&cache=v2)

앞서 never 타입은 불가능, 모순을 의미하는 타입이라고 설명한 적이 있습니다. 타입이 집합임을 이해한 지금 never 타입을 다시 표현하자면 never는 공집합을 뜻하는 타입입니다. 수학에서의 공집합은 아무것도 포함하지 않는 집합이라는 뜻 입니다.

```ts
function errorFunc(): never {
  throw new Error();
}
```

errorFunc 함수는 에러를 발생시킵니다. 따라서 이 함수는 정상적으로 종료되지 않습니다. 그러므로 어떤 값도 반환할 수 없습니다. 만약 이 함수가 어떤 값을 반환한다면 그것은 불가능하며 모순입니다.
또 공집합은 모든 집합의 부분 집합입니다. 그러므로 never 타입은 모든 타입의 서브 타입입니다. 따라서 never 타입은 모든 타입으로 업캐스팅 할 수 있습니다.

```ts
let neverVar: never;

let a: number = neverVar; // never -> number
let b: string = neverVar; // never -> string
let c: boolean = neverVar; // never -> boolean
let d: null = neverVar; // never -> null
let e: undefined = neverVar; // never -> undefined
let f: [] = neverVar; // never -> Array
let g: {} = neverVar; // never -> Object
```

```ts
let a: never = 1; // number -> never ❌
let b: never = 'hello'; // string -> never ❌
let c: never = true; // boolean -> never ❌
let d: never = null; // null -> never ❌
let e: never = undefined; // undefined -> never ❌
let f: never = []; // Array -> never ❌
let g: never = {}; // Object -> never ❌
```

### void

![img](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F27abac0e-bb9b-4a09-add3-5a59d631e21f%2FUntitled.png?table=block&id=b0233fad-40cb-4eef-b9de-c7ca651ec465&cache=v2)

### any

any 타입은 사실상 타입 계층도를 완전히 무시합니다. any는 일종의 치트키같은 타입입니다.

![img](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0375b1a5-2cb8-41b4-a381-074bd68b9fbb%2FUntitled.png?table=block&id=664b8b72-9bac-4f45-a8a3-f4c49b5dac6c&cache=v2)

any는 뭐든지 예외입니다. 모든 타입의 슈퍼타입이 될 수도 있고 모든 타입의 서브 타입이 될 수도 있습니다.

```ts
let anyValue: any;

let num: number = anyValue; // any -> number (다운 캐스트)
let str: string = anyValue; // any -> string (다운 캐스트)
let bool: boolean = anyValue; // any -> boolean (다운 캐스트)

anyValue = num; // number -> any (업 캐스트)
anyValue = str; // string -> any (업 캐스트)
anyValue = bool; // boolean -> any (업 캐스트)
```

## 객체 타입의 호환성

```ts
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: '기린',
  color: 'yellow',
};

let dog: Dog = {
  name: '돌돌이',
  color: 'brown',
  breed: '진도',
};

animal = dog; // ✅ OK
dog = animal; // ❌ NO
```

### 초과 프로퍼티 검사

```ts
type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

(...)

let book2: Book = { // 오류 발생
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};
```

Book 타입으로 정의된 변수에 ProgrammingBook 타입으로 보이는 초기값을 설정했습니다. 그 결과 오류가 발생합니다. 무언가 이상합니다 이것은 업캐스팅에 해당되는데 왜 오류가 발생하는 걸까요?
결론부터 말하면 이것은 ‘초과 프로퍼티 검사’가 발동해서 그렇습니다. 초과 프로퍼티 검사란 변수를 객체 리터럴로 초기화 할 때 발동하는 타입스크립트의 특수한 기능입니다. 이 기능은 타입에 정의된 프로퍼티 외의 다른 초과된 프로퍼티를 갖는 객체를 변수에 할당할 수 없도록 막습니다.
따라서 위 코드는 Book 타입에 정의되지 않은 skill 프로퍼티를 갖는 객체를 할당하려고 했으므로 초과 프로퍼티 검사가 실패해 오류가 발생하고 있는 것 입니다.
이런 초과 프로퍼티 검사는 단순히 변수를 초기화 할 때 객체 리터럴을 사용하지만 않으면 발생하지 않습니다. 따라서 다음과 같이 값을 별도의 다른 변수에 보관한 다음 변수 값을 초기화 값으로 사용하면 발생하지 않습니다.

```ts
(...)

let book3: Book = programmingBook; // 앞서 만들어둔 변수
```

```ts
function func(book: Book) {}

func({
  // 오류 발생
  name: '한 입 크기로 잘라먹는 리액트',
  price: 33000,
  skill: 'reactjs',
});
```

```ts
func(programmingBook);
```

## 대수 타입

대수 타입이란 여러개의 타입을 합성해서 만드는 타입을 말합니다. 지난 시간에 객체 타입의 호환성을 이해하셨다면 이제 대수타입도 쉽게 이해하실 수 있습니다.
대수 타입에는 합집합 타입과 교집합 타입이 존재합니다. 합집합은 Union 타입, 교집합은 Intersection 타입이라고 부릅니다. 하나씩 천천히 살펴보겠습니다.

### 합집합(Union) 타입

```ts
// 합집합 타입 - Union 타입
let a: string | number;

a = 1;
a = 'hello';
```

### Union 타입과 객체 타입

```ts
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;
```

![img](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F80dd20f8-b497-49a5-aac6-981d5cb402bc%2FUntitled.png?table=block&id=803c6c28-81a7-4b21-9356-58e27c2af69e&cache=v2)

```ts

(...)

let union1: Union1 = { // ✅
  name: "",
  color: "",
};

let union2: Union1 = { // ✅
  name: "",
  language: "",
};

let union3: Union1 = { // ✅
  name: "",
  color: "",
  language: "",
};

let union4: Union1 = { // ❌
  name: "",
};
```

![img](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa6036c2e-9a74-4bf5-93db-aa35ba0b1305%2FUntitled.png?table=block&id=d566bea8-87cc-421a-bfcc-2cbd7d696355&cache=v2)

### 교집합(Intersection) 타입

```ts
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: '',
  color: '',
  language: '',
};
```

![img](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe07e6c4b-92d7-4c79-a5ee-657ca042aed5%2FUntitled.png?table=block&id=f4edf834-da57-4559-a613-18c4a6ba7684&cache=v2)

## 타입 추론

```ts
let a = 10;
// number 타입으로 추론
```

그러나 모든 상황에 타입을 잘 추론하는 것은 아닙니다. 예를 들어 다음과 같이 함수의 매개변수 타입은 자동으로 추론할 수 없습니다.

```ts
function func(param) {
  // 오류
}
```

### 타입 추론이 가능한 상황들

1. 변수 선언

```ts
let a = 10;
// number 타입으로 추론

let b = 'hello';
// string 타입으로 추론

let c = {
  id: 1,
  name: '이정환',
  profile: {
    nickname: 'winterlood',
  },
  urls: ['https://winterlood.com'],
};
// id, name, profile, urls 프로퍼티가 있는 객체 타입으로 추론
```

2. 구조 분해 할당

```ts
let { id, name, profile } = c;

let [one, two, three] = [1, 'hello', true];
```

3. 함수의 반환값

```ts
function func() {
  return 'hello';
}
// 반환값이 string 타입으로 추론된다
```

4. 기본값이 설정된 매개변수

```ts
function func(message = 'hello') {
  return 'hello';
}
```

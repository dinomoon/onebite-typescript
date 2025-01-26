# 타입스크립트 기본

## 기본타입

기본 타입이란 타입스크립트가 자체적으로 제공하는 타입. 기본 타입을 다른 말로는 내장 타입이라고도 할 수 있습니다. 다음 그림은 타입스크립트가 제공하는 기본 타입들을 계층에 따라 분류한 ‘타입 계층도’ 그림

![image](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F49eaebca-f260-4d43-b59f-6d6e3d0174cb%2FUntitled.png?table=block&id=967f7334-5247-4be3-9cdc-99490ea2b833&cache=v2)

## 원시타입과 리터럴 타입

### number 타입

number 타입은 자바스크립트에서 숫자를 의미하는 모든 값을 포함하는 타입입니다. 단순 정수 뿐만 아니라 소수, 음수, Infinity, NaN등의 특수한 숫자들도 포함합니다.
참고로 이때 이때 변수의 이름 뒤에 콜론(:)과 함께 변수의 타입을 정의하는 이런 문법을 ‘타입 주석’ 또는 ‘타입 어노테이션’이라고 부릅니다.

```ts
// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;
```

### string 타입

string 타입은 문자열을 의미하는 타입입니다. 단순 쌍따옴표 문자열 뿐만 아니라 작은 따옴표, 백틱, 템플릿 리터럴로 만든 모든 문자열을 포함합니다.

```ts
// string
let str1: string = 'hello';
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${str1}`;
```

### boolean 타입

```ts
// boolean
let bool1: boolean = true;
let bool2: boolean = false;
```

### null 타입

null 타입은 오직 null 값만 포함하는 타입입니다.

```ts
// null
let null1: null = null;
```

### undefined 타입

undefined 타입 역시 null 타입과 마찬가지로 오직 하나의 값 undefined만 포함하는 타입입니다.

```ts
// undefined 타입
let unde1: undefined = undefined;
```

### 리터럴 타입

타입스크립트에는 string, number 처럼 범용적으로 많은 값을 포함하는 타입 뿐만 아니라 딱 하나의 값만 포함하는 타입도 존재합니다. 따라서 다음과 같이 변수의 타입을 숫자 10으로 설정하는 것 또한 가능합니다.

```ts
let numA: 10 = 10;
```

변수 numA의 타입을 숫자 10으로 설정했습니다. 이렇게 설정하면 이제 numA에는 10 이외의 값을 저장할 수 없게 됩니다.
이렇듯 하나의 값만 포함하도록 값 자체로 만들어진 타입을 타입스크립트에서는 ‘리터럴 타입’이라고 부릅니다. 참고로 여기서 리터럴은 우리말로 ‘값’ 이라는 뜻 입니다.
숫자 값 뿐만 아니라 문자열이나 불리언 타입의 값도 모두 리터럴 타입으로 만들 수 있습니다.

```ts
let strA: 'hello' = 'hello';
let boolA: true = true;
let boolB: false = false;
```

## 배열과 튜플

### 배열

```ts
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ['hello', 'im', 'winterlood'];
let boolArr: Array<boolean> = [true, false, true];
let multiArr: (number | string)[] = [1, 'hello'];
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];
```

### 튜플

다음으로 살펴볼 타입은 튜플 타입입니다.
튜플은 자바스크립트에는 없는 타입스크립트의 특수한 타입으로 <b>길이와 타입이 고정된 배열을 의미합니다.</b>
앞서 배열 타입을 정의하는 방법을 살펴보며 배열의 타입을 고정하는 방법은 살펴보았지만, 우리는 아직 배열의 길이까지 고정하는 방법은 모릅니다.
이번에 살펴볼 튜플 타입을 이용하면 쉽게 고정된 길이를 갖는 배열 타입을 정의할 수 있습니다.
길이가 2로 고정된 2개의 number 타입 요소를 갖는 튜플(배열) 타입은 다음과 같이 정의합니다.

```ts
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, 'hello', true];
```

tsc를 이용해 튜플 타입이 정의된 타입스크립트 코드를 컴파일 해 보면 결국 튜플은 자바스크립트 배열로 변환되는 것을 확인할 수 있습니다. 튜플은 결국 배열입니다. 그러므로 배열 메서드인 push나 pop을 이용해 고정된 길이를 무시하고 요소를 추가하거나 삭제할 수 있습니다.

사용하는 경우

각 배열의 0번 인덱스에는 회원의 이름, 1번 인덱스에는 회원의 아이디를 저장해 두었는데 만약 눈치 없는 동료 중 한명이 다음과 같이 순서를 잘 못 배치해 요소를 추가할 경우 문제가 될 수 있습니다.

## 객체

### 객체 리터럴 타입

```ts
let dog: {
  name: string;
  color: string;
} = {
  name: '돌돌이',
  color: 'brown',
};
```

### 선택적 프로퍼티(Optional Property)

```ts
let user: {
  id?: number; // 선택적 프로퍼티가 된 id
  name: string;
} = {
  id: 1,
  name: '이정환',
};

user = {
  name: '홍길동',
};
```

### 읽기전용 프로퍼티(Readonly Property)

```ts
let user: {
  id?: number;
  readonly name: string; // name은 이제 Readonly 프로퍼티가 되었음
} = {
  id: 1,
  name: '이정환',
};

user.name = 'dskfd'; // 오류 발생
```

## 타입 별칭과 인덱스 시그니처

### 타입 별칭(Type Alias)

```ts
// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: '이정환',
  nickname: 'winterlood',
  birth: '1997.01.07',
  bio: '안녕하세요',
  location: '부천시',
};

let user2: User = {
  id: 2,
  name: '홍길동',
  nickname: 'winterlood',
  birth: '1997.01.07',
  bio: '안녕하세요',
  location: '부천시',
};
```

## 인텍스 시그니처(Index Signature)

인덱스 시그니쳐는 객체 타입을 유연하게 정의할 수 있도록 돕는 특수한 문법입니다.
다양한 국가들의 영어 코드를 저장하는 객체가 하나 있다고 가정합니다.

만약 이때 countryCodes에 100개의 프로퍼티(국가 코드)가 추가 되어야 한다면 타입 정의에도 각 프로퍼티를 모두 정의해주어야 하기 때문에 매우 불편할 것 입니다.

```ts
type CountryCodes = {
  Korea: string;
  UnitedState: string;
  UnitedKingdom: string;
  // (... 약 100개의 국가)
  Brazil: string;
};

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
  // (... 약 100개의 국가)
  Brazil: 'bz',
};
```

바로 이럴때 인덱스 시그니쳐를 이용하면 다음과 같이 간단하게 타입을 정의할 수 있습니다.

```ts
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
  // (... 약 100개의 국가)
  Brazil: 'bz',
};
```

또 이때 반드시 포함해야 하는 프로퍼티가 있다면 다음과 같이 직접 명시해도 됩니다.

```ts
type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};
```

한가지 주의할 점은 인덱스 시그니쳐를 사용하면서 동시에 추가적인 프로퍼티를 또 정의할 때에는 인덱스 시그니쳐의 value 타입과 직접 추가한 프로퍼티의 value 타입이 호환되거나 일치해야 합니다. 따라서 다음과 같이 서로 호환되지 않는 타입으로 설정하면 오류가 발생합니다.

```ts
type CountryNumberCodes = {
  [key: string]: number;
  Korea: string; // 오류!
};
```

## 열거형(Enum) 타입

열거형 타입은 자바스크립트에는 존재하지 않고 오직 타입스크립트에서만 사용할 수 있는 특별한 타입입니다.
열거형은 다음과 같이 여러개의 값을 나열하는 용도로 사용합니다.

```ts
enum Role {
  ADMIN,
  USER,
  GUEST,
}
```

```ts
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}
```

```ts
// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

const user1 = {
  name: '이정환',
  role: Role.ADMIN, //관리자
};

const user2 = {
  name: '홍길동',
  role: Role.USER, // 회원
};

const user3 = {
  name: '아무개',
  role: Role.GUEST, // 게스트
};
```

```ts
// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN, // 0 할당(자동)
  USER, // 1 할당(자동)
  GUEST, // 2 할당(자동)
}

const user1 = {
  name: '이정환',
  role: Role.ADMIN, // 0
};

const user2 = {
  name: '홍길동',
  role: Role.USER, // 1
};

const user3 = {
  name: '아무개',
  role: Role.GUEST, // 2
};
```

```ts
// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 10, // 10 할당
  USER, // 11 할당(자동)
  GUEST, // 12 할당(자동)
}

const user1 = {
  name: '이정환',
  role: Role.ADMIN, // 10
};

const user2 = {
  name: '홍길동',
  role: Role.USER, // 11
};

const user3 = {
  name: '아무개',
  role: Role.GUEST, // 12
};
```

enum의 멤버에는 숫자 말고도 문자열 값도 할당할 수 있습니다.
따라서 만약 다음과 같이 국가별 언어를 열거하는 enum이 필요하다면 각 멤버에 문자열 값을 할당하면 됩니다.

```ts
enum Language {
  korean = 'ko',
  english = 'en',
}
```

```ts
enum Role {
  ADMIN,
  USER,
  GUEST,
}

enum Language {
  korean = 'ko',
  english = 'en',
}

const user1 = {
  name: '이정환',
  role: Role.ADMIN, // 0
  language: Language.korean, // "ko"
};
```

enum은 컴파일될 때 다른 타입들 처럼 사라지지 않고 자바스크립트 객체로 변환됩니다. 따라서 우리가 위에서 했던 것 처럼 값으로 사용할 수 있는 것 입니다.
tsc를 이용해 chapter5.ts를 컴파일하고 결과를 살펴보면 우리가 정의한 enum이 다음과 같이 자바스크립트 객체로 변환된 걸 확인할 수 있습니다.

```ts
var Role;
(function (Role) {
  Role[(Role['ADMIN'] = 0)] = 'ADMIN';
  Role[(Role['USER'] = 1)] = 'USER';
  Role[(Role['GUEST'] = 2)] = 'GUEST';
})(Role || (Role = {}));
var Language;
(function (Language) {
  Language['korean'] = 'ko';
  Language['english'] = 'en';
  Language['japanese'] = 'jp';
})(Language || (Language = {}));
```

[우리 팀의 우아한 타입스크립트 컨벤션 정하기 여정
](https://techblog.woowahan.com/9804/#toc-4)

## any와 unknown

### any 타입

any 타입은 타입스크립트에서만 제공되는 특별한 타입으로 타입 검사를 받지 않는 특수한 치트키 타입입니다.

```ts
let anyVar: any = 10;
anyVar = 'hello';

anyVar = true;
anyVar = {};

anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;
```

이렇듯 any 타입은 타입 검사를 받지 않는 타입이므로 모든 타입스크립트의 문법과 규칙으로부터 자유롭지만 그만큼 위험한 타입입니다.
따라서 any 타입을 많이 사용하면 많은 부분에서 타입 검사가 제대로 이루어지지 않기에 위험한 코드가 생산됩니다. 이러면 사실 타입스크립트를 사용하는 이유가 없습니다.
따라서 정말 어쩔 수 없는 경우를 제외하고는 any 타입을 사용하지 않는것을 강력히 권장합니다.

### unknown 타입

unknown 타입은 any 타입과 비슷하지만 보다 안전한 타입입니다.
unknown 타입의 변수는 다음과 같이 어떤 타입의 값이든 다 저장할 수 있습니다.

```ts
let unknownVar: unknown;

unknownVar = '';
unknownVar = 1;
unknownVar = () => {};
```

그러나 반대로는 안됩니다. unknown 타입의 값은 어떤 타입의 변수에도 저장할 수 없습니다.

```ts
let num: number = 10;
(...)

let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

num = unknownVar; // 오류 !
```

또 unknown 타입의 값은 어떤 연산에도 참여할 수 없으며, 어떤 메서드도 사용할 수 없습니다.

```ts
let unknownVar: unknown;
(...)

unknownVar * 2 // 오류!
```

정리하자면 unknown 타입은 독특하게도 변수의 타입으로 정의되면 모든 값을 할당받을 수 있게 되지만, 반대로 unknown 타입의 값은 그 어떤 타입의 변수에도 할당할 수 없고, 모든 연산에 참가할 수 없게 됩니다. 쉽게 정리하면 오직 값을 저장하는 행위밖에 할 수 없게 됩니다.
만약 위와 같이 unknown 타입의 값을 number 타입의 값처럼 취급하고 곱셈 연산을 수행하게 하고 싶다면 다음과 같이 조건문을 이용해 이 값이 number 타입의 값임을 보장해줘야 합니다.

```ts
if (typeof unknownVar === 'number') {
  // 이 조건이 참이된다면 unknownVar는 number 타입으로 볼 수 있음
  unknownVar * 2;
}
```

참고로 타입스크립트에서는 위 코드처럼 조건문을 이용해 특정 값이 특정 타입임을 보장할 수 있게 되면 해당 값의 타입이 자동으로 바뀝니다. 이를 타입 좁히기라고 하며 3섹션에서 자세히 다룹니다.
따라서 특정 변수가 당장 어떤 값을 받게 될 지 모른다면 any 타입으로 정의하는 것 보단 unknown 타입을 이용하는게 훨씬 안전한 선택이 됩니다.

## void와 never

### void

void 타입은 아무런 값도 없음을 의미하는 타입입니다.
보통은 다음과 같이 아무런 값도 반환하지 않는 함수의 반환값 타입을 정의할 때 사용합니다.

```ts
function func2(): void {
  console.log('hello');
}
```

물론 다음과 같이 변수의 타입으로도 당연히 void 타입을 지정할 수 있습니다. 그러나 void 타입의 변수에는 undefiend 이외의 다른 타입의 값은 담을 수 없습니다. 그 이유는 void 타입이 undefiend 타입을 포함하는 타입이기 때문인데 이에 대해서는 3섹션에서 자세히 살펴볼 예정입니다.

```ts
let a: void;
a = undefined;
```

### never

never 타입은 불가능을 의미하는 타입입니다.
보통 다음과 같이 함수가 어떠한 값도 반환할 수 없는 상황일 때 해당 함수의 반환값 타입을 정의할 때 사용됩니다.

```ts
function func3(): never {
  while (true) {}
}
```

무한 루프 외에도 다음과 같이 의도적으로 오류를 발생시키는 함수도 never 타입으로 반환값 타입을 정의할 수 있습니다.

```ts
function func4(): never {
  throw new Error();
}
```

```ts
let anyVar: any;
let a: never;
a = 1; // error
a = null; // error
a = undefined; // error
a = anyVar; // error
```

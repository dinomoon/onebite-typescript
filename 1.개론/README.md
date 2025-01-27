# 타입스크립트 개론

## 필요성

자바스크립트는 원래 웹 브라우저에서 간단한 상호작용을 위해 만들어졌어. 그런데 Node.js가 나오면서 자바스크립트를 어디서든 쓸 수 있게 되었지. 그래서 복잡한 프로그램도 자바스크립트로 만들게 되었는데, 너무 유연해서 문제가 생겼어. 그래서 타입스크립트가 나왔고, 자바스크립트에 타입을 추가해서 더 안전하게 만든 언어야. 타입스크립트는 대규모 프로그램을 안정적으로 만들기 위해 필요한 언어야.

## 점진적 타입 시스템

모든 프로그래밍 언어에는 타입 시스템이 있고이 타입 시스템은 변수의 타입을 언제 결정 하느냐에 따라서 실행 중에 결정하면 동적 타입 시스템 실행 전에 결정하면 정적 타입 시스템이라고 배웠습니다.
자바스크립트 같은 동적 타입 시스템을 채택하는 언어에서는 코드에 타입 관련 오류를 미리 검사할 수 없기 때문에 실행 도중에 예상치 못한 오류가 발생할 수 있는 단점이 있다고 알았습니다.
자바같은 정적 타입 시스템을 채택하는 언어에서는 이런 단점을 해결할 수 있지만 반대로 모든 변수에 일일히 다 타입을 지정해 주어야하는 불편함이 존재한다고 알았습니다.
그리고 마지막으로 타입스크립트는 점진적 타입 시스템을 채택해서 정적 타입 시스템처럼 프로그램 실행 전에 타입을 올바르게 썼는지 타입 검사를 해 타입 안정성을 확보하면서도 동적 타입 시스템처럼 변수에 우리가 일일히 모두 다 타입을 지정해주지 않아도 되는 유연함까지 확보한 독특한 타입 시스템을 갖추고 있는 언어라고 알아보았습니다.

## 동작원리

![image](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F433ae891-3b1e-4b37-891e-035fb213e607%2FUntitled.png?table=block&id=a0fbb98d-722d-4109-b27b-5fe7b7a96c5a&cache=v2)

## Hello TS World

```js
npm init
// Node.js 내장 기능들의 타입 정보를 담고있다.
npm i @types/node
// 타입스크립트 컴파일러 설치 (typescript 패키지에 들어있음)
sudo npm i -g typescript
tsc -v
// ts 컴파일
tsc src/index.ts
// js 실행
node src/index.js
// tsx(typescript execute)(컴파일과 실행 동시에 가능)
sudo npm i -g tsx
tsx -v
tsx src/index.ts
```

## 컴파일러 옵션

```
tsc --init
```

```json
{
  "include": ["src"],
  "compilerOptions": {
    "skipLibCheck": true,
    // "target": "ES5"
    "target": "ESNext",
    // "module": "CommonJS"
    "module": "ESNext",
    "outDir": "dist",
    "strict": true,
    "moduleDetection": "force"
  }
}
```

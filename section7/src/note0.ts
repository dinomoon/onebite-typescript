// generic === general (general hospital종합병원)
// 함수를 정의할 때 타입을 명시하지 않고, 호출할 때 타입을 지정하는 방법
// T: 타입 변수
function func<T>(value: T): T {
  return value;
}

const num = func(10);
const str = func('hello');
const obj = func({ a: 1 });
const bool = func(true);
const arr = func<[number, number, number]>([1, 2, 3]);

// 타입 변수 응용하기
// case1
function swap<T, U>(data: [T, U]): [U, T] {
  return [data[1], data[0]];
}

const result = swap([123, 456]);
console.log(result); // [456, 123]
const result2 = swap(['hello', 'world']);
console.log(result2); // ['world', 'hello']
const result3 = swap([true, false]);
console.log(result3); // [false, true]
const result4 = swap([123, 'hello']);
console.log(result4); // ['hello', 123]

// case2
function returnFirstValue<T>(data: [T, ...unknown[]]): T {
  return data[0];
}

let num = returnFirstValue([1, 2, 3]);
console.log(num); // 1
let str = returnFirstValue(['hello', 'world']);
console.log(str); // 'hello'
let bool = returnFirstValue([true, false]);
console.log(bool); // true
let obj = returnFirstValue([{ a: 1 }, { b: 2 }]);
console.log(obj); // { a: 1 }
let mix = returnFirstValue([1, 'hello', true]);
console.log(mix); // 1

// case3
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let length = getLength('hello');
console.log(length); // 5
let length2 = getLength([1, 2, 3]);
console.log(length2); // 3
let length3 = getLength({ length: 10 });
console.log(length3); // 10
let length4 = getLength({ length: 10, width: 20 });
console.log(length4); // 10
// let length5 = getLength({ width: 20 });

// map, forEach 함수 구현하기
const arr = [1, 2, 3];

function map<T, U>(arr: T[], callback: (value: T) => U): U[] {
  const result = [];
  for (const value of arr) {
    result.push(callback(value));
  }
  return result;
}

console.log(map(arr, (value) => value * 2)); // [2, 4, 6]
console.log(map(arr, (value) => value.toString())); // ['1', '2', '3']

function forEach<T>(arr: T[], callback: (value: T) => void): void {
  for (const value of arr) {
    callback(value);
  }
}

forEach(arr, (value) => console.log(value)); // 1, 2, 3

// 프로미스와 제네릭
const promise = new Promise<number>((resolve, reject) => {
  resolve(1);
  // reject는 반환 타입을 정할 수 없다.
  // reject('Failed');
});
promise
  .then((value) => console.log(value))
  .catch((error) => {
    if (typeof error === 'string') {
      console.log(error);
    }
  });

interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve) => {
    resolve({
      id: 1,
      title: 'TypeScript',
      content: 'Hello, TypeScript',
    });
  });
}

fetchPost().then((post) => {
  console.log(post); // { id: 1, title: 'TypeScript', content: 'Hello, TypeScript' }
});

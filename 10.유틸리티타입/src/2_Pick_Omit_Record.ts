type Pick<T, U extends keyof T> = {
  [key in U]: T[key];
};

type Post = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};
type PostPreview = Pick<Post, 'id' | 'title'>;
// { id: string, title: string }

// type Omit<T, U extends keyof T> = {
//   [key in Exclude<keyof T, U>]: T[key];
// };
type Omit<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>>;

type DetailedPost = Omit<Post, 'createdAt'>;
// { id: string, title: string, content: string }

type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type PageInfo = Record<'title' | 'url', string>;
// { title: string, url: string }

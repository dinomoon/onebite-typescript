// 제네릭 인터페이스 & 제네릭 타입 별칭
interface Items<T> {
  list: T[];
}
const items: Items<string> = {
  list: ['a', 'b', 'c'],
};

interface Map<T> {
  [key: string]: T;
}
const map: Map<number> = {
  one: 1,
  two: 2,
  three: 3,
};

type ItemsType<T> = {
  list: T[];
};
const items2: ItemsType<number> = {
  list: [1, 2, 3],
};

type MapType<T> = {
  [key: string]: T;
};
const map2: MapType<string> = {
  one: 'one',
  two: 'two',
  three: 'three',
};

interface Developer {
  type: string;
  skill: string;
}

interface Student {
  type: string;
  school: number;
}

interface User<T> {
  name: string;
  profile: T;
}

const developer: User<Developer> = {
  name: 'mgchoi24',
  profile: { type: 'developer', skill: 'typescript' },
};

const student: User<Student> = {
  name: 'dinomoon',
  profile: { type: 'student', school: 1 },
};

function gotoSchool(user: User<Student>) {
  console.log(`${user.name} goes to school`);
}

// gotoSchool(developer); // error
gotoSchool(student); // dinomoon goes to school

interface Post {
  title: string;
  content: string;
  author: {
    name: string;
    email: string;
  };
}

function authorLog(author: Post['author']) {
  console.log(`${author.name}(${author.email})`);
}

const post: Post = {
  title: 'TypeScript',
  content: 'TypeScript is a typed superset of JavaScript.',
  author: {
    name: 'mgchoi24',
    email: 'email',
  },
};

authorLog(post.author); // mgchoi24(email)

type PostList = {
  title: string;
  content: string;
  author: {
    name: string;
    email: string;
  };
}[];

function authorLog2(author: PostList[number]['author']) {
  console.log(`${author.name}(${author.email})`);
}

const post2: PostList[number] = {
  title: 'TypeScript',
  content: 'TypeScript is a typed superset of JavaScript.',
  author: {
    name: 'mgchoi24',
    email: 'email',
  },
};

authorLog2(post2.author); // mgchoi24(email)

type Tup = [string, number, boolean];
type String = Tup[0];
type Number = Tup[1];
type Boolean = Tup[2];

interface User {
  name: string;
  age: number;
  email: string;
}

type UserKeys = keyof User; // "name" | "age" | "email"
const key: UserKeys = 'age';

interface User {
  name: string;
  age: number;
  email: string;
}

type PartialUser = Partial<User>;
// type { name?: string; age?: number}
type MyPartialUser<T> = {
  [K in keyof T]?: T[K];
};
type PartialUser2 = MyPartialUser<User>; // type { name?: string; age?: number}

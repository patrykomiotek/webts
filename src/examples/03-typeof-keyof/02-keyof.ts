// interface User {
//   name: string;
//   age: number;
//   email: string;
// }

// type UserKeys = keyof User; // "name" | "age" | "email"
// const key: UserKeys = 'age';

interface User {
  name: string;
  age: number;
  email?: string;
  // email: string | undefined;
}

type PartialUser = Partial<User>;
// type { name?: string; age?: number}
type CustomPartialUser<T> = {
  [K in keyof T]?: T[K];
};
type PartialUser2 = CustomPartialUser<User>; // type { name?: string; age?: number}

interface Config {
  host?: string;
  port?: number;
}

interface Config2 {
  host: string;
  port?: number;
}

type RequiredConfig = Required<Config>;
type CustomRequiredConfig<T> = {
  [K in keyof T]-?: T[K];
};

type Config3 = CustomRequiredConfig<Config2>;

type CustomReadonlyConfig<T> = {
  readonly [K in keyof T]: T[K];
};

interface Person {
  name: string;
  age: number;
  address: string;
}

type NameAndAge = Pick<Person, 'name' | 'age'>;
// Równoważne z: { name: string; age: number; }

type CustomPick<T, K extends keyof T> = {
  // 1) P = name, K = name | age
  // 2) P = age, K = name | age
  // 3) P = address, K = name | age
  [P in keyof T as P extends K ? P : never]: T[P];
};

type MyCustomPick = CustomPick<Person, 'address' | 'age'>;

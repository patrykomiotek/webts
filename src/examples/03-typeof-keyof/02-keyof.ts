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

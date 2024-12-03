export type Expect<T extends true> = T;

export type ExpectTrue<T extends true> = T;
export type ExpectFalse<T extends false> = T;

export type IsTrue<T extends true> = T;
export type IsFalse<T extends false> = T;

// export type Equal<X, Y> =
//   (<T>() => T extends X)
//     extends
//       (<T>() => T extends Y)
//                                 ? true
//                                 : false;

export type Equal<X, Y> = X extends Y ? (Y extends X ? true : false) : false;

// export type Equal<X, Y> =
//   (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
//     ? true
//     : false;

export type NotEqual<X, Y> = true extends Equal<X, Y> ? false : true;
// type NotEqual<X,Y> = true extends EXQ<X, Y> ? false : true;

type Type1 = Expect<Equal<string, number>>;
type Type2 = Expect<Equal<string, string>>;
type Type3 = Expect<Equal<string, { name: string }>>;
type Type4 = Expect<Equal<{ name: string }, { name: string }>>;
type Type5 = Expect<Equal<{ name?: string }, { name: string }>>;
type Type6 = Expect<Equal<boolean, boolean>>;

test('check types', () => {
  type Type6 = Expect<
    Equal<MyCustomRequire<{ name?: string }>, { name: string }>
  >;

  // const type6: Type6;
  // const types = [
  //   type6
  // ]
});

type Product = {
  id: number;
  name: string;
  description: string;
  created_at: string;
  comments: {
    id: number;
    content: string;
    author: {
      id: string;
      nickname: string;
    };
  }[];
};

type OnlyStringProperties<T> = {
  [K in keyof T as T[K] extends string ? K : never]: T[K];
};
type OnlyStrings = OnlyStringProperties<Product>;

type CustomNonNullableProperties<T> = {
  [K in keyof T as T[K] extends null | undefined ? never : K]: T[K];
};

type NullableProduct = {
  id: number;
  name: string;
  description: undefined;
  created_at: null;
};
type NonNullableProduct = CustomNonNullableProperties<NullableProduct>;

type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};
type ProductGetters = Getters<Product>;

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

type DeepReadonlyComments = DeepReadonly<Product>;

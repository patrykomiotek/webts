function getLength<T extends { length: number }>(arg: T) {
  return arg.length;
}

getLength({ length: 123 }); // ok
getLength([1, 2, 4]); // ok
getLength('Webcon'); // ok
getLength({ name: 'lorem' }); // nope

type IsArray<T> = T extends Array<any> ? true : false;

// IsArray<number> = 1

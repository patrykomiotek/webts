/**
 * Zadeklaruj zmienną user z właściwościami username, email i isAdmin.
 * Użyj typeof, aby utworzyć typ UserType na podstawie zmiennej user.
 * Napisz funkcję printUserInfo, która przyjmuje parametr typu
 * UserType i wypisuje informacje o użytkowniku na konsolę.
 */

const user = {
  username: 'joe',
  email: 'joe@wh.com',
  isAdmin: true,
};
type UserType = typeof user;

const printUserInfo = (info: UserType) => {
  console.log(`User: ${info.username}`);
};

// printUserInfo(user);
// printUserInfo({ email: 'test@wp.pl', isAdmin: false, username: 'doe' });

const superAdmin: UserType = {
  email: 'ann@test.com',
  isAdmin: true,
  username: 'ann',
  //
};
printUserInfo(superAdmin);

interface Employee {
  id: string;
  name: string;
  department: string;
  role: string;
}
const employee1: Employee = {
  id: 'uuid',
  name: 'A',
  department: 'B',
  role: 'C',
};

const getProperty = <T>(obj: T, key: keyof T) => {
  return obj[key];
};

getProperty(employee1, 'department');

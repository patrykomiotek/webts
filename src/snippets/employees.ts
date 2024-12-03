interface Employee {
  id: number;
  name: string;
}
interface Manager {
  team: string;
}
type EmployeeOrManager = Employee | Manager;
type Boss = Employee & Manager;

const boss1: EmployeeOrManager = {
  id: 1,
  name: 'Jan',
}; // Employee

const boss2: EmployeeOrManager = {
  // id: 2, // additional
  // name: 'Jan', // additional
  team: 'B',
}; // Manager

const boss3: Boss = {
  id: 3,
  name: 'Marcin',
  team: 'C',
};

const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
};

// config.timeout = 6000;

type Config = typeof config;
//

// type Config = {
//   apiUrl: string;
//   readonly timeout: number;
// };

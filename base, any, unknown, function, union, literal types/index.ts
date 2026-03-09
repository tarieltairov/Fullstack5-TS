// TypeScript - это надмножество JavaScript

// любой JS код - валидный TS
// TypeScript добавляет типы
// код компилируется в обычный JS
// function sum(a: number, b: number): number {
//   return a + b;
// }

// console.log(sum(2, 4));

// ===================================
// TypeScript => tsc(компилятор) => JavaScript => Браузер

// Базовые типы
// const message: string = 'Hello';

// let age: number = 25;
// age = 40;

// let isAdmin: boolean = true;

// let value: null = null;
// let data: undefined = undefined;

// --------------------------------------
// any - отключает типизацию
// почему any плох:
// - ломает автокомплит
// - ломает проверку типов
// - делает TS бесполезным

// let value: any = 5;

// value = 'hello';
// value = true;

// --------------------------------------
// unknown - безопасная версия any

// let value: unknown = 'hello';

// if (typeof value === 'string') {
//   value.toUpperCase();
// }

// ---------------------------------------
// Типизация функций

// function greet(name: string = 'User'): string {
//   return 'Hello ' + name;
// }

// greet(); //Hello Tariel

// const sum = (a: number, b: number): number => {
//   return a + b;
// };

// sum(5, 6);

// ----------------------------------------------
// Массивы

const values: Array<number | string> = [0, 'user'];

// способ 1
const numbers: number[] = [1, 5, 7];

// способ 2
const students: Array<string> = ['фцбвы', 'asmdkasmd', '2'];

// -----------------------------------------------
// Union типы - когда значение может быть разным

let id: number | string | boolean;
id = '10';
id = 10;
id = false;

// ----------------------------------------------

// type ключевое слово (оператор) для создания типа

// Method - это новый созданный нами новый тип

// Literal types - ограничение значений

// type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';

// let method: Method = 'DELETE';

// ---------------------------------------------
// Типизация объектов

// const user: {
//   name: string;
//   age: number;
// } = {
//   name: 'Alex',
//   age: 25,
// };

// Опциональные свойства - ?
// type User = {
//   name: string;
//   age: number;
//   secretWord?: string;
// };

// const user: User = {
//   name: 'Alex',
//   age: 25,
//   secretWord: 'ha-ha-ha',
// };

// const admin: User = {
//   name: 'Admin',
//   age: 100,
//   secretWord: 'ho-ho-ho',
// };

// -----------------------------------------------
// type vs interface

// type User = {
//   name: string;
//   age: number;
// };

// interface Person {
//   name: string;
//   age: number;
// }

// const user: Person = {
//   age: 20,
//   name: 'Tom',
// };

// interface - используется в основоном для описания объектов и классов

// расширение интерфейсов - extends

// interface Test {
//   isOnline?: boolean;
// }
// interface User extends Test {
//   name: string;
// }

// interface Admin extends User {
//   role: string;
// }

// const admin: Admin = {
//   name: 'Alex',
//   role: 'super_user',
//   isOnline: false,
// };

// ---------------------------------
// declaration merging - автоматическое объединение за счет одинаковых названий
// interface User {
//   name: string;
// }
// interface User {
//   age: number;
// }

// const user: User = {
//   age: 29,
//   name: 'Виктор',
// };

// --------------------------------------------------
// type ID = string | number;

// type Gender = 'male' | 'female';

// type FoodStock = number;

// type Food = {
//   title: string;
//   price: number;
//   stock: FoodStock;
// };

// type Coordinates = [number, number];

// type Countries = string[];

// type Role = 'super_user' | 'base_user' | 'moderator' | 0;

// type User = {
//   name: string;
// };

// type Admin = {
//   role: Role;
// };

// type Finaly = User & Admin;

// const user: Finaly = {
//   name: 'Alex',
//   role: 'moderator',
// };
// ------------------------------------------------------

// enum

// enum Role {
//   ADMIN = 'admin',
//   USER = 'user',
//   GUEST = 'guest',
// }

// enum Role {
//   ADMIN,
//   USER,
//   GUEST,
// }

// interface User {
//   name: string;
//   age: number;
//   role: Role;
// }

// const user: User = {
//   age: 30,
//   name: 'Alex',
//   role: Role.ADMIN,
// };
// ----------------------------------------------------------------

// Generics

// function identity(val: any) {
//   return val;
// }

// identity(1);
// identity('sda');

// function identity<T>(value: T): T {
//   return value;
// }

// identity<string>('123');

// identity('asdasd');

// identity<boolean>(false);

// ------------------------------------

// function getFirst<T>(arr: T[]): T {
//   return arr[0];
// }

// getFirst([1, 2, 4]);
// getFirst(['a', 'b']);

// getFirst([1, '2']);

// --------------------------------------

interface ApiResponse<T> {
  status: number;
  data: T;
}

const response: ApiResponse<string> = {
  status: 200,
  data: 'hello',
};

interface User {
  name: string;
  age: number;
}

const response2: ApiResponse<User> = {
  status: 200,
  data: {
    name: 'Alex',
    age: 38,
  },
};

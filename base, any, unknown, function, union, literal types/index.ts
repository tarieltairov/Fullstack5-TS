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

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';

let method: Method = 'DELETE';

// Створіть змінну, яка може містити або рядок, або число (union type)?
// Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable' (literal type).

type totalValue = string | number;
let value: totalValue = "Anna";
let value1: totalValue = 50;

console.log(value, value1);

type Status = "enable" | "disable";
let answer: Status = "enable";
let answer1: Status = "disable";

console.log(answer, answer1);

export {};

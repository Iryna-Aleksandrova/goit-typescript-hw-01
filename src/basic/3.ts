// Створіть змінну, яка може містити або рядок, або число (union type)?
// Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable' (literal type).

let mixedType: string | number;

mixedType = "Anna";
mixedType = 50;

console.log(mixedType);

type EnableOrDisable = "enable" | "disable";
let answer: EnableOrDisable;
answer = "enable";
answer = "disable";

console.log(answer);

export {};

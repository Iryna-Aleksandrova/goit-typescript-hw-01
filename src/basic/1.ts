const age: number = 50;
const username: string = "Max";
const toggle: boolean = true;
const empty: null = null;
const callback = (a: any): any => {
  return 100 + a;
};
// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.

console.log(
  "age:",
  age,
  "username:",
  username,
  "toggle:",
  toggle,
  "empty:",
  empty,
  "callback:",
  callback(100)
);

export {};

// Типізуйте функцію isWeekend яка приймає день тижня з enumDayOfWeek
// і повертає boolean значення, що вказує, чи це день робочий чи вихідний.

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek) => {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday
    ? `${DayOfWeek[day]} is a Weekend`
    : `${DayOfWeek[day]} is a Weekday`;
};

console.log(isWeekend(DayOfWeek.Monday));
console.log(isWeekend(DayOfWeek.Saturday));

export {};

// У вас є тип Form, який містить інформацію про форму, включаючи поле errors.
// Ви хочете створити новий тип Params, який включає всі поля з Form, крім errors.

type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Реалізуйте Params так,
// щоб унеможливити поле 'errors' з типу Form
type Params = Omit<Form, "errors">;

const newForm: Params = {
  email: "alex@icloud.com",
  firstName: "Alex",
  lastName: "Smith",
  phone: "+13055551234",
};

console.log(newForm);

export {};

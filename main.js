// //!Task-1
// function createStudent(
//   firstName,
//   lastName,
//   age,
//   university,
//   faculty,
//   gpa,
//   sayHello
// ) {
//   const user = { education: {} };
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.age = age;
//   user.education["university"] = university;
//   user.education.faculty = faculty;
//   user.education.gpa = gpa;
//   user.sayHello = sayHello;

//   return user;
// }

// let res = createStudent("Nooruz", "Abdykalykov", 24, "ALATOO", "CS", 87);

// console.log(res);

//!Task-2
// const user = {
//   email: "a.@mail.ru",
//   password: "123123",
// };
// const res1 = delete user.email;

// console.log(res1);

// const obj = { name: "Mo", age: 25 };
// delete obj.from;
// console.log(obj.from );

//!Task-3

const user = {
  name: "admin",
  email: "a",
  age: 3,
  password: "121",
};
let getUser = prompt("enter email..");
let sum = 5;
//  user.sum="5"
if (getUser === user.email) {
  let pas = prompt("enter password..");
  if (pas !== user.password) {
    alert("Неверный пароль");
  } else if (getUser === user.email && pas === user.password) {
    let num = +prompt("2+3");
    if (num === sum) {
      alert("Верно! Ваша премия = ${user.sum}");
      user.sum = 5;
    }
  } else if (num !== sum) {
    alert("Неправильно");
  }
} else {
  alert("Извините, такого email не существует");
}
console.log(user);

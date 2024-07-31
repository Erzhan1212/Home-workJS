// //?!Task-1
// const number=[1,2,3,4,5];
// let res=number.map((num)=>{return num**2});
// console.log(res);

//?!Task-2
// const users = [
//   { firstName: "Jhon", lastName: "Obama", age: 34, gender: "male" },
//   { firstName: "Ariana", lastName: "Grande", age: 22, gender: "female" },
//   { firstName: "Naruto", lastName: "Uzumaki", age: 19, gender: "male" },
//   { firstName: "Cristiano", lastName: "Ronaldo", age: 38, gender: "male" },
// ];
// const res1 = users.map((element) => {
//   return {
//     fullName: element.firstName + " " + element.lastName,
//     age: element.age,
//     gender: element.gender,
//   };
// });
// console.log(res1);
//?!Task-3
// const number=[1,2,3,4,5,4,8,34,3,6];
// let res2=number.filter((element)=>{return element %2===0 ; });
// console.log(res2);
// //?!Task-4
// const users = [
//     { firstName: "Jhon", lastName: "Obama", age: 34, gender: "male" },
//     { firstName: "Ariana", lastName: "Grande", age: 22, gender: "female" },
//     { firstName: "Naruto", lastName: "Uzumaki", age: 19, gender: "male" },
//     {firstName: "Kakashi", lastName: "Hatake", age: 28, gender: "male"  },
//     {firstName: "Sakura", lastName: "Chan", age: 18, gender: "female" }
//   ];
//   let res3=users.filter((element)=>{return element.gender==="female"});
//   console.log(res3);

// //?!Task-5
// const number=[1,2,3,4,5,4,8,34,3,6];

// let res4=number.reduce((a,b)=> {return a+b});
// console.log(res4);

// //?!Task-6
// const number = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];
// let start = 1;
// let end = 34;
// let sum=0

// let res5=number.forEach((num) => {
//   if (num >= start && num <= end && num % 2 !== 0) {
//     console.log(num);
//     sum+=num;
//   }

// });

// console.log(sum);


// //?!Task-7

// const users = [
//          { firstName: "Jhon", lastName: "Obama", age: 34, gender: "male" },
//          { firstName: "Ariana", lastName: "Grande", age: 22, gender: "female" },
//         { firstName: "Naruto", lastName: "Uzumaki", age: 19, gender: "male" },
//          {firstName: "Kakashi", lastName: "Hatake", age: 28, gender: "male"  },
//       {firstName: "Sakura", lastName: "Chan", age: 18, gender: "female" }
//       ];

//       let res6=users.find((element)=> {return element.firstName==="Naruto"});
//       console.log(res6);

// //?!Task-8

// const number = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];

// let res7=number.findIndex((element)=> element===34
// );
// console.log(res7);
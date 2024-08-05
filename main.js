// //?!Task-1
// const computers=[
//     {
//         title:"Macbook air M1",
//         price: 85000,
//     },
//     {
//         title:"Dell",
//         price: 65000,
//     },
//     {
//         title:"Asus zenBook",
//         price: 40000,
//     },
//     {
//         title:"Acer Aspire ",
//         price: 45000,
//     },
//     {
//         title:"Macbook Pro",
//         price: 100000,
//     }
// ]

// computers.sort((prev, next)=>prev.price-next.price);
// console.log(computers);
// computers.sort((prev, next)=>next.price-prev.price);
// console.log(computers);

// //?!Task-2
// const grades=[4,4,4,5,3,5,3,3,2,5,1];
// grades.sort((prev,next)=>prev-next);
// console.log(grades);
// grades.sort((prev,next)=>next -prev);
// console.log(grades);

// //?!Task-3
// const fruits=["strawbery", "mango", "watermelon","grapes", "lemon", "kiwi"];
// let res=fruits.sort();
// console.log(res);

// let res1=res.reverse()
// console.log(res1);

// //?!Task-4
// const numbers=[4,123,-5,6,100];
// console.log(Math.min(...numbers));
// console.log(Math.max(...numbers));
// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] > numbers[0]){
//         numbers[0] = numbers[i];
//     }

// }
// console.log(numbers[0]);
// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] < numbers[0]){
//         numbers[0] = numbers[i];
//     }

// }
// console.log(numbers[0]);

// //?!Task-6
// const instagramUser = {
//   userName: "Uzumaki123",
//   email: "user@gmail",
//   password: "123123",
//   avatarUrl: "https://www.google.com/search?q=cat",
//   followers: "1m",
//   follwing: 512,
//   title: "Never Give up",
// };

// for (const property in instagramUser) {
//   console.log(`${property}`);

//   ;
// }
// console.log('');

// for (const property in instagramUser) {
//   console.log(` ${instagramUser[property]}`);
// }

// //!task-7
// const computers=[
//         {
//             title:"Macbook air M1",
//             price: 85000,
//         },
//         {
//             title:"Dell",
//             price: 65000,
//         },
//         {
//             title:"Asus zenBook",
//             price: 40000,
//         },
//         {
//             title:"Acer Aspire ",
//             price: 45000,
//         },
//         {
//             title:"Macbook Pro",
//             price: 100000,
//         }
//     ];
//     let sum=0;
//     for(let element of computers){
//         sum+=element.price;

//     };
//     console.log(sum);

// // //?!Task-8
// const instagramUser = {
//   userName: "Uzumaki123",
//   email: "user@gmail",
//   password: "123123",
//   avatarUrl: "https://www.google.com/search?q=cat",
//   followers: "1m",
//   follwing: 512,
//   title: "Never Give up",
// };

// for (const keys in instagramUser) {
//   console.log(`${keys}`);
// }
// console.log("");

// for (const property in instagramUser) {
//   console.log(` ${instagramUser[property]}`);
// }
// console.log("");

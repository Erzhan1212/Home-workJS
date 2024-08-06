//! Task-1
// const posts={
//     name:"posts",
//     isLoading: true,
//     byId:{
//         post1:{
//             id: "post1",
//             author: "user1",
//             bpdy: "......",
//             comments:["comment1", "comment2"],
//         },
//         post2:{
//             id: "post2",
//             author: "user2",
//             bpdy: "......",
//             comments:["comment4", "comment4","comment5"],

//         },
//     },
//     allIds:["post1","post2"],

// };

// const copyOfPosts={...posts};
// console.log(copyOfPosts);

// //! Task-2
// const posts = {
//   name: "posts",
//   isLoading: true,
//   byId: {
//     post1: {
//       id: "post1",
//       author: "user1",
//       bpdy: "......",
//       comments: ["comment1", "comment2"],
//     },
//     post2: {
//       id: "post2",
//       author: "user2",
//       bpdy: "......",
//       comments: ["comment3", "comment4", "comment5"],
//     },
//   },
//   allIds: ["post1", "post2"],
// };
// console.log(posts);

// const copyOfPosts = JSON.parse(JSON.stringify({...posts}));
// console.log(copyOfPosts);

// //!Task-3
// const post = {
//   name: "posts",
//   isLoading: true,
//   id: "post1",
//   author: "user1",
//   bpdy: "......",
//   comments: ["comment1", "comment2"],
// };

// const { comments: color, hello, ...rest } = post;
// console.log(color); //* В консоли выйдет значения свойства comments;
// console.log(hello); //*В консоли выйдет значени undefined;
// console.log(rest); //*В консоли выйдет новый объект без последних свойствой и его значений объекта post;

//!Task-4
const comments = ["comment3", "comment4", "comment5", "comment1"];

const [undefined, comment1, ...rest] = comments;
console.log(undefined);
console.log(rest);
console.log(comment1);
//* `Везде ощибка(//*Uncaught SyntaxError: Identifier 'undefined'
//*has already been declared(Неперехваченная ошибка синтаксиса:
//*  идентификатор 'undefined' уже объявлен)``;

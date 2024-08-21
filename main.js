const BASE_URL = "https://jsonplaceholder.typicode.com";

// const getPhotos = async (limit) => {
//   const response = await fetch(`${BASE_URL}/photos?_limit=${limit}`);
//   const data = await response.json();
//   console.log(data);
//   const array = [
//     "https://shorturl.at/oX5y1",
//     "https://shorturl.at/Fx8sZ",
//     "https://shorturl.at/I8nI9",
//     "https://shorturl.at/bccsW",
//   ];
//   const currentData = data.map((element, i) => {
//     return {
//       ...element,
//       thumbnailUrl: array[i],
//     };
//   });

//   currentData.map((user) => {
//     const ul = document.getElementById("list");
//     const div_item = document.createElement("div");
//     div_item.id = "div-item";
//     const divItem = document.createElement("div");
//     divItem.id = "div";
//     const li = document.createElement("li");
//     li.id = "list-item";
//     const pTag = document.createElement("p");
//     pTag.id = "pTag";
//     pTag.innerHTML = user.title;
//     const divContainer = document.createElement("div");
//     divContainer.id = "container";
//     const img = document.createElement("img");
//     img.src = user.thumbnailUrl;
//     div_item.append(divItem);
//     divContainer.append(img, pTag, div_item);
//     li.append(divContainer);
//     ul.appendChild(li);
//   });
// };
// getPhotos(4);
// setTimeout(() => {
//   getPhotos();
// }, 8000);

// function loading() {
//   let time = 10;
//   const ul = document.getElementById("ul");

//   const hText = document.createElement("h1");
//   hText.textContent = "Здесь пока нет фото";
//   hText.id = "h-text";
//   ul.append(hText)

//   let interval = setInterval(() => {
//     if (time === 0) {
//       clearInterval(interval);
//       ul.textContent = "";
//     }
//     time--;
//   }, 700);
// };
// loading()
// //!Task2
const getUsers = async (limit) => {
  try {
    const response = await fetch(`${BASE_URL}/users?_limit=${limit}`);
     const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
getUsers(4)


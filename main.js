const BASE_URL = "https://jsonplaceholder.typicode.com";

const getPhotos = async (limit) => {
  const response = await fetch(`${BASE_URL}/photos?_limit=${limit}`);
  const data = await response.json();
  console.log(data);
  const array = [
    "https://shorturl.at/oX5y1",
    "https://shorturl.at/Fx8sZ",
    "https://shorturl.at/I8nI9",
    "https://shorturl.at/D0JYJ",
  ];
  const currentData = data.map((element, i) => {
    return {
      ...element,
      thumbnailUrl: array[i],
    };
  });

  currentData.map((user) => {
    const ul = document.getElementById("list");
    const div_item = document.createElement("div");
    div_item.id = "div-item";
    const divItem = document.createElement("div");
    divItem.id = "div";
    const li = document.createElement("li");
    li.id = "list-item";
    const pTag = document.createElement("p");
    pTag.id = "pTag";
    pTag.innerHTML = user.title;
    const divContainer = document.createElement("div");
    divContainer.id = "container";
    const img = document.createElement("img");
    img.src = user.thumbnailUrl;
    div_item.append(divItem);
    divContainer.append(img, pTag, div_item);
    li.append(divContainer);
    ul.appendChild(li);
  });
};

setTimeout(() => {
  getPhotos(4);
}, 5000);

const strelka = () => {
  let time = 10;
  const ul = document.getElementById("list");
  const main=document.getElementById("main");
  const hTg=document.createElement("h1");
  hTg.className="h-text";
  hTg.textContent="Здесь пока нет фото"
main.append(hTg)
  let interval = setInterval(() => {
    if (time === 0) {
      clearInterval(interval);
      ul.textContent = "";
    }
    time--;
  });
};
console.log(strelka());

// // //!Task2
// const getUsers = async (limit) => {
//     const response = await fetch(`${BASE_URL}/users?_limit=${limit}`);
//      const data = await response.json();
//     console.log(data);
    
// const array1=[
//   "https://shorturl.at/5FnYB",
//   "https://shorturl.at/8Jijn",
//   "https://shorturl.at/fyIMl",
//   "https://shorturl.at/AwyoB",
// ];
// const currentData = data.map((element, i) => {
//       return {
//         ...element,
//         thumbnailUrl: array1[i],
//       };
//     });
 
//     currentData.map((item)=>{
//       const ul=document.getElementById("ul");
//       const li=document.createElement("li");
//       li.className='li';

//       const container=document.createElement("div");
//       container.className="container";

//       const image=document.createElement("img");
//       image.src=item.thumbnailUrl;
//       image.className="images";

//       const hName=document.createElement("a");
//       hName.href="#"
//       hName.className="name";
//       hName.textContent=item.name;

//       const aPhone=document.createElement("a");
//       aPhone.className="phone";
//       aPhone.href="#"
//       aPhone.textContent=item.phone;
//       const aCompany=document.createElement("a");
//       aCompany.className="company";
//       aCompany.href="#"
//       aCompany.textContent=item.company.name

//       const aEmail=document.createElement("a");
//       aEmail.className="email";
//       aEmail.textContent=item.email
//       aEmail.href="#"

//       const divItem=document.createElement("div");
//       divItem.className="div-item";

//       const div=document.createElement("div");
//       div.className="div";
// container.append(image, hName, aCompany, aPhone, aEmail,divItem);
// li.appendChild(container);
// ul.appendChild(li)
//     })}





// setTimeout(() => {
//     getUsers(4);
//   }, 5000);
  
//   const strelka = () => {
//     let time = 10;
//     const ul = document.getElementById("ul-list");
//     const main=document.getElementById("main")
//     const hTg=document.createElement("h1");
//     hTg.className="hTag";
//     hTg.textContent="Здесь пока нет фото"
//   main.append(hTg)
//     let interval = setInterval(() => {
//       if (time === 0) {
//         clearInterval(interval);
//         ul.textContent = "";
//       }
//       time--;
//     });
//   };
//   console.log(strelka());



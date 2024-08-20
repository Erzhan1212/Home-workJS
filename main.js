const BASE_URL = "https://jsonplaceholder.typicode.com";

const getPhotos = async (limit) => {
  try {
    const response = await fetch(`${BASE_URL}/photos?_limit=${limit}`);
    const data = await response.json();
    console.log(data);
    renderPhotos(data);
    const array= [
      "https://shorturl.at/oX5y1",
      "https://shorturl.at/Fx8sZ",
      "https://shorturl.at/I8nI9",
      "https://shorturl.at/bccsW",
    ];

    
  } catch (error) {}
};
getPhotos(4);

const renderPhotos = (usersArray = []) => {
  usersArray.map((user) => {
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
    img.src="https://shorturl.at/oX5y1"
    div_item.append(divItem);
    divContainer.append(img, pTag, div_item);
    li.append(divContainer);
    ul.appendChild(li);
   
  });
};

setTimeout(() => {
  getPhotos();
}, 5000);

function loading() {
  let time = 8000;
  const ul = document.getElementById("list");

  const hText = document.getElementById("h-text");

  ul.appendChild(hText);

  let interval = setInterval(() => {
    if (time === 0) {
      clearInterval(interval);
      ul.textContent = "";
    }
    time--;
  },10000 );
}
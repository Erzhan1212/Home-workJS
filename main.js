//!Task-1.1

// const h2Tag=document.getElementById("main-heading").style.fontSize="3em";
// const h2=document.getElementById("main-heading");
// h2.textContent="Popular poducts";
// const res=document.querySelector("aside").remove();
// console.log(res);
// const res1=document.getElementsByClassName("small heading");

// res1.classList.remove('heading');

//!Task-2
const user = [
  {
    icon: "https://shorturl.at/npK2U",
    title: "Twitter",
    description: `   "Твиттер"- американский сервис микроблогов и социальная сеть, в
          которой пользователи публикуют сообщения, извустные как "твит", и
          взаимодействуют с ними`,
    link: "https://web.telegram.org/a/",
  },
];
user.forEach((element) => {
  const list = document.getElementById("list");
  const listItem = document.createElement("li");
  listItem.className = "list_item";
  const section = document.createElement("section");
  section.className = "section";
  const divIcon = document.createElement("div");
  divIcon.className = "icon";
  const image = document.createElement("img");
  image.className = "icon_twit";
  image.src = "https://shorturl.at/npK2U";
  const twiter = document.createElement("h1");
  twiter.className = "twit";
  twiter.textContent = element.title;
  const page = document.createElement("p");
  page.className = "twitpage";
  page.textContent = element.description;
  const button = document.createElement("button");
  button.className = "twit-btn";
  button.href = element.link;
  button.textContent = "Read more";
  const aTag = document.createElement("a");
  aTag.href = element.link;
  divIcon.append(image);
  button.append(aTag);
  section.append(divIcon, twiter, page, button);    
  listItem.append(section);
  list.append(listItem);

    
});

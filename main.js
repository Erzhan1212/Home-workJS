
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("input").value.trim();
  if (input.length === 0) {
    alert("fill the input");
  } else {
    const li = document.createElement("li");
    li.className = "list_item";
    const button = document.createElement("button");
    const ul = document.getElementById("list");
    button.textContent = "delete";
    button.className='list_btn'
    li.append(input, button);
  
    ul.appendChild(li);
    button.addEventListener("click", () => {
      button.parentElement.remove();
    });
    form.reset();
  }
});
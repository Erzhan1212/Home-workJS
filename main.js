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
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "list_input";
    const ul = document.getElementById("list");
    const span = document.createElement("span");
    span.className = "span";
    button.textContent = "delete";
    button.className = "list_btn";
    span.append(input)
    li.append(span,  checkbox,button);
    ul.appendChild(li);
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        span.style.textDecoration = "line-through";
      } else {
        span.style.textDecoration = "none";
      }
    });

    button.addEventListener("click", () => {
    
       
     if( confirm("Do you want to delet?")){  button.parentElement.remove();}
     return false
   
    
    });
    form.reset();
  }
});

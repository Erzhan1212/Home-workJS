const BASE_URL = "https://45220a845ac73b32.mokky.dev";

const input = document.getElementById("input");
const form = document.getElementById("form");
const div = document.getElementById("div");

form.addEventListener("click", (e) => {
  e.preventDefault();
  const todoValue = input.value.trim();
  if (todoValue!=="") {
    const newTodo = {
      id: Date.now().toString(),
      title: todoValue,
      completed: false,
    };
    input.value = "";
    postTodo(newTodo);
  }else{alert("Can't be empty")}
});

const postTodo = async (objectTodo) => {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objectTodo),
    });
    const data = await response.json();
    console.log(data);
    getTodos();
  } catch (error) {
    console.log(error);
  }
};

const getTodos = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users `);
    const data = await response.json();

    console.log();
    renderTodo(data);
  } catch (error) {
    console.log(error);
  }
};

const renderTodo = (newArray) => {
  div.innerHTML = "";
  newArray.map((users) => {
    const pTag = document.createElement("p");
    pTag.textContent = users.title;
    pTag.className='text';

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className="buttunDe"

    const updateButton = document.createElement("button");
    updateButton.textContent = "Update";
    updateButton.className='buttonUp'
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className='check';
    const complInput  = document.createElement("input");
    complInput.checked=users.completed
complInput.className='check';
    deleteButton.addEventListener("click", () => {
      if( confirm("Do you want to delet?")){  deleteTodo(users.id)  
        localStorage.removeItem("obj"); }else{ return false}
      });
    updateButton.addEventListener("click", () =>
      updateTodo(users.id, newArray)
    );
complInput.addEventListener("click", () => {
      completedTodo(users.id, users.completed);
    
    });
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        pTag.style.textDecoration = "line-through";
        pTag.style.textDecorationColor = "red";
        localStorage.setItem("obj", JSON.stringify(users));
        const newObjecter = JSON.parse(localStorage.getItem("obj"));
        console.log(newObjecter);
        
      }
       else {
        pTag.style.textDecoration = "none";
      }

    });
    const box=document.createElement('div')
   

    box.append(deleteButton, updateButton, checkbox);
    pTag.appendChild(box)
    div.appendChild(pTag);
  });
};

const deleteTodo = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
      method: "DELETE",
    });
    if (response.status === 200) {
      console.log("Request is succesfull");
    }
    getTodos();
  } catch (error) {
    console.log(error);
  }
};
const updateTodo = async (id, newTodos) => {
  const newFind = newTodos.find((item) => item.id === id);
  if (newFind !== undefined) {
    input.value = newFind.title;
    input.focus();
  }
  try {
    await fetch(`${BASE_URL}/users/${id}`, {
      method: "DELETE",
    });

    getTodos();
  } catch (error) {
    console.log(error);
  }
};
getTodos();

const completedTodo = async (id, completed) => {
  try {
    const response = await fetch(`${BASE_URL}/items/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !completed,
      }),
    });
    getTodos();
  } catch (error) {
    console.log(error);
  }
};



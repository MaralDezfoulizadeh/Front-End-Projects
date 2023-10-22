window.onload = function () {
  let userList = document.querySelector(".todoBox ul");
  let userInput = document.querySelector(".inputBox");
  let button = document.querySelector(".todoBox .addToList");
  button.addEventListener("click", function () {
    if (userInput.value === "") {
      alert("error! input is empty");
    } else {
      let newToDo = document.createElement("li");
      let todoContent = document.createTextNode(userInput.value);
      newToDo.appendChild(todoContent);
      userList.appendChild(newToDo);
      userInput.value = "";
    }
  });
  document.addEventListener(
    "keydown",
    (event) => {
      var name = event.key;
      var code = event.code;
      if (name === "Enter") {
        if (userInput.value === "") {
          alert("error! input is empty");
        } else {
          const newToDo = document.createElement("li");
          const todoContent = document.createTextNode(userInput.value);
          newToDo.appendChild(todoContent);
          userList.appendChild(newToDo);
          userInput.value = "";
        }
      }
    },
    false
  );
};

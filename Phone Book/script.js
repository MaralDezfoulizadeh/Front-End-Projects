//selectors
//name input
const fname = document.getElementById("nameInput");
//number input
const number = document.getElementById("numberInput");
//select
let selectedOption;
const selection_box = document.getElementById("optionSelector");
//button
const button = document.getElementById("add");
//items div
const item_box = document.querySelector(".itemList");
//filter box
const filter = document.querySelector(".filterselector");
const filterOption = document.getElementById("filter");

button.addEventListener("click", addItem);
filterOption.addEventListener("click", filterItems);
document.addEventListener("DOMContentLoaded", getContacts);

function addItem(event) {
  const item = document.createElement("li");
  item.classList.add(selection_box.options[selection_box.selectedIndex].value);
  const item_ul = document.createElement("ul");
  const item_li1 = document.createElement("li");
  const item_li2 = document.createElement("li");
  const item_li3 = document.createElement("li");
  const delete_btn = document.createElement("button");
  delete_btn.addEventListener("click", deleteItem);
  event.preventDefault();
  item_box.classList.add("item_box");
  item.classList.add("item");
  item_li1.classList.add("item_li");
  item_li2.classList.add("item_li");
  item_li3.classList.add("item_li");
  delete_btn.classList.add("delete");
  item_li1.innerText = fname.value;
  item_li2.innerText = number.value;
  item_li3.innerText =
    selection_box.options[selection_box.selectedIndex].innerText;
  delete_btn.innerHTML = `&#128465`;
  item_box.appendChild(item);
  item.appendChild(item_ul);
  item_ul.appendChild(item_li1);
  item_ul.appendChild(item_li2);
  item_ul.appendChild(item_li3);
  item_ul.appendChild(delete_btn);
  filter.style.display = "flex";
  saveToLS({
    name: fname.value,
    number: number.value,
    numberType: selection_box.options[selection_box.selectedIndex].innerText,
  });
}

function saveToLS(contact) {
  let contacts;
  if (localStorage.getItem("contacts") === null) {
    contacts = [];
  } else {
    contacts = JSON.parse(localStorage.getItem("contacts"));
  }
  contacts.push(contact);
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

function deleteItem(event) {
  const item = event.target;
  if (item.classList[0] === "delete") {
    const box = item.parentElement;
    const big_Box = box.parentElement;
    big_Box.classList.add("delete_animation");
    setTimeout(() => {
      big_Box.remove();
    }, 500);
    deleteFromLS(big_Box);
  }
}

function filterItems(event) {
  //console.log(event.target.value);
  const contacts = item_box.childNodes;
  //console.log(contacts);
  contacts.forEach(function (contact) {
    switch (event.target.value) {
      case "2":
        contact.style.display = "flex";
        break;
      case "1":
        if (contact.classList.contains("1")) {
          contact.style.display = "flex";
        } else {
          contact.style.display = "none";
        }
        break;
      case "0":
        if (contact.classList.contains("0")) {
          contact.style.display = "flex";
        } else {
          contact.style.display = "none";
        }
        break;
      default:
        break;
    }
  });
}

function deleteFromLS(contact) {
  //console.log(contact);
  let contacts;
  if (localStorage.getItem("contacts") === null) {
    contacts = [];
  } else {
    contacts = JSON.parse(localStorage.getItem("contacts"));
  }
  const result = contact.children[0].innerHTML.split("</li>");
  const key = result[1].match(/\d/g).join("");
  const index = contacts.findIndex((item) => item.number === key);
  console.log(contacts);
  contacts.splice(index, 1);
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

function getContacts() {
  let contacts;
  if (localStorage.getItem("contacts") === null) {
    contacts = [];
  } else {
    contacts = JSON.parse(localStorage.getItem("contacts"));
  }
  contacts.forEach(function (contact) {
    const item = document.createElement("li");
    item.classList.add(
      selection_box.options[selection_box.selectedIndex].value
    );
    const item_ul = document.createElement("ul");
    const item_li1 = document.createElement("li");
    const item_li2 = document.createElement("li");
    const item_li3 = document.createElement("li");
    const delete_btn = document.createElement("button");
    delete_btn.addEventListener("click", deleteItem);
    item_box.classList.add("item_box");
    item.classList.add("item");
    item_li1.classList.add("item_li");
    item_li2.classList.add("item_li");
    item_li3.classList.add("item_li");
    delete_btn.classList.add("delete");
    item_li1.innerText = contact.name;
    item_li2.innerText = contact.number;
    item_li3.innerText = contact.numberType;
    delete_btn.innerHTML = `&#128465`;
    item_box.appendChild(item);
    item.appendChild(item_ul);
    item_ul.appendChild(item_li1);
    item_ul.appendChild(item_li2);
    item_ul.appendChild(item_li3);
    item_ul.appendChild(delete_btn);
    filter.style.display = "flex";
  });
}

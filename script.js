const formEl = document.querySelector("#form1");
const inputEl = document.querySelector(".input1");
const ulEl = document.querySelector("#ul1");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  adding();
});

function adding() {
  let newValue = inputEl.value;
  let newLi = document.createElement("li");
  newLi.innerText = newValue;
  ulEl.appendChild(newLi);
  inputEl.value = "";
  let checkbtn = document.createElement("div");
  checkbtn.innerHTML = `<i class="fa-solid fa-square-check"></i>`;
  newLi.appendChild(checkbtn);

  let trashbtn = document.createElement("div");
  trashbtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  newLi.appendChild(trashbtn);

  checkbtn.addEventListener("click", () => {
    newLi.classList.toggle("checked");
  });

  trashbtn.addEventListener("click", () => {
    newLi.remove();
  });
}

`use strict`;
// TO DO LIST
let inptel = document.getElementById(`inptel`);
let additem = document.getElementById(`additem`);
let ulResult = document.getElementById(`ulElement`);
let clearAll = document.getElementById(`clearAll`);

additem.addEventListener(`click`, function () {
  let inpvalue = inptel.value;
  if (inpvalue === ``) return;
  additem;
  let li = document.createElement(`li`);
  let iconDelete = document.createElement(`i`);
  iconDelete.style.padding = `10px`;
  iconDelete.classList = `fa-solid fa-delete-left`;
  iconDelete.addEventListener(`click`, function () {
    li.remove();
  });
  li.textContent = inpvalue;
  ulResult.appendChild(li);
  li.appendChild(iconDelete);
  inptel.value = ``;
});
clearAll.addEventListener(`click`, function () {
  ulResult.innerHTML = ``;
});

additem.addEventListener(`mouseover`, function (a) {
  a.target.style.backgroundColor = `green`;
});
additem.addEventListener(`mouseleave`, function (b) {
  b.target.style.backgroundColor = `yellow`;
});

clearAll.addEventListener(`mouseover`, function (c) {
  c.target.style.backgroundColor = `red`;
});
clearAll.addEventListener(`mouseout`, function (cc) {
  cc.target.style.backgroundColor = `white`;
});

inptel.addEventListener(`keypress`, function (d) {
  if (d.key === `Enter`) {
    d.preventDefault();
    additem.click();
  }
});

// BRGBAR

let menu = document.getElementById(`menu`);
let burger = document.getElementById(`burger`);
let bgbar = document.getElementById(`bgbar`);
burger.addEventListener(`mouseover`, function () {
  let li = document.createElement(`li`);
  li.innerText = `Navigation`;
  menu.appendChild(li);
  bgbar.style.width = `150px`;
  bgbar.style.height = `150px`;
  bgbar.style.backgroundColor = `gold`;
  bgbar.style.borderRadius = `15px`;
});

burger.addEventListener(`mouseout`, function () {
  menu.innerHTML = ``;
  bgbar.style.backgroundColor = `white`;
});

let searchValue = document.getElementById("searchValue");
let searchBtn = document.getElementById("searchBtn");
let card = document.getElementById("card");
let load = document.getElementById("load");

let dataCard;

hide(load);
hide(card);

function getCard() {
  show(load);
  hide(card);

  setTimeout(() => {
    show(card);
    hide(load);
  }, 2500);
}

function hide(obj) {
  obj.classList.add("d-none");
}

function show(obj) {
  obj.classList.remove("d-none");
}

let searchValue = document.getElementById("searchValue");
let searchBtn = document.getElementById("searchBtn");
let card = document.getElementById("card");
let load = document.getElementById("load");

let dataCard;

hide(load);
hide(card);

async function getCard() {
  show(load);
  hide(card);

  let response = await fetch(
    `https://api.github.com/users/${searchValue.value}`
  );

  hide(load);

  dataCard = await response.json();

  if (response.ok) {
    generateCard();
    show(card);
  } else alert(dataCard.message);
}

function generateCard() {
  card.innerHTML = `<img src=${dataCard.avatar_url} /><h1>${dataCard.login}</h1>`;
  if (dataCard.bio != null) card.innerHTML += `<p>${dataCard.bio}</p>`;

  let nav = ``;
  if (dataCard.location != null)
    nav += `<div><i class="fas fa-map-marked"></i><span>${dataCard.location}</span></div>`;
  nav += `<div><i class="fas fa-heart"></i><span>${dataCard.followers}</span></div>`;
  nav += `<div><i class="fas fa-star"></i><span>${dataCard.following}</span></div>`;
  nav += `<div><i class="fas fa-books"></i><span>${dataCard.public_repos}</span></div>`;

  card.innerHTML += `<nav>${nav}</nav>`;
}

function hide(obj) {
  obj.classList.add("d-none");
}

function show(obj) {
  obj.classList.remove("d-none");
}

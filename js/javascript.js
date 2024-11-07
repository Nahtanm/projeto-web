// Elementos

const main = document.querySelector("main");
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");
const formControl = document.querySelectorAll(".form-control");
const filterSelect = document.querySelector("#filter-select");
const slideBarImagen = document.querySelector(".slide-bar img");
const slide = document.querySelector(".slide-bar");
const boxGame = document.querySelectorAll(".box-game");
const btnAbrir = document.querySelector("#btn-abrir ");
const btnFechar = document.querySelector("#btn-fechar i");
const menuMobile = document.querySelector(".menu-mobile");
const telaAux = document.querySelector(".tela-aux");

const imagens = [
  "imagens/dragons.jpg",
  "imagens/readdead.jpg",
  "imagens/thewitcher.jpg",
];
let slideAtual = 0;

// Funções
const slideBar = () => {
  slideAtual = (slideAtual + 1) % 3;

  slideBarImagen.src = imagens[slideAtual];
};

setInterval(slideBar, 3000);

const getSearch = (searchValeu) => {
  let titleValue;

  boxGame.forEach((box) => {
    titleValue = box.querySelector("h3").innerText.toLowerCase();

    const normalSearch = searchValeu.toLowerCase();

    box.style.display = "flex";
    if (!titleValue.includes(normalSearch)) {
      box.style.display = "none";
    }
  });
};

const filters = (box, filtro) => {
  box.classList.contains(filtro)
    ? (box.style.display = "flex")
    : (box.style.display = "none");
};

const filter = (filterValue) => {
  switch (filterValue) {
    case "all":
      slide.style.display = "flex";
      boxGame.forEach((box) => (box.style.display = "flex"));
      break;
    case "rpg":
      slide.style.display = "none";
      boxGame.forEach((box) => filters(box, "rpg"));
      break;
    case "acao":
      slide.style.display = "none";
      boxGame.forEach((box) => filters(box, "acao"));
      break;
    case "soulslike":
      slide.style.display = "none";
      boxGame.forEach((box) => filters(box, "soulslike"));
      break;
    case "mundo-aberto":
      slide.style.display = "none";
      boxGame.forEach((box) => filters(box, "mundo-aberto"));
      break;
  }
};

// Eventos
searchInput.addEventListener("keyup", (e) => {
  e.preventDefault();
  const searchValeu = searchInput.value;

  if (!searchValeu) {
    slide.style.display = "flex";
    filter(filterSelect.value);
  } else {
    getSearch(searchValeu);
    slide.style.display = "none";
  }
});

filterSelect.addEventListener("change", (e) => {
  const filterValue = e.target.value;

  e.preventDefault();

  filter(filterValue);
});

btnAbrir.addEventListener("click", (e)=>{
  e.preventDefault()
  console.log("teste")
  menuMobile.classList.add("abrir")
  telaAux.classList.add("tela");
})

btnFechar.addEventListener("click", (e) =>{
  e.preventDefault()
  menuMobile.classList.remove("abrir")
  telaAux.classList.remove("tela");
})

telaAux.addEventListener("click", (e) =>{
  menuMobile.classList.remove("abrir")
  telaAux.classList.remove("tela");
});

// IntersectionObeserver
const myObserve_1 = new IntersectionObserver((entries) => {
  entries.forEach((element) => {
    if (element.isIntersecting) {
      element.target.classList.add("show");
    } else {
      element.target.classList.remove("show");
    }
  });
});

formControl.forEach((box) => {
  myObserve_1.observe(box);
});

boxGame.forEach((box) => {
  myObserve_1.observe(box);
});

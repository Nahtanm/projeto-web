// Elementos
const btnImage = document.querySelectorAll(".box-imagens li");
const image = document.querySelector("#poster-container img");
const main = document.querySelector("main");
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");
const boxGame = document.querySelectorAll(".box-game");
const formControl = document.querySelectorAll(".form-control");

// Funções
const getSearch = (searchValeu) => {
  let titleValue;
  boxGame.forEach((box) => {
    titleValue = box.querySelector("h3").innerText.toLowerCase();

    const normalSearch = searchValeu.toLowerCase();

    box.classList.remove("hide");
    if (!titleValue.includes(normalSearch)) {
      box.classList.add("hide");
    }
  });
};

// Eventos
btnImage.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btnImage.forEach((btn) => {
      btn.querySelector(".box-imagens img").classList.remove("selected");
    });

    const id = btn.getAttribute("id");

    btn.querySelector(".box-imagens img").classList.add("selected");
    image.setAttribute("src", `foto_${id}.jpg`);
  });
});

searchInput.addEventListener("keyup", (e) => {
  e.preventDefault();
  const searchValeu = searchInput.value;

  getSearch(searchValeu);
});

// ScrolReveal
// window.sr = ScrollReveal({reset: true});

// sr.reveal('.box-game',{duration: 1000});
// sr.reveal('header, .box-search',{duration:1000})
// sr.reveal('.box-logo, footer', {duration: 2000});
// sr.reveal('.leter',{interval: 500});

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

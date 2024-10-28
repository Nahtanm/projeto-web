// Elementos
const btnImage = document.querySelectorAll(".box-imagens li");
const image = document.querySelector("#poster-container img");
const main = document.querySelector("main");
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");

// Funções
const getSearch = (searchValeu) => {
  const boxGame = document.querySelectorAll(".box-game");
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
    image.setAttribute(
      "src",
      `imagens/ArmoredCore/ImagensArmoredCore/ArmoredCore${id}.jpg`
    );
  });
});

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const searchValeu = searchInput.value;

  getSearch(searchValeu);
});

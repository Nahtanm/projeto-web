// Elementos
const btnImage = document.querySelectorAll(".box-imagens li");
const image = document.querySelector("#poster-container img");
const main = document.querySelector("main");
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");
const boxGame = document.querySelectorAll(".box-game");
const formControl = document.querySelectorAll(".form-control");
const filterSelect = document.querySelector("#filter-select");

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

const filter = (filterValue) => {
  switch (filterValue) {
    case "all":
      console.log(filterValue);
      boxGame.forEach((box) =>
        box.style.display = "flex"
      );
      break;
    case "rpg":
      boxGame.forEach((box) =>
        box.classList.contains("rpg")
          ? (box.style.display = "flex")
          : (box.style.display = "none")
      );
      break;
    case "acao":
      boxGame.forEach((box) =>
        box.classList.contains("acao")
          ? (box.style.display = "flex")
          : (box.style.display = "none")
      );
      break;
    case "soulslike":
      boxGame.forEach((box) =>
        box.classList.contains("soulslike")
          ? (box.style.display = "flex")
          : (box.style.display = "none")
      );
      break;
    case "mundo-aberto":
      boxGame.forEach((box) =>
        box.classList.contains("mundo-aberto")
          ? (box.style.display = "flex")
          : (box.style.display = "none")
      );
      break;
  }
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

filterSelect.addEventListener("change", (e) => {
  const filterValue = e.target.value;

  filter(filterValue);

  console.log(filterValue);
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

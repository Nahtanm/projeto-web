const btnAbrir = document.querySelector("#btn-abrir ");
const btnFechar = document.querySelector("#btn-fechar i");
const menuMobile = document.querySelector(".menu-mobile");
const telaAux = document.querySelector(".tela-aux");
const btnImage = document.querySelectorAll(".box-imagens li");
const image = document.querySelector("#poster-container img");

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
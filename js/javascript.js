// Elementos 
const btnImage = document.querySelectorAll(".box-imagens li");
const image = document.querySelector("#poster-container img");

// Eventos
btnImage.forEach(btn =>{
    btn.addEventListener("click", (e)=>{
        btnImage.forEach(btn =>{
            btn.querySelector(".box-imagens img").classList.remove("selected");
        })

        const id = btn.getAttribute("id");

        btn.querySelector(".box-imagens img").classList.add("selected");
        image.setAttribute("src",`imagens/ArmoredCore/ImagensArmoredCore/ArmoredCore${id}.jpg`);

        console.log(id);

    });
});

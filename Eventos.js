//Evento 1: Cambia la imagen de un animal al pasar el mouse sobre ella
document.querySelector(".animal img").addEventListener("mouseover", function () {
    this.src = "./perrito.jpg";
});

// Restaura la imagen original del animal al quitar el mouse
document.querySelector(".animal img").addEventListener("mouseout", function () {
    this.src = "./Cat.jpeg";
});

//Evento 2: Muestra una alerta al hacer clic en el elemento con clase "comida"
document.querySelector(".comida").addEventListener("click", function () {
    alert("¡La pizza es deliciosa!");
});

//Evento 3: Agrega un borde púrpura a la imagen de una serie al pasar el mouse sobre ella
let serieImg = document.querySelector(".serie img");

serieImg.addEventListener("mouseover", function () {
    this.style.border = "5px solid purple";
    this.style.transition = "0.3s";
});

// Restaura el borde de la imagen de la serie al quitar el mouse
serieImg.addEventListener("mouseout", function () {
    this.style.border = "none";
});

//Evento 4: Scroll en el div de canciones para cambiar la opacidad
document.querySelector(".cancion").addEventListener("wheel", function () {
    this.style.opacity = "0.5";
    setTimeout(() => {
        this.style.opacity = "1";
    }, 1000);
});

//Evento 5: Cambia el estilo de los elementos de la lista al pasar el mouse sobre ellos
document.querySelectorAll(".persona ul li").forEach((item) => {
    item.addEventListener("mouseover", function () {
        this.style.fontWeight = "bold";
        this.style.color = "blue";
    });

    item.addEventListener("mouseout", function () {
        this.style.fontWeight = "normal";
        this.style.color = ""; 
    });
});

//Evento 6: Muestra una alerta al hacer clic derecho en el elemento con clase "pais"
document.querySelector(".pais").addEventListener("contextmenu", function (event) {
    event.preventDefault();
    alert("¡Japón es un gran destino!");
});

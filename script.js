window.onload = function () {
    const btnMostrar = document.getElementById("btnMostrar");
    const contenido = document.querySelector(".contenido");
    const mensaje = document.querySelector(".mensaje");

    btnMostrar.addEventListener("click", function () {
        contenido.style.display = "none";
        mensaje.style.display = "block";
        document.body.style.overflow = "auto";
    });
};

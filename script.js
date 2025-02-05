document.addEventListener("DOMContentLoaded", function () {
    const btnMostrar = document.getElementById("btnMostrar");

    btnMostrar.addEventListener("click", function () {
        // Al hacer clic en el botón, se hace scroll hasta la siguiente sección
        document.querySelector(".seccion").scrollIntoView({
            behavior: "smooth"
        });
    });
});

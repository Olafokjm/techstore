const usuario = document.querySelector("[data-formulario]");

usuario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]");
    const mail = document.querySelector("[data-correo]");
    const clave = document.querySelector("[data-clave]");

    if(nombre, mail, clave){
        window.location.href = "user-registrado.html";
    } else {
        alert("Por favor rellena todos los campos requeridos");
    };
});



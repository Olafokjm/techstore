import { clientServices } from "../services/cliente-service.js";

const form = document.querySelector("[data-formregistro]");

form.addEventListener("submit", (evento) =>{
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const url = document.querySelector("[data-url]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;   
    
    clientServices
        .registrarProducto(nombre, url, precio, descripcion)
        .then(() => {
            window.location.href = "/registrado.html";
        }).catch(error => console.log(error));
});
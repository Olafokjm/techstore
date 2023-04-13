import { clientServices } from "../services/cliente-service.js";

const formulario = document.querySelector("[data-formedit]");

const obtenerInformación = async () => {

    const direccion = new URL(window.location);
    const id = direccion.searchParams.get("id");

    if (id === null){
        window.location.href = "error.html";
    }

    const nombre = document.querySelector("[data-nombre]");
    const url = document.querySelector("[data-url]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion]");
    
    try{

        const productos = await clientServices.detalleProducto(id);

        if (productos.nombre && productos.url && productos.precio && productos.descripcion){
            nombre.value = productos.nombre;
            url.value = productos.url;
            precio.value = productos.precio;
            descripcion.value = productos.descripcion;

            const img = document.querySelector("[data-pimg]");
            img.src = productos.url;
            
        } else {
            throw new Error();
        };

    }catch(error){
        window.location.href = "error.html";
    };

    
    
};

obtenerInformación();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const direccion = new URL(window.location);
    const id = direccion.searchParams.get("id");

    const nombre = document.querySelector("[data-nombre]").value;
    const url = document.querySelector("[data-url]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    clientServices.actualizarProducto(nombre, url, precio, descripcion, id).then(() => {
        window.location.href = "editado-exito.html";
    }).catch((err) => console.log(err));
});


import { clientServices } from "../services/cliente-service.js";
import { formatoPrecio } from "../js/formatoprecio.js";

const crearNuevoProducto = (nombre, url, descripcion, precio, id) => {
    const linea = document.createElement("div");
    linea.classList.add("card");
    const tarjeta = 
        `
            <img src="${url}" alt="${url}">
            <h3>${nombre}</h3>
            <div class="card-text">
                <p class="descripcion">${descripcion}</p>
                <p class="precio"><b>Precio: </b>${formatoPrecio(precio)} COP</p>
            </div>
            <div class="botones">
                <a href="edit-producto.html?id=${id}" class="boton boton1"><img src="img/edit.png"></a>
                <button type="button" class="boton boton3" id="${id}"><img src="img/delete.png"></button>
            </div>
        `;
    linea.innerHTML = tarjeta;
    const btn = linea.querySelector("button");
    btn.addEventListener("click", () => {
        const id = btn.id;
        clientServices.eliminarProducto(id).then(respuesta => {
            console.log(respuesta);
        }).catch(error => alert("Ocurrió un error"));
    });

    return linea;
};

const boxProducts = document.querySelector("[data-box]");

clientServices.listaProductos()
    .then((datos) => {
        datos.forEach(({nombre, url, descripcion, precio, id}) => {
            const nuevoProducto = crearNuevoProducto(nombre, url, descripcion, precio, id);
            boxProducts.appendChild(nuevoProducto);
        });
    })
    .catch((error) => alert("Ocurrió un error"));

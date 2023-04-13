const listaProductos = () => fetch("http://localhost:3000/productos").then((respuesta) => respuesta.json());

const registrarProducto = (nombre, url, precio, descripcion) => {
    return fetch("http://localhost:3000/productos",{
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({nombre, url, precio, descripcion, id: uuid.v4()}),
    });
};

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE",
    });
};

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`).then((respuesta) => respuesta.json());
    
};

const actualizarProducto = (nombre, url, precio, descripcion, id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({nombre, url, precio, descripcion}),
    })
        .then((respuesta) => respuesta)
        .catch((err) => console.log(err));
};

export const clientServices = {
    listaProductos,
    registrarProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
};
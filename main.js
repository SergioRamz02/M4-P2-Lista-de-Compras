//1. Definiendo el arreglo para la lista de compras
let listaDeCompras = [];

//2. Agregar producto desde input
const agregarProductoDesdeInput = () => {
    const input = document.getElementById("productoInput");
    const producto = input.value.trim(); // Eliminar espacios extras

    if (producto) {
        agregarProducto(producto);
        input.value = ""; // Limpiar input
        input.focus();
    }
};

//3. Función para agregar productos al arreglo y que no se repitan
const agregarProducto = (producto) => {
    if (!listaDeCompras.find(item => item === producto)) {
        listaDeCompras.push(producto);
        mostrarLista();
    } else {
        alert(`El producto "${producto}" ya está en la lista.`);
    }
};

//4. Eliminar productos de la lista
const eliminarProducto = (producto) => {
    listaDeCompras = listaDeCompras.filter(item => item !== producto);
    mostrarLista(); // Actualizar HTML
};

//5. Función para mostrar lista de compras
const mostrarLista = () => {
    const listaHTML = document.getElementById("listaCompras");
    listaHTML.innerHTML = ""; // Limpiar lista antes de actualizar

    if (listaDeCompras.length > 0) {
        listaDeCompras.forEach(producto => {
            const li = document.createElement("li");
            li.textContent = producto;

            // Botón para eliminar cada producto
            const btnEliminar = document.createElement("button");
            btnEliminar.textContent = "Eliminar";
            btnEliminar.style.marginLeft = "10px";
            btnEliminar.onclick = () => eliminarProducto(producto);

            li.appendChild(btnEliminar);
            listaHTML.appendChild(li);
        });
    } else {
        listaHTML.innerHTML = "<li>La lista está vacía.</li>";
    }
};
// Mostrar lista inicial
mostrarLista();
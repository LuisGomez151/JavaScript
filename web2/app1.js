//Arreglo para iniciar agregar a carrito
let carrito = [];

//Funcion para mostrar menu

function mostrarMenu(){
    return parseInt(prompt(`
            "Seleccione un producto para agregar al carrito"
            1.- Camisa - $300
            2.- Pantalon - $500
            3.- Zapatos - $800
            4.- Sombrero - $200
            5.- Ver Carrito y Total 
            6.- Salir 
            "Elige una opcion:"
        `));
}

//Funcion para agregar producto al carrito 

function agregarCarrito(producto, precio) {
    carrito.push({ producto, precio });
    console.log(`${producto} ha sido agregado al carrito.`);
}

// Función para mostrar el contenido del carrito y el total
function verCarritoYTotal() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        let total = 0;
        console.log("Productos en tu carrito:");
        carrito.forEach(item => {
            console.log(`${item.producto} - $${item.precio}`);
            total += item.precio;
        });
        console.log(`Total a pagar: $${total}`);
    }
}

// Función principal que controla el flujo del programa
function iniciarCompra() {
    let opcion;
    do {
        opcion = mostrarMenu();
        switch (opcion) {
            case 1:
                agregarCarrito("Camisa", 300);
                break;
            case 2:
                agregarCarrito("Pantalon", 500);
                break;
            case 3:
                agregarCarrito("Zapatos", 800);
                break;
            case 4:
                agregarCarrito("Sombrero", 200);
                break;
            case 5:
                verCarritoYTotal();
                break;
            case 6:
                console.log("Gracias por tu compra. ¡Hasta luego!");
                break;
            default:
                console.log("Opción no válida, por favor selecciona nuevamente.");
                break;
        }
    } while (opcion !== 6);
}

// Iniciar la compra
iniciarCompra();





/*function formatoMoneda(precio){
    return Number(precio).toFixed(2)
}

function imprimir(arregloProductos){
    let cadena = ""
    arregloProductos.forEach(producto => {
        cadena += `Producto: ${producto.descripcion}: Precio: $${formatoMoneda(producto.precio)}\n`
    });
    alert(cadena)
}

function buscar(arregloProductos){
    const buscar = prompt("Ingresa el nombre del producto que deseas buscar: ")
    const encontrado = arregloProductos.filter( producto => producto.descripcion.includes(buscar))
    console.log(encontrado)
    const numeroResultados = encontrado.length
    console.log(numeroResultados)
    if(numeroResultados > 0){
        alert("se encontraron x resultados")
    } else{
        alert("no hubo coincidencias")
    }
}

let i = 0
let nombreProducto = ""
let precioProducto = 0

const arregloProductos = []*/

document.getElementById("agregarProducto").addEventListener("click", (event)=>{
    event.preventDefault();
    console.log("Hola mundo!")
})


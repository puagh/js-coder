function formatoMoneda(precio){
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
    let encontrado = arregloProductos.find( producto => producto.descripcion == buscar)
    if(encontrado != undefined){
        alert(`Se encontró el producto \nNombre: ${encontrado.descripcion} \nPrecio: $${formatoMoneda(encontrado.precio)}`)
    } else{
        alert("No se encontraron concidencias")
    }
}

const numeroProductos = Number(prompt("Ingresa el número de productos: "))

let i = 0
let nombreProducto = ""
let precioProducto = 0

const arregloProductos = []
do{
    ++i
    nombreProducto = prompt(`Ingresa el nombre del producto ${i}`)
    precioProducto = Number(prompt(`Ingresa el precio del producto ${i}`))
    arregloProductos.push({descripcion: nombreProducto, precio: precioProducto})
} while (i < numeroProductos)

const textoOpciones = `Selecciona la opción deseada: \n1.- Imprimir todos los productos \n2.- Buscar producto por nombre \n3.- Salir `

let opcion;
do{
    opcion = Number(prompt(textoOpciones))
    switch(opcion){
        case 1: 
            imprimir(arregloProductos)
            break;
            
        case 2: 
            buscar(arregloProductos)
            break; 

        case 3: 
            alert("¡Hasta luego!")
            break;

        default :
            alert("Ingresa opción 1, 2 o 3")
    }
} while (opcion != 3)
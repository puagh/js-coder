function formatoMoneda(precio){
    return Number(precio).toFixed(2)
}

function agregarProducto({producto}){
    const {nombre, cantidad, precio} = producto
    let fila = document.createElement("tr")
    fila.setAttribute("class", "producto")
    fila.innerHTML = `<td>${nombre}</td>
                            <td>${cantidad}</td>
                            <td>${precio}</td>
                            <td>${formatoMoneda(Number(cantidad)*Number(precio))}</td>`
    document.querySelector("#listaProductos").appendChild(fila)
}

function agregarALocal(arregloProductos){
    localStorage.setItem("listaProductos", JSON.stringify(arregloProductos))
}

const traerContenidoLocal = () => JSON.parse(localStorage.getItem("listaProductos"))

const limpiarFormlulario = () =>{
    document.querySelector("#inputNombreProducto").value = ""
    document.querySelector("#inputCantidadProducto").value = ""
    document.querySelector("#inputPrecioProducto").value = ""
}

const renderTabla = (arregloProductos) =>{
    console.table(arregloProductos)
    for(let producto of arregloProductos){
        console.log(producto.nombre)
    }
}

//###################################################################
let arregloProductos = []
const datosLocales = traerContenidoLocal()

if(datosLocales){
    arregloProductos = datosLocales
    renderTabla(arregloProductos)
}

console.table(arregloProductos)


document.getElementById("agregarProducto").addEventListener("click", (event)=>{
    event.preventDefault();
    const nombre = document.querySelector("#inputNombreProducto").value
    const cantidad = document.querySelector("#inputCantidadProducto").value
    const precio = formatoMoneda(document.querySelector("#inputPrecioProducto").value)
    const producto = {nombre, cantidad, precio}
    arregloProductos.push({producto})
    console.table(arregloProductos)
    limpiarFormlulario()
    agregarProducto({producto})
    agregarALocal(arregloProductos)
})

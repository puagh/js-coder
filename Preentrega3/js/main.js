const formatoMoneda = (precio) => Number(precio).toFixed(2)

const agregarProducto = ({producto}) =>{
    const {nombre, cantidad, precio} = producto
    let fila = document.createElement("tr")
    fila.setAttribute("class", "producto")
    fila.innerHTML = `<td>${nombre}</td>
                            <td>${cantidad}</td>
                            <td>${precio}</td>
                            <td>${formatoMoneda(Number(cantidad)*Number(precio))}</td>`
    document.querySelector("#listaProductos").appendChild(fila)
}

const agregarALocal = (arregloProductos) => localStorage.setItem("listaProductos", JSON.stringify(arregloProductos))

const traerContenidoLocal = () => JSON.parse(localStorage.getItem("listaProductos"))

const limpiarFormlulario = () =>{
    document.querySelector("#inputNombreProducto").value = ""
    document.querySelector("#inputCantidadProducto").value = ""
    document.querySelector("#inputPrecioProducto").value = ""
}

const renderTabla = (arregloProductos) =>{
    arregloProductos.forEach((productoEnArreglo)=>{
        let {producto} = productoEnArreglo
        const {nombre, cantidad, precio} = producto
        let fila = document.createElement("tr")
        fila.setAttribute("class", "producto")
        fila.innerHTML = `<td>${nombre}</td>
                                <td>${cantidad}</td>
                                <td>${precio}</td>
                                <td>${formatoMoneda(Number(cantidad)*Number(precio))}</td>`
        document.querySelector("#listaProductos").appendChild(fila)
    })
}
//###################################################################
let arregloProductos = []
let datosLocales = traerContenidoLocal()

if(datosLocales){
    arregloProductos = datosLocales
    renderTabla(arregloProductos)
}

document.getElementById("agregarProducto").addEventListener("click", (event)=>{
    event.preventDefault();
    const nombre = document.querySelector("#inputNombreProducto").value
    const cantidad = document.querySelector("#inputCantidadProducto").value
    const precio = formatoMoneda(document.querySelector("#inputPrecioProducto").value)
    const producto = {nombre, cantidad, precio}
    arregloProductos.push({producto})
    limpiarFormlulario()
    agregarProducto({producto})
    agregarALocal(arregloProductos)
})

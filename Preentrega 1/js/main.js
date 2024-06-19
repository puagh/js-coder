function calcularIVA(subtotal){
    // Retorna el impuesto al valor agregado del 16%
    return subtotal * 0.16
}

function calcularTotal(acumulado, impuesto){
    return acumulado + impuesto
}

const numeroProductos = Number(prompt("Ingresa el numero de productos"))

let i = 0
let precioProducto = 0
let acumulado = 0
do{
    ++i
    precioProducto = Number(prompt(`Ingresa el precio del producto ${i}`))
    acumulado += precioProducto
    console.log(`producto ${i}, precio ${precioProducto}`)
} while (i < numeroProductos)

const impuesto = calcularIVA(acumulado)
const total = calcularTotal(acumulado, impuesto)

const stringResultado = `
    Factura \n
    Subtotal ${acumulado.toFixed(2)}\n
    IVA (16%) ${impuesto.toFixed(2)}\n
    Total ${total.toFixed(2)} pesos`

alert(stringResultado)

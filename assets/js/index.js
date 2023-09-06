ingresarMonto = document.querySelector("#enterData");
tipoMoneda = document.querySelector(".cointype");
bntBuscar = document.querySelector("#buttonsearch");
resultado = document.querySelector(".result");
mensaje = document.querySelector(".message")
ingresarMonto.style.marginTop = "1rem";
ingresarMonto.style.width = "20rem";
ingresarMonto.style.height = "2rem";
bntBuscar.style.width = "20rem";
bntBuscar.style.height = "2rem";
tipoMoneda.style.width = "20rem";
tipoMoneda.style.height = "2rem";
let data;



async function getCurrencyConverter() {
    try {
        const res = await fetch("https://mindicador.cl/api/")
        data = await res.json()

    } catch (e) {
        mensaje.innerHTML = e.message;
    }

}
getCurrencyConverter()

bntBuscar.addEventListener("click",async () => {
    let moneda = data[tipoMoneda.value];
    const montoIngresado = ingresarMonto.value;
    const calc = montoIngresado / moneda.valor;
    resultado.innerHTML = calc;
   await getChart(tipoMoneda.value)
});

async function getChart(moneda) {
    try {
        const res = await fetch(`https://mindicador.cl/api/${moneda}`)
        data1 = await res.json()
        console.log(data)
    } catch (e) {
        mensaje.innerHTML = e.message;
    }

}

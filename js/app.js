const cotizador = new API('db975d1e680989af370d3ea6628ab3d21c946417a14b473cc899746a31577455');
const ui = new Interfaz();



// Leer el formulario
const formulario = document.querySelector('#formulario');
// Event Listeners
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    // Leer la moneda 
    const monedaSelect = document.querySelector('#moneda');
    const modenaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

    // Leer la criptomoneda 
    const criptoMonedaSelect = document.querySelector('#criptomoneda');
    const criptomonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

    console.log(modenaSeleccionada);
    console.log(criptomonedaSeleccionada);
    // Comprobar que ambos no esten vacios
    if(modenaSeleccionada === '' || criptomonedaSeleccionada === ''){
        // Arrojar una alaerta de error
        ui.mostrarMensaje('Ambos Campos son Obligatorios', 'alert bg-danger text-center');
    } else {
        cotizador.obtenerValores(modenaSeleccionada, criptomonedaSeleccionada)
        .then(data => {
             ui.mostrarResultados(data.resultado.RAW, modenaSeleccionada, criptomonedaSeleccionada);
         })
    }
    
})
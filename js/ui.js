class Interfaz {
    constructor(){
        this.init();
    }

    init(){
        this.construirSelect();
    }

    // Construir el select
    construirSelect(){
        cotizador.obtenerMonedasAPI()
        .then( monedas => {
            // console.log(monedas);
            // Crear un select de opciones
            const select = document.querySelector('#criptomoneda');
            // Recorrer un arreglo con Object.entries
            // Es un objeto y no podemos utilizar forEach
            
            for( const [key, value] of Object.entries(monedas.monedas.Data)) {
                // Añadir el symbol y el nombre como opciones
                const opcion = document.createElement('option');
                opcion.value = value.Symbol;
                opcion.appendChild(document.createTextNode(value.CoinName));
                select.appendChild(opcion);
            }
            
        })
    }

    // Mostrar Mensaje con su clase
    mostrarMensaje(mensaje, clases){
        // Crear el elemento
        const div = document.createElement('div');
        // Agregarle la clase
        div.className = clases;
        // Agregarle el mensaje
        div.appendChild(document.createTextNode(mensaje));
        // Seleccionar el contenedor de mensaje
        const divMensaje = document.querySelector('.mensajes');
        // Agregarle al contenedor el div
        divMensaje.appendChild(div);

        // Quitar el mensaje 
        setTimeout( () => {
            this.eliminarMensaje(); // LLamar el metodo para quitar el mensaje
        }, 3000)
    }
    
    // Metodo de eliminar mensaje
    eliminarMensaje(){
        const alert = document.querySelector('.mensajes div');
        if(alert){
            alert.remove();
        }
    }
    
    // Imprime los resultados de la cotizacion
    // Mostrar resultados
    mostrarResultados(resultado, moneda, crypto){
        
        // En caso de un resultado anterior, ocultarlo

        const resultadoAnterior = document.querySelector('#resultado > div');
        if(resultadoAnterior){
            resultadoAnterior.remove();
        }

        const datosMonedas = resultado[crypto][moneda];

        let precio = datosMonedas.PRICE.toFixed(2),
            porcentaje = datosMonedas.CHANGEPCTDAY.toFixed(2),
            actualizado = new Date(datosMonedas.LASTUPDATE * 1000).toLocaleDateString('es-CO');

        

        // Construir un template
        let templateHtml = `
            <div class="card bg-warning"> 
                <div class="card-body text-light">
                    <h2 class="card-title">Resultado</h2>
                    <p> El precio de ${datosMonedas.FROMSYMBOL} a moneda 
                    ${datosMonedas.TOSYMBOL} es de: $ ${precio} </p>
                    <p> Variación ultimo dia % ${porcentaje} </p>
                    <p> Ultima Actualización ${actualizado} </p>
                </div>
            </div>
        `;

        this.mostrarOcutalSpinener('block');
        setTimeout( () => {
            document.querySelector('#resultado').innerHTML = templateHtml;
            this.mostrarOcutalSpinener('none');
        }, 2000)
        // Insertar el resultado 
       
    }
    
    // Metodo mostrar
    mostrarOcutalSpinener(vista){
        const spinner = document.querySelector('.contenido-spinner');
        spinner.style.display = vista;
    }
}


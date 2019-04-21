class API {
    constructor(apikey){
        this.apikey = apikey;
    }
    // Obtener todas las monedas
    async obtenerMonedasAPI(){
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;
        

        // Fecht a la api
        const urlObtenerMonedas = await fetch(url);

        // respuesta es json
        const monedas = await urlObtenerMonedas.json();
        return {
            monedas
        }
    } 

    // Obtener los valores
    async obtenerValores(monedas, criptomonedas){
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomonedas}&tsyms=${monedas}&api_key=${this.apikey}`;

        // Consultar rest api
        const urlConvertir = await fetch(url);

        const resultado = await urlConvertir.json();
        
        return {
            resultado
        }
    }
    
}
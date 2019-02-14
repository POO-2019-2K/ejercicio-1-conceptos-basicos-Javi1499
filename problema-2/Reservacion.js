export default class Reservacion {
    constructor (nombre, tipoHabitacion, numero, noches,fechaLegada, fechaSalida, diasParaLlegada){
    this._nombre = nombre.toUpperCase();
    this._tipoHabitacion = tipoHabitacion.toUpperCase();
    this._numero = numero;
    this._noches = noches;
    this._fechaLlegada = fechaLegada;
    this._fechaSalida = fechaSalida;
    this._diasParaLlegada = diasParaLlegada;
    }

   

    imprimir() {
        console.log(`${this._nombre}, ${this._tipoHabitacion}, ${this._numero}, ${this._noches},${this._fechaLlegada},${this._fechaSalida}, ${this._diasParaLlegada}`);
    }

    get diasParaLlegada() {
        return this._diasParaLlegada;
    }
    
    set diasParaLlegada(diasParaLlegada) {
        this._diasParaLlegada = diasParaLlegada;
    }

    set numero(numero){
        this._numero = numero;
    }

    get fechaLegada() {
        return this._fechaLlegada;
    }

    set fechaLegada(fechaLegada){
        this._fechaLlegada = fechaLegada;
    }
}
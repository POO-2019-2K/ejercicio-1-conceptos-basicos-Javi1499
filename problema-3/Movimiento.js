export default class Movimiento{
constructor(nombre, beneficiario, fecha, cantidad, banco)
{

this._nombre = nombre.toUpperCase();
this._beneficiario = beneficiario.toUpperCase();
this._fecha = fecha;
this._cantidad = cantidad;
this._banco = banco.toUpperCase();

}

imprimir() {
    console.log(`${this._nombre}, ${this._beneficiario}, ${this._fecha}, ${this._cantidad}, ${this._banco}`);
}


}

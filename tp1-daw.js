/* Consigna N°: 1 */
var _a;
/* Consigna N°: 2 */
var Perro = /** @class */ (function () {
    function Perro() {
        this.nombre = "Perro";
    }
    Perro.prototype.gritar = function () {
        return 'Guau';
    };
    return Perro;
}());
var Gato = /** @class */ (function () {
    function Gato() {
        this.nombre = "Gato";
    }
    Gato.prototype.gritar = function () {
        return 'Miau';
    };
    return Gato;
}());
var Vaca = /** @class */ (function () {
    function Vaca() {
        this.nombre = "Vaca";
    }
    Vaca.prototype.gritar = function () {
        return 'Muu';
    };
    return Vaca;
}());
/* Consigna N°: 3 */
function describirAnimal(animal) {
    console.log("El animal ".concat(animal.nombre, " hace ").concat(animal.gritar()));
}
/* Consigna N°: 4 */
var perro = new Perro();
var gato = new Gato();
var vaca = new Vaca();
/* Consigna N°: 5 */
describirAnimal(perro);
describirAnimal(gato);
describirAnimal(vaca);
/* Consigna N°: 6 */
var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["Lunes"] = 0] = "Lunes";
    DiasSemana[DiasSemana["Martes"] = 1] = "Martes";
    DiasSemana[DiasSemana["Miercoles"] = 2] = "Miercoles";
    DiasSemana[DiasSemana["Jueves"] = 3] = "Jueves";
    DiasSemana[DiasSemana["Viernes"] = 4] = "Viernes";
    DiasSemana[DiasSemana["Sabado"] = 5] = "Sabado";
    DiasSemana[DiasSemana["Domingo"] = 6] = "Domingo";
})(DiasSemana || (DiasSemana = {}));
/* Consigna N°: 7 */
var queJugador = "Messi";
queJugador = 10;
console.log(queJugador);
var FilaRandom = /** @class */ (function () {
    function FilaRandom() {
        this.elementos = [];
    }
    FilaRandom.prototype.agregar = function (elemento) {
        this.elementos.push(elemento);
    };
    FilaRandom.prototype.remover = function () {
        return this.elementos.shift();
    };
    return FilaRandom;
}());
/* Consigna N°: 9 */
var filaNumeros = new FilaRandom();
var filaStrings = new FilaRandom();
var filaAnimales = new FilaRandom();
/* Consigna N°: 10 */
filaAnimales.agregar(perro);
filaAnimales.agregar(gato);
filaAnimales.agregar(vaca);
filaNumeros.agregar(4);
filaNumeros.agregar(23);
filaNumeros.agregar(180);
filaStrings.agregar("Probando TS");
filaStrings.agregar("Para ponerme al dia");
filaStrings.agregar("Creo que lo voy entendiendo");
console.log((_a = filaAnimales.remover()) === null || _a === void 0 ? void 0 : _a.nombre); // Perro
console.log(filaNumeros.remover()); // 4
console.log(filaStrings.remover()); // Probando TS

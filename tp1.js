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
function describirAnimal(animal) {
    console.log("El animal ".concat(animal.nombre, " hace ").concat(animal.gritar()));
}
var perro = new Perro();
var gato = new Gato();
var vaca = new Vaca();
describirAnimal(perro);
describirAnimal(gato);
describirAnimal(vaca);
var jugador = "Messi";
jugador = 10;
console.log(jugador);
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

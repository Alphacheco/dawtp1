/* Consigna N°: 1 */

interface Animal {
    nombre: string,

    gritar: () => string;
}

/* Consigna N°: 2 */

class Perro implements Animal {
    nombre = "Perro";

    gritar() {
        return 'Guau';
    }
}

class Gato implements Animal {
    nombre = "Gato";

    gritar() {
        return 'Miau';
    }
}

class Vaca implements Animal {
    nombre = "Vaca";

    gritar() {
        return 'Muu';
    }
}

/* Consigna N°: 3 */

function describirAnimal(animal: Animal) {
    console.log(`El animal ${animal.nombre} hace ${animal.gritar()}`);
}

/* Consigna N°: 4 */

const perro: Perro = new Perro();
const gato: Gato = new Gato();
const vaca: Vaca = new Vaca();

/* Consigna N°: 5 */

describirAnimal(perro);
describirAnimal(gato);
describirAnimal(vaca);

/* Consigna N°: 6 */

enum DiasSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo,
}

/* Consigna N°: 7 */

let queJugador: number | string = "Messi";
queJugador = 10;
console.log(queJugador)

/* Consigna N°: 8 */

interface Fila<T> {
    agregar(elemento: T): void;
    remover(): T | undefined;
}

class FilaRandom<T> implements Fila<T> {
    private elementos: T[] = [];

    agregar(elemento: T): void {
        this.elementos.push(elemento);
    }

    remover(): T | undefined {
        return this.elementos.shift();
    }
}

/* Consigna N°: 9 */

const filaNumeros: FilaRandom<number> = new FilaRandom<number>();
const filaStrings: FilaRandom<string> = new FilaRandom<string>();
const filaAnimales: FilaRandom<Animal> = new FilaRandom<Animal>();

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

console.log(filaAnimales.remover()?.nombre); // Perro
console.log(filaNumeros.remover());           // 4
console.log(filaStrings.remover());           // Probando TS



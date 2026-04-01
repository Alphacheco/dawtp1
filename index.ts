interface Animal {
  nombre: string;
  gritar(): string;
}

class Perro implements Animal {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  gritar(): string {
    return "¡GUAU GUAU!";
  }
}

class Gato implements Animal {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  gritar(): string {
    return "¡MIAU MIAU!";
  }
}

class Vaca implements Animal {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  gritar(): string {
    return "¡MUUUU!";
  }
}

function describirAnimal(animal: Animal): void {
  console.log(`El animal ${animal.nombre} hace ${animal.gritar()}.`);
}

// --- Ejemplo de uso ---
const animales: Animal[] = [
  new Perro("Rex"),
  new Gato("Luna"),
  new Vaca("Bessie"),
];

for (const animal of animales) {
  describirAnimal(animal);
}

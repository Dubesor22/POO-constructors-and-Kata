//
//Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.

class Persona {
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }
  obtDetalles() {
    console.log(
      `me llamo ${this.nombre} tengo ${this.edad} y soy de genero ${this.genero}`
    );
  }
}
const persona1 = new Persona("David", 38, "fluido");
persona1.obtDetalles();

//Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.

class Estudiante extends Persona {
  constructor(nombre, edad, genero, curso, grupo) {
    super(nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
  }
  registrar() {
    console.log(
      `soy ${this.nombre} tengo ${this.edad} y soy de genero ${this.genero} y voy a ${this.curso} al grupo ${this.grupo}`
    );
  }
}
const estudiante1 = new Estudiante("Yoli", 25, "femme", "quinto", "C");
estudiante1.registrar();

//Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.

class Profesor extends Persona {
  constructor(nombre, edad, genero, asignatura, nivel) {
    super(nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
  }
  asignar() {
    console.log(
      `me llamo ${this.nombre} tengo ${this.edad} y soy de genero ${this.genero} imparto ${this.asignatura} de nivel ${this.nivel}`
    );
  }
}
const profesor1 = new Profesor(
  "juan",
  49,
  "desconocido",
  "matematicas",
  "Bachiller"
);
profesor1.asignar();

//KATA ⛩️ Mayas y aztecas

//Construye las siguientes clases:

// Warrior:

// constructor(life, power): Establece el valor de las propiedades life y power

// attack: Devuelve el valor de power del guerrero

// defend(damage): resta el valor del parámetro recibido damage al valor de la propiedad life. Después, imprime el valor de la vida restante.

// Maya: extiende de la clase Warrior

// constructor: Aquí establecemos los valores para el maya, que no hay que olvidar que es un guerrero.

// drinkColaCao: Suma 10 al poder.

// Aztec: extiende de la clase Warrior

// constructor: Aquí establecemos los valores para el azteca, que no hay que olvidar que es un guerrero.

// drinkNesquik: Suma 10 a la vida.

class Warrior {
  constructor(life, power, nombre) {
    this.life = life;
    this.power = power;
    this.nombre = nombre;
  }
  attack() {
    console.log(
      `el guerrero ${this.nombre} con ${this.power} puntos de ataque, ATACA!!`
    );
    return this.power;
  }
  defend(damage) {
    console.log(
      `${this.nombre} recibe ${damage} puntos de danyo!!, te quedan ${
        this.life - damage
      } puntos de vida restante`
    );
  }
}
const warrior1 = new Warrior(100, 150);
warrior1.attack();
warrior1.defend(55);

//Maya: extiende de la clase Warrior

class Maya extends Warrior {
  constructor(life, power) {
    super(life, power, "maya");
  }
  drinkColaCao() {
    this.power += 10; // para que sea una propiedad.
    console.log(
      `el guerrero ${this.nombre} tiene una bonificacion por swu colacao, total: ${this.power} puntos`
    );
  }
}
const maya1 = new Maya(100, 150);

//Aztec: extiende de la clase Warrior

class Aztec extends Warrior {
  constructor(life, power) {
    super(life, power, "azteca");
    // this.nombre = "azteca";
  }
  drinkNesquick() {
    this.life += 10;
    console.log(
      `el guerrero ${this.nombre} tiene mas vida por su nesquick con un total de ${this.life} puntos`
    );
  }
}

const aztec1 = new Aztec(155, 130);

//2 . Realiza la siguiente cadena de intercambio de golpes.

// Azteca bebe nesquik

aztec1.drinkNesquick();

// Maya bebe Cola Cao

maya1.drinkColaCao();

// Maya ataca a azteca. Azteca defiende.

aztec1.defend(maya1.attack());

// Azteca ataca a maya. Maya defiende.

maya1.defend(aztec1.attack());

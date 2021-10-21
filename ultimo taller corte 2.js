//PUNTO  1
class Persona{
	constructor(nombre,edad,cedula){
		this.nombre = nombre;
		this.edad = edad;
		this.cedula = cedula;
	}
	mostrar(){
		return `Nombre: ${this.nombre} \nEdad: ${this.edad}\nCédula: ${this.cedula}`;
	}
	es_mayor_de_edad(){
		if(this.edad >= 18){
			return true;
		}
		else{
			return  false;
		}
	}
}

const persona1 = new Persona("Juan", 20, 1192801018);
console.log(persona1.mostrar());
console.log(persona1.es_mayor_de_edad()); 

//PUNTO 2
class Cuenta{
	
	constructor(titular, cantidad){
		this.titular = titular;
		this.cantidad = cantidad || 0;
	}
	mostrar(){
		return `Titular: ${this.titular} \nCantidad: ${this.cantidad}`;
	}
	ingresar(cantidadIngresar){
		if(cantidadIngresar < 0){
			return `Ingreso negativo. \nTotal cantidad: ${this.cantidad}`;
		}
		else{
			this.cantidad = cantidadIngresar;
			return `Nuevo ingreso de: ${this.cantidad}`;
		}
	}
	retirar(cantidadRetiro){
		this.cantidadRetiro = cantidadRetiro;
		var total = this.cantidad - this.cantidadRetiro;
		return `Retiro de: ${this.cantidadRetiro} \nTotal Cantidad: ${total}`;
	}


}

const cuenta1 = new Cuenta('Juan');
console.log(cuenta1.mostrar());
console.log(cuenta1.ingresar(10));
console.log(cuenta1.retirar(2)); 

const cuenta1 = new Cuenta('Sebastian');
console.log(cuenta1.mostrar());
console.log(cuenta1.ingresar(30));
console.log(cuenta1.retirar(15)); 

//PUNTO 3
class Formulas{
	//PUNTO 3.1
	sumar(num1,num2){
		this.num1 = num1;
		this.num2 = num2;
		var total = num1 + num2;
		return `Total suma: ${total}`;
	}

	fibonacci(cantidad){
	this.cantidad = cantidad;
	var fibonacci_inicio = [0,1];
	var i;
	for(i = 2; i <= cantidad; i++){
	fibonacci_inicio.push(fibonacci_inicio[i-1] + fibonacci_inicio[i-2]);
	return fibonacci_inicio;
	}
	}

operacion_modulo(cantidad){
		this.cantidad = cantidad;
		var residuo = cantidad % 2;
		if(residuo == 0){
			return `Residuo 0`;
		}
		else{
			return `No tiene residuo 0, su residuo es: ${residuo}`;
		}
	}
	primo(cantidad){
		for(var i = 2; i < cantidad; i++){
			if(cantidad%i==0){
				return `El número: ${cantidad} no es primo`;
			}
		};
		return `El número: ${cantidad}, es primo`;
	}
}

const formula = new Formulas();
console.log(formula.sumar(1,2));
console.log(formula.fibonacci(10));
console.log(formula.operacion_modulo(5));
console.log(formula.primo(4)); 

//PUNTO 4
class Persona{
	constructor(nombre,edad,DNI,sexo,peso,altura){
		this.nombre = nombre;
		this.edad = edad;
		this.DNI = DNI;
		this.sexo = sexo;
		this.peso = peso;
		this.altura = altura;
	}
	calcularIMC(){
		var formula = (this.peso/(this.altura**2));
		const menor = -1;
		const debajo = 0;
		const sobrepeso = 1;
		if(formula < 20){
			return `IMC= ${menor}`;
		}
		else if(formula >= 20 && formula <= 25){
			return `IMC= ${debajo}`;
		}
		else{
			return `IMC= ${sobrepeso}`;
		}
	}
  esMayorDeEdad(){
  	if(this.edad >= 18){
  		return true;
  	}
  	else{
  		return false;
  	}
  }

 comprobarSexo(){
 	if(this.sexo == 'M' || this.sexo == 'H'){
 		return `Sexo correcto: ${this.sexo}`;
 	}
 	else{
 		return `Sexo incorrecto.\nSexo por default:` + 'H';
 	}
 }
}

const persona1 = new Persona('Juan', 20,1129,'Hombre',64,1.73);
console.log(persona1.calcularIMC());
console.log(persona1.esMayorDeEdad());
console.log(persona1.comprobarSexo());

const persona1 = new Persona('Sebastian', 19,1002,'Hombre',79,1.78);
console.log(persona1.calcularIMC());
console.log(persona1.esMayorDeEdad());
console.log(persona1.comprobarSexo());

class Contrasena{
	constructor(longitud, contrasena){
		this.longitud = longitud;
		this.contrasena = contrasena;
	}

// PUNTO 5

class contraseña {
    crear(contraseña) {
        this.contraseña = contraseña;
    }
    esFuerte() {
        this.contraseña;
        var mayusculas = 0;
        var minusculas = 0;
        var numeros = 0;

        for (var i = 0; i < this.contraseña.length; i++) {
            if (((this.contraseña[i] <= 0 || this.contraseña[i] >= 0) === false)&&(this.contraseña[i] === this.contraseña[i].toUpperCase()) === true) {
                mayuscula += 1
            }
            if (((this.contraseña[i] <= 0 || this.contraseña[i] >= 0) === false) && (this.contraseña[i] === this.contraseña[i].toLowerCase()) === true) {
                minuscula += 1
            }

            if (this.contraseña[i] <= 0 || this.contraseña[i] >= 0 === true) {
                numeros += 1
            }

        }
        if (mayusculas > 2 && minusculas > 1 && numeros > 5) {

            console.log(`la contraseña es segura numeros ${numeros}, minusculas ${minusculas}, mayusculas ${mayusculas}`)
        } else { console.log(`la contraseña no es segura ${numeros}, minusculas ${minusculas}, mayusculas ${mayusculas}`) }
    }

    generarPassword() {
        var result = '';
        var numeros = '0123456789';
        var minusculas = 'abcdefghijklmnñopqrstuvwxyz';
        var mayusculas = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        var mayusculasLength = mayusculas.length;
        var minusculasLength = minusculas.length;
        var numerosLength = numeros.length;
        for (var i = 0; i < 3; i++) {
            result += mayusculas.charAt(Math.floor(Math.random() * mayusculasLength));
        }
        for (var i = 0; i < 2; i++) {
            result += minusculas.charAt(Math.floor(Math.random() * minusculasLength));
        }
        for (var i = 0; i < 6; i++) {
            result += numeros.charAt(Math.floor(Math.random() * numerosLength));
        }
        return result;
    }
    seguridadPassword(contraseñaP) {
        this.contraseña = contraseñaP;
        var longitud = this.contraseña.length;

        if (longitud >= 1 && tam <= 6) {
            return "Es Debil";
        }
        if (longitud >= 7 && tam <= 10) {
            return "Es Media";
        }
        if (longitud >= 20) {
            return "Es Fuerte";
        }
    }

}

// PUNTO 6 y 7

class Contador {
    valorActualN(nuevoValor) {
        this.valorActual = nuevoValor
    }
    accionG(accionp) {
        this.accion = accionp;
        if (this.accion === 'valorActual()') {
            this.valorActual
            return `El contador es ${this.valorActual}`;
        }
        if (this.accion === 'dec()') {

            this.valorActual -= 1
            return `El contador es ${this.valorActual}`;
        }
        if (this.accion === 'inc()') {
            this.valorActual += 1
            return `El contador es ${this.valorActual}`;
        }
        if (this.accion === 'reset()') {
            this.valorActual = 0;
            return `El contador es ${this.valorActual}`;
        }
    }

    ultimoComando() {
        this.accion
        if (this.accion === 'valorActual()') {
            return `Valor actual`;
        }
        if (this.accion === 'dec()') {

            return `Decremento`;

        }
        if (this.accion === 'inc()') {
            return `Incremento`;
        }
        if (this.accion === 'reset()') {
            return `Resetear`;
        }

    }
}

//Ejercicio 8
class chimuela {
    constructor() {
        this.energia = energia;
    }
    comer(cantidad) {
        this.energia += (cantidad * 4);

    }
    volar(distancia) {
        this.energia -= (distancia + 10);
    }
    VerEnergia() {
        console.log(`Energía actual: ${this.energia}`);
    }

}
const chimuela1 = new chimuela()
chimuela1.comer(100);
chimuela1.volar(10);
chimuela1.volar(20);
chimuela1.VerEnergia();

//Ejercicio 9
class Chimuela {
    constructor() {
        this.energia = 0;
    }
    comer(cantidad) {
        this.energia += (cantidad * 4);

    }
    volar(distancia) {
        this.energia -= (distancia + 10);
    }
    VerEnergia() {
        console.log(`La energia actual es: ${this.energia}`);
    }
    estaDebil() {
        if (this.energia < 50)
            return true;
        else {
            return false;
        }
    }
    estafeliz() {
        if (this.energia >= 500 && this.energia <= 1000) {
            return true;
        }
        else {
            return false;
        }
    }
    quiereVolar() {
        let base = this.energia / 5;
        let total = 0;
        let plus = 0;
        if (this.energia >= 300 && this.energia <= 400) {
            plus += 10;
        }
        if (this.energia % 20 == 0) {
            plus += 15;
        }
        total = base + plus;
        console.log(`Quiere volar ${total} kilometros`);


    }

}
const chimuela1 = new chimuela()
chimuela1.comer(100);
chimuela1.volar(10);
chimuela1.volar(20);
chimuela1.VerEnergia();
chimuela1.estaDebil();
chimuela1.estafeliz();
chimuela1.cuandoQuiereVolar();

//Ejercicio 10
class Calculadora {
    constructor() {
        this.total = 0;
    }
    cargar(numero) {
        this.total = numero;
    }
    sumar(numero) {
        this.total += numero;
    }
    restar(numero) {
        this.total -= numero;
    }
    multiplicar(numero) {
        this.total *= numero;
    }
    valorActual() {
        console.log(`Valor actual: ${this.total}`);
    }
}

let calc = new calculadora()
calc.cargar(0);
calc.sumar(4);
calc.multiplicar(5);
calc.restar(8);
calc.multiplicar(2);
calc.valorActual();

//Ejercicio 11
class libro {
    constructor(titulo, autor, nEjemplares, nEjemplaresPrestados) {
        this.titulo = titulo
        this.autor = autor
        this.nEjemplares = nEjemplares
        this.nEjemplaresPrestados = nEjemplaresPrestados
    }
    prestar() {
        if (this.nEjemplares > 0) {
            this.nEjemplaresPrestados += 1
            this.nEjemplares -= 1
            return true
        }
        else {
            return false
        }
    }
    devolver() {
        if (this.nEjemplaresPrestados > 0) {
            this.nEjemplaresPrestados -= 1
            this.nEjemplares += 1
            return true
        }
        else {
            return false
        }
    }
    toString() {
        console.log(`Titulo: ${this.titulo}`)
        console.log(`Autor: ${this.autor}`)
        console.log(`Ejemplares disponibles: ${this.nEjemplares}`)
        console.log(`Ejemplares Prestados: ${this.nEjemplaresPrestados}`)
    }
}

//Ejercicio 12
class Enterprise {
    constructor(potencia, coraza) {
        this.potencia = 50;
        this.coraza = 5;
    }
    encontrarPilaAtomica() {
        if (this.potencia >= 100) {
            console.log("Potencia Maxima");
        }
        else {
            this.potencia += 25;
        }
        if (this.potencia > 100) {
            this.potencia = 100;
        }
        console.log(`La potencia actual es de ${this.potencia}`);
    }

    encontrarEscudo() {
        if (this.coraza >= 20) {
            console.log("Escudo Maximo");
        }
        else {
            this.coraza += 10;
        }
        if (this.coraza > 20) {
            this.coraza = 20;
        }
        console.log(`La coraza actual es de ${this.coraza}`);
    }

    recibirAtaque(puntosDaño) {
        let total = this.coraza - puntosDaño;
        if (total >= 0) {
            this.coraza = total;
        }
        if (total < 0) {
            this.coraza = 0;
            this.potencia -= (total * -1);
        }
    }
    mostrarStats() {
        console.log("los stats actuales son: ");
        console.log(`La coraza actual es de ${this.coraza}`);
        console.log(`La potencia actual es de ${this.potencia}`);
    }

}

let nave1 = new enterprise()
nave1.encontrarPilaAtomica();
nave1.recibirAtaque(14);
nave1.encontrarEscudo();
nave1.mostrarStats();

//Ejercicio 13
class Enterprise {
    constructor(potencia, coraza) {
        this.potencia = 50;
        this.coraza = 5;
    }
    encontrarPilaAtomica() {
        if (this.potencia >= 100) {
            console.log("Potencia Maxima");
        }
        else {
            this.potencia += 25;
        }
        if (this.potencia > 100) {
            this.potencia = 100;
        }
        console.log(`La potencia actual es de ${this.potencia}`);
    }

    encontrarEscudo() {
        if (this.coraza >= 20) {
            console.log("Escudo Maximo");
        }
        else {
            this.coraza += 10;
        }
        if (this.coraza > 20) {
            this.coraza = 20
        }
        console.log(`La coraza actual es de ${this.coraza}`);
    }

    recibirAtaque(puntosDaño) {
        let total = this.coraza - puntosDaño;
        if (total >= 0) {
            this.coraza = total;
        }
        if (total < 0) {
            this.coraza = 0;
            this.potencia -= (total * -1);
        }
    }
    mostrarStats() {
        console.log("los stats actuales son: ");
        console.log(`La coraza actua es de ${this.coraza}`);
        console.log(`La potencia actual es e ${this.potencia}`);
    }
    fortalezaDefensiva() {
        return this.coraza + this.potencia;
    }
    necesitaFortalecer() {
        if (this.potencia <= 20 && this.coraza == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    fortalezaOfensiva() {
        if (this.potencia < 20) {
            return 0;
        }
        if (this.potencia > 20) {
            return (this.potencia - 20) / 2;
        }
    }
}

//Ejercicio 14
class Motor {
    constructor() {
        this.cambioActual = 0;
        this.rpm = 0;
        this.velocidad = 0;
        this.consumo = 0;
    }
    arrancar() {
        this.cambioActual = 1;
        this.rpm = 500;
    }
    subirCambio() {
        this.cambioActual += 1;;
    }
    bajarCambio() {
        this.cambioActual -= 1;
    }
    subirRPM(cantidad) {
        this.rpm += cantidad;
    }
    bajarRPM(cantidad) {
        this.rpm -= cantidad;
    }
    velocidadTotal() {
        this.velocidad = (this.rpm / 100) * (0.5 + (this.cambioActual / 2));
    }
    consumoActualPorKm() {
        this.consumo = 0.5;
        if (this.cambioActual == 1) {
            this.consumo *= 3;
        }
        if (this.cambioActual == 2) {
            this.consumo *= 2;
        }
        if (this.rpm > 3000) {
            let calculo = (this.rpm - 2500) / 500;
            this.consumo = this.consumo * calculo;
        }
        return this.consumo;
    }
}


// // Este es el primer script
// console.log("Hola Mundo!");
// // Este es el segundo mensaje
// console.log("Soy el primer script");


// // ejercicio 2
// var mensaje = "Hola Mundo!\nQué facil es incluir 'comillas simples'\ny \"comillas dobles\"";
// // alert(mensaje);

// // ejercicio 3
// console.log("\n");

// var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
// console.log(meses);

// // ejercicio 4
// console.log("\n");

// var valores = [true, 5, false, "hola", "adios", 2];
// console.log(valores);

// // 4.1
// console.log("\n");

// if (meses.length > valores.length) console.log("'meses' es más largo que 'valores'");
// else console.log("'valores' es más largo que 'meses'");

// // 4.2
// console.log("\n");

// var true_ = valores[0] || valores[2];
// var false_ = valores[0] && valores[2];

// console.log("true_: " + true_);
// console.log("false_: " + false_);

// // 4.3
// console.log("\n");

// var num1 = valores[1];
// var num2 = valores[5];

// console.log("Suma: " + num1 + num2);
// console.log("Resta: " + (num1 - num2));
// console.log("Multiplicación: " + num1 * num2);
// console.log("Division: " + num1 / num2);
// console.log("Modulo: " + num1 % num2);

// // ejercicio 5
// console.log("\n");

// var numero1 = 5;
// var numero2 = 8;

// if (numero1 < numero2) {
//     console.log("numero1 no es mayor que numero2");
// }
// if (numero2 > 0) {
//     console.log("numero2 es positivo");
// }
// if (numero1 < 0 || numero1 != 0) {
//     console.log("numero1 es negativo o distinto de cero");
// }
// if (numero1 + 1 <= numero2) {
//     console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
// }

// // ejercicio 6
// var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
// var numeroDNI = prompt("Ingrese los numeros del DNI: ");
// var letraDNI = prompt("Ingrese las letras del DNI: ");

// if (!parseInt(numeroDNI)) {
//     alert("Los numeros contienen letras");
// }
// else {
//     var numDNI = parseInt(numeroDNI);

//     if (numDNI < 0 || numDNI > 99999999) {
//         alert("Los numeros estan fuera de los rangos 0 - 99999999");
//     }
//     else {
//         var resto = numDNI % 23;
//         var letraCalculada = letras[resto];

//         if (letraCalculada === letraDNI.toUpperCase()) {
//             alert("El DNI es correcto.");
//         } else {
//             alert("El DNI es incorrecto. es " + letraCalculada);
//         }
//     }
// }

// // ejercicio 7
// var numero = parseInt(prompt("ingrese un numero y caclulare su factorial: "));

// if (isNaN(numero) || numero < 0) {
//     alert("numero invalido");
// } else {
//     var factorial = 1;

//     for (var i = 1; i <= numero; i++) {
//         factorial *= i;
//     }

//     alert("El factorial de " + numero + " es " + factorial);
// }


// // ejercicio 8
// function parImpar(num){
//     if(num % 2 === 0){
//         return "El numero es par"
//     }
//     else{
//         return "El numero es impar"
//     }
// }

// var num = parseInt(prompt("Ingrese numero y determinare si es Par o Impar: "));
// if (isNaN(num)) {
//     alert("numero Invalido");
// } else {
//     var resultado = parImpar(num);
//     alert(resultado);
// }


// // ejercicio 9
// function analizarCadena(cadena) {
//     if (cadena === cadena.toUpperCase()) {
//         return "La cadena tiene solo MAYUSCULAS";
//     }
//     else if (cadena === cadena.toLowerCase()) {
//         return "La cadena tiene solo minúsculas";
//     } 
//     else {
//         return "La cadena es MiXtA";
//     }
// }

// var cadena = prompt("Ingrese una cadena: ");
// alert(analizarCadena(cadena));


// // ejercicio 10
// function palindromo(cadena) {
//     // eliminar espacios cadena
//     cadena = cadena.replace(/ /g, '').toLowerCase();

//     // Invertir cadena
//     var cadenaInvertida = cadena.split('').reverse().join('');

//     // comparar
//     return cadena === cadenaInvertida;
// }

// var cadena = prompt("Ingrese una cadena y vere si es palindromo: ");
// if(palindromo(cadena)){
//     alert("Es un palindromo");
// }else {
//     alert("No es un palindromo")
// }

// // ejercicio 11

// // PERSONA
// function Persona(nombre, edad, género) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.género = género;
// }
// //detalle
// Persona.prototype.obtDetalles = function () {
//     console.log("Nombre: " + this.nombre);
//     console.log("Edad: " + this.edad);
//     console.log("Género: " + this.género);
// }



// // ESTUDIANTE
// function Estudiante(nombre, edad, género, curso, grupo) {
//     Persona.call(this, nombre, edad, género);
//     this.curso = curso;
//     this.grupo = grupo;
// }
// Estudiante.prototype = Object.create(Persona.prototype);
// // registrar
// Estudiante.prototype.registrar = function () {
//     console.log("Curso: " + this.curso);
//     console.log("Grupo: " + this.grupo);
// }


// // PROFESOR
// function Profesor(nombre, edad, género, asignatura, nivel) {
//     Persona.call(this, nombre, edad, género);
//     this.asignatura = asignatura;
//     this.nivel = nivel;
// }
// Profesor.prototype = Object.create(Persona.prototype);
// // asignar
// Profesor.prototype.asignar = function () {
//     console.log("Asignatura: " + this.asignatura);
//     console.log("Nivel: " + this.nivel);
// }




// // Crear objetos y casos de prueba
// var estudiante1 = new Estudiante("Juan", 20, "Masculino", "Programación", "A");
// var profesor1 = new Profesor("María", 35, "Femenino", "Matemáticas", "Avanzado");

// console.log("Detalles del estudiante:");
// estudiante1.obtDetalles();
// estudiante1.registrar();

// console.log("\nDetalles del profesor:");
// profesor1.obtDetalles();
// profesor1.asignar();

// // ejercicio 12

// var resultadosDados = new Array(11).fill(0);

// // Realizar 36,000 lanzamientos de dados
// for (var i = 0; i < 36000; i++) {
//     var dado1 = Math.floor(Math.random() * 6) + 1;
//     var dado2 = Math.floor(Math.random() * 6) + 1;
//     var suma = dado1 + dado2;
//     resultadosDados[suma - 2]++;
// }

// // Mostrar los resultados
// for (var i = 0; i < resultadosDados.length; i++) {
//     console.log("Suma " + (i + 2) + " aparecio " + resultadosDados[i] + " veces");
// }

// console.log(resultadosDados)

// // ejercicio 13

// var texto = "Nací el 05/04/1982 en Donostia.";
// var expresionFecha = /\d{2}\/\d{2}\/\d{4}/;
// if (expresionFecha.test(texto)) {
//     console.log("La fecha es válida.");
// } else {
//     console.log("La fecha no es válida.");
// }



// var email = "mi-correo@mail.com";
// var expresionEmail = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/;
// if (expresionEmail.test(email)) {
//     console.log("La dirección de correo electrónico es válida.");
// } else {
//     console.log("La dirección de correo electrónico no es válida.");
// }



// var nombreCompleto = "John Smith";
// var expresionNombreApellido = /(\w+)\s(\w+)/;
// var resultado = nombreCompleto.replace(expresionNombreApellido, "$2, $1");
// console.log(resultado);



// var html = "<p>Este es un <script>script peligroso</script> en HTML.</p>";
// var expresionEliminarScript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
// var htmlLimpio = html.replace(expresionEliminarScript, "");
// console.log(htmlLimpio);

// ejercicio 14
// 14.1
// var pagina = document;

// var enlaces = pagina.getElementsByTagName("a");
// console.log("enlaces: " + enlaces.length);

// // 14.2
// if (enlaces.length >= 2) {
//     var penultimoEnlace = enlaces[enlaces.length - 2];
//     var direccionPenultimoEnlace = penultimoEnlace.href;
//     console.log("Dirección a la que enlaza el penúltimo enlace: " + direccionPenultimoEnlace);
// } else {
//     console.log("No hay suficientes enlaces en la página para obtener el penúltimo enlace.");
// }


// // 14.3
// var enlacesAPrueba = document.querySelectorAll('a[href="http://prueba"]');
// console.log("Número de enlaces que enlazan a http://prueba: " + enlacesAPrueba.length);


// // 14.4
// var parrafos = pagina.getElementsByTagName("p");
// if (parrafos.length >= 3) {
//     var tercerParrafo = parrafos[2];
//     var enlacesEnTercerParrafo = tercerParrafo.getElementsByTagName("a");
//     console.log("Número de enlaces del tercer párrafo: " + enlacesEnTercerParrafo.length);
// } else {
//     console.log("No hay suficientes párrafos en la página para obtener el tercer párrafo.");
// }

// // ejercicio 15
// function muestra(enlace) {
//     var adicional = document.querySelector(".adicional");

//     adicional.style.display = "inline";

//     enlace.style.display = "none";
// }

// // ejercicio 16
// function anade() {
//     var lista = document.getElementById("lista");

//     var nuevoElemento = document.createElement("li");
//     var nuevoTexto = document.createTextNode("Nuevo Elemento");
//     nuevoElemento.appendChild(nuevoTexto);
    
//     lista.appendChild(nuevoElemento);
// }

// ejercicio 17
function toggleSection(sectionNumber) {
    var seccion = document.querySelector("div:nth-of-type(" + sectionNumber + ") p");
    var enlace = document.querySelector('a[onclick^="toggleSection(' + sectionNumber + ')"');

    if (seccion.style.display === 'none' || seccion.style.display === '') {
        seccion.style.display = 'block';
        enlace.textContent = 'Ocultar contenidos';
    } else {
        seccion.style.display = 'none';
        enlace.textContent = 'Mostrar contenidos';
    }
}

// // ejercicio 18
// document.addEventListener("DOMContentLoaded", function () {
//     var raton = document.getElementById("raton");
//     var teclado = document.getElementById("teclado");

//     var mensajeRaton = raton.querySelector("div");
//     var mensajeTeclado = teclado.querySelector("div");

//     document.addEventListener("mousemove", function (event) {
//         var x = event.clientX;
//         var y = event.clientY;
//         mensajeRaton.textContent = "Ratón: X=" + x + " Y=" + y;
//         raton.style.backgroundColor = "#FFFFFF"; // Fondo blanco
//         teclado.style.backgroundColor = "#FFFFFF"; // Fondo blanco
//     });

//     document.addEventListener("keydown", function (event) {
//         mensajeTeclado.textContent = "Teclado: Tecla presionada: " + event.key;
//         raton.style.backgroundColor = "#CCE6FF"; // Fondo azul
//         teclado.style.backgroundColor = "#CCE6FF"; // Fondo azul
//     });

//     document.addEventListener("mousedown", function () {
//         raton.style.backgroundColor = "#FFFFCC"; // Fondo amarillo
//         teclado.style.backgroundColor = "#FFFFCC"; // Fondo amarillo
//     });
// });


// // ejercicio 19

// // ejercicio 20

// // ejercicio 21
// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("registro");
//     const nombreInput = document.getElementById("registro_nombre");
//     const emailInput = document.getElementById("registro_email");
//     const comentariosTextarea = document.getElementById("registro_comentarios");
//     const passwordInput = document.getElementById("registro_password");

//     nombreInput.addEventListener("blur", validarNombre);
//     emailInput.addEventListener("blur", validarEmail);
//     comentariosTextarea.addEventListener("blur", validarComentarios);
//     passwordInput.addEventListener("blur", validarPassword);

//     function validarNombre() {
//         const nombre = nombreInput.value.trim();
//         if (nombre === "") {
//             alert("El nombre es obligatorio.");
//         }
//     }

//     function validarEmail() {
//         const email = emailInput.value.trim();
//         const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         if (!emailRegex.test(email)) {
//             alert("El email no es válido.");
//         }
//     }

//     function validarComentarios() {
//         const comentarios = comentariosTextarea.value.trim();
//         if (comentarios.length > 50) {
//             alert("Los comentarios no deben exceder los 50 caracteres.");
//         }
//     }

//     function validarPassword() {
//         const password = passwordInput.value;
//         const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
//         if (!passwordRegex.test(password)) {
//             alert("La contraseña debe tener al menos 6 caracteres, una letra minúscula, una letra mayúscula y un dígito.");
//         }
//     }

//     form.addEventListener("submit", function (event) {
//         if (
//             nombreInput.value.trim() === "" ||
//             emailInput.value.trim() === "" ||
//             comentariosTextarea.value.trim() === ""
//         ) {
//             alert("Los campos nombre, email y comentarios son obligatorios.");
//             event.preventDefault();
//         }
//     });
// });


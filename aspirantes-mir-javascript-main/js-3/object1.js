let persona = {
  nombre: "Pedro Perez",
  edad: 30,
  hobbies: ["programar", "squash", "piano"],
  estatura: 1.8
}
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.hobbies);
console.log(persona.estatura);

let person = {
    nombre: "Pedro Perez",
    sayHi: function() {
      console.log("Hola, me llamo " + this.nombre);
    }
  }
  
  person.sayHi()// "Hola, me llamo Pedro"
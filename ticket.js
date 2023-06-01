
const estudiante = document.querySelector('#estudiante');
const trainee    = document.querySelector('#trainee');
const junior = document.querySelector('#junior');
const cantidad = document.querySelector('#cantidad');

const resultados = document.querySelector('#resultado');

const resumen = document.querySelector('#resumen')

const estudiante2 = cantidad => cantidad * 200*0.20;
// const estudiante2 = function(cantidad){return cantidad *200*0.80}
console.log(estudiante2(2))

const trainee2 = cantidad => cantidad * 200*0.50;
// const estudiante2 = function(cantidad){return cantidad *200*0.80}
console.log(trainee2(2))

const junior2 = cantidad => cantidad * 200*0.85;
// const estudiante2 = function(cantidad){return cantidad *200*0.80}
console.log(junior2(2))



// resumen.addEventListener('click', estudiante2){
//     resultados.innerHTML = estudiante2.value;
// }
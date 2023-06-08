// const estudiante = document.querySelector('#estudiante');
// const trainee    = document.querySelector('#trainee');
// const junior = document.querySelector('#junior');
const resultados = document.querySelector('#resultado'); //es el P
const resumen = document.querySelector('#resumen'); // es el boton
resumen.addEventListener('click', precioticket);
const cantidad = document.querySelector('#cantidad');
// cantidad.addEventListener('click';cantidad2)
const categoria = document.querySelector('#categoria');
// categoria.addEventListener('click';categoria2)
const borrar = document.querySelector('#borrar');
borrar.addEventListener('click', limpiarFormulario);


function precioticket(evento) {
    evento.preventDefault();
    if (Number(cantidad.value)) {
        let pagototal
        switch (categoria.value) {
            case "estudiante": {
                pagototal = 200 * cantidad.value * 0.20;
                break;
            }
            case "trainee": {
                pagototal = 200 * cantidad.value * 0.50;
                break;
            }
            case "junior": {
                pagototal = 200 * cantidad.value * 0.85
                break;
            }
        }
      
        resultados.innerHTML = pagototal
        
    }
    if (nombre.value.length=="" && apellido.value.length=="" && correo.value.length=="") {
        alert("Debe ingresar los datos")
            resultados.innerHTML="Debe completar los campos obligatorios"
        }
   
}


function limpiarFormulario() {
    resultados.innerHTML = "";
    document.getElementById(".formulario").reset();
   
  } 

  const nombre = document.querySelector('#nombre');
  const apellido = document.querySelector('#apellido');
  const correo = document.querySelector('#exampleFormControlInput1')


//   if (nombre.value == "") {
//     alert("Debe ingresar el Nombre")}


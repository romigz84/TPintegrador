const resultados = document.querySelector('#resultado'); //es el P
const resumen = document.querySelector('#resumen'); // es el boton
const cantidad = document.querySelector('#cantidad');
const categoria = document.querySelector('#categoria');
const borrar = document.querySelector('#borrar');
borrar.addEventListener('click', limpiarFormulario);

resumen.addEventListener('click', (evento) => {
    evento.preventDefault();
    precioticket();
    comprobacion();
})

function precioticket() {
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
            default: (pagototal = cantidad.value * 200)
        }
        resultados.innerHTML = pagototal
    }

}

function limpiarFormulario() {
    resultados.innerHTML = "";
    document.getElementById(".formulario").reset();

}
let nombre = document.querySelector('#nombre');
let apellido = document.querySelector('#apellido');
let correo = document.querySelector('#exampleFormControlInput1')

function comprobacion() {
    nombre = document.querySelector('input[placeholder="Nombre"]').value;
    apellido = document.querySelector('input[placeholder="Apellido"]').value;
    correo = document.querySelector('input[placeholder="Correo"]').value;

    if (nombre == '' && apellido == '' && correo == '') {
        alert('COMPLETA LOS CAMPOS');
        return
    }
    else if (nombre == '') {
        alert('ingresa tu nombre')
        return
    }
    else if (apellido == '') {
        alert('ingresa tu apellido')
        return
    }
    else if (correo == '') {
        alert('ingresa tu correo')
        return
    }
    else if (cantidad.value == '' || cantidad.value == 0) {
        alert('ingresa la cantidad')
        return
    }

}


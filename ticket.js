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

function precioticket(evento){
    evento.preventDefault();
    if (Number(cantidad.value)){
        let pagototal
        switch(categoria.value){
            case "estudiante": {
                pagototal = 200*cantidad.value*0.20;
                break;
            }
            case "trainee": {
                    pagototal = 200*cantidad.value*0.50;
                break;
            }
            case "junior": {
                    pagototal = 200*cantidad.value*0.85
                break;
            }
            }
            resultados.innerHTML=pagototal
        }
    }




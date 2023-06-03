


let btn_comprar=document.getElementById("btn_comprar");

let hideTicket=document.getElementById("hideTicket");

btn_comprar.addEventListener('click', toggle);

function toggle(){

    hideTicket.classList.toggle('show');


}





let cantidad = document.querySelector('#cantidad');
categoria = document.querySelector('#inputCategoria');
let totalAPagar = document.querySelector('#importeTotal');
let btn_resumen = document.querySelector('.btn_resumen');
let btnBorrar = document.querySelector('.btnBorrar');
let formulario = document.querySelector('.formTicket');



cantidad.addEventListener('input', function(event){
    cantidad = event.target.value;
});

categoria.addEventListener('change', function(event){
    categoria = event.target.value;
});


btn_resumen.addEventListener('click' , function(event){

    let resultado = 0;    

    switch (categoria) {
        case 'Estudiante':
            resultado = (200*cantidad)*0.2;
            console.log("La categoria seleccionada es (E): " + categoria);
          break;
        case 'Trainee':
            resultado = (200*cantidad)*0.5;
            console.log("La categoria seleccionada es (T): " + categoria);
          break;
        case 'Junior':
            resultado = (200*cantidad)*0.85;
            console.log("La categoria seleccionada es (J): " + categoria);
          break;
        default:
          resultado=200*cantidad;
          break;
      }

      
    totalAPagar.textContent= "Total a Pagar: $ "+resultado;

    return;
});


  btnBorrar.addEventListener('click' , function(){

    totalAPagar.textContent="Total a Pagar: $";
    formulario.reset();

});

window.addEventListener('load', ()=>{
    //Creo un array con los valores para crear colores hexadecimales
    const colors = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

    //Creo la variable  donde guardaremos el numero hexadeciml creado
    var colourHex = '#';

    //Creo las variables constantes del boton y del span y las variables para el cuerpo de de la app
    const colour = document.getElementById('name_color');
    const button = document.querySelector('#button');
    var main = document.body;
    
    //Al clickar el boton mostramos el tipo de color por pantalla mediante texto y
    //poniendo color al elemento div
    button.addEventListener('click', ()=>{
        for(var i = 0; i<6; i++){
            var numberRandom = Math.floor(Math.random()*15);
            
            var number = colors[numberRandom];
            colourHex += number;

            colour.innerHTML=colourHex;
            main.style.backgroundColor = colourHex;
            
        }
        colourHex = '#'
    });

});
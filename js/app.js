window.addEventListener('load',()=>{
    //Creo un array con los colores
    const colors = ["red", "green", " #F1C40F", " #6C3483", "dodgerblue", " #95A5A6", "pink"];

    //Creo las variables constantes del boton y del span y las variables para el cuerpo de de la app
    const colour = document.getElementById('name_color');
    const button = document.querySelector('#button');
    var main = document.body;
    
    //Al clickar el boton mostramos el tipo de color por pantalla mediante texto y
    //poniendo color al elemento div
    button.addEventListener('click', ()=>{
        var numberRandom = Math.floor(Math.random()*7);
        colour.innerHTML=colors[numberRandom];
        main.style.backgroundColor = colors[numberRandom];
    });
});
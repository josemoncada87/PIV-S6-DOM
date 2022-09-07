let listaMensajes = document.querySelector("#lista-mensajes");

let listaEnMemoria = [];
listaEnMemoria = localStorage.getItem('mensajes');
if(listaEnMemoria == null){
    listaEnMemoria = [];
}else{
    let items = listaEnMemoria.split(",");
    console.log(items[0]);
    for(let i = 0 ; i < items.length ; i++ ){
         // creación
        let itemDeLista = document.createElement('li');
        itemDeLista.textContent = items[i];
        listaMensajes.appendChild(itemDeLista);
    }
}
console.log(listaEnMemoria);

const boton = document.querySelector("#btn");
boton.addEventListener("click", (ev) => {
    ev.preventDefault();
    let mensaje = document.querySelector("#mensaje");

    // creación
    let itemDeLista = document.createElement('li');
    itemDeLista.textContent = mensaje.value;

    // agregar a la a lista
    listaMensajes.appendChild(itemDeLista);

    //agregar a la memoria (lista en memoria)
    listaEnMemoria+=","+mensaje.value;
    localStorage.setItem('mensajes', listaEnMemoria);
});
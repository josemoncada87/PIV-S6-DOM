// Ejemplo en consola
let conteo = 0;
while(conteo<=10){
    // instrucciones
    console.log(conteo);
    conteo++;
}
console.log("-----------------");
for(let i = 0; i < 10; i++){
    // 
    console.log(i);
}

// ejemplo con el DOM
const contenedor = document.querySelector("#contenedor");
let nombres = ["Juan", "Diana", "Martin", "Manuela", "Jaime", "Estela", "Andrés", "Tatiana", "Ana", "Pedro"];
for(let i = 0; i < 10; i++){
    let nuevoElemento = document.createElement('p');
    nuevoElemento.textContent = "cliente: " + nombres[i];
    contenedor.appendChild(nuevoElemento);
}




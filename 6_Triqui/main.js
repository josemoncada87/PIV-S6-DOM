let turno = 1;
let casillas = document.querySelectorAll(".casilla");
for(let casilla = 0; casilla < 9 ; casilla++){
    let item = casillas[casilla];    
    item.addEventListener('click', (ev)=>{
        console.log(ev.target);
        let currentItem = ev.target;
        if(currentItem.textContent == '-'){
            if(turno == 1){
                currentItem.textContent = 'X';
                turno = 2;
            }else{
                currentItem.textContent = 'O';
                turno = 1;
            }  
        }
    });
}
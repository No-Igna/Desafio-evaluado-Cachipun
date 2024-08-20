// piedra, papel, tijeras 
let jugador, computadora, repeticion, victorias=0, partidas=0,star;
function jugar(){
    star=``;
    jugador = parseInt(document.getElementById("jugador").value);
    computadora=cpu();
    switch (jugador) {
        case 0:
            document.getElementById("show").innerHTML=`
            <p>por favor, selecionar una opcion valida</p>`;
            break;
        case 1:
            document.getElementById("selected-1").innerHTML=`
                <i class="selection__icon fa-regular fa-hand-back-fist"></i>`;
            if (computadora=="piedra") {
                document.getElementById("show").innerHTML=`
                <p>Esta ronda fue un empate.</p>`;
            }else
            if(computadora=="tijeras"){
                document.getElementById("show").innerHTML=`
                <p>Has ganado esta ronda!</p>`;
                victorias+=1;
            }else{
                document.getElementById("show").innerHTML=`
                <p>La CPU ha ganado esta ronda!</p>`;
            }
            partidas+=1;
            break;
        case 2:
            document.getElementById("selected-1").innerHTML=`
                <i class="selection__icon fa-regular fa-hand"></i>`;
            if (computadora=="papel") {
                document.getElementById("show").innerHTML=`
                <p>Esta ronda fue un empate.</p>`;  
            }else
            if(computadora=="tijeras"){
                document.getElementById("show").innerHTML=`
                <p>La CPU ha ganado esta ronda!</p>`;
            }else{
                document.getElementById("show").innerHTML=`
                <p>Has ganado esta ronda!</p>`;
                victorias+=1;
            }
            partidas+=1;
            break;
        case 3:
            document.getElementById("selected-1").innerHTML=`
                <i class="selection__icon fa-regular fa-hand-scissors"></i>`;
            if (computadora=="piedra") {
                document.getElementById("show").innerHTML=`
                <p>La CPU ha ganado esta ronda!</p>`;  
            }else
            if(computadora=="tijeras"){
                document.getElementById("show").innerHTML=`
                <p>Esta ronda fue un empate.</p>`;
            }else{
                document.getElementById("show").innerHTML=`
                <p>Has ganado esta ronda!</p>`;
                victorias+=1;
            }
            partidas+=1;
            break;
        default:
            break;
    }
    for (let i = 0; i < victorias; i++) {
        star+=`<i class="fa-solid fa-star"> </i>`;
    }
    document.getElementById("stars").innerHTML=star;    
    final();
    return partidas,victorias;
}
function cpu(){
    computadora=Math.floor(Math.random()*3);
    switch (computadora) {
        case 0:
            computadora="piedra";
            document.getElementById("selected-2").innerHTML=`
                <i class="selection__icon fa-regular fa-hand-back-fist"></i>`
            break;
        case 1:
            computadora="papel";
            document.getElementById("selected-2").innerHTML=`
                <i class="selection__icon fa-regular fa-hand"></i>`
            break;
        case 2:
            computadora="tijeras";
            document.getElementById("selected-2").innerHTML=`
                <i class="selection__icon fa-regular fa-hand-scissors"></i>`
            break;
        default:
            break;
    }
    return computadora;
}
function repetir(){
    repeticion = parseInt(document.getElementById("repeticiones").value);
    document.getElementById("mostrar").innerHTML=`
                <div class="col-12 d-flex justify-content-evenly my-5">
                            <select class="form-select" aria-label="Default select example" id="jugador">
                                <option value="0">Seleccione una opcion</option>
                                <option value="1">piedra</option>
                                <option value="2">papel</option>
                                <option value="3">tijeras</option>>
                            </select>
                        </div>
                        <div class="col-12 d-flex justify-content-evenly my-5">
                            <button type="button" class="btn btn-outline-primary" onclick="jugar()">Jugar</button>
                            <button type="button" class="btn btn-outline-primary" onclick="reinicio()">Reset</button>
                        </div>`;
    return repeticion,partidas;
}
function reinicio(){
    victorias=0;
    partidas=0;
    document.getElementById("mostrar").innerHTML=`
                <div class="mb-3">
                                <label for="numberOfGames" class="form-label">Definir numero de partidas</label>
                                <input type="text" class="form-control" id="repeticiones">
                            </div>
                            <div class="col-12 d-flex justify-content-evenly my-5">
                                <button type="button" class="btn btn-outline-primary" onclick="repetir()">Empezar</button>
                            </div>`;
    document.getElementById("stars").innerHTML=``;
    document.getElementById("show").innerHTML=``;    
}
function final() {
    if(partidas>=repeticion){
        if(victorias==partidas/2){
            document.getElementById("show").innerHTML=`
                    <p>Se jugaron: ${partidas} partidas.<br>
                    De las cuales ganaste: ${victorias}</p>
                    <h3>Empataste con la CPU</h3>`;
        }else if(victorias>partidas/2){
            document.getElementById("show").innerHTML=`
                    <p>Se jugaron: ${partidas} partidas.<br>
                    De las cuales ganaste: ${victorias}</p>
                    <h3>GANASTE!</h3>`;
        }else{
            document.getElementById("show").innerHTML=`
                    <p>Se jugaron: ${partidas} partidas.<br>
                    De las cuales ganaste: ${victorias}</p>
                    <h3>Perdiste...</h3>`;            
        }
        document.getElementById("mostrar").innerHTML=`
                <p>Eso es todo!</p>
                <button type="button" class="btn btn-outline-primary" onclick="reinicio()">Volver a empezar</button>`;
    }
}

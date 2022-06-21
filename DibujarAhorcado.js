function dibujarHorca(){

//Base
   if(errores == 1){ 
    dibujaAhorcado(200,500,1000,500)
}
//Mástil
   if(errores == 2){
    dibujaAhorcado(300,500,300,100)
    dibujaAhorcado(300,100,500,100)
    dibujaAhorcado(500,100,500,150)
}
//Cabeza
   if(errores == 3){
    dibujaCabeza();
    
}
//Tronco
   if(errores == 4){
    dibujaAhorcado(500,220,500,300)
}
//Pierna izq
   if(errores == 5){
    dibujaAhorcado(500,300,475,365)
}
//Pierna der
   if(errores == 6){
    dibujaAhorcado(500,300,525,365)
}
//Brazo izq
   if(errores == 7){
    dibujaAhorcado(500,250,450,280)
}
//Brazo der
   if(errores == 8){
    dibujaAhorcado(500,250,550,280)
  
}    
if(errores == 9){
    dibujarCara()
    alert("Perdiste, la palabra era: " + palabraSecreta)
    document.onkeydown = false;
}

}
function dibujaAhorcado(xInicial,yInicial,xFinal,Yfinal){

tablero.lineWidth = 6;
tablero.lineJoin = "round";
tablero.linecap = "round";
tablero.strokeStyle = "#0A3871";
tablero.beginPath();

tablero.moveTo(xInicial,yInicial);
tablero.lineTo(xFinal,Yfinal);

tablero.stroke()
tablero.closePath()

}

function dibujaCabeza(){
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath();
    tablero.arc(500, 185, 35, 0, 2 * Math.PI, false);
    tablero.stroke();
  
    
}


function dibujarCara(){
    var img = new Image();
    img.src = "img/cara.png"
    img.onload = function(){
        tablero.drawImage(img, 440,133,120,120)
  }
}

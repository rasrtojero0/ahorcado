//VARIABLES

var palabras = ["ALURA","AHORCADO","JAVASCRIPT","ORACLE"]
var tablero = document.getElementById("horca").getContext("2d");
var letras = [];
var palabraCorrecta = "";
var errores = 0;
var ganar = []


//FUNCIONES-------------------------------
//Funcion general 
function Jugar(){

    //Sorteo de palabra
    function elegirPalabra(){
        var palabra = palabras[Math.floor(Math.random()*palabras.length)]
        console.log(palabra);
        palabraSecreta = palabra;
       
        return palabraSecreta; 
    }   
       
    //Dibuja lineas en el canvas   
    function dibularLines(){
        tablero.lineWidth = 6;
          tablero.lineJoin = "round";
           tablero.linecap = "round";
           tablero.strokeStyle = "#0A3871";
           tablero.beginPath();
       
        var ancho = 600/palabraSecreta.length;
       
        for(var i = 0; i < palabraSecreta.length; i++){
            tablero.moveTo(300+(ancho * i) ,640);
            tablero.lineTo(350+(ancho * i) ,640)
        }
        tablero.stroke()
        tablero.closePath()
        
    }
       
    dibularLines(elegirPalabra())
    
    //Escribe letras correctas en el canvas
    function escribirLetras(index){
           tablero.font = "bold 52px inter"
           tablero.lineJoin = "round";
           tablero.linecap = "round";
           tablero.strokeStyle = "#0A3871";
           
           var ancho = 600/palabraSecreta.length;
           tablero.fillText(palabraSecreta[index],305+(ancho * index) ,620)
    }
    
    //Escribe letras correctas en el canvas
    function escribirLetraIncorrecta(letra,errorsLeft){
           tablero.font = "bold 40px inter"
           tablero.lineJoin = "round";
           tablero.linecap = "round";
           tablero.strokeStyle = "#0A3871";
       
           tablero.fillText(letra, 335+(40*(10-errores)),710,40)
    }
    
    
    function verificarLetraInput(key){
        if(letras.length<1 || letras.indexOf(key)<0){
           letras.push(key);
           return false    
        }else{
           letras.push(key);
           return true  
        }
       
    }


    
    function adicionarLetraCorrecta(i){
        palabraCorrecta += palabraSecreta[i].toUpperCase();
        
    }
       
       
       
    function adicionarLetraInCorrecta(letter){
        if(palabraSecreta.indexOf(letter)<=0){
            errores+=1;
            dibujarHorca(errores)
        }
    }

    //Evento al presionar tecla
    
    document.onkeydown = (e)=> {
        let letra = e.key.toUpperCase();
        
        if(!verificarLetraInput(e.key)){
            if(palabraSecreta.includes(letra)){
              console.log(letra);
             
              adicionarLetraCorrecta(palabraSecreta.indexOf(letra))
                for(let i = 0; i < palabraSecreta.length; i++){
                 if(palabraSecreta[i]===letra){
                     escribirLetras(i)
                     ganar.push(i)
                     verificar()
                    
                }
            }   
        }else{
              if(!verificarLetraInput(e.key))return
              adicionarLetraInCorrecta(letra);
              escribirLetraIncorrecta(letra,errores)
        }
        }
    }    
  
    function verificar(){
        if(ganar.length == palabraSecreta.length){
            alert("ganaste!")
            document.onkeydown = false;
        }
        
    }

    }
         
       


    
  






    

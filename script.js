//Seleccion de elementos

var boton1 = document.querySelector("#div1-bto1");
var boton2 = document.querySelector("#div1-bto2");
var boton3 = document.querySelector("#div2-bto1");
var boton4 = document.querySelector("#div2-bto2");
var boton5 = document.querySelector("#div3-bto1");
var boton6 = document.querySelector("#div3-bto2");


var div1 = document.querySelector("#div1");
var div2 = document.querySelector("#div2");
var div3 = document.querySelector("#div3");

var texto = document.querySelector(".textoDiv2");

//FUNCIONES mostrar y ocultar div

boton1.addEventListener("click",function(){
    document.getElementById("div3").style.display = "flex";
    document.getElementById("div1").style.display = "none";
    Jugar()
})

boton2.addEventListener("click",function(){
    document.getElementById("div2").style.display = "flex";
    document.getElementById("div1").style.display = "none";
})

boton3.addEventListener("click",function(){
  
validarEntrada()
   
})

boton4.addEventListener("click",function(){
    document.getElementById("div1").style.display = "flex";
    document.getElementById("div2").style.display = "none";
})

boton5.addEventListener("click",function(){
    location.reload()
      

})


boton6.addEventListener("click",function(){
    document.getElementById("div1").style.display = "flex";
    document.getElementById("div3").style.display = "none";
    location.reload();
})

// boton8.addEventListener("click",() => {
//         document.getElementById("div1").style.display = "flex";
//         document.getElementById("div4").style.display = "none";
//     })
function validarEntrada(){
 
    const permitido = /[A-Z\ a-z\ ]+$/;
    
    if(permitido.test(texto.value)){
      
        palabras.push((texto.value).toUpperCase)

        Jugar()
        document.getElementById("div3").style.display = "flex";
        document.getElementById("div2").style.display = "none";
    }else{
      
        alert("nopermitido")
    }
}
  
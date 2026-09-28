let pantalla = document.getElementById("pantalla");
let botones = document.querySelectorAll(".boton, .botoni");
    botones.forEach(function(boton){
        boton.addEventListener("click",function(){
            if (boton.id === "igual"){

                 pantalla.value = eval(pantalla.value);
            }else if(boton.id === "limpiar"){

                 pantalla.value = "";  
            }else{

            pantalla.value += boton.textContent;
            }
        })
    })
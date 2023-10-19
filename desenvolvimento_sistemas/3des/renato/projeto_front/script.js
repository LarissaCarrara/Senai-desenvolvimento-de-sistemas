
var conteudo1 = document.getElementById("conteudo1");
var conteudo2 = document.getElementById("conteudo2");
var conteudo3 = document.getElementById("conteudo3");
var conteudo4 = document.getElementById("conteudo4");

function cont1(){
    conteudo1.style.backgroundColor="white"
    conteudo2.style.backgroundColor="transparent"
    conteudo3.style.backgroundColor="transparent"
    conteudo4.style.backgroundColor="transparent"

    // document.addEventListener("DOMContentLoaded", function() {
        //     // Encontrar o elemento da seta com o ID "seta-conteudo1" e clicar nele automaticamente
        //     var setaConteudo1 = document.getElementById("seta-conteudo1");
        //     if (setaConteudo1) {
            //         setaConteudo1.click();
            //     }
            // });
            
        }
        
        
        
function cont2(){
    conteudo1.style.backgroundColor="transparent"
    conteudo3.style.backgroundColor="transparent"
    conteudo4.style.backgroundColor="transparent"
    conteudo2.style.backgroundColor="white"
}

function cont3(){
    conteudo1.style.backgroundColor="transparent"
    conteudo2.style.backgroundColor="transparent"
    conteudo3.style.backgroundColor="white"
    conteudo4.style.backgroundColor="transparent"
}


function cont4(){
    conteudo1.style.backgroundColor="transparent"
    conteudo2.style.backgroundColor="transparent"
    conteudo3.style.backgroundColor="transparent"
    conteudo4.style.backgroundColor="white"
}
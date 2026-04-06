window.addEventListener("load", function(){

    /*Animação*/
    const loader = document.getElementById("loader")
    const content = document.getElementById("content")
    const display = document.getElementById("display")

    window.add = function(value){
        display.value += value
    }

    window.clearDisplay = function(){
        display.value = ""
    }

    window.calculate = function(){
        try{
            display.value = eval(display.value)
        }catch{
            display.value = "Erro"
        }
    }

    setTimeout(function () {

        loader.classList.add("fade-out")
        content.classList.add("show")

        setTimeout(function(){
            loader.style.display = "none";
            
           }, 500);
        
    }, 1500);
})

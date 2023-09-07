document.addEventListener("DOMContentLoaded",function(){
    var inputValue = document.getElementById("obtener"); 
    var botonAgg=document.getElementById("btnAgregar")
    var botonMostrar=document.getElementById("btnMostrar")
    var div=document.getElementById("divMostrar")
    var feliz=document.getElementById("divFelicidades")
    var arrayito=Array()

    

    botonAgg.addEventListener("click",function(){
        
        
        
        if(arrayito.length<=0){
            arrayito.push(inputValue.value)
            feliz.innerHTML="Se registro un librito correctamente jejejej"
            inputValue.value=""
        }else{
            arrayito.forEach(element => {
               
                    if(element===inputValue.value){
                        feliz.innerHTML="Ya existe"
                    }else{
                        arrayito.push(inputValue.value)
                        feliz.innerHTML="Se registro un librito correctamente jejejej"
                        inputValue.value=""
                    }
               
            });
        }

       
        
    })
    


    botonMostrar.addEventListener("click",function(){
        console.log(arrayito.length)
        feliz.innerHTML="";
        div.innerHTML=null;
        arrayito.forEach(function(item,index){
            div.innerHTML+=`<li>${item}<button id="btnprestar" onclick="prestar(indice)">prestar</button></li> ` 
        }); 
    })


    function prestar(indice) {
        arrayito.splice(indice,1)
    }




})

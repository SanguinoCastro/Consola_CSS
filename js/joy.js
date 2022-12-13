let contador = 0
let sound = new Audio('./audio/CLACK')
const joyright = document.getElementById("joy_right")
const joyleft = document.getElementById("joy_left")

function starts(){

    if (contador == 0) {
        contador = 1;
        joyright.style.marginTop= "0vh";
        joyleft.style.marginTop= "0vh";
    }     
         
    else{
        contador = 0;

         sound.play();
        
    }
}
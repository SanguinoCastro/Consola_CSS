let contador = 0
let sound = new Audio('./audio/CLACK')
var url = "./imagenes/menu.png";
const screen = document.getElementById('lcd')
const joyright = document.getElementById("joy_right")
const joyleft = document.getElementById("joy_left")

function start(){

    if (contador == 0) {
        contador = 1;
        sound.play();
        joyright.style.marginTop= "0vh";
        joyleft.style.marginTop= "0vh";
        
    }
    if (contador == 1){
        contador = 2;
        screen.style.backgroundImage=`url()`;
    }     
    else{
        contador = 1;
        
        screen.style.backgroundImage=`url(${url})`;
        

        
        
    }

}




// Here i am going to make name written in the header(animated) as typing
const nameHeader= document.querySelector(".nameHeader");
const text= "Pinku Modi";
const speed=110;
let number=0;
function typingAnimation(){// for name in the header
    if(number < text.length){
        document.querySelector(".nameHeader").innerHTML += text.charAt(number);
        number++;
        setTimeout(typingAnimation,speed);
    }
}
typingAnimation();
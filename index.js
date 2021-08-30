let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button') ;
let screenValue =' ';
for (item of buttons) {
    item.addEventListener('click' , (e)=>
    {
        buttontext= e.target.innerText ;
        // screen.value+=buttontext ;
        //console.log('buton text= ', buttontext);
        if (buttontext=='X' ) 
        {
            buttontext ='*';
            screenValue+= buttontext;
            screen.value= screenValue;
        }
        else if (buttontext=='C') {
            screenValue= "";
            screen.value= screenValue;
        }
        else if (buttontext=='=') {
            screen.value= eval(screenValue) ;
            screenValue= screen.value ;
            //screenValue= eval(screenValue) ;
        }
        else
        {
            screenValue+= buttontext ;
            screen.value= screenValue;
        }
    })
}

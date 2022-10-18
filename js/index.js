const body=document.getElementsByTagName('body');

const player= document.getElementById('player');
const ground= document.getElementById('ground');

let dx=0;
let dy=0;
let acceleration=0.3;

let index=0;
let fight=0;


const animate=()=>{

    if ((player.offsetLeft + player.offsetWidth) > innerWidth){
        dx =0;
        player.style.left =`${innerWidth - player.offsetWidth}px`;
    }else if(player.offsetLeft < 0){
        dx =0;
        player.style.left = '0';
    }

    dy += acceleration;
    
    if((player.offsetTop + player.offsetHeight) > ground.offsetTop){
        dy =0;
        player.style.top = `${ground.offsetTop - player.offsetHeight}px`;
        acceleration = 0;
    }

    player.style.left = `${player.offsetLeft + dx}px`
    player.style.top = `${player.offsetTop + dy}px`

    requestAnimationFrame(animate);
}

const draw=()=>{

    if(dy!=0){
        player.style.backgroundImage= `url(../img/Jump__00${index++}.png)`;
    }
    else if(dx!=0){
        
        player.style.backgroundImage= `url(../img/Run__00${index++}.png)`;
        
    }else if(fight){
        player.style.backgroundImage= `url(../img/Slide__00${index++}.png)`;

    }else{
        player.style.backgroundImage= `url(../img/Idle__00${index++}.png)`;
    }
    if(index>9)index=0;
    requestAnimationFrame(draw);

}

addEventListener('keydown',({code})=>{
        if(code=='ArrowRight'){
            dx=+10; 
            // index=1;
            player.classList.remove('turn');   
        }
        if(code=='ArrowLeft'){
            // index=1;
            player.classList.add('turn');   
            dx=-10;
        }
        if(code=='ShiftRight'){
            fight=1;
        }


});

addEventListener('keyup',({code})=>{

    if(code=='ArrowRight'||code=='ArrowLeft'){
        dx=0;
    }
    if(code=='ShiftRight'){
        fight=0;
    }
});

addEventListener('keypress',({code})=>{
    
    if(code=='Space'){
        dy=-10;
        acceleration=0.3; 
    }
});




requestAnimationFrame(draw);
requestAnimationFrame(animate);


// let j=0;
// let previousTimestamp=0;
// const interval=1;
// function repaint(timestamp){
//     if(!previousTimestamp) previousTimestamp=timestamp;

//     if(timestamp-previousTimestamp>1000*interval){
//         console.log('Painted', j++,timestamp)
//         previousTimestamp=timestamp;
//     }

//     requestAnimationFrame(repaint);
// }
// requestAnimationFrame(repaint);
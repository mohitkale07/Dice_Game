    //random number
    const random1=Math.floor(Math.random()*6)+1; 
    //random image for player1
    const firstimg='images/dice'+random1+'.png';
    document.querySelectorAll('img')[0].setAttribute('src',firstimg)
    
     //random image for player2
    const random2=Math.floor(Math.random()*6)+1;
    const secondimg='images/dice'+random2+'.png';
    document.querySelectorAll('img')[1].setAttribute('src',secondimg)
    
    //Logic for winner
    if(random1>random2){
      document.querySelector('h1').innerHTML="<em>Player1 is Winner &#128681</em>";
    }
    else if(random2>random1){
        document.querySelector('h1').innerHTML="<em>Player2 is Winner &#128681</em>";
    }
    else{
         document.querySelector('h1').innerHTML="It's draw! &#127987";
    }



/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game


var scores, roundScore, activePlayer, gamePlaying, lastDice;

newGame();

document.querySelector('.btn-roll').addEventListener('click', function(){
    
    if(gamePlaying){
//random no.
var dice = Math.floor(Math.random() * 6) + 1;


//Display the result
var diceDOM = document.querySelector('.dice');
diceDOM.style.display= 'block';
diceDOM.src = 'dice-' + dice + '.png';

//update the round score if no. is not 1
if(dice== lastDice && dice==6){
    scores[activePlayer]=0;
    document.getElementById('score-' + activePlayer).textContent= 0 ;
    newPlayer();
    
} else if(dice == 1){
    newPlayer();
}
else{
    
    roundScore +=dice;
    document.getElementById('current-' + activePlayer).textContent= roundScore;
    
}
lastDice=dice;
    }
    
  

});
//document.querySelector('#current-' + activePlayer).textContent = dice;
//var x=document.querySelector('#score-0').textContent ;
//console.log(x);
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        scores[activePlayer] +=  roundScore;
        document.getElementById('score-' + activePlayer).textContent= scores[activePlayer] ;
    
        if(scores[activePlayer] >= 20){
            
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.player-' + activePlayer +'-panel').classList.add('winner');
            document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
            document.querySelector('.dice').style.display = 'none';
            gamePlaying=false;
    
        } else{
            newPlayer();
        }
    }
   
    
});

document.querySelector('.btn-new').addEventListener('click', newGame );

function newPlayer(){
        roundScore = 0;

        activePlayer== 0? activePlayer = 1 : activePlayer = 0;
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
}

function newGame(){
    gamePlaying=true;
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    
    
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector('#name-0').textContent ='PLAYER 1';
    document.querySelector('#name-1').textContent ='PLAYER 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    

    document.querySelector('.dice').style.display = 'none';  //to select class we use '.' and for id '#'
}
*/
/*
YOUR 3 CHALLENGES
Change the game to follow these rules:
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

var scores, roundScore, activePlayer, gamePlaying, lastDice, finalScore;

newGame();

document.querySelector('.btn-roll').addEventListener('click', function(){
    
    if(gamePlaying){
//random no.
var dice = Math.floor(Math.random() * 6) + 1;
var dice2 = Math.floor(Math.random() * 6) + 1;


//Display the result
var diceDOM = document.querySelector('.dice');
diceDOM.style.display= 'block';
diceDOM.src = 'dice-' + dice + '.png';

var dice2DOM = document.querySelector('.dice2');
dice2DOM.style.display= 'block';
dice2DOM.src = 'dice-' + dice2 + '.png';


//update the round score if no. is not 1

    
if(dice == 1 || dice2== 1){
    newPlayer();
}
else{
    
    roundScore +=dice + dice2;
    document.getElementById('current-' + activePlayer).textContent= roundScore;
    
}

    }
    
  

});
//document.querySelector('#current-' + activePlayer).textContent = dice;
//var x=document.querySelector('#score-0').textContent ;
//console.log(x);
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        scores[activePlayer] +=  roundScore;
        document.getElementById('score-' + activePlayer).textContent= scores[activePlayer] ;


        var input = document.querySelector('.final-score').value;
    if(input){
        finalScore=input;
    } else{
        finalScore=100;
    }


        if(scores[activePlayer] >= finalScore){
            
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.player-' + activePlayer +'-panel').classList.add('winner');
            document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            gamePlaying=false;
    
        } else{
            newPlayer();
        }
    }
   
    
});

document.querySelector('.btn-new').addEventListener('click', newGame );

function newPlayer(){
        roundScore = 0;

        activePlayer== 0? activePlayer = 1 : activePlayer = 0;
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
}

function newGame(){
    gamePlaying=true;
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    
    
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector('#name-0').textContent ='PLAYER 1';
    document.querySelector('#name-1').textContent ='PLAYER 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    

    document.querySelector('.dice').style.display = 'none';  //to select class we use '.' and for id '#'
    document.querySelector('.dice2').style.display = 'none';
    
}



// let playerMove ='papier';
// let computerMove = 'kamień';

// function clearMessages(){
// 	document.getElementById('messages').innerHTML = '';
// }

// printMessage('Zagralem ' + computerMove + '! Jeśli Twój ruch to ' + playerMove + ' wygrywasz!');


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}else if( playerInput =='2'){
	playerMove= 'papier';
}else if(playerInput== '3'){
	playerMove='nożyce';
}


printMessage('Twój ruch to: ' + playerMove);

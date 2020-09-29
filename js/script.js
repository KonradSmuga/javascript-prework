// let playerMove ='papier';
// let computerMove = 'kamień';

// function clearMessages(){
// 	document.getElementById('messages').innerHTML = '';
// }

// printMessage('Zagralem ' + computerMove + '! Jeśli Twój ruch to ' + playerMove + ' wygrywasz!');



let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = 'nieznany ruch';
let playerMove = 'nieznany ruch';

console.log('Wylosowana liczba to: ' + randomNumber);

if(randomNumber == 1){
  computerMove = 'kamień';
}else if(randomNumber == 2){
	computerMove = 'papier';
}else if(randomNumber == 3){
	computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

 let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
 console.log('Gracz wpisał: ' + playerInput);

if(playerInput == '1'){
  playerMove = 'kamień';
 }else if( playerInput =='2'){
	playerMove= 'papier';
 }else if(playerInput== '3'){
 	playerMove='nożyce';
 }


printMessage('Twój ruch to: ' + playerMove);

if(computerMove == 'kamień' && playerMove =='papier' || computerMove == 'nożyce' && playerMove == 'kamień' || computerMove == 'papier' && playerMove =='nożyce'){
	printMessage('Ty wygrywasz');
}else if(computerMove == 'kamień' && playerMove =='kamień' || computerMove == 'nożyce' && playerMove == 'nożyce' || computerMove == 'papier' && playerMove =='papier'){ 
	printMessage('remis')
}else{
	printMessage('wygrywa komputer')
}

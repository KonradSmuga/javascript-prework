// let playerMove ='papier';
// let computerMove = 'kamień';

// function clearMessages(){
// 	document.getElementById('messages').innerHTML = '';
// }

// printMessage('Zagralem ' + computerMove + '! Jeśli Twój ruch to ' + playerMove + ' wygrywasz!');

let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);
console.log('Komputer wylosowal: ' + randomNumber);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let playerMove = getMoveName(playerInput);


console.log('Gracz wpisał: ' + playerInput);
let score = displayResult(computerMove, playerMove);

// if(randomNumber == 1){
//   computerMove = 'kamień';
// }else if(randomNumber == 2){
// 	computerMove = 'papier';
// }else if(randomNumber == 3){
// 	computerMove = 'nożyce';
// }

function getMoveName(argMoveId){
	if(argMoveId == 1){
	  return 'kamień';
	} 
	if(argMoveId ==2 ){
	  return 'papier';
	}
	if(argMoveId == 3 ){
		return 'nożyce';
	}
}


if(playerInput == ""){
	playerMove = 'brak dodanego elementu'
	score = 'nie podales elementu wiec nie mozna okreslic wyniku'
	printMessage('nic nie dodales, wybierz opcje');
}


// if(playerInput == '1'){
//   playerMove = 'kamień';
//  }else if( playerInput =='2'){
// 	playerMove= 'papier';
//  }else if(playerInput== '3'){
//  	playerMove='nożyce';
//  }

function displayResult (argComputerMove, argPlayerMove){
	if(argComputerMove == 'kamień' && argPlayerMove =='papier' || argComputerMove == 'nożyce' && argPlayerMove == 'kamień' || argComputerMove == 'papier' && argPlayerMove =='nożyce'){
	return	'Ty wygrywasz';
	}
	if(argComputerMove == argPlayerMove){ 
	return  'remis';
	}
	return	'wygrywa komputer';
}

printMessage('Mój ruch to: ' + computerMove);
printMessage('Gracza ruch to: ' +playerMove);
printMessage ('wynik gry: ' +score)
console.log('wynik: ' + score);

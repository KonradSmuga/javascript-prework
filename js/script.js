let playerMove ='papier';
let computerMove = 'kamień';

function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

printMessage('Zagralem ' + computerMove + '! Jeśli Twój ruch to ' + playerMove + ' wygrywasz!');
// let playerMove ='papier';
// let computerMove = 'kamień';

// function clearMessages(){
// 	document.getElementById('messages').innerHTML = '';
// }

// printMessage('Zagralem ' + computerMove + '! Jeśli Twój ruch to ' + playerMove + ' wygrywasz!');


{
	const playGame = function (playerInput) {
		clearMessages();
		const randomNumber = Math.floor(Math.random() * 3 + 1);

		console.log('Komputer wylosowal: ' + randomNumber);
		console.log('Gracz wpisał: ' + playerInput);

		const getMoveName = function (argMoveId) {

			if (argMoveId == 1) {
				return 'kamień';
			}
			if (argMoveId == 2) {
				return 'papier';
			}
			if (argMoveId == 3) {
				return 'nożyce';
			}
		}
		const playerMove = getMoveName(playerInput);
		const computerMove = getMoveName(randomNumber);

		const displayResult = function (argComputerMove, argPlayerMove) {

			if (argComputerMove == 'kamień' && argPlayerMove == 'papier' || argComputerMove == 'nożyce' && argPlayerMove == 'kamień' || argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
				return 'Ty wygrywasz';
			}
			if (argComputerMove == argPlayerMove) {
				return 'remis';
			}

			return 'wygrywa komputer';
		}

		const score = displayResult(computerMove, playerMove);
		printMessage('Mój ruch to: ' + computerMove);
		printMessage('Gracza ruch to: ' + playerMove);
		printMessage('wynik gry: ' + score)
		console.log('wynik: ' + score);
	}

	const rockButton = document.getElementById('play-rock')
	rockButton.addEventListener('click', function () {
		playGame(1)
	})
	const paperButton = document.getElementById('play-paper')
	paperButton.addEventListener('click', function () {
		playGame(2)
	})
	const scisorsButton = document.getElementById('play-scisors')
	scisorsButton.addEventListener('click', function () {
		playGame(3)
	})
}
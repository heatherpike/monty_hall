//3 curtains, behind one is a prize
//when you guess, they show you one of the other 2 doors that doesnt have the prize
//doyou want to switch to the other unturned door

//door 1
//door 2
//door 3
//let's say prize is behind door 2
//if contestant picks door #1 at first.
//we can't show door 2, we will show them door 3.
//if the contestant were to pick door 2 ,we can show either 1 or 3
//if they pick 3, we ahve to show them door 1

//first scenario
//don't switch
//what is probability of winning
//1/3
//prob of losing 2/3

//second scenario
//always switch
// if u pick wrong and always switch p(w) = 2/3
//p(l) = 1/3  (if you pick right and then always switch)
//if you pick wrnog and switch you always win 

//generate a random number 1-3

function getRandomInt() {
    return Math.floor(Math.random() * 3) + 1;
}

var prize;
var goat1;
var goat2;
var guess;
var noSwitchWins = 0;
var alwaysSwitchWins = 0;

function doorAssign() {
	prize = getRandomInt();
	if (prize === 1) {
		goat1 = 2;
		goat2 = 3;
	}
	else if (prize === 2) {
		goat1 = 1;
		goat2 = 3;
	}
	else {
		goat1 = 1;
		goat2 = 2;	
	}
}

function guessNoSwitch() {
	doorAssign();
	guess = getRandomInt();
	if (guess == prize) {
		return true;
	} else {
		return false;
	}
}

function guessAlwaysSwitch() {
	doorAssign();
	guess = getRandomInt();
	if (guess == prize) {
		return false;
	} else {
		return true;
	}
}

function simulateGame(guessFunction, wins, alwaysOrNever) {
	for (var i=0; i<=1000; i++) {
		if (guessFunction()) {
			wins++;
		}
	}
	var probWin = wins/1000;
	console.log(alwaysOrNever + " switching led to " + wins + " wins out of 1000 times playing the game, for a probability of " + probWin + ".");
}

simulateGame(guessNoSwitch, noSwitchWins, "Never");
simulateGame(guessAlwaysSwitch, alwaysSwitchWins, "Always");
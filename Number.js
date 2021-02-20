var minNumber = 1;
var maxNumber = 10;
var actualNumber = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
var guessNumber = 10;
var usedAttempts = 0;
var attemptsLeft = 9;

alert('Guess The Number Between 1 and 10')

while (usedAttempts < guessNumber) {
    input = parseInt(prompt('Enter a Number: ', 0));

    if (input == actualNumber) {
        alert('You Gussed the Number');
        break;
    } else
    if (input != actualNumber) {
        alert('Guess Again,' + 'Tries Left: ' + attemptsLeft);

        usedAttempts += 1;
        attemptsLeft -= 1;
    }
}

if (usedAttempts == guessNumber && input != actualNumber) {
    document.write('You Have ran out of Attempts:');
    document.write('The Number was', actualNumber);
}
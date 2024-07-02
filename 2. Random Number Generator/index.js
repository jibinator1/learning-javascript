const min =1;
const max = 100;
const ans = Math.floor(Math.random() * (max - min +1));

let attempts = 0;
attempts = Number(attempts)
let guess;
let running = true;

while (running == true) {
    guess = window.prompt(`Guess a number between ${min} and ${max}`);
    guess = Number(guess);
    if (isNaN(guess)){
        window.alert("Invalid input. Please try again.");
    }

    else if (guess < ans) {

        window.alert("Too low. Try again!");
        attempts ++;

    }

    else if (guess > ans) {
        window.alert("Too high. Try again!");
        attempts ++;
    }

    else {
        running = false;
        window.alert(`You got it! You took ${attempts} tries!`);

    }
}
const number = randomNumber();

function randomNumber() {
  return Math.floor(Math.random() * 100 +1);
}
console.log(number);

let noOfGuess = 0;
let remaining = 10;
const submit = document.getElementById("button");
const para2 = document.querySelector(".para-2");
const para3 = document.querySelector(".para-3");
const para4 = document.querySelector(".para-4");
const para5 = document.querySelector(".para-5");

var guessedNum = document.getElementById("guess");
guessedNum.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    submit.click();
  }
});


submit.addEventListener("click", (e) => {
  e.preventDefault();
  noOfGuess++;
  remaining--;
  const guess = document.getElementById("guess");
  if (guess.value == "") {
      window.alert("Please Enter the Number")
  }
  else {
    if (Number(guess.value) === number) {
      submit.disabled = true;
      para4.innerText = "You guessed correctly!";
      para5.innerHTML = `<button class="button" onclick="location.reload()">Start New Game</button>`;
      para5.classList.remove("para");
      para2.innerText += " " + guess.value;

      guess.disabled=true;
    } else {
      para2.innerText += " " + guess.value;
      para3.innerHTML = `Guesses Remaining: <span> ${remaining}</span>`;
      if (number > Number(guess.value)) {
        para4.innerText = "Too low! Guess a High Number";
      }

      if (number < Number(guess.value)) {
        para4.innerText = "Too High! Guess a Low Number";
      }
      if (remaining === 0) {
        para4.innerText = `Game Over! The number was ${number}`;
        para5.innerHTML = `<button class="button" onclick="location.reload()"> Start New Game </button>`;
        guess.disabled = true;
        submit.disabled = true;
        para5.classList.remove("para")
      }
    }

    guess.value = "";
  }
});

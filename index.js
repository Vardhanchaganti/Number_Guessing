let random = Math.floor(Math.random()*100)+1;

const guess = document.getElementById("guess");
const sub = document.getElementById("sub");
const result = document.getElementById("result");

let guessCount = 0;

let history = document.getElementById("history");

let record = "";

sub.onclick = function(){
    guessCount++;
    let userGuess = Number(guess.value);
    if(userGuess === random){
        result.textContent = `Yehhh.,Correct...The value you Guessed(${userGuess}) is right...You took ${guessCount} chances to Guess it`;
        result.style.color = "green";
        record += result.textContent + "<br>";
    }else if(userGuess > random){
        result.textContent = `Incorrect!!!The Value you Guessed(${userGuess}) is bigger than the actual value.`;
        result.style.color = "#c1121f";        
        record += result.textContent + "<br>";    
    }else{
        result.textContent = `Incorrect!!!The Value you Guessed(${userGuess}) is smaller than the actual value.`;
        result.style.color = "red";
        record += result.textContent + "<br>";
    }
    history.innerHTML = record;
}
var y = Math.floor(Math.random() * 10 + 1);
var guess = 1;
playername = localStorage.getItem("player_name")
function submit()
{
    var x = document.getElementById("guessField").value;

    if(x == y)
{
    alert("CONGRATULATION !!!!!!!!!!!!!!!!!"+playername+"  YOU GUESSED IT RIGHT IN "+ guess + " GUESS");
    guess= 1;
}

else if(x > y)
{
    guess++;
    alert("OOPS SORRY, TRY SMALLER NUMBER :D");
}
else
{
guess++;
alert("OOPS SORRY, TRY A GREATER NUMBER :D")
}

}

function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}
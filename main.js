var n = 1;
var count = 0;
function a()
{
    if (n == 1){
        var seconds = 30;
        var countdown = setInterval(function() {
            seconds--;
            document.getElementById("countdown").textContent = "You have " + seconds + " seconds left, hurry!";
            if (seconds <= 0) clearInterval(countdown);
            if(seconds == 0){
                if (count > 120){
                    alert("Wow! You are pretty fast!")
                    alert("Thanks for playing the click test, your score was " + count + " Share it!");
                    var average = count / 30;
                    alert("Also, your average was "+ average + " CPS")
                }
                else if (count > 100 && count < 120)
                {
                    alert("Not bad, but you could improve.");
                    alert("Thanks for playing the click test, your score was " + count + " Share it!");
                    var average = count / 30;
                    alert("Also, your average was "+ average + " CPS")
                }
                else{
                    alert("You can do better, try again by refreshing the page.");
                    alert("Thanks for playing the click test, your score was " + count + " Share it!");
                    var average = count / 30;
                    alert("Also, your average was "+ average + " CPS")
                }
        }
        }, 1000);
        n--;
    }
    count++;
    /*
    We are only going to run the timer function when
    n is clicked the first time, so it doesn't run
    for every single click.
    */
    document.getElementById("count").textContent = count + " clicks";
}

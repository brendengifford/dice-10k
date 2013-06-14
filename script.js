
function rollDice()
{
    return Math.floor((5 * Math.random())+1);
}

function getScore(varToScore)
{
    var score = new Array();
    score[0] = 0; //points
    score[1] = ""; //message
    score[2] = 0; //amount of dice being scored

    varToScore.sort();

    function findFiveAndOne()
    {
         if (
        varToScore[0] === 5 ||
        varToScore[1] === 5 ||
        varToScore[2] === 5 ||
        varToScore[3] === 5 ||
        varToScore[4] === 5 ||
        varToScore[5] === 5
        )
        {
            if (varToScore[varToScore.indexOf(5)] === varToScore[varToScore.indexOf(5) + 2])//if three or more fives, they're already scored elsewhere. 
            {
                score[0] = score[0] + 0;
                //alert("+0 A");
            }
            else if (varToScore[varToScore.indexOf(5)] === varToScore[varToScore.indexOf(5) + 1])
            {
                score[0] = score[0] + 100;
                score[2] = score[2] + 2;
                //alert("+2 B");
            }
            else 
            {
                score[0] = score[0] + 50;
                score[2] = score[2] + 1;
                //alert("+1 C");
            }
        }
        if (varToScore[2] === 1) //if three or more ones, they're already scored elsewhere.
        {
            score[0] = score[0] + 0;
            //alert("+0 D");
        }
        else if (varToScore[1] === 1) //since it's sorted, if 1 is in the second position, there's two 1's
        {
        score[0] = score[0] + 200;
        score[2] = score[2] + 2;
        //alert("+2 E");
        }
        else if (varToScore[0] === 1)
        {
        score[0] = score[0] + 100;
        score[2] = score[2] + 1;
        //alert("+1 F");
        }
    }//end function findFiveAndOne()

//6 of a kind
if (varToScore[0] === varToScore[5] && varToScore[5] > 0)
{
      if (varToScore[0] === 1)
    {
        score[0] = 8000;
    }
    else
    {
        score[0] = (((varToScore[0] * 100) * 2) * 2) * 2;
    }
    score[1] = "Six of a Kind!";
    score[2] = 6;
    //alert("6 G");
    return score;
}

//5 of a kind
else if (varToScore[0] === varToScore[4] && varToScore.length >= 5)
{
    score[0] = 0;
        if (varToScore[0] === 1)
    {
        score[0] = 4000;
    }
    else
    {
        score[0] = ((varToScore[0] * 100) * 2) * 2;
    }
    score[1] = "Five of a Kind!";
    score[2] = 5;
    //alert("5 H");
    findFiveAndOne();
    return score;
}
else if (varToScore[1] === varToScore [5] && varToScore.length === 6 && varToScore[1] > 0)
{
    score[0] = ((varToScore[1] * 100) * 2) * 2;
    score[1] = "Five of a Kind!";
    score[2] = 5;
    //alert("5 I");
    findFiveAndOne();
    return score;
}

//3 pair w/ some 1 off 4 of a kind's
else if (
    varToScore[0] === varToScore[1] && 
    varToScore[2] === varToScore[3] && 
    varToScore[4] === varToScore[5] && 
    varToScore.length === 6 &&
    varToScore[5] > 0
    )
{
    // if 1,1,5,5,5,5
    if (
        varToScore[0] === 1 && 
        varToScore[2] === varToScore[5] && 
        varToScore[5] === 5
        )
    {
        score[0] = 1200;
        score[1] = "Four of a Kind!";
    }
    // if 1,1,6,6,6,6
    else if (
        varToScore[0] === 1 &&
        varToScore[2] === varToScore[5] &&
        varToScore[5] === 6
        )
    {
        score[0] = 1400;
        score[1] = "Four of a Kind!"
    }
    // if 5,5,6,6,6,6
    else if (
        varToScore[0] === 5 &&
        varToScore[2] === varToScore[5] &&
        varToScore[5] === 6
        )
    {
        score[0] = 1300;
        score[1] = "Four of a Kind!"
    }
    // if 1,1,1,1,5,5
    else if (
        varToScore[0] === 1 && 
        varToScore[0] === varToScore[3] && 
        varToScore[5] === 5
        )
    {
        score[0] = 2100;
        score[1] = "Four of a Kind!";
    }
    else
    {
        score[0] = 1000;
        score[1] = "Three Pair!";
    }

    score[2] = 6;
    //alert("6 R");
    return score;
}

//4 of a kind
else if (varToScore[0] === varToScore[3] && varToScore.length >= 4)
{
    if (varToScore[0] === 1)
    {
        score[0] = 2000;
    }
    else
    {
        score[0] = (varToScore[0] * 100) * 2;
    }
    score[1] = "Four of a Kind!";
    score[2] = 4;
    //alert("4 J");
    findFiveAndOne();
    return score;
}
else if (varToScore[1] === varToScore[4] && varToScore.length >= 5  && varToScore[1] > 0)
{
    score[0] = (varToScore[1] * 100) * 2;
    score[1] = "Four of a Kind!";
    score[2] = 4;
    //alert("4 K");
    findFiveAndOne();
    return score;
}
else if (varToScore[2] === varToScore[5] && varToScore.length === 6 && varToScore[2] > 0)
{
    score[0] = (varToScore[2] * 100) * 2;
    score[1] = "Four of a Kind!";
    score[2] = 4;
    //alert("4 L");
    findFiveAndOne();
    return score;
}

//Two Three of a Kinds
else if (varToScore[0] === varToScore[2] && varToScore[3] === varToScore[5] && varToScore.length === 6 && varToScore[5] > 0)
{
    if (varToScore[0] === 1)
    {
        score[0] = 1000 + (varToScore[3] * 100);
    }
    else
    {
        score[0] = (varToScore[0] * 100) + (varToScore[3] * 100);
    }
    score[1] = "Two Three of a Kinds!";
    score[2] = 6;
    //alert("6 M");
    return score;
}

//3 of a kind
else if (varToScore[0] === varToScore[2] && varToScore.length >= 3)
{
    if (varToScore[0] === 1)
    {
        score[0] = 1000;
    }
    else
    {
        score[0] = varToScore[0] * 100;
    }
    score[1] = "Three of a Kind!";
    score[2] = 3;
    //alert("3 N");
    findFiveAndOne();
    return score;
}
else if (varToScore[1] === varToScore[3] && varToScore.length >= 4  && varToScore[1] > 0)
{
    score[0] = varToScore[1] * 100;
    score[1] = "Three of a Kind!";
    score[2] = 3;
    //alert("3 O");
    findFiveAndOne();
    return score;
}
else if (varToScore[2] === varToScore[4] && varToScore.length >= 5 && varToScore[2] > 0)
{
    score[0] = varToScore[2] * 100;
    score[1] = "Three of a Kind!";
    score[2] = 3;
    //alert("3 P");
    findFiveAndOne();
    return score;
}
else if (varToScore[3] === varToScore[5] && varToScore.length === 6 && varToScore[3] > 0)
{
    score[0] = varToScore[3] * 100; 
    score[1] = "Three of a Kind!";
    score[2] = 3;
    //alert("3 Q");
    findFiveAndOne();
    return score;
}

//straight
else if (
    varToScore[0] === 1 &&
    varToScore[1] === 2 &&
    varToScore[2] === 3 &&
    varToScore[3] === 4 &&
    varToScore[4] === 5 &&
    varToScore[5] === 6
    )
{
    score[0] = 1500;
    score[1] = "Straight!";
    score[2] = 6;
    //alert("6 S");
    return score;
}

//100s and 50s
else 
{
    findFiveAndOne();
    return score;
}

}//end getScore

var playerScore = new Array(0,0,0,0,0,0);

var howManyPlayers = 0;
var currentPlayer = 1;

function definePlayers(chosenNumberOfPlayers)
{
    document.getElementById("play").style.display = "inline";
    document.getElementById("play").focus();
    //clear other dice
    for (i=1;i<chosenNumberOfPlayers;i++)
    {
        document.getElementById("select" + i).style.margin = "4px"; 
        document.getElementById("select" + i).style.border = "none";
        // alert("clearing" + i);
    }
    for (i=6;i>chosenNumberOfPlayers;i--)
    {
        document.getElementById("select" + i).style.margin = "4px"; 
        document.getElementById("select" + i).style.border = "none";
        // alert("clearing" + i);
    }
    
    document.getElementById("select" + chosenNumberOfPlayers).style.margin = "2px"; 
    document.getElementById("select" + chosenNumberOfPlayers).style.border = "2px solid yellow";
    howManyPlayers = chosenNumberOfPlayers;
}

function start()
{
if (howManyPlayers === 0)
{
    alert("Choose the Number of Players");
    return ;
}
if (currentPlayer === (howManyPlayers + 1))
{
    currentPlayer = 1;
}
document.getElementById("showPlayer").innerHTML = "Player " +currentPlayer;

document.getElementById("showPlayerScore" + currentPlayer).style.display = "block";
    // var test = new Array(5,5,5,5,1,1);
    // alert(getScore(test));

document.getElementById("popupContainer").style.display = "none";
// document.getElementById("diceOver").style.display = "none";
document.getElementById("scorePopup").style.display = "none";
document.getElementById("messagePopup").style.display = "none";
document.getElementById("showScore").style.textDecoration = "none";
var amount;
var amountCheck =  6 - amountSelected;
if (amountCheck === 0) //rollover dice to another round of rolling
{
    amount = 6;
    amountSelected = 0;
}
else
{
    amount = amountCheck;
}


var dice = new Array();

for (i=0;i < amount;i++)
{
    dice[i] = rollDice();
}

/*show dice*/
var diceString = " ";
var showDice = new Array();

for (i=0;i<amount;i++)
{
    showDice[i] = "<li><img src='faces/" + dice[i] + ".png' onclick='selectDie(" + i + ", " + dice[i] + ");' class='off'  id='select" + i + "' /></li> ";
    diceString = diceString + showDice[i];
}

document.getElementById("faces").innerHTML = diceString;


//buttons
var playButton = document.getElementById("play");
var stayButton = document.getElementById("stay");
var scoreButton = document.getElementById("score");


    //show score

var gotScore = getScore(dice);
if (gotScore[0] === 0)
{
    //document.getElementById("showScore").innerHTML = "<strong>** BUST **</strong>";
    document.getElementById("popupContainer").style.display = "block";
    // document.getElementById("diceOver").style.display = "block";
    document.getElementById("scorePopup").style.display = "inline";
    document.getElementById("scorePopup").innerHTML = "<strong>** BUST **</strong>";
    document.getElementById("showScore").style.textDecoration = "line-through";
    playButton.value = "Next Player";
    stayButton.style.display = "none";
    amountSelected = 0;
    currentPlayer ++;
    if (turnScore === 0) //fix score hold over from previous bust
    {
        document.getElementById("showScore").innerHTML = "Turn: $" + turnScore;
    }
    else
    {
        turnScore = 0;
    }
}
else 
{
    playButton.style.display = "none";
    scoreButton.style.display = "inline";
    stayButton.style.display = "none";
    document.getElementById("showScore").innerHTML = "Turn: $" + turnScore;

    //document.getElementById("showScore").innerHTML = "Score: " + gotScore[0] + " " + gotScore[1];
}



//clear selected
for(i=0;i<6;i++)
    {
        selected[i] = null;
    }
    //document.getElementById("showSelected").innerHTML = selected;
document.getElementById("score").focus();
document.getElementById("score").value = "Take $0";
} //end function start()





var selected = new Array();
var amountSelected = 0;

function selectDie(i, die)
{
    var select = document.getElementById("select" + i);

        if (select.className == "On")
        {
            document.getElementById("select" + i).className = "Off";
            document.getElementById("select" + i).style.margin = "4px"; 
            document.getElementById("select" + i).style.border = "none";
            selected[i] = null;
            amountSelected --;
        }
        else if (select.className == "stayOff")
        {
            document.getElementById("play").focus();
        }
        else
        {
            document.getElementById("select" + i).className = "On";
            document.getElementById("select" + i).style.margin = "2px"; 
            document.getElementById("select" + i).style.border = "2px solid yellow";
            selected[i] = die;
            amountSelected ++;
        }
        
        //save what the selected array was before sorting/scoring it
    var saveSelected0 = selected[0];
    var saveSelected1 = selected[1];
    var saveSelected2 = selected[2];
    var saveSelected3 = selected[3];
    var saveSelected4 = selected[4];
    var saveSelected5 = selected[5];

    document.getElementById("score").value = "Take $" + (getScore(selected)[0]); //Find selected score everytime a die is selected or deselected.

    //revert the selected array back to what it was before it was sorted/scored
    selected[0] = saveSelected0;
    selected[1] = saveSelected1;
    selected[2] = saveSelected2;
    selected[3] = saveSelected3;
    selected[4] = saveSelected4;
    selected[5] = saveSelected5;


    document.getElementById("score").focus();
    //document.getElementById("showSelected").innerHTML = selected;
}   //end function selectDie


var turnScore = 0;

function takeScore()
{
    var gotScore = getScore(selected);
    var scorable = selected.indexOf(null);
    if (scorable < 0) {scorable = 6;} //if all six dice are chosen
    if (gotScore[2] != scorable && scorable > 0)
    {
        alert("Please select scoring dice only.");
        document.getElementById("score").value = "Take $0";
        //reset selected dice

        for(i=0;i<scorable;i++)
        {
            amountSelected --;
        }

        for(i=0;i<6;i++)
        {
            document.getElementById("select" + i).className = "Off";
            document.getElementById("select" + i).style.margin = "4px"; 
            document.getElementById("select" + i).style.border = "none";
            selected[i] = null;
        }

        //document.getElementById("showSelected").innerHTML = selected;
    }
    else if (scorable === 0)
    {
        alert("Please select dice.");
    }
    else
    {
        turnScore = turnScore + gotScore[0];

        var playButton = document.getElementById("play");
        var stayButton = document.getElementById("stay");
        var scoreButton = document.getElementById("score");

        playButton.style.display = "inline";
        playButton.value = "Keep Rolling!";
        playButton.focus();
        scoreButton.style.display = "none";

        //only show stay button if they've already scored, the turnScore is 1000 or higher, and the amount selected isn't all of the dice
        if (playerScore[currentPlayer] != 0 || turnScore >= 1000) 
        {
            if (amountSelected != 6)
            {
            stayButton.style.display = "inline"
            }
        }

        document.getElementById("popupContainer").style.display = "block";
        // document.getElementById("diceOver").style.display = "block";
        document.getElementById("scorePopup").style.display = "inline";
        document.getElementById("scorePopup").innerHTML = "$" + gotScore[0];
        if (gotScore[1] != "")
        {
        document.getElementById("messagePopup").style.display = "inline";
        document.getElementById("messagePopup").innerHTML = gotScore[1];
        }

        //alert(selected + "\n\nScore: " + turnScore + "\n\n" + gotScore[2] + " : " + scorable)
        document.getElementById("showScore").innerHTML = "Turn: $" + turnScore;
        document.getElementById("score").value = "Take $0";
        for (i=0;i<6;i++) //the selected dice disappear after they are taken/scored & the rest of the dice can't be selected anymore
        {
            if (document.getElementById("select" + i).className === "On")
            {
                document.getElementById("select" + i).style.display = "none";
            }
            else 
            {
                document.getElementById("select" + i).className = "stayOff";
            }
            
        }

    }
}//end function takeScore

function keep()
{
    
    playerScore[currentPlayer] += turnScore;
    var scoreFontSize = Math.round((playerScore[currentPlayer]/3000)*10)/10; //increases font size by score
    if (scoreFontSize < 1)
    {
        scoreFontSize = 1;
    }
    document.getElementById("showPlayerScore" + currentPlayer).style.fontSize = scoreFontSize + 'em';
    document.getElementById("showPlayerScore" + currentPlayer).innerHTML = "Player " + currentPlayer + "<br />$" + playerScore[currentPlayer];
    if (playerScore[currentPlayer] >= 10000)
    {
        document.getElementById("showPlayerScore" + currentPlayer).style.color = "red";
        document.getElementById("scorePopup").innerHTML = "Winner!";
        document.getElementById("play").style.display = "none";
        document.getElementById("stay").style.display = "none";
    }
    // alert("Player " + currentPlayer + "'s Score: " + playerScore[currentPlayer]);
    else
    {
    document.getElementById("play").value = "Next Player";
    document.getElementById("play").focus();
    document.getElementById("stay").style.display = "none";
    currentPlayer ++;
    amountSelected = 0;
    turnScore = 0;
    }

}

function focus()
{
    document.getElementById("play").focus();
}
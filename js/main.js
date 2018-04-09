var sessionRandomNumber,storedScore,subTotal,multiplier,level;

//Retrieve Local Items
storedScore = localStorage.getItem("cumulative");
multiplier = localStorage.getItem("multiplier");
if (storedScore == null) storedScore=0;
if (multiplier == null ) multiplier=1;

//Random Number Generator
sessionRandomNumber=Math.floor(Math.random()*(0+100)*multiplier);
$("#player").html(sessionRandomNumber);
subTotal=parseInt(storedScore)+sessionRandomNumber;
$("#totalScore").html("Total: "+subTotal);

//Level System
if (subTotal < 1000) level=1;
var levelUpper = Math.floor(subTotal/1000);
level=parseInt(levelUpper);
$("#playerLevel").html("Level "+level);


//Reload button
$('#reloadButton').click(function() {
    location.reload();
});

//Save Local Items
localStorage.setItem("cumulative", subTotal);
localStorage.setItem("multiplier", multiplier);

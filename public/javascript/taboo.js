var teamcount = 0;
var teams = [];
var rounds = 0;
var duration = 1;
var penalty = 1;
var cards = [];

function readTextFile(file){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                var lines = allText.split('\n'); 
                for(var i = 0; i< lines.length; i++){
                    cards.push(lines[i]);
                    alert("done");
                }
            }
        }
    }
    rawFile.send(null);
}

function addField(val){
    var parDiv=document.getElementById('names');
    var innerHTML= "";
    for(i=0; i<val; i=i+1){
        innerHTML= innerHTML + "<input type='text' value = 'Team "+(i+1)+"' id='team"+i+"' placeholder='' required >";
    }
    parDiv.innerHTML = innerHTML;
}



function loadConfig(formId){
    var e = document.getElementById(formId);
    teamcount = e.elements[0].value;
    rounds = e.elements[1].value;
    duration = e.elements[2].value;
    penalty = e.elements[3].value;

    for (var i = 0 ; i < teamcount ; i++){
        teams.push(e.elements[i+4].value);
    }
    loadGame();
}

function loadGame(){
    readTextFile('https://raw.githubusercontent.com/VibhorKanojia/LeetCode/master/3SumClosest.cpp');
}

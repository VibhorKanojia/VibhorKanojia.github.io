var teamcount = 0;
var teams = [];
var rounds = 0;
var duration = 0;
var penalty = 1;
var cards = [];
var pass_count = 0;
var FILEPATH = "https://raw.githubusercontent.com/VibhorKanojia/VibhorKanojia.github.io/master/Taboo/javascript/cards.txt";
function readTextFile(file){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText.toLowerCase();
                var lines = allText.split('\n'); 
                for(var i = 0; i< lines.length; i++){
                    cards.push(lines[i]);
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

function changeCard(){
    var c = document.getElementById('card');
    var index = Math.floor(Math.random() * 1300);
    
    var words = cards[index].split(",");
    var html = "<table class='redTable'><th>"+ words[0] + "</th>";
    for (var i = 1; i < 6 ; i++){
        html = html + "<tr><td>"+words[i]+"</td></tr>";
    }
    html = html + "</table>";
    c.innerHTML = html;
}


var turn = 0;
var cur_round = 0;
var scores = [];
function displayTime(){
    var minutesLabel = document.getElementById("minutes");
    var secondsLabel = document.getElementById("seconds");
    var totalSeconds = duration;
    var intervalId = setInterval(setTime, 1000);

    function setTime() {
        --totalSeconds;
        if (totalSeconds == 20){
            document.getElementById('tictoc').play();
        }
        secondsLabel.innerHTML = pad(totalSeconds % 60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
        if (totalSeconds == 0){
            window.clearInterval(intervalId);
            turn = turn+1;
            playTurn();
        }
    }

    function pad(val) {
        var valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        } else {
            return valString;
        }
    }
}

function startTimer(){
    displayTime();
    changeCard();
}


function buttonClick(elem,action){
    var cur_team = turn%teamcount;
    if (action == 'taboo'){
        scores[cur_team] = scores[cur_team] -2;
    }
    else if (action == 'pass'){
        if (penalty == 1){
            scores[cur_team] = scores[cur_team] -1;
        }
        pass_count = pass_count -1;
        if (pass_count == 0){
            elem.disabled = true;
        }
    }

    else if (action == 'correct'){
        scores[cur_team] = scores[cur_team] +2;
    }
    document.getElementById('score_'+cur_team).innerHTML = scores[cur_team];
    changeCard();
}

function addCard(c){
    var timerDiv = document.createElement('div');
    timerDiv.innerHTML= "<label id='minutes'>00</label>:<label id='seconds'>00</label>";
    timerDiv.id = 'timer';
    timerDiv.className = 'timer';

    var cardDiv = document.createElement('div');
    cardDiv.id = 'card';
    cardDiv.className = 'card';
    
    var buttonDiv = document.createElement('div');
    buttonDiv.id = 'button';

    var tabooButton = document.createElement('button');
    tabooButton.innerHTML = "Taboo!";
    tabooButton.className = 'button';

    var passButton = document.createElement('button');
    passButton.innerHTML = "Pass";
    passButton.className = 'button';
    
    var correctButton = document.createElement('button');
    correctButton.innerHTML = "Correct";
    correctButton.className = 'button';
    
    buttonDiv.append(tabooButton);
    buttonDiv.append(passButton);
    buttonDiv.append(correctButton);

    c.append(timerDiv);
    c.append(cardDiv);
    c.append(buttonDiv);
    tabooButton.addEventListener("click", function(){buttonClick(this,'taboo');});
    passButton.addEventListener("click", function(){buttonClick(this,'pass');});
    correctButton.addEventListener("click", function(){buttonClick(this,'correct');});
    //alert(c.innerHTML);
    startTimer();
}

function startTurn(){
    var c = document.getElementById('container');
    var infoDiv = document.getElementById('info');
    if (infoDiv){
        infoDiv.parentNode.removeChild(infoDiv);
    }
    addCard(c);
}


function addInfo(c){
    var cardDiv = document.getElementById('card');
    if (cardDiv){
        cardDiv.parentNode.removeChild(cardDiv);
    }

    var timerDiv = document.getElementById('timer');
    if (timerDiv){
        timerDiv.parentNode.removeChild(timerDiv);
    }

    var buttonDiv = document.getElementById('button');
    if (buttonDiv){
        buttonDiv.parentNode.removeChild(buttonDiv);
    }

    var cur_team = turn%teamcount;
    var newDiv = document.createElement('div');
    newDiv.id = 'info';
    newDiv.className = 'info';
    var html = "<h3> Round: "+cur_round + "</h3>";
    html = html + "<h3> Team: "+teams[cur_team]+ "</h3>";
    html = html + "<button class='button' onclick='startTurn()'> READY </button>";
    newDiv.innerHTML = html;
    c.append(newDiv);
}


function addScores(c){
    var c = document.getElementById('container');
    c.innerHTML = ""; 
    var cur_team = turn%teamcount;

    var newDiv = document.createElement('div');
    newDiv.id = 'scoreBoard';
    newDiv.className = 'scoreBoard';

    for (var i = 0 ; i < teamcount; i++){
        var scoreDiv = document.createElement('div');
        scoreDiv.className = 'score';
        scoreDiv.innerHTML = "<h4>"+teams[i] +"</h4><p id='score_"+i+"'>" + scores[i] + "</p>";
        newDiv.append(scoreDiv);
    }
    c.append(newDiv);
}

function finishGame(){
    var c = document.getElementById('container');
    c.innerHTML = "";
    
    c.innerHTML = '<h2 style="text-align:center"> Final Score: </h2>';
    var newDiv = document.createElement('div');
    newDiv.id = 'scoreBoard';
    newDiv.className = 'scoreBoard';
    for (var i = 0 ; i < teamcount; i++){
        var scoreDiv = document.createElement('div');
        scoreDiv.className = 'score';
        scoreDiv.innerHTML = "<h4>"+teams[i] +"</h4><p id='score_"+i+"'>" + scores[i] + "</p>";
        newDiv.append(scoreDiv);
    }
    c.append(newDiv);
}

function playTurn(){
    if (turn == 2*teamcount){
        turn = 0;
        cur_round = cur_round +1;
    }
    if (cur_round == rounds){
        finishGame();
    }
    pass_count = 3;
    var cur_team = turn%teamcount;

    var c = document.getElementById('container');
    addInfo(c);
}

function loadCards(){
    readTextFile(FILEPATH);
}

function loadGame(){
    for (var i = 0 ; i < teamcount; i++){
        scores.push(0);
    }
    addScores();
    playTurn();
    //window.setInterval(changeCard, 5000);

    //window.setTimeout(changeCard, 5000);
}





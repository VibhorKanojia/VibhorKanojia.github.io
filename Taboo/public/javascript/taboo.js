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
    var index = Math.floor(Math.random() * 1300);
    var words = cards[index].split(",");
    var c = document.getElementById('container');
    var html = "<table class='redTable'><th>"+ words[0] + "</th>";
    for (var i = 1; i < 6 ; i++){
        html = html + "<tr><td>"+words[i]+"</td></tr>";
    }
    html = html + "</table>";
    c.innerHTML = html;
}

function loadGame(){
    readTextFile('https://raw.githubusercontent.com/VibhorKanojia/VibhorKanojia.github.io/master/Taboo/public/javascript/cards.txt');
    alert('done');
    //window.setInterval(changeCard, 5000);
    window.setTimeout(changeCard, 5000);
}





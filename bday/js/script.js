$(document).ready(function() {
crossword = 
[
 ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
 ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','z','0','0','0','0','0','0','0','0','0','0'],
 ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','o','0','0','0','0','0','0','0','0','0','0'],
 ['0','0','0','0','0','0','0','i','c','e','c','r','e','a','m','0','0','0','0','0','0','0','0','0','0'],
 ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','a','0','0','0','0','0','0','0','0','0','0'],
 ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','t','0','0','0','0','0','0','0','b','0','0'],
 ['0','0','0','0','0','0','0','d','u','o','l','i','n','g','o','0','0','0','0','0','0','0','h','0','0'],
 ['0','0','0','0','0','0','0','0','0','0','0','0','0','i','0','0','0','s','0','0','0','0','a','0','0'],
 ['0','0','0','0','0','0','0','b','0','0','0','j','0','r','0','0','h','a','p','p','i','e','r','0','0'],
 ['0','0','0','0','0','0','d','i','m','p','l','e','0','a','0','0','0','m','0','0','0','0','t','0','0'],
 ['0','0','0','0','0','0','0','g','0','0','0','a','0','f','0','0','0','m','0','0','0','0','a','0','0'],
 ['0','0','0','c','0','0','0','b','0','0','0','n','0','f','0','0','0','e','0','0','0','0','0','0','0'],
 ['0','0','0','a','0','0','0','a','0','j','u','l','i','e','&','j','u','l','i','a','0','0','0','0','0'],
 ['0','t','i','r','a','m','i','s','u','0','0','0','0','0','0','0','0','a','0','0','0','0','0','0','0'],
 ['0','0','0','r','0','0','0','k','0','0','n','o','r','t','h','e','r','n','l','i','g','h','t','s','0'],
 ['0','0','0','o','0','0','0','e','0','0','0','0','u','0','0','0','0','0','0','0','0','0','0','k','0'],
 ['0','0','0','m','0','0','0','t','i','f','f','a','n','y','0','0','0','0','0','0','0','0','0','e','0'],
 ['0','0','0','0','0','0','0','0','0','0','0','0','n','0','0','0','0','0','0','0','0','0','0','t','0'],
 ['0','0','0','0','0','0','0','0','0','0','s','h','i','v','a','m','0','0','0','0','0','0','0','c','0'],
 ['0','0','0','0','0','0','0','0','0','0','0','0','n','0','a','0','0','0','0','0','0','0','0','h','0'],
 ['0','0','0','0','0','0','0','0','0','0','0','0','g','0','h','0','0','0','0','0','0','0','0','0','0'],
 ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','i','0','0','0','0','0','0','0','0','0','0'],
 ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','s','0','0','0','0','0','0','0','0','0','0'],
 ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','t','0','0','0','0','0','0','0','0','0','0'],
 ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','a','0','0','0','0','0','0','0','0','0','0'],]


across_list = [2,4,9,10,12,13,14,17,18]
down_list = [1,3,6,7,8,11,15,16,19]

let clues_map = new Map();
clues_map[1] = "101 followers!"
clues_map[2] = "First meal we shared."
clues_map[3] = "Your daily roasts forced me to learn this dish. I can't thank you enough &hearts;."
clues_map[4] = "Diamonds are the best(en)!"
clues_map[5] = "This animal is special. Don't you agree, Phippie?"
clues_map[6] = "Two times. There won't be a third."
clues_map[7] = "If you're not using Instagram, this would be my second guess."
clues_map[8] = "459 problems solved a big one for her."
clues_map[9] = "Lately I've been, I've been thinking."
clues_map[10] = "Fake it till you make it. Your smile says it all."
clues_map[11] = "I never stood a chance against you."
clues_map[12] = "I did not sign up for these french cooking classes!"
clues_map[13] = "You seem angry. Here, have this."
clues_map[14] = "How to light up the night sky! One can only dream."
clues_map[15] = "Some things are only achieved in dreams."
clues_map[16] = "Only list of mine where you don't make it in top 10."
clues_map[17] = "Some coals are denser than other coals."
clues_map[18] = "You'd be with him if you were a gold digger."
clues_map[19] = "This is our song &hearts;."

 function generate_crossword(){
 	var board = document.getElementById("crossword-board");
 	for (var i = 0; i < crossword.length; i++){
 		for (var j = 0; j < crossword[i].length; j++){
 			if (crossword[i][j] == '0'){
 				var span_elem = document.createElement("SPAN");
 				span_elem.setAttribute("class", "crossword-board__item--blank");
 				span_elem.id = "item"+(i+1)+"-"+(j+1);

 				board.appendChild(span_elem);
 			}
 			else {
 				var input_elem = document.createElement("INPUT");
 				input_elem.setAttribute("class", "crossword-board__item");
 				input_elem.setAttribute("type", "text");
 				input_elem.setAttribute("minlength", "1");
 				input_elem.setAttribute("maxlength", "1");
 				input_elem.setAttribute("required", "required");
 				input_elem.setAttribute("value", "");
 				input_elem.id = "item"+(i+1)+"-"+(j+1);

 				board.appendChild(input_elem);
 			}
 		}
 	}
 }	

 function generate_highlight(){
 	var board = document.getElementById("crossword-board");
 	var div_elem = document.createElement("DIV");
 	//Across
 	div_elem.setAttribute("class", "crossword-board crossword-board--highlight crossword-board--highlight--across");
 	for (var i = 0; i < across_list.length; i++){
 		var span_elem = document.createElement("SPAN");
 		span_elem.id = "across-"+across_list[i];
 		span_elem.setAttribute("class", "crossword-board__item-highlight crossword-board__item-highlight--across-"+across_list[i]);
 		div_elem.appendChild(span_elem);
 	}
 	board.appendChild(div_elem);

 	//Down
 	div_elem = document.createElement("DIV");
 	div_elem.setAttribute("class", "crossword-board crossword-board--highlight crossword-board--highlight--down");
 	for (var i = 0; i < down_list.length; i++){
 		var span_elem = document.createElement("SPAN");
 		span_elem.id = "down-"+down_list[i];
 		span_elem.setAttribute("class", "crossword-board__item-highlight crossword-board__item-highlight--down-"+down_list[i]);
 		div_elem.appendChild(span_elem);
 	}
 	board.appendChild(div_elem);
 }


function generate_labels(){
	var board = document.getElementById("crossword-board");
	var div_elem = document.createElement("DIV");
	div_elem.setAttribute("class", "crossword-board crossword-board--labels");
	for (var i = 1; i <= 19; i++){
		var span_elem_1 = document.createElement("SPAN");
		span_elem_1.id = "label-"+i;
		span_elem_1.setAttribute("class", "crossword-board__item-label crossword-board__item-label--"+i);

		var span_elem_2 = document.createElement("SPAN");
		span_elem_2.setAttribute("class", "crossword-board__item-label-text");
		span_elem_2.innerHTML = i;

		span_elem_1.appendChild(span_elem_2);

		div_elem.appendChild(span_elem_1);
	}
	board.appendChild(div_elem);
}

function generate_clues(){
	var board = document.getElementById("crossword-board");
	var div_elem = document.createElement("DIV");
	div_elem.setAttribute("class", "crossword-clues");

	//Across
	var dl_elem = document.createElement("DL");
	dl_elem.setAttribute("class", "crossword-clues__list crossword-clues__list--across");

	var dt_elem = document.createElement("DT");
	dt_elem.setAttribute("class", "crossword-clues__list-title");
	dt_elem.innerHTML = "Across";

	dl_elem.appendChild(dt_elem);
	for (var i = 0; i < across_list.length; i++){
		var dd_elem = document.createElement("DD");
		dd_elem.setAttribute("class", "crossword-clues__list-item crossword-clues__list-item--across-"+across_list[i]);
		dd_elem.setAttribute("data-number", across_list[i]);
		dd_elem.innerHTML = clues_map[across_list[i]];

		dl_elem.appendChild(dd_elem);
	}
	div_elem.appendChild(dl_elem);
	board.appendChild(div_elem);


	//Down
	dl_elem = document.createElement("DL");
	dl_elem.setAttribute("class", "crossword-clues__list crossword-clues__list--down");

	dt_elem = document.createElement("DT");
	dt_elem.setAttribute("class", "crossword-clues__list-title");
	dt_elem.innerHTML = "Down";

	dl_elem.appendChild(dt_elem);
	for (var i = 0; i < down_list.length; i++){
		var dd_elem = document.createElement("DD");
		dd_elem.setAttribute("class", "crossword-clues__list-item crossword-clues__list-item--down-"+down_list[i]);
		dd_elem.setAttribute("data-number", down_list[i]);
		dd_elem.innerHTML = clues_map[down_list[i]];

		dl_elem.appendChild(dd_elem);
	}
	div_elem.appendChild(dl_elem);
	board.appendChild(div_elem);
}

update_special_cells = function(){
	$("#item4-14").addClass('crossword-board__special-item');
	$("#item16-24").addClass('crossword-board__special-item');
	$("#item14-8").addClass('crossword-board__special-item');
	$("#item8-23").addClass('crossword-board__special-item');
	$("#item15-18").addClass('crossword-board__special-item');
	$("#item19-16").addClass('crossword-board__special-item');
	$("#item7-15").addClass('crossword-board__special-item');
	$("#item10-11").addClass('crossword-board__special-item');
}


 generate_crossword();
 generate_highlight();
 generate_labels();
 generate_clues();
 update_special_cells();


let cryptic_map = new Map();

cryptic_map[1] = "He naturally offers you a sweater if you're ever feeling cool.";
cryptic_map[2] = "He may lack hair but he will always be your Hrithik.";
cryptic_map[3] = "Just 5 feet but boys find her pretty. No matter what she does, you've found her gritty.";
cryptic_map[4] = "She sings you lullaby, she fights for you. No matter what happens, you shall keep her close.";
cryptic_map[5] = "His portfolio has everyone saying, 'Whenever we feel bored, we go to him.'";
cryptic_map[6] = "Wrong turn! I am not gonna share.";
cryptic_map[7] = "You have a guy friend? When did it happen?";
cryptic_map[8] = "A crazy friend who's always there for some gossip over tea.";
cryptic_map[9] = "Now you don' have to deal with her mess. Goodbye, Schrödinger's cuteness.";
cryptic_map[10] = "She means it when she says that she's your fan. She adores you.";
cryptic_map[11] = "Her presence in your life makes you wanna believe in Horoscopes. You just lucked out a big amount!"
cryptic_map[12] = "She doesn't rush, she's a slowpoke. She's someone you'd set me up with.";
cryptic_map[13] = "You love him! A foodie just like you, who won't keep his mouth shut.";
cryptic_map[14] = "He brought you chocolates. He was always there for you. Whenever you panicked, he kept you at ease.";
cryptic_map[15] = "She may not learn anything from you, but she definitely learned something from Vibhor. Cuteness overloaded!"
cryptic_map[16] = "She is present as a diety in your life. Never around when you want her, but always there when you need her.";


let cryptic_answers = new Map();
cryptic_answers[1] = "Nakul";
cryptic_answers[2] = "Hrishikesh";
cryptic_answers[3] = "Jaspreet";
cryptic_answers[4] = "Shalki";
cryptic_answers[5] = "Vibhor";
cryptic_answers[6] = "Tushar";
cryptic_answers[7] = "Vandit";
cryptic_answers[8] = "Krati";
cryptic_answers[9] = "Akanksha";
cryptic_answers[10] = "Meenu";
cryptic_answers[11] = "Rashi"
cryptic_answers[12] = "Rashmi";
cryptic_answers[13] = "Himaksh";
cryptic_answers[14] = "Atish";
cryptic_answers[15] = "Shivi"
cryptic_answers[16] = "Aditi";
 
var crossword_stage = 1;
validateCrossword = function() {
	if (crossword_stage == 1){
	 	if ($("#code__item-1").val() == "1" &&
	 		$("#code__item-2").val() == "3" && 
	 		$("#code__item-3").val() == "0" && 
	 		$("#code__item-4").val() == "1"){
	 		$("#crossword-board-container").addClass("animate");
	 		$("#cryptic-deck-container").addClass("animate");
	 		crossword_stage = 2;
	 	}	
	}
	else if (crossword_stage == 2) {
		if ($("#code__item-1").val() == "8" &&
	 		$("#code__item-2").val() == "6" && 
	 		$("#code__item-3").val() == "9" && 
	 		$("#code__item-4").val() == "6"){
			$("#link-container").addClass("animate");
	 		$("#cryptic-deck-container").addClass("animate_further");
	 	}	
	}
 	$("#code__item-1").val("");
	$("#code__item-2").val("");
	$("#code__item-3").val("");
	$("#code__item-4").val("");
};

var expandedCard; 

function animateGrid(thisObj, solved=false){
	var id_ = thisObj.attr("id");
	var num_ = parseInt(id_.substr(13));
	if ((thisObj).hasClass("expanded")){
		thisObj.removeClass("expanded");
		thisObj.empty();
		thisObj.animate(
	  	{
	      left: "0%",
	      top: "0%",
	  	  height:"100%",
	  	  width:"100%"}, 400, function(){
	  	  	thisObj.css("z-index","100");
	  	  	if(solved == true){
	  			thisObj.css("opacity", "0");
	  		}	
	  	  }
	  	);
		expandedCard = null;
	}
	else{
		thisObj.addClass("expanded");
		
		if (expandedCard) {animateGrid(expandedCard);}
		
		thisObj.css("z-index","200");

		var left_ = 100 - ((num_-1)%4)*100 +"%";
		var top_ = 100 - Math.floor((num_-1)/4)*100 +"%";

		thisObj.animate(
	  	{
	      left: left_,
	      top: top_,
	      height: '200%',
	      width: '200%'}, 400, function(){
	      	jQuery('<div/>', {
		    	id: 'cryptic-text',
		    	"class": 'cryptic-text',
		    	text: cryptic_map[num_],
			}).appendTo(thisObj);
			jQuery('<input/>', {
		    	id: 'cryptic-input-'+num_,
		    	"class": 'cryptic-input',
			}).appendTo(thisObj);
			jQuery('<button/>', {
		    	id: 'cryptic-button-'+num_,
		    	"class": 'button cryptic-button',
		    	onclick: 'check_cryptic_answer()',
		    	text: "Check",
			}).appendTo(thisObj);
	      }
	  	);
		expandedCard = thisObj;
	}

}

$(".cryptic-card").click(function(e){
	if (e.target !== this)
    	return;
  animateGrid($(this));
}); 

check_cryptic_answer = function(){
	var id_ = $(expandedCard).attr("id");
	console.log(id_);
	var num_ = parseInt(id_.substr(13));
	console.log(num_);
	var answer_ = $("#cryptic-input-"+num_).val();
	console.log(answer_);
	if (answer_ == cryptic_answers[num_]){
		$(expandedCard).attr('disabled','disabled');
		animateGrid(expandedCard, true);
	}
}; 



});
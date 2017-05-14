window.onload = function()  {
	};

$(document).ready(function() {
		$(".questions").hide();
		$("#clock").html("1:00");
	})	

var startBtn = $("#start");
var right = 0;
var wrong = 0;

$("#start").on("click", run, renderButtons);
// set clock at 1:00
	var interval;
	var set = 60;
	function run() {
		interval = setInterval(decrement, 1000)
	}
	function decrement() {
		set--;
		$("#clock").html(set);
		if (set === 0) {
			stop();
		}
	}
function stop() {
	clearInterval(interval);
}

var answers1 = ["California", "Connecticut", "New Hampshire", "Texas"]
function renderButtons() {
	for (var i = 0; i < answers1.length; i++) {
		var answerBtn = $("<button>");
		answerBtn.addClass("answer");
		answerBtn.attr("data-letter", answers1[i]);
		answerBtn.text(answers1[i]);
		$("#answersq1").append(answerBtn);
		var correctAnswer = ("data-letter", answers1[2]);
		
	}
var answers2 = ["Alison Janney", "Janel Maloney", "Hope Davis", "Stockard Channing"]	
	for (var i = 0; i < answers2.length; i++) {
		var answerBtn = $("<button>");
		answerBtn.addClass("answer");
		answerBtn.attr("data-letter", answers2[i]);
		answerBtn.text(answers2[i]);
		$("#answersq2").append(answerBtn);
		var correctAnswer = ("data-letter", answers2[3]);
		
	}
var answers3 = ["Aaron Sorkin", "Michael Bay", "Shonda Rhimes", "John Ford"]
	for (var i = 0; i < answers3.length; i++) {
		var answerBtn = $("<button>");
		answerBtn.addClass("answer");
		answerBtn.attr("data-letter", answers3[i]);
		answerBtn.text(answers3[i]);
		$("#answersq3").append(answerBtn);
		var correctAnswer = ("data-letter", answers3[0]);

	}
var answers4 = ["Fox", "A&E", "ABC", "NBC"]
	for (var i = 0; i < answers4.length; i++) {
		var answerBtn = $("<button>");
		answerBtn.addClass("answer");
		answerBtn.attr("data-letter", answers4[i]);
		answerBtn.text(answers4[i]);
		$("#answersq4").append(answerBtn);
		var correctAnswer = ("data-letter", answers4[3]);
		
	}
	run();	
	
	$(".questions").show();


	$(document).on("click", ".answer", function() {
		if($(this).attr("data-letter")== correctAnswer) {
			right++;
			$("#right").html("Correct" + right);
		}else{
			wrong++;
			$("#wrong").html("Wrong" + wrong);
		}
	});
}	

	

	
	
//}



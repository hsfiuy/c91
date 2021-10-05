function addUser(){
	player1_name = document.getElementById("player1_name_input").value;
	player2_name = document.getElementById("player2_name_input").value;
		
		localStorage.setItem("player1_name", player1_name);
		localStorage.setItem("player2_name", player2_name);

		window.location = "game_page.html";
}

function send(){
	num1=document.getElementById("word").value;
	num2=document.getElementById("word2").value;
	answer=parseInt(num1)*parseInt(num2);
	question_word="<h4 id='word_display'>Q. " + num1 + "X" + num2 + "</h4>";
    input_box="<br><br>Answers : <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
	row=question_word,input_box,check_button;
	document.getElementById("output").innerHTML=row;
}
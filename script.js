function showHide(ballon, ballonDirection, button, buttonIcon){
	var ballon = document.querySelector(ballon);
	var direction = document.querySelector(ballonDirection);
	var button = document.querySelector(button);
	var buttonIcon = document.querySelector(buttonIcon);

	ballon.classList.toggle("show_hide_ballon");
	direction.classList.toggle("show_hide_direction");
	button.classList.toggle("toggle_button");
	buttonIcon.classList.toggle("toggle_button_icon");
}
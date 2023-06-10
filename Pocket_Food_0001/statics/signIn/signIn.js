function toggleToLogIn(){
	document.body.classList = 'log-in';
}
function toggleToSignIn(){
	document.body.classList = 'sign-in';
}
function changeText(id, txt1, txt2){
	var element = document.getElementById(id);
	if(element.innerHTML === txt1){
		element.innerHTML = txt2;
	}else{
		element.innerHTML = txt1;
	}
}
changeIdBtn = document.getElementById('switch-button')
changeIdBtn.addEventListener('click', function(){
	changeText("switch-text", "Log-In", "Sign-In");
	if (document.body.classList == 'log-in') {
		document.body.classList = 'sign-in';
	} else {
		document.body.classList = 'log-in';
	}

})
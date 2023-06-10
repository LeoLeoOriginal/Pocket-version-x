var menuButton = document.getElementById('menu-button');
var menuAccountButton = document.getElementById('account-button');
var profile_menu = document.getElementById('profile-menu-container');
var menu = document.getElementById('menu-container');
var filter = document.getElementById('filter');

menuButton.addEventListener('click', function(){
	if(menu.classList == 'menu-close'){
		menu.classList = 'menu-open';
		filter.classList = 'page-filter-on';
		menuButton.classList = 'button-menu-open';
	}else{
		menu.classList = 'menu-close';
		menuButton.classList = 'button-menu-close';
		if(profile_menu.classList == 'profile-menu-close'){
			filter.classList = 'page-filter-off';
		}
	}
});

function changeIcon(id, icon1, icon2){
	var element = document.getElementById(id);
	if(element.innerHTML === icon1){
		element.innerHTML = icon2;
	}else{
		element.innerHTML = icon1;
	}
}
function redirect(url){
  window.location.href = url;
};

menuAccountButton.addEventListener('click', function(){
	if(profile_menu.classList == 'profile-menu-close'){
		profile_menu.classList = 'profile-menu-open';
		filter.classList = 'page-filter-on';
		menuAccountButton.classList = 'button-profile-open';
	}else{
		profile_menu.classList = 'profile-menu-close';
		menuAccountButton.classList = 'button-profile-close';
		if(menu.classList == 'menu-close'){
			filter.classList = 'page-filter-off';
		}
	}
});

filter.addEventListener('click', function(){
	if(filter.classList == 'page-filter-on'){
		menuButton.classList = 'button-menu-close';
		menuAccountButton.classList = 'button-profile-close';

		var element = document.getElementById('menubutton-icon').innerHTML = 'menu';
		var element = document.getElementById('account-icon').innerHTML = 'account_circle';
	
		profile_menu.classList = 'profile-menu-close';
		menu.classList = 'menu-close';
		filter.classList = 'page-filter-off';
	}
});
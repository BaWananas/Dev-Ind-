function getById(id) { return document.getElementById(id); }

function set_active_tab(id){
	getById('_home').classList.remove('active');
	getById('_who').classList.remove('active');
	getById('_prices').classList.remove('active');
	getById('_what').classList.remove('active');
	getById('_contact').classList.remove('active');

	getById(id).classList.add('active');
}

window.onload = function() {
	getById('_home').addEventListener('click', function() {set_active_tab('_home');}, false);
	getById('_who').addEventListener('click', function() {set_active_tab('_who');}, false);
	getById('_prices').addEventListener('click', function() {set_active_tab('_prices');}, false);
	getById('_what').addEventListener('click', function() {set_active_tab('_what');}, false);
	getById('_contact').addEventListener('click', function() {set_active_tab('_contact');}, false);

	set_active_tab('_home');
}
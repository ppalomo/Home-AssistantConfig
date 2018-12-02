function nest_menu_button_onClick() {
	ShowLayer('nest_menu_layer');
}

function vacuum_menu_button_onClick()
{
	ShowLayer('vacuum_menu_layer');
}

function ShowLayer(layerName)
{	
	var layer1 = document.getElementById('nest_menu_layer');
	var layer2 = document.getElementById('vacuum_menu_layer');

	var layers = [ layer1, layer2];
	layers.forEach(function (element, index, array) {
	    if (element.id == layerName)
	 		element.style.display = 'inline';
	 	else
	 		element.style.display = 'none';
	});
}

function nest_menu_button_onClick() {
	alert("Hola");
}
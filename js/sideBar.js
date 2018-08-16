function makeEntries(trucks) {
	var list = document.getElementById('trucks');
	trucks.forEach(truck =>{
		div = document.createElement('div');
		entry=document.createElement('li');
		button=document.createElement('i');
		div.className += ('truckEntry');
		button.setAttribute("data-target", "modal1");
		button.className += 'modal-trigger material-icons';
		button.innerHTML = 'info';

		// lmao terrible way to do it but just wanna see how it looks rn let me live
		entry.innerHTML='<i class="material-icons">fastfood</i>';

		name=truck.name;
		truckName = document.createTextNode(name);
		description = truck.description;
		truckDesc = document.createTextNode(description);

    	lat = truck.lat;
    	long = truck.long;
    	div.appendChild(entry);
		entry.appendChild(truckName);
		entry.appendChild(button);

		list.appendChild(div);
		// makeModal(trucks);

	})
}

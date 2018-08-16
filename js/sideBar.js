function makeEntries(map,trucks) {
	var list = document.getElementById('trucks');
	trucks.forEach(truck =>{
		div = document.createElement('div');
		entry=document.createElement('li');
		button=document.createElement('i');
		div.className += ('truckEntry');
		button.setAttribute("data-target", "modal1");
		button.addEventListener('click', function() {
			makeModal(truck);
		})
		button.className += 'modal-trigger material-icons';
		button.innerHTML = 'info';

		// lmao terrible way to do it but just wanna see how it looks rn let me live
		entry.innerHTML='<i class="material-icons">fastfood</i>';
		
		div.setAttribute('onClick','centerOnPlace({lat:'+truck.lat+", lng:"+truck.long+'})');
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
	})
}

// {lat: -34.397, lng: 150.644}
function makeModal(truck) {
	header=document.getElementById('modalHeader');
	description=document.getElementById('modalDescription');
	link=document.createElement('a');
	link.innerHTML = '<i class="fa fa-twitter" style="font-size:32px align-right"></i>'
	link.setAttribute("href", "https://twitter.com/" + truck.twitter);
	twitter=document.createElement('i');
	header.innerHTML = truck.name;
	description.innerHTML=truck.description;
	link.appendChild(twitter);
	header.appendChild(link);
} 

function centerOnPlace(marker){
	map.setZoom(19)
	map.setCenter(marker);
	$(".sidenav").sidenav('close');
  }


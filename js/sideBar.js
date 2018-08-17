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

function makeModal(truck) {
	header=document.getElementById('modalHeader');
	description=document.getElementById('modalDescription');
	link=document.createElement('a');
	twitter=document.createElement('i');
	twitter.className += 'fa fa-twitter';
	link.appendChild(twitter);
	if (truck.twitter == '') {
		twitterLink='';
		twitter.className += 'hidden';
	}
	else {
		twitterLink="https://twitter.com/" + truck.twitter;
	}
	link.setAttribute("href", twitterLink);

	fblink=document.createElement('a');
	fb=document.createElement('i');
	fb.className += 'fa fa-facebook-official';
	fblink.appendChild(fb);
	if (truck.facebook == '') {
		facebookLink='';
		fb.className += 'hidden';
	}
	else {
		facebookLink="https://facebook.com/" + truck.facebook;
	}
	fblink.setAttribute("href", facebookLink);


	header.innerHTML = truck.name;
	description.innerHTML=truck.description;
	link.appendChild(twitter);
	header.appendChild(link);
	header.appendChild(fblink);
} 

function centerOnPlace(marker){
	map.setZoom(19)
	map.setCenter(marker);
	$(".sidenav").sidenav('close');
  }

  makeEntries(map, trucks);


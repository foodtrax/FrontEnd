function makeEntries(trucks) {
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
		// makeModal(truck);
	})
}

function makeModal(truck) {
	header=document.getElementById('modalHeader');
	description=document.getElementById('modalDescription');
	link=document.createElement('a');
	twitter=document.createElement('i');
	twitter.className += 'fa fa-twitter';
	twitter.setAttribute('style', 'font-size:32px align-right');
	link.appendChild(twitter);
	// link.innerHTML = '<i id="twitterIcon" class="fa fa-twitter" style="font-size:32px align-right"></i>'
	if (truck.twitter == '') {
		twitterLink='';
		twitter.className += 'hidden';
	}
	else {
		twitterLink="https://twitter.com/" + truck.twitter;
	}
	link.setAttribute("href", twitterLink);
	twitter=document.createElement('i');
	header.innerHTML = truck.name;
	description.innerHTML=truck.description;
	link.appendChild(twitter);
	header.appendChild(link);
} 

// makeEntries(trucks);

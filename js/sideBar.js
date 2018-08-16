$(document).ready(function(){
    $('.modal').modal();
  });

// trucks=[
//         {
//             name: "Chris's Stupid Taco Truck",
//             description: "TACOS!",
//             twitter: "@_tweedge",
//             lat: 43.155916,
//             long: -77.605675
//         },
//         {
//             name: "Bitler's cheeseless pizza",
//             description: "Pizza!",
//             twitter: "@chrissy_bits",
//             lat: 43.156071,
//             long: -77.605004
//         }
//     ]

// var request = new XMLHttpRequest();
//     request.open('GET', 'https://roc.foodtrax.io/backend/api/trucks.php');
//     request.responseType='text';
//     request.onload = function() {
//         trucks=JSON.parse(request.response);
//         makeEntries(trucks);
//     };
//     request.send();

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
		makeModal(truck);

	})
}

function makeModal(truck) {
	header=document.getElementById('modalHeader');
	description=document.getElementById('modalDescription');
	header.innerHTML = truck.name;
	description.innerHTML=truck.description;
}

makeEntries(trucks);

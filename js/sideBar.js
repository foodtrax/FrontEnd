var list = document.getElementById('trucks');

$(document).ready(function(){
    $('.collapsible').collapsible();
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

var request = new XMLHttpRequest();
    request.open('GET', 'https://roc.foodtrax.io/backend/api/trucks.php');
    request.responseType='text';
    request.onload = function() {
        trucks=JSON.parse(request.response);
        makeEntries(trucks);
    };
    request.send();

function makeEntries(trucks) {
	trucks.forEach(truck =>{
		entry=document.createElement('li');
		link = document.createElement('a');
		el = document.createElement('div');
		liDesc = document.createElement('li');
		desc = document.createElement('a');

		link.className += 'collapsible-header';
		el.className += 'collapsible-body';
		desc.className += 'subheader';

		// lmao terrible way to do it but just wanna see how it looks rn let me live
		link.innerHTML='<i class="material-icons">fastfood</i><i class="material-icons right gray-text" style="margin-right:0;">arrow_drop_down</i>';

		name=truck.name;
		truckName = document.createTextNode(name);
		description = truck.description;
		truckDesc = document.createTextNode(description);

		link.appendChild(truckName);
		desc.appendChild(truckDesc);
		liDesc.appendChild(desc);
		el.appendChild(liDesc);
		entry.appendChild(link);
		entry.appendChild(el);

		list.appendChild(entry);
	})
}

function addDescription(truck) {
	

}

// makeEntries(trucks);

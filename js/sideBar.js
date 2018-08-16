var list = document.getElementById('trucks');

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
		link.href = "#!";
		link.innerHTML='<i class="material-icons">fastfood</i>';
		name=truck.name;
		truckName = document.createTextNode(name);
		link.appendChild(truckName);
		entry.appendChild(link);
		list.appendChild(entry);
	})
}

// makeEntries(trucks);




// entry.innerHTML = '<a href="#!"><i class="material-icons">fastfood</i>' + name + '</a>';

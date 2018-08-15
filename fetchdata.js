// Fetching data 

var request = new XMLHttpRequest();

request.open('GET', 'https://roc.foodtrax.io/backend/api/trucks.php', true);

request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
		var data = JSON.parse(this.response);
	}
}

request.send();

function getTruckData() {
	return data;
}
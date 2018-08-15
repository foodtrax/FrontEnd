function getTruckData() {
// Fetching data 
	var datas;

	  $.ajax('https://roc.foodtrax.io/backend/api/trucks.php').done(function( data ) {
		datas=data;
	  })

	console.log(datas)
	
	return datas;
}
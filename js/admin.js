/**
 * The way we generate HTML here is ugly, but we don't have a better alternative
 */
$(document).ready(function() {
    loadTruckInformation();
    $('.collapsible').collapsible();
});

function getCollapsibleBody(truck) {
    var contents = "";

    contents += '<form class="auth-form-container center-align">';
    contents += '<div class="row">';
    contents += '<div class="input-field col s12">';
    contents += '<input id="name-' + truck.id + '" type="text" class="underline-input" value="' + truck.name + '" />';
    contents += '<label for="name-' + truck.id + '">Name</label>';
    contents += '</div>';
    contents += '<div class="input-field col s12">';
    contents += '<input id="description-' + truck.id + '" type="text" class="underline-input" value="' + truck.description + '">';
    contents += '<label for="description-' + truck.id + '">Description</label>';
    contents += '</div>';
    contents += '<div class="input-field col s12">';
    contents += '<input id="twitter-' + truck.id + '" type="text" class="underline-input" value="' + truck.twitter + '">';
    contents += '<label for="twitter-' + truck.id + '">Twitter</label>';
    contents += '</div>';
    contents += '<button class="btn waves-effect waves-light" type="button" id="updateButton-' + truck.id  + '">Update</button>';
    contents += '<button class="btn waves-effect waves-light" type="button" id="updateLocButton-' + truck.id  + '">Update Truck Location</button>';
    contents += '<button class="btn waves-effect waves-light" type="button" id="hideButton-' + truck.id  + '">Hide Truck from Map</button>';
    contents += '</div>';
    contents += '</form>';

    return contents;
}

function loadTruckInformation()
{
    $.get(
        'https://roc.foodtrax.io/backend/api/trucks_from_owner.php',
        {
            id: owner_id
        },
        function(data) {
            var json = JSON.parse(data);
            var contentsToAdd = '';
            json.forEach(function (truck) {
                contentsToAdd += '<li class="collapsible-container">';
                contentsToAdd += '<div class="collapsible-header header-full">' + truck.name + "</div>";
                contentsToAdd += '<div class="collapsible-body">' + getCollapsibleBody(truck) + '</div>';
                contentsToAdd += '</li>';
            });

            $("#truckList").html(contentsToAdd);
            M.updateTextFields();
        }
    )
}
/**
 * The way we generate HTML here is ugly, but we don't have a better alternative
 */
$(document).ready(function() {
    loadTruckInformation();
});

function getCollapsibleBody(truck) {
    var contents = "";

    contents += '<form class="author-form-container center-align">';
    contents += '<div class="row">';
    contents += '<div class="input field col s12">';
    contents += '<input id="name-' + truck.id + '" type="text" class="underline-input">';
    contents += '<label for="name-' + truck.id + '">' + truck.name + '</label>';
    contents += '</div>';
    contents += '<div class="input field col s12">';
    contents += '<input id="description-' + truck.id + '" type="text" class="underline-input">';
    contents += '<label for="description-' + truck.id + '">' + truck.description + '</label>';
    contents += '</div>';
    contents += '<div class="input field col s12">';
    contents += '<input id="twitter-' + truck.id + '" type="text" class="underline-input">';
    contents += '<label for="twitter-' + truck.id + '">' + truck.email + '</label>';
    contents += '</div>';
    contents += '<button class="btn waves-effect waves-light" type="button" id="updateButton-' + truck.id  + '">Update</button>';
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
            for (var truck in json) {
                contentsToAdd += '<li>';
                contentsToAdd += '<div class="collapsible-header">' + truck.name + "</div>";
                contentsToAdd += '<div class="collapsible-body">' + getCollapsibleBody(truck) + '</div>';
                contentsToAdd += '</li>';
            }
        }
    )
}
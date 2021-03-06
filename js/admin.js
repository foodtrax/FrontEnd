/**
 * The way we generate HTML here is ugly, but we don't have a better alternative
 */
$(document).ready(function() {
    loadTruckInformation();
    $('.collapsible').collapsible();
});

/**
 * Get the body of a collapsible area by truck
 * @param truck
 * @returns {string}
 */
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
    contents += '<div class="input-field col s12">';
    contents += '<input id="facebook-' + truck.id + '" type="text" class="underline-input" value="' + truck.facebook + '">';
    contents += '<label for="facebook-' + truck.id + '">Facebook</label>';
    contents += '</div>';
    contents += '<div class="input-field col s12">';
    contents += '<input id="website-' + truck.id + '" type="text" class="underline-input" value="' + truck.website + '">';
    contents += '<label for="website-' + truck.id + '">Website</label>';
    contents += '</div>';
    contents += '<button class="btn waves-effect waves-light button-spacer" type="button" data-truck-id="' + truck.id + '" id="updateButton-' + truck.id  + '">Update</button>';
    contents += '<button class="btn waves-effect waves-light button-spacer" type="button" data-truck-id="' + truck.id + '" id="updateLocButton-' + truck.id  + '">Update Truck Location</button>';
    contents += '<button class="btn waves-effect waves-light button-spacer" type="button" data-truck-id="' + truck.id + '" id="hideButton-' + truck.id  + '">Hide Truck from Map</button>';
    contents += '<div id="notification-' + truck.id + '"></div>';
    contents += '</div>';
    contents += '</form>';

    return contents;
}

/**
 * Update a truck's information
 * @param id
 */
function updateTruckInformation(id)
{
    var name = $("#name-"  + id).val();
    var description = $("#description-" + id).val();
    var twitter = $("#twitter-" + id).val();
    var facebook = $("#facebook-" + id).val();
    var website = $("#website-" + id).val();

    $.post(
        'https://roc.foodtrax.io/backend/api/update_truck_web.php',
        {
            truckid: id,
            truckname: name,
            truckdesc: description,
            twitter: twitter,
            facebook: facebook,
            website: website
        },
        function(data) {
            var json = JSON.parse(data);
            if(json.result === true) {
                $("#notification-" + id).html('Truck information updated.');
                $("#notification-" + id).removeClass('notification-bad');
                $("#notification-" + id).addClass('notification-ok');
            } else {
                $("#notification-" + id).html('An error occurred during update.');
                $("#notification-" + id).removeClass('notification-ok');
                $("#notification-" + id).addClass('notification-bad');
            }
        }
    )
}

/**
 * Update a truck's location
 * @param id
 */
function updateTruckLocation(id)
{
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(loc) {
            $.post(
                'https://roc.foodtrax.io/backend/api/update_truck_loc_web.php',
                {
                    truckId: id,
                    lat: loc.coords.latitude,
                    lon: loc.coords.longitude
                },
                function(data) {
                    var json = JSON.parse(data);
                    if(json.result === true) {
                        $("#notification-" + id).html('Truck location updated.');
                        $("#notification-" + id).removeClass('notification-bad');
                        $("#notification-" + id).addClass('notification-ok');
                    } else {
                        $("#notification-" + id).html('An error occurred during update.');
                        $("#notification-" + id).removeClass('notification-ok');
                        $("#notification-" + id).addClass('notification-bad');
                    }
                }
            )
        });
    } else {
        $("#notification-" + id).addClass('notification-bad');
        $("#notification-" + id).removeClass('notification-ok');
        $("#notification-" + id).html("Couldn't get location");
        return;
    }
}

/**
 * Hide a truck
 * @param id
 */
function hideTruckLocation(id)
{
    $.post(
        'https://roc.foodtrax.io/backend/api/hide_truck_web.php',
        {
            truckId: id
        },
        function(data) {
            var json = JSON.parse(data);
            if(json.result === true) {
                $("#notification-" + id).html('Truck location hidden.');
                $("#notification-" + id).removeClass('notification-bad');
                $("#notification-" + id).addClass('notification-ok');
            } else {
                $("#notification-" + id).html('An error occurred during hiding.');
                $("#notification-" + id).removeClass('notification-ok');
                $("#notification-" + id).addClass('notification-bad');
            }
        }
    )
}

/**
 * Load truck information for this owner.
 */
function loadTruckInformation()
{
    $.get(
        'https://roc.foodtrax.io/backend/api/trucks_from_owner.php',
        {},
        function(data) {
            var json = JSON.parse(data);
            var contentsToAdd = '';
            json.forEach(function (truck) {
                contentsToAdd += '<li class="collapsible-container">';
                contentsToAdd += '<div class="collapsible-header header-full center">' + truck.name + "</div>";
                contentsToAdd += '<div class="collapsible-body">' + getCollapsibleBody(truck) + '</div>';
                contentsToAdd += '</li>';
            });

            $("#truckList").html(contentsToAdd);
            M.updateTextFields();

            $("button[id*=updateButton]").click(function(element) {
                var id = $(element.target).data('truck-id');
                updateTruckInformation(id);
            });
            $("button[id*=updateLocButton]").click(function(element) {
                var id = $(element.target).data('truck-id');
                updateTruckLocation(id);
            });
            $("button[id*=hideButton]").click(function(element) {
                var id = $(element.target).data('truck-id');
                hideTruckLocation(id);
            });
        }
    )
}
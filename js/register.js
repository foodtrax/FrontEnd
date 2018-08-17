$(document).ready(function() {
    $("#registerButton").click(function() {
        attemptRegister();
    });
});

function attemptRegister()
{
    var username = $("#username").val();
    var password = $("#password").val();
    var email = $("#email").val();
    var trucks = $("#trucks").val();

    $.post(
        'https://roc.foodtrax.io/backend/authentication/register.php',
        {
            username: username,
            password: password,
            email: email,
            trucks: trucks
        },
        function(data) {
            var json = JSON.parse(data);
            if(json.result === true) {
                $("#notification").html('We will contact you to finish the registration process.');
                $("#notification").removeClass('notification-bad');
                $("#notification").addClass('notification-ok');
            } else {
                $("#notification").html('An error occurred during the registration process.');
                $("#notification").removeClass('notification-ok');
                $("#notification").addClass('notification-bad');
            }
        }
    )
}
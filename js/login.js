$(document).ready(function() {
    $("#loginButton").click(function() {
        attemptLogin();
    });
});

function attemptLogin()
{
    var username = $("#username").val();
    var password = $("#password").val();

    $.post(
        'https://roc.foodtrax.io/backend/authentication/login.php',
        {
            username: username,
            password: password
        },
        function(data) {
            var json = JSON.parse(data);
            if(json.result === true) {
                $("#notification").html('You are logged in!');
                $("#notification").removeClass('notification-bad');
                $("#notification").addClass('notification-ok');
            } else {
                $("#notification").html('An error occurred during login.');
                $("#notification").removeClass('notification-ok');
                $("#notification").addClass('notification-bad');
            }
        }
    )
}
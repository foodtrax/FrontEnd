<?php
session_start();

if (!$_SESSION['id']) {
    header('Location: https://roc.foodtrax.io/login.html');
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0" />
    <title>Food Trucks</title>

    <!-- CSS  -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
    <link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection" />
    <link href="css/admin.css" type="text/css" rel="stylesheet" media="screen,projection" />
    <link href="data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADY/XP42P1z+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANj9c/jY/XP4AAAAAAAAAAAAAAAAAAAAAAAAAADY/XP42P1z+Nj9c/jY/XP4AAAAAAAAAAAAAAAAAAAAANj9c/jY/XP42P1z+Nj9c/gAAAAAAAAAAAAAAAEJv/v42P1z+Nj9c/jY/XP42P1z+Qm/+/kJv/v5Cb/7+HVDz/jY/XP42P1z+Nj9c/jY/XP5Cb/7+AAAAAAAAAABCb/7+Qm/+/jY/XP42P1z+Qm/+/kJv/v5Cb/7+Qm/+/h1Q8/4dUPP+Nj9c/jY/XP5Cb/7+Qm/+/gAAAAAAAAAA6evv/+nr7//p6+//6evv/+nr7//p6+//6evv/x1Q8/4ALN3+ACzd/gAs3f4ALN3+HVDz/gDV/v8AAAAAAAAAAB1Q8/43Mib/NzIm/zcyJv83Mib/NzIm/zcyJv8dUPP+ACzd/gAs3f4ALN3+ACzd/h1Q8/4A1f7/AAAAAAAAAAAdUPP+NzIm/zcyJv83Mib/NzIm/zcyJv83Mib/HVDz/jcyJv83Mib/NzIm/wAs3f4AAAAAAAAAAAAAAAAAAAAAAKr+/gCq/v4Aqv7+AKr+/gCq/v4Aqv7+AKr+/h1Q8/43Mib/NzIm/zcyJv8ALN3+AAAAAAAAAAAAAAAAAAAAAA+S+f4A1f7/ANX+/wDV/v8A1f7/ANX+/wDV/v8dUPP+NzIm/zcyJv83Mib/CSF1LwAAAAAAAAAAAAAAAAAAAAAdUPP+HVDz/h1Q8/4dUPP+HVDz/h1Q8/4dUPP+HVDz/gAs3f4ALN3+ACzd/gAAAAAAAAAAAAAAAAAAAAAAAAAAQm/+/kJv/v5Cb/7+Qm/+/kJv/v5Cb/7+Qm/+/kJv/v5Cb/7+Qm/+/kJv/v4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAP//AADn5wAAw8MAAIABAACAAQAAgAEAAIABAACABwAAgAcAAIAPAACADwAAgA8AAP//AAD//wAA//8AAA==" rel="icon" type="image/x-icon" />
</head>

<body>
<main>
    <nav>
        <div class="nav-wrapper foodtrax-pink">
            <a href="#" class="brand-logo center">FoodTrax</a>
        </div>
        <div class="container">
            <div class="center">
                <div class="row">
                    <h4 class="auth-header">Update truck information</h4>
                    <ul class="collapsible" id="truckList">
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</main>


<!--  Scripts-->
<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="js/materialize.js"></script>
<script src="js/ui.js"></script>
<script src="js/login.js"></script>
<script type="text/javascript">
    var owner_id = <?php echo $_SESSION['id'] ?>;
</script>
<script src="js/admin.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC19B2wT0Y7DHPm7cA5fusCNj8AeExb35U&callback=initMap"></script>
</body>

</html>

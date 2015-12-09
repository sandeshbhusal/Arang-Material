if(Parse){
    if(app.user.vehicleID){
        app.netInfo();
        var userLat = 0;
        var userLng = 0;
        navigator.geolocation.getCurrentPosition(setPosition);
        function setPosition(geoData){
            userLat = geoData.coords.latitude;
            userLng = geoData.coords.longitude;
        }
        var vehicles = Parse.Object.extend("vehicle");
        var vehicle = new vehicles();
        var query = new Parse.Query(vehicle);
        query.get("tBmGsy4Z9O", {
            success: function(result){
                console.log("OK query Complete!");
                var sp = result.get("ServiceOf");
                var rs = result.get("RouteStart");
                var re = result.get("RouteEnd");
                var st = result.get("Jammed");
                var oldlat = result.get("LatOld");
                var newlat = result.get("LatNew");
                var oldlng = result.get("LngOld");
                var newlng = result.get("LngNew");

                var oldLoc = new google.maps.LatLng(oldlat, oldlng);
                var newLoc = new google.maps.LatLng(newlat, newlng);
                var userPos = new google.maps.LatLng(userLat, userLng);

                console.log(newLoc);

                var from = new google.maps.LatLng(27.700769, 85.300140);
                var to   = new google.maps.LatLng(userLat, userLng);
                var dist = google.maps.geometry.spherical.computeDistanceBetween(from, to);
                dist = dist / 1000;
                dist = Math.floor(dist);
                console.log(dist);


                console.log(result);
                $("#sp_id").html(sp);
                $("#sp_route").html("Runs "+rs+" to "+re+"<br />");
                $("#distance").html(dist+" km far from You.");
            },
            error: function(Object, errorCode){
                console.log(errorCode);
            }
        });
        $("#newTravelBtnd").hide();
    }
    else{
        
    }
}
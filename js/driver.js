var jammed = false;
var userLat = 0;
var userLng = 0;
$("#updt").click(function(){
    jammed = $("#jamstat").is(":checked");
    alert(jammed);
    navigator.geolocation.getCurrentPosition(setPos);
    function setPos(Data){
        userLat = Data.coords.latitude;
        userLng = Data.coords.longitude;
    }
    if(Parse){
        //app.netInfo();
        var vId = app.user.vehicleID;
        var vehicles = Parse.Object.extend("vehicle");
        var vehicle = new vhicles();
        var query = new Parse.Query();
        query.set(vId, {
            success: function(){
                
            },
            error: function(){
                
            }
        });
    }
    else{
        app.netInfo();
    }
});
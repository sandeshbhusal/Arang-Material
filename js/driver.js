var jammed = false;
var userLat = 0;
var userLng = 0;
$("#updt").click(function(){
    jammed = $("#jamstat").is(":checked");
    navigator.geolocation.getCurrentPosition(setPos);
    function setPos(Data){
        userLat = Data.coords.latitude;
        userLng = Data.coords.longitude;
    }
if(Parse){
    //app.netInfo();
    var vId = app.user.vehicleID;
    var vehicles = Parse.Object.extend("vehicle");
    var vehicle = new vehicles();
    var query = new Parse.Query(vehicles);
    query.get(app.user.vehicleID, {
        success:function(data){
            var olLon = data.get("LonNew");
            var olLat = data.get("LatNew");
            
            console.log("Successfully retreieved object");
            data.save(null, {
                success:function(object){
                    object.set("LatNew", userLat);
                    object.set("LonNew", userLng);
                    object.set("LatOld", olLat);
                    object.set("LonOld", olLon);
                    object.set("Jammed", $("#jamstat").is(":checked"));
                    object.save();
                    location.reload();
                },
                error:function(){
                    console.log("Could not update the data! :(");
                }
            });
        },
        error:function(object, errorID){
            console.log("Could not retrieve object");
        }
    });
}
else{
    app.netInfo();
}
});
if(Parse){
    app.netInfo();
    var vehicles = Parse.Object.extend("vehicle");
    var vehicle = new vhicles();
    var query = new Parse.Query();
    query.get("ID", {
        success:function(data){
            var name = data.get("Jammed");
            var name = data.get("ServiceOf");
        },
        error:function(object, errorNo){
            
        }
    });
}
else{
    app.netInfo();
}
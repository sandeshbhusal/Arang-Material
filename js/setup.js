$("#submitBtn").click(function(){
    //app.netInfo();
    var typese = $("#driver").is(":checked");
    var un = $("#username").val();
    var pas = $("#password").val();
    console.log("GOT USERNAME "+un+" AND PASSWORD "+pas+ " AND TYPE "+typese);
    if(un && pas){
        console.log("USERNAME AND PasSWORD Non empty, checking with servers");
        // Validate with server;
        var user = Parse.Object.extend("Users");
        console.log("Extending the parse users class");
        var query = new Parse.Query(user);
        console.log('creating a new query and executing...');
        query.equalTo("Name", un);

        $("#modalBackLays").fadeIn();
        $("#modalProcess").show();
        query.find({
            success: function(data){
                $("#modalBackLays").fadeOut();
                $("#modalProcess").fadeOut();
                console.log("successful query! ");
                if(data.length == 0){
                    console.log("no users found! ");
                    
                    $("#modalBackLays").fadeIn();
                    $("#modal").show();
                }
                else{
                    $("#modalBacjLays").fadeIn();
                    console.log("User found! :)");
                    
                    var uid = data[0].id;
                    var vehicleID = data[0].get("VehicleID");
                    console.log(vehicleID);
                    
                    localStorage.setItem("user_name", un);
                    localStorage.setItem("user_type", typese);
                    localStorage.setItem("user_id", uid);
                    localStorage.setItem("vehicle_id", vehicleID);
                    
                    if(typese == 0){
                        $("#wrapper").load("../yatru.html");
                    }
                    else{
                        $("#wrapper").load("../driver.html");
                    }
                }
            },
            error: function(errdata){
                $("#modalBackLays").fadeOut();
                $("#modalProcess").fadeOut();
                    $("#modalBackLays").fadeIn();
                    $("#modal").show();
                app.netInfo();
                console.log("un - successful query!");
            }
        });
    }
    else{
        console.log("ONe of the fields appears to be empty");
        if(!un){
            console.log("username is the guilty one!");
            $("#username").addClass("animated shake");
            setTimeout(function(){
                $("#username").removeClass("shake");
            }, 1000);
        }
        else{
            console.log("password is the guilty one!");
            $("#password").addClass("animated shake");
            setTimeout(function(){
                $("#password").removeClass("shake");
            }, 1000);            
        }
    }
});
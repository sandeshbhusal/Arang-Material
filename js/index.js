$(document).ready(function(){
    if(!app.user.name){
        $("#wrapper").load("firstrun.html");
    }
    else{
        if(!app.user.runTime){
            $("#wrapper").load("firstrun.html");
            localStorage.setItem("run_time", 1);
        }
        else{
            if(app.user.type == false){
                $("#wrapper").load("../driver.html");
            }
            else{
                $("#wrapper").load("../yatru.html");
            }
        }
    }
    Parse.initialize("uzexoP2RQGMSARWVpi9VZsmp1Po7lGFHjzTsaXSZ", "K6qkNFSDvoE0h5biL7mmsPXuQwc083ESkdYZt1E7");
    
    if(!Parse){
        app.netInfo();
    }
});
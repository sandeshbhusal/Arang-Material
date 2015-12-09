var current = 0;
$('select').material_select();
$("#nextCarousel").click(function(){
    if(current == 0 && $("#perLocVal").val()){
        $("#perLoc").slideUp();
        $("#desLoc").slideDown();
        $(".hero .dot:nth-child(1)").css({"background":"none"});
        $(".hero .dot:nth-child(2)").css({"background":"grey"});
        $("#nextCarousel").attr({"src":"img/checked-24.png"});
        current = 1;
    }
    else{
        $("#modalBackLays").fadeIn();
    }
});
$("#closeModal").click(function(){
    $("#modalBackLays").fadeOut();
})
if(Parse){
    console.log("Parse module is loaded. going to continue");
    var locations = Parse.Object.extend("Locations");
    var location = new locations();
    var query = new Parse.Query(locations);
    query.equalTo("B", "b");
    query.find({
        success:function(){
            console.log("Got the Locations, updating...");
        },
        error: function(){
            console.log("The Locations could not be determined!");
        }
    })
}
else{
    app.netInfo();
}
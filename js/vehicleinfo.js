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
});
if(Parse){
    var locations = Parse.Object.extend("Locations");
    if(locations){    
        
    }
}
else{
    app.netInfo();
}
var current = 0;
$('select').material_select();
$("#nextCarousel").click(function(){
    var start = $("#startpoint option:selected").text();
    var desti = $("#endpoint option:selected").text();
    console.log(start+desti);
    $("#searchBox").slideUp();
    $("#resBox").slideDown();
    
});
$("#closeModal").click(function(){
    $("#modalBackLays").fadeOut();
});
if(Parse){
    var tot = locations.length;
    for (i = 0; i < tot-1; i++){  
     $('.browser-default')
         .append($("<option></option>")
         .attr("value",locations[i])
         .text(locations[i])); 
    }
}
else{
    app.netInfo();
}
function successFul(){
    localStorage.setItem("vehicle_id", "tBmGsy4Z9O");
    app.user.vehicleID = 'tBmGsy4Z9O';
    $("#modalBackLays").fadeOut();
}
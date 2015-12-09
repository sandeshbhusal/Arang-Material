var current = 0;
$('select').material_select();
$("#nextCarousel").click(function(){
    var start = $("#startpoint option:selected").text();
    var desti = $("#endpoint option:selected").text();
    console.log(start+desti);
    $("#perLoc").slideUp();
    $("#desLoc").slideDown();
    if((start!='') && (desti!='')){
        $("#modalBackLays").fadeIn();
        $("#modalProcess").show();
    }
    setTimeout(function(){
        $("#modalBackLays").fadeOut();
        $("#searchBox").slideUp();
        $("#resBox").slideDown();
    }, 2000);
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
    $("#modalBackLays").fadeOut();
}
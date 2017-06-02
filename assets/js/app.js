
$(document).ready(function(){

    $(".item").hide();
    $(".item2").click(function(){
        $("#3").hide();
        $("#2").show();
    });
    $(".item3").click(function(){
      $("#2").hide();
      $("#3").show();
    });

});

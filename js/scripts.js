$(document).ready(function(){
  $("#language").submit(function(event) {

    var weather = $("input:radio[name=weather]:checked").val();
    var drink = $("input:radio[name=drink]:checked").val();
    var delight = $("input:radio[name=delight]:checked").val();
    var color = $("input:radio[name=color]:checked").val();
    var travel = $("input:radio[name=travel]:checked").val();

    $("#language").hide();
    $("#javascript").show();
    $("#ruby").show();
    $("#python").show();
    event.preventDefault();
  });

  $("#resetForm").click(function() {
    document.getElementById("language").reset();
  });
});
